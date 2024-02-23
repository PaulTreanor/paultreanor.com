---
title: SpacedAWS Devlog
short: Logging my thoughts and progress as I make SpacedAWS 
date: '2024-01-19'
slug: spacedaws-devlog
createdAt: '2024-01-19'
img: blog-2.jpg


tags:
  - Note
---



<div align="center">
    <img src="/images/spacedaws/spacedaws.png" style="padding-bottom: 20px;" width="100" alt="SpacedAWS logo">
    <!-- # SpacedAWS devlog -->
    <h1>SpacedAWS devlog</h1>
</div>



<p style="color:DimGray;"><i>
I'm building <a href="https://spacedaws.com" target="_blank" rel="noopener noreferrer">SpacedAWS</a>, a spaced repetition powered flashcard app to help users pass their AWS certifications. SpacedAWS isn't my main focus, this is a marathon not a sprint. Here is my project devlog:</i>


</p>

### 23 February 2024 - Architcture and getting started on backend

This project was on the backburner for a few weeks while I was looking for a job. I got a job so I've been able to get back to it this week.

I did some thinking about the architecture of the project, which was really helpful and clarified all the stuff I need to do. I'm going to be working on this for many more months, and just a few hours a week, so having a clear plan and a microservices architecture is helpful.

<img src="/images/spacedaws/spacedAWS-architecture-1.png" alt="spacedaws architecture diagram">


I started working on the service that delivers questions to the frontend. I'm using the Serverless Framework to deploy that infrastructure, although for now it's just a lambda and a JSON file behind API Gateway (gotta start somewhere). I'm calling this endpoint from the frontend using react-query, which I really like. It automatically retries fetches if there's a problem and it lets you easily create loading and error states. 

It's nice to get some bite sized chunks of work done again. This question-service is a jumping off point for the entire backend. 



### 28 January 24 - CICD and E2E testing
I added some end to end testing and created a CICD pipeline this week. 

There's a lot of services working together in this project, and I'm working on it over a long period of time, so I think automated tests are a valuable investment. It's unreasonable to manually test every piece of functionality after every change I make. 

I'm using a pre-commit git hook to run my tests and also ESLint. I prefer this to GitHub Actions for *personal* projects. Tests fail faster, before I even commit the changes, so there's no messing around with the GitHub website to see where it went wrong. 

Small improvements over last week :)


### 19 January 24 - Why SpacedAWS? & current development status

Udemy courses are a bad way to study enormous amounts of technical information. You have to learn at the video's pace (too fast or too slow), and the content doesn't adapt to the users' learning needs. The AWS courses are boring 40 hour slogs and searching for specific content within them is too difficult. 

A flashcard based course with a smart algorithm and a pleasant user experience solves these problems. Of course there's anki, but the decks are low quality and the platform is hostile to use. 

SpacedAWS will be the best way to study for AWS Certifications. 


**Current development status**

I've been slowly chipping away at this since November. So far, I've completed the DNS/frontend deployment, frontend CI/CD, a landing page, courses and flashcard UI, an email collection service, authentication, and a basic question-answering flow. 

Here's a screenshot:

<img src="/images/spacedaws/spacedAWS-demo-1.gif" alt="spacedaws current progress">

I'm a few months away from an MVP as this is a nights and weekend project. I still need to develop and integrate the course content, build the user progress tracking system, build the question delivery system, build the payments system, and then make sure all that stuff's glued together right.

How do you eat an elephant? One bite at a time. 


