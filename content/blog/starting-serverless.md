
# Getting into the AWS and the Serverless Framework

I've been using AWS and the Serverless framework daily since joining fourTheorem earlier this year, these are the most helpful learning resources I've found. 

### Serverless Stack 
Serverless Stack's [Serverless Framework guide](https://serverless-stack.com/chapters/setup-the-serverless-framework.html) is the most comprehensive and well laid out guide to quickly setting up a full stack serverless application.

The 1000 page guide brings you through setting up a notes application using lambda, dynamoDB, cognito, amplify, and S3. While the project implements React, the important bits are explained clearly enough to be followed along with any frontend framework. 

The guide also has standalone pages that explain some of the more confusing features of serverless applications, like IAM Roles and accounts, Cognito user and identiy pools, and authorisation. 

The guide only uses the serverless framework to set up lamda functions and APIGateway endpoints, and guides the user through the AWS console to set up other resources like Cognito and DynamoDB. While defining resources in the console like this isn't ideal for a production app, it is a good way to learn because it forces you to understand the paramaters needed to set up each service, rather than rely on the sls framework's magic. 

The finished application is a fantastic way to prototype a personal project or even a potential business idea, and it even walks through setting up a billing system with the stripe API. 

### Complete Coding 
[Complete coding](https://www.youtube.com/channel/UC8uBP0Un18DJAnWjm1CPqBg) has the best serverless AWS video tutorials on the internet.

The videos are concise, follow best practices, and are easy to follow, and Sam usually provides a git repo with each video too which is very helpful. Complete coding is always the first place I'll go to when I want to refresh my understanding of anything AWS and Serverless. 

### SLIC Starter 
While the excellent serverless stack's guide uses the AWS console to set up some services such as cognito, [SLIC starter](https://github.com/fourtheorem/slic-starter) provides a boilerplate project that is configured entirely by code. 

While using the console is a little more intuitive, defining all the "infrastructure as code" fits in much better with the serverless mindset. Unlike a set of tasks in the AWS console, code can easily be version controlled, deleted and redeployed, and shared so the exact same system can easily be deployed on another AWS account

While deploying SLIC can be a handful, it forces you to get comfortable with how the system's architecture works. I find myself returning to SLIC often to see how certain best practices should be implemented:

1. Define resources as code rather than in the console
2. Separate resources and functions
3. Use environment variables to avoid hardcoding 
4. [Build complex systems from many loosely coupled smaller services](https://www.fourtheorem.com/blog/monorepo)
5. Fully automate a CICD pipeline

The fully deployed project is a checklist application that users can sign up to, but the project is a great starting point for bootstrapping any serverless application. 

SLIC-starter is maintained by the team at fourTheorem and those guys know what they're doing! :smirk: 




