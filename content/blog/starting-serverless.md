---
title: Starting with AWS and the Serverless Framework 
short: The best learning resources for getting started with serverless.
createdAt: 21 September 2021
slug: starting-serverless

tags:
  - Serverless
  - AWS
  - Cloud
  - Lambda
---


# Starting with AWS and the Serverless Framework

Since joining fourTheorem earlier this year I've had a lot of catching up to do in terms of serverless knowledge, these are the most helpful learning resources I've found:

### [Serverless Stack](https://serverless-stack.com)
Serverless Stack's [guide to the Serverless Framework](https://serverless-stack.com/chapters/setup-the-serverless-framework.html) is the most comprehensive and well laid out resource on setting up a serverless project. 

The 1000 page guide brings you through setting up a fullstack serverless notes application built using lambda, dynamoDB, cognito, amplify, and S3. While the project implements React in the frontend, the important bits are explained clearly enough to be followed along with any frontend framework. The project also includes 3rd party authorisation services and even sets up a billing system with the Stripe API, making it a great way to prototype a potential business or personal project.

Serverless Stack also provides fantastic standalone pages that explain some of the more confusing features of serverless applications, like [IAM Roles](https://serverless-stack.com/chapters/what-is-iam.html), [Cognito user and identity pools](https://serverless-stack.com/chapters/cognito-user-pool-vs-identity-pool.html), and [stages](https://serverless-stack.com/chapters/stages-in-serverless-framework.html). 

The guide uses the serverless framework to configure lamda functions and APIGateway endpoints, and guides the user through the AWS console to set up other resources like Cognito and DynamoDB. While defining resources in the console like this isn't ideal for a production app, it's good to see how to manually set the services up, rather than just rely on the Serverless framework's magic. 

### [Complete Coding](https://www.youtube.com/channel/UC8uBP0Un18DJAnWjm1CPqBg)
There's not much to say here other than that Complete Coding has the best Serverless AWS tutorials on the internet. 

The videos are concise, follow best practices, and are easy to follow, and Sam usually provides a git repo with each video too which is very helpful. Complete coding is always the first place I'll go to when I want to refresh my understanding of anything AWS and Serverless. 

### [SLIC Starter](https://github.com/fourtheorem/slic-starter)
SLIC starter is a checklist application that can be used to bootstrap any serverless application.

While Serverless Stack's guide uses the AWS console to set up some services such as cognito, SLIC starter provides a boilerplate project that is configured entirely by code. By implementing the "infrastructure as code" like this, the project can easily be version controlled, deleted, and shared so the exact same system can easily be deployed on another AWS account.

While deploying SLIC can be a handful, it forces you to get comfortable with how the system's architecture works. I find myself returning to SLIC often to see how certain best practices should be implemented:

<ol class="pl-5">
  <li>Define resources as code rather than in the console</li>
  <li>Separate resources and functions</li>
  <li><a href="https://www.fourtheorem.com/blog/monorepo">Build complex systems from smaller loosely coupled services</a></li>
  <li>Fully automate a CICD pipeline</li>
</ol>

SLIC fis maintained by the team at fourTheorem and those guys know what they're doing! 😏




