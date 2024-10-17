---

title: Useful GitHub Draft PR workflow

short: How I use GitHub Draft PRs to make code reviews move faster

date: '2024-10-17'

slug: draft-pr

createdAt: '2024-10-17'

img: blog-2.jpg

tags:

- Note

---

## Useful GitHub Draft PR Workflow 

A [GitHub draft PR]((https://github.blog/news-insights/product-news/introducing-draft-pull-requests/)) is just like a regular PR, except it's marked as a work in progress. Draft PRs can't be reviewed, but they can still be viewed and commented on by your teammates. I use these heavily at work, especially for long-living branches and larger PRs. 

When I make a commit to a new branch I immediately publish it as a draft PR. As each commit on the branch gets pushed, the draft PR is updated. When my work is finished I select "ready for review" in the GitHub UI and it becomes regular PR.

This workflow has a few benefits:


1. It lets other people know what you're working on. This is really handy if you're collaborating directly with someone on a feature, especially if you work remotely. Management can also appreciate seeing what you're working on.

2. You can see all the files and changes you've been working on in one place. This makes it easier to jump back in on Monday mornings, and it's also very useful for figuring out exactly what new code you need to test.

3. You can easily review your own PR diffs before it's published and save yourself the embarrassment of having a PR littered with console logs, needless comments, and spelling mistakes.