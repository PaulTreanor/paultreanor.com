---
title: AWS Cognito and Amplify auth for React apps (without the Amplify CLI)
short: Guide to simple AWS Auth for webapps with Cognito and Amplify
date: '2025-01-26'
slug: aws-webapp-auth
createdAt: '2025-01-26'
img: blog-2.jpg


tags:
  - Tutorial 
---

# AWS Cognito and Amplify auth for React apps (without the Amplify CLI)

The Amplify frontend library is great for auth, but the Amplify docs don't make it very obvious how to use it without the slightly clunky Amplify CLI. Here are my notes on provisioning a Cognito userpool with AWS SAM and using it with the aws-amplify npm library to add auth in a webapp. 

## Provisioning a Cognito userpool and userpool client in AWS SAM

The Cognito userpool and userpool client are the actual backend infrastructure that manages user accounts. You can think of a userpool as a database for accounts. Here's an [AWS SAM](https://aws.amazon.com/serverless/sam/) template.yaml that can provision these resources:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: >
  Cognito resources for webapp authorisation
Resources:
  UserPool:
    Type: AWS::Cognito::UserPool
    Properties:
      UserPoolName: WeightmateUserPool
      AdminCreateUserConfig:
        AllowAdminCreateUserOnly: false
      AutoVerifiedAttributes:
        - email
      Policies:
        PasswordPolicy:
          MinimumLength: 8
          RequireLowercase: true
          RequireNumbers: true
          RequireSymbols: true
          RequireUppercase: true
  UserPoolClient:
    Type: AWS::Cognito::UserPoolClient
    Properties:
      UserPoolId: !Ref UserPool
      ClientName: WeightmateWeb
      ExplicitAuthFlows:
        - ALLOW_USER_SRP_AUTH
        - ALLOW_REFRESH_TOKEN_AUTH
      PreventUserExistenceErrors: ENABLED

Outputs:
  UserPoolId:
    Description: ID of the User Pool
    Value: !Ref UserPool
  UserPoolClientId:
    Description: ID of the User Pool Client
    Value: !Ref UserPoolClient
```

The outputted UserPoolId and UserPoolClientId values are what we use to integrate Cognito with Amplify. 

## Configuring Amplify on your frontend 
Amplify is actually simple to set up, there's just two stumbling blocks: 
1. Amplify v6 is quite different to previous Amplify versions, so double check that you're on the right docs page and don't trust LLMs. 
2. Every example in the docs uses the Amplify CLI which obscures what is actually being added to your app. 

The [authentication configuration](https://docs.amplify.aws/gen1/react/tools/libraries/configure-categories/) near the top of this docs page is a useful resource. 

### Step 1: Add the aws-amplify module to your app's package.json
```bash
npm install aws-amplify
```


### Step 2: Add your Cognito details to a .env file 
Different frontend frameworks will handle handle environment variables in different ways so you'll have to consult the docs for whatever you are using. If you are still using Gatsby for some reason like I often do, then your `.env.development` / `.env.production` file would look like this (I just made these specific values up):

```bash
GATSBY_COGNITO_USER_POOL_ID=us-east-1_Ra7CjsEwl
GATSBY_COGNITO_CLIENT_ID=akav9na83n2vna9n2010nvn2m2
```


### Step 3: Call Amplify.config in your frontend code 
You need to call `Amplify.configure` with a configuration that includes you userPoolId, userPoolClientId, and region (from your env file). This method just needs to be called within a component early in your app's render cycle - probably something like `index.ts` depending on your framework. 

Amplify uses browser storage to hold it's auth state so technically once you have this in your code Amplify is installed on your app. 

```ts
import { Amplify } from 'aws-amplify';

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: process.env.USER_POOL_ID,
			userPoolClientId: process.env.CLIENT_ID,
			region: process.env.AWS_REGION,
			loginWith: {
				username: false,
				email: true,
			}
		}
	}
});
```


### Step 4: Use the Amplify library methods to manage auth 

Among other things, Amplify provides methods for logging in, logging out, signing new users up, and checking if a user is logged. Here's a very basic React app that shows the main methods being used in one big component. 

```tsx
import React, { useState, useEffect } from "react";
import { signIn, signUp, signOut, getCurrentUser } from 'aws-amplify/auth';

export function MinimalAuthAppExample() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	useEffect(() => {
		checkAuthStatus();
	}, []);

	const checkAuthStatus = async () => {
		try {
			await getCurrentUser();
			setIsAuthenticated(true);
		} catch (error) {
			setIsAuthenticated(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		try {
			if (isLogin) {
				await signIn({ username: email, password });
			} else {
				if (password !== confirmPassword) {
					alert('Passwords do not match');
					return;
				}
				
				await signUp({
					username: email,
					password,
					options: {
						userAttributes: { email }
					}
				});
			}
			setIsAuthenticated(true);
		} catch (err) {
			console.error('Auth error:', err);
			alert("Authentication failed");
		}
	}

	const handleLogout = async () => {
		try {
			await signOut();
			setIsAuthenticated(false);
		} catch (error) {
			console.error('Error signing out:', error);
		}
	}

	if (isAuthenticated) {
		return (
			<div>
				<p>You are logged in!</p>
				<button onClick={handleLogout}>Logout</button>
			</div>
		);
	}

	return (
		<div>
			<h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
			<button onClick={() => setIsLogin(!isLogin)}>
				Switch to {isLogin ? 'Sign Up' : 'Login'}
			</button>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				{!isLogin && (
					<div>
						<label>Confirm Password:</label>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
				)}

				<button type="submit">
					{isLogin ? 'Login' : 'Sign Up'}
				</button>
			</form>
		</div>
	);
}
```

And that's it! 

I have no massive gripes with the Amplify CLI but tools like SAM or CDK are more mature and better suited to deploying more complex applications. In my case I like using SAM and I didn't want to have half my infrastructure provisioned with the Amplify CLI and the other half in SAM.