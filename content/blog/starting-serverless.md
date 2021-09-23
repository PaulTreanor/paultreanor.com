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

<b-img src="/ft.jpg" fluid alt="fourtheorem"></b-img>

Since joining fourTheorem earlier this year I've worked with AWS and the Serverless framework everyday, here are some of the best learning resources I've found:

## [Serverless Stack](https://serverless-stack.com)

Serverless Stack's [guide to the Serverless Framework](https://serverless-stack.com/chapters/setup-the-serverless-framework.html) is a very comprehensive and well laid out resource on setting up a serverless project. 

The guide details how to set up a fullstack note-taking webapp using lambda, dynamoDB, cognito, amplify, and S3. The project uses React, but the important bits are explained clearly enough to be followed along with any frontend framework. The project also sets up a billing system with the Stripe API, making it a great way to prototype a potential business project very quickly.

Serverless Stack also provides fantastic standalone pages that explain some of the more confusing features of serverless applications, like [IAM Roles](https://serverless-stack.com/chapters/what-is-iam.html), [Cognito user and identity pools](https://serverless-stack.com/chapters/cognito-user-pool-vs-identity-pool.html), and [stages](https://serverless-stack.com/chapters/stages-in-serverless-framework.html). 


## [Complete Coding](https://www.youtube.com/channel/UC8uBP0Un18DJAnWjm1CPqBg)


There's not much to say here other than that Complete Coding has the best Serverless AWS tutorials on the internet. 

The videos are concise, follow best practices, and easy to follow. Sam usually provides a git repo with each video too which is very helpful. Complete coding is always the first place I go to when I need to refresh my understanding of anything AWS or Serverless. 

## [SLIC Starter](https://github.com/fourtheorem/slic-starter)



SLIC starter is a checklist application that can be used to bootstrap any serverless project.

While Serverless Stack's guide sets up some services such as cognito through the AWS console, SLIC is configured entirely by code. By using this "infrastructure as code" approach, the project can easily be version controlled, deleted, or deployed on another AWS account.

I find that SLIC is a great resource for seeing how certain best practices should be done in a serverless way:

<ol class="pl-5">
  <li>Define resources as code (not in the console)</li>
  <li>Separate resources and functions</li>
  <li><a href="https://www.fourtheorem.com/blog/monorepo">Build systems from smaller loosely coupled services</a></li>
  <li>Fully automate the CICD pipeline</li>
</ol>

SLIC starter was created by the team at fourTheorem but it's open source so contributions are welcome by everyone! 😊




