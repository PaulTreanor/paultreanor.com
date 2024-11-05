---
title: Career directions in the age of AI
short: My thoughts on how software developers should direct their careers as we transition into the age of AI
date: '2024-11-05'
slug: ai-career-strategies
createdAt: '2024-11-05'
img: blog-2.jpg


tags:
  - Essay
---

# Career directions in the age of AI

I wanted to share some thoughts about how programmers might navigate the AI advancements that the next decade is going to bring. At the end of the day it's all just speculation really, but it's reassuring to have some personal direction. 

My ideas around this assume that a few of my strongly held hunches around AI are true:

1. AI is a [general-purpose technology](https://en.wikipedia.org/wiki/General-purpose_technology) and a [megatrend](https://en.wikipedia.org/wiki/Megatrend), not a bubble. 
2. AI will make all of software development, including the job market, more competitive. 
3. Even if AI research stopped today, it would take decades to [realise the full capabilities of current models](https://interconnected.org/home/2023/11/24/digestion).

## AI will disrupt tech domains unevenly
I think AI agents will find some coding environments fairly easy to sandbox. It's already happening with [browsers](https://www.anthropic.com/news/3-5-models-and-computer-use) and [REPL type scripting environments](https://platform.openai.com/docs/assistants/tools/code-interpreter), and it's easy to imagine container based apps being easy to replicate and test as well (because that's what containers were made for). 

On the other hand intricate UIs, cloud systems, AI/VR environments, and embedded systems are going to be much harder for AI agents to sandbox. I don't think we'll have a general AI that can run effective tests on a wide range of embedded systems for a few decades (imagine a robot that can test hearing aids and ABS braking systems for lorries).

That makes learning C and assembly sound great but there's actually a massive trade-off here: if AI can't sandbox your job, then it can't really help you and speed you up either. If AI can sandbox your work environment then you are simply more replaceable. Working in domains that are easy to sandbox will have more opportunity because of growth, but they will also have  more risk. 

The thing is AI advancements are unpredictable so the entire landscape could change in a few years. There's more value than ever in staying nimble and avoiding being pigeonholed. 

## AI will make real craft more valuable 
LLMs are an immense advantage when writing code...but they almost makes it a little bit *too easy*, at the expense of **understanding code and attention to detail**. When [AI is making it very easy to write a lot of slop](https://github.com/fastai/fastai/pull/40480), holding yourself accountable for code is a differentiator.

Being precise is a requirement of being an engineer, we are paid because we understand what is going on under the hood - outsourcing this to AI is outsource your career. AI tools encourage moving fast and breaking things but mature software requires a certain level of discipline and craft. I think real craft in software is going to be a rare and valuable skill soon.

## Some technical skills will become more valuable 
Debugging is a bottleneck of coding assistant workflows right now. AI can write a lot of useful but buggy code, and then struggle to correct it. Being able to get to the root of the issues requires understanding protocols and frameworks one level deeper, and being being able to effectively use a debugger. These skills will become more valuable even as LLMs make programming more accessible. 

Code review is gonna be more important too. Reading, understanding, and finding the edge cases in AI code is going to be central to the software engineer's job description in a few years. All this requires experience and a lot of patience. 

While ChatGPT is a great code monkey I don't think it will be replacing system design and platform engineers. Architecting and provisioning cloud resources is fiddly, even if infrastructure by code is used. There's also just a lot more money at stake with big architecture decisions, so I expect management would prefer to have a human to hold accountable.

## Soft skills are going to be more valuable
AI will end up doing a lot of work for us, but probably not work which requires real taste. It just can't write in a way that sounds compelling. [People can tell when they're reading AI generated slop](https://www.linkedin.com/pulse/common-words-scream-ai-wrote-mukul-sharma-rawef) and it gives them the ick. 

Good work is built on relationships with other people, and real social interactions with people can never be replaced by AI (although plenty of gouls trying to do just this 😔). ChatGPT just isn't capable of striking up and maintaining an actually interesting conversation on it's own. Even Claude can't take clients out for drinks and it probably won't get invited to the office Christmas party. 

## Being really good at using AI is table stakes now 
One thing that I am certain of is that you *need* to keep your finger on the pulse of AI developments if you want to be a productive engineer. You need to be genuinely curious about applying AI to solve problems. 

Here are some suggestions: 
- Try out different tools/models to find strengths and weaknesses. There is no best model for *all* use cases. 
- Pay for access to the best tools/models, the ROI is x100. 
- Understand [prompting 101](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api). 
- Understand that LLMs just generate text based on statistical probabilities in their training data. ChatGPT's "assistant" persona is created through prompts and RLHF. If you want coding help, ask it to be a senior dev instead of an assistant
- Check in on and use the latest releases every few months.

## Final thoughts 
Just in case this has freaked anyone out, please remember you are so much more than your work, but I don't think developers who can use AI effectively need to worry. 