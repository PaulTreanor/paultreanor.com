---
title: I strongly recommend git pre-commit hooks over GitHub action pipelines for personal projects
short: Why I think git hooks are underrated and GitHub Actions are overrated for side projects
date: '2025-12-28'
slug: githooks
createdAt: '2025-12-28'
img: blog-2.jpg
tags:
- Note
---

## I strongly recommend git pre-commit hooks over GitHub action pipelines for personal projects

I don't recommend that you set up a GitHub Actions job for your side project that is still in development. Unless other people are actively making contributions or there's a complex deployment setup, I think a git pre-commit hook is much better suited for most side projects.

Git Hooks are simpler to change and set up, provide a much faster feedback loop (e.g. for failing tests) that stays entirely in your dev environment. 

GitHub Actions are more complex to set up, rely on a third party, and moves feedback from your local development environment to a famously slow web application.

Resist falling into the trap of over-engineering your tiny side projects or you will never build anything. Do everything you can to speed up your feedback loops or you'll just ignore your tests and get less value from them. 