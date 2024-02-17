---
title: Code quality and engineering practices checklist
short: A list of things to consider when writing and reviewing code 
date: '2024-02-17'
slug: code-checklist
createdAt: '2024-02-17'
img: blog-2.jpg


tags:
  - Note
---

Thank you [Gerard](https://www.linkedin.com/in/gerardpslowey) for helping me brainstorm this list, I'll try to keep it updated:

### General detection of code issues
Where possible you should automate the detection and correction of issues so that they can be picked up before code reviews and won't be missed.

- Linting 
- Formatter
- TypeScript (if JS)
- Testing 
- Alarms (monitoring)
- Dependency management (dependabot)
- Run CI/CD before commits

### Good SDLC teamwork practices 
- Separate environments for dev, staging and production
- Sensible branching strategy (trunk based with feature flags)
- Do code reviews
- Small frequent commits and PRs
- Environment for stress testing
- Frontend preview deployments
- Automated deployment and testing pipeline
- Protected main branch


### Code review checklists 
- Security, eg. bucket policies, IAM roles, secrets management
- Good documentation (new code might need new documentation)
- Are observability features set up? Are important metrics being logged? 
- Use tags for cost monitoring 
- New code probably needs new tests
- Tests - new code probably needs new tests for edge cases
- Tests - unit, integration, E2E?
- Tests - have high test coverage
- APIs - are parameters validated, eg. (!undefined)
- APIs - returning correct status codes
- APIs - catch errors and fail gracefully
- TypeScript types correct? No `any`
- More elegant code solutions possible
- Do names match conventions 
- Is name useful and descriptive
- No commented out code (or at least have a good explanation)
- No "magic numbers"
- Any comments needed to explain non-obvious code
- Dependency versions not up to date
- Git messages are OK
- Has cost saving been accounted for? (DB read/writes, ƛ resources, scheduled compute/DB, use serverless when possible, tag resources). 

### Frontend user experience
- Empty state accounted for
- Loading state accounted for 
- Error state accounted for 
- Reasonably performant
- Looks good on mobile/tablet/laptop
- Accessibility guidelines reasonably met
- Correct ARIA states 


### Stuff a linter should probably fix but worth looking out for
- No dead code that can't be reached
- ES6 vs commonJS
- No unnecessary exports 
- Formatting - consistent tabs/spaces/semi-colons
- Variables assigned but not used


PROTIP: If you are doing a side project then worrying about everything on this list except cost cutting measures is a waste of time (just try to ship the bad version of what your making, then make it right).