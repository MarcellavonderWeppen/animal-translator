# My challenges and takeaways while coding my first React Project (A coders diary)

### This is my private coding diary -> read at your own risk 😉

It is following the idea of a "digital garden" - the idea, that you share your learning, because maybe other learners might find it interesting or useful. Also, by writing I let my insights sink in deeper and it will be more permanent.

## Phase 1 of the project (from start till presentation)

### **Objective**: Creating a fully functional app that I can present to my class <br /> <br />

Phase 1 was quite intense. We were given 5 days for our final project in React at my school (the DCI - Digital Career Institute). I wanted to present a cool project to my class, no matter freaking what. When the time had come, my teacher asked me a good question:
<br /><br />
**_What challenges did you face and how did you overcome them?_**

## Challenges in Phase 1 <br />

### Challenge 1: Coming up with project ideas, deciding on one and getting started

I got nervous a few weeks before the project actually started. So I started writing down some ideas. It always helps me to write stuff down, especially if I have to face a decision.

In the end I favoured 3 ideas. The other two ideas (apart from the Animal Translator) seemed more useful: a page for learning React and a React learning quiz . Furthermore, the idea of "teach what you need" appealed to me.

On day 1 I finally had to decide on an idea. Still not sure, I asked two classmates about their opinion. As it turned out, the "Animal Translator" was the most popular.

My first impulse was to start without any draft. After all I knew exactly how I wanted it to look in the end.

But then I drafted anyway. I am happy I did! Even if the [draft](./Figma-first-Draft.png) turned out very basic, it served as a kind of visual to-do-list later. I never got stuck, because I could always see what to do next.

That's how I spent DAY 1:

- writing down a plan for the project
- searching for tutorials
- thinking
- and daydreaming.

**So, in case you are planning your first project, here are my tips:**

- Ideas need time to grow! Start day dreaming about projects early and write all your ideas and thoughts down! It will make everything else so much easier later
- Writing stuff down has so many benefits: It clears your mind, helps with decisions, captures and structures ideas, deepens learning... Also, writing is actually acting.
- I repeat: **_Writing is acting_**.It is the first step of creating something. When you write something down, it already has left the subtle realm of your mind and _materialized_. It is out there, in the real world, ready to be shared, worked on, developed further.
- So, even if you work on an easy project, create at least a simple draft! It can serve as your map for your project
- If writing doesn't bring sufficient clarity, talk to somebody about your ideas.

## Challenge 2: Overcoming self-doubt, fear and procrastination

Also, at this point I had to face some self-doubt. React was not the easiest for me and I still felt very much like a beginner.

I wanted to build my own carousel from scratch, but would I be able to do it? It was tempting to just download some package or use Bootstrap, but on the other hand I wanted to challenge myself and learn something new.

"Ok, just try and if it goes wrong you can still use something pre-built."

This thought really helped me to get started. Just start and try! The first step is always the hardest.

As an experienced procrastinator I already mastered the blunter forms of procrastination - Facebook and YouTube, you name it.

But over the last weeks I observed myself practicing an interesting new form of procrastination: doing what I am good at to avoid what I am not good at. So every time the teacher threw a new exercise at us, I eagerly sprang at the design of the task - even when it was not about design at all, but about functionality. I knew, I could shine by coming up with a beautiful UI, but deep down it was just about the fear of failure. Always this would end in immense stress, when time was coming to an end and I haven't completed the task.

Knowing this about myself, I was very disciplined this time. I thrust aside everything not essential and focused on functionality. Always focusing on the next urgent problem at hand.

**Tips from an experienced procrastinator:**

- Identify your favorite forms of procrastination and find solutions for it. When, how, why are your procrastinating?
- For example, I always would go to YouTube for coding tutorials. Sometimes this can be useful, but every time I went to YouTube, I was distracted by other interesting videos. So, I learned how to make my YouTube distraction free: no comments, no recommendations.
- My favorite book, that helped me with procrastination: [A mind for numbers. How to excel at math and science (even if you flunked Algebra)](https://amzn.to/3IG7yTE) by Barbara Oakley
- At the root, procrastination is always about fear and doubt, not laziness. Always. The best cure against this fear is to proof to yourself you can do it. Again and again and again.
- Clarity also helps to fight procrastination. Knowing exactly what to do next helps. Again, writing it down helps to know the next steps.

## Challenge 3: Minor problems & being stuck

At this point things really went smoothly! Getting started and overcoming self-doubt really have been the greatest challenges by far.

The carousel was a bit tough, indeed. After some searching, I finally found a useful tutorial for a Javascript carousel and was able to "translate" it into React. From there my self confidence was growing. Also, I started liking my project more. In the beginning it seemed a bit useless to me, but I started to feel its more subtle value.

It was a bit disappointing when the talk animation failed. You know, the one, when you press the "Talk" button and the speech bubble for the animal appears - or at least it should.

Fortunately I remembered that **you can not animate "display: none"**. I don't know why they created CSS this way. But at least, understanding the problem helps to solve the problem. I worked my way around with animating opacity.

There were many minor problems like that, but the solution for that is usually: if really stuck, get away from your machine.

When the feeling of frustration is getting too strong, just take a walk, a bath, a talk ... and sleep. Sleep is the neglected super power for coders. Yes, it's true. How many times did I go to bed with a seemingly unsolvable problem? Yet, I woke up with the solution, every single time. It's magic.

Anyway, just before the presentation I had the idea, that it would be nice to be able to touch the animal. It should then say something like "Meow! Kitty likes pets!"

Implementing this was a bit tricky. Thinking it through logically helped. But I unknowingly introduced **"display: none"** again by using conditional rendering (the React way).
Doing so I broke my animation again. Luckily, I wasn't aware of this, otherwise I would have panicked, just minutes before my presentation.

**My tips when getting stuck:**

- when the feeling of frustration arises, it is usually a sign to have a break
- or at least, work on something else for now

## Challenge 4: Not having the skills ... and self-doubt again

I touched a low-point, when I created the Dark Theme for the Introduction page. I realized, that my dark grey hero cat was almost invisible against the black background.

I quickly discarded the thought of touching abominable Photoshop and surfed the web for an alternative cat. No success.

Considering to give up on the Dark Theme, I complained to my boyfriend, how I don't like working with Photoshop. "There are easier alternatives to Photoshop" he objected. Me: "Yes, but still, I DON'T HAVE THE TIME TO LEARN SOMETHING NEW NOW." On second thought, it was just self-doubt again. So, I started looking, and yes, I found an easier alternative. Re-colored the cat. OMG! Now both the cat and the dog had the same grey-ish color, so awkward 😂 Whatever, I just gained a new skill! Re-colored the dog, too -> now it looks cool.

**It can be painful to be confronted with all the things that you don't know and can't do. It is so rewarding to overcome this ignorance and gain new skills.**

## Challenge 5: Presenting the project

Not something I am very good at. I always get so nervous and then I forget what I wanted to say...

Being prepared helps. Being passionate about something helps.

Apart from that, it is just another skill, that will come with time and practice. Or so I hope.

## Phase 2 (I want to keep working on it!)

Presentation done. Phew.

It was the first time, I had the feeling I had coded something. I mean, like, really.

Of course there was a lot left to do and I wanted to keep going! So I did. Little did I know, that this would lead me to Markdown and Markdown would change my life.

But first some little ...

## ... useful things I picked up:

- Improving the file structure seemed important as it will help others (and my future self) to understand the app quicker
- So let's learn how to clean up a project after using npx create-react-app
- More cleaning: [depcheck](https://www.npmjs.com/package/depcheck "npm depcheck") - a small handy package for a quick check on unused / missing dependencies - nice! 😎
- **window.scrollTo(0,0)** - this displays the new page from the top (like it should)
- CSS variables (I heard about them - now they really make sense, regarding the Dark Theme)
- What is [font-smoothing](https://szafranek.net/blog/2009/02/22/font-smoothing-explained/)?
- and ... Markdown!

## Markdown

### It started with an idea: Why don't I document my learnings for this projects? They will sink in so much deeper!

-> Of course, as a real developer I am going to do it in a .md file! Too bad that I can't remember Markdown at all. Well, _great opportunity_ to take a deep dive into Markdown.

### A whole new world was emerging:

- First I found a cool [crash course](https://www.youtube.com/watch?v=HUBNt18RFbo "Markdown Crash Course (Traversy Media)") on YouTube
- I coded along to the crash course and created a [Markdown cheatsheet](markdown-cheatsheet.md)
- Installed a cool new **VS code extension**: Auto-Open Markdown Preview
- And intuitively fell in love with the concept of "what you see is what you get" (which would later convince me of static website generators like Hugo)
- Then I felt like watching a more [extended Course](https://www.youtube.com/watch?v=FEa2diI2qgA "Comprehensive Markdown Crash Course - Fundamentals, Extensions, & Obsidian.md") on Youtube ...
- ... which mentioned Obsidian. But, [What the _bleep_ is Obsidian](https://www.youtube.com/watch?v=d2FNqEDGc8g "This is Obsidian")?
- Ah ok, Obsidian is a tool for building your PKB (Personal Knowledge Base), aka ["Your second brain"](https://obsidian.md/ "Official homepage of obsidian")
- -> enter the world of productivity! [Obsidian vs Notion](https://www.youtube.com/watch?v=4DXHVawhh4c "Why I left Notion for Obsidian"), the idea of a [Second Brain](https://www.youtube.com/watch?v=OP3dA2GcAh8 "The Second Brain - A Life-Changing Productivity System"), why every developer should [build a knowledge base](https://www.youtube.com/watch?v=D7e1ud_Dk24 "How I use Obsidian for work as a software developer advocate") and what is a software developer advocate anyway ...

> OMG! Why haven't I stumbled on this earlier? I really need this! Need to learn Markdown. Get Obsidian, start building my digital knowledge base. Better now than never.

### Why learn Markdown?

- Is it for people who are "too dumb and/or lazy to learn HTML"? (Newbies first unsuspecting question)
- No! There is way more to it! (Keep reading ...)
- Markdown was designed to be lightweight, readable and easily convertible
- You can learn it in an hour (or so)
- it is wide spread through the internet: Github, blogs, technical documentations, eBooks, not to forget _*Obsidian*_ ...
- it can be converted in the blink of an eye: [free Markdown to HTML converter](https://markdowntohtml.com/ "Markdown to Html")

> Yes. It happened to me. After a decade in love with my old Mac it finally broke down. Little did I know, that my text files have been written in a dated file format and that it would be hard to recover them (if at all). So painful! -> _**Markdown is future proof! It will exist, as long computers exist (or so I heard).**_

## **New Challenge approaching**: at this point on my journey, it became very clear, that I might be indulging in one of my favorite activities: going down the rabbit hole.

> I have been there before and I heard a quiet voice in my head: Be honest. Are you procrastinating?

As I already mentioned, I am a well experienced procrastinator that already tackled the most obvious forms of procrastination. Consequently, I developed more sophisticated forms of procrastination:

- to research new courses about new tools and programming languages I could pick up
- to spring at the UI of an assignment, even if the task is basically about functionality - because I know how to shine with CSS, while React is still unfamiliar and therefore frightening. That has the curious effect, that my CSS skills keep getting better, while React stays frightening
- to loose myself in tutorials about vaguely related topics
- to spend more time on learning and understanding a topic deeper, even if I know enough to solve the task at hand
- maybe this side project right now?
- All this culminates in the question: Can writing about procrastination be a form of procrastination, too? 😂

#### Time to ask some questions:

- is this rooted in fear and/or self doubt (aka procrastination)? Or passion?
- and if the answer is passion, how much time do I want to invest in this?

> Coding is like art. The piece of artwork is complete, when the artist says, it is complete.

Anyway, at this point it becomes very clear, that even this tiny little school project might never get completed, if I keep going at this pace. Oh, if only I had all the time of the world to learn everything there is to learn! If only I could indulge in learning for the sake of learning and mastery, without a thought being wasted on mundane questions, like how to pay the rent. But time is limited. Only a few weeks left, and then I need to start applying for an internship, and ultimately, a job.

#### Strategic question to gracefully escape the rabbit hole:

> I really like this! This is fun and I don't want to brutally choke off my passion. So, how much time do I want to give myself to indulge a little more without loosing sight of the big picture?

#### Ok, I need a plan:

1. Turn paper notes for this project into .md notes & get a perspective on the time frame, priorities, ect (aka: the _magic of writing it down_)
1. Download Obsidian -> Start your knowledge base on Obsidian! (Keep watching more YouTube videos, till my appetite is so big, I can't help but starting.)
1. Keep growing the cheat sheet (Watching the longer course on YouTube - as long it is worth it; or do it along the way!)

> **Important!** Clearly, this is _Flow_ and NOT _Deep Work_. Do this in the evenings and / or times of low energy. Block times (afternoon, weekend) for _DEEP WORK_ on the project!

Ok, I need to rephrase my plan.

1. Turn paper notes for this project into .md notes -> get a perspective on the time frame, priorities, ect (aka: the _magic of writing it down_). Formulate some deadlines for yourself!
1. Stick to the plan.
1. For times of low energy & pleasure: dive into the world of Markdown, Obsidian, Notion, Second Brain, Static Website Generators (Hugo ect)
1. Also, when my appetite is so big, I can't help it, start with Notion and Obsidian. Also, meet my clarity buddy for a clarity session.

### _*Idea*_: Why not create a Markdown blog as a backend?

-> my passion for the backend is a slow starter. But the final project for this is only a few weeks from now. Having a fun goal in mind could help. Anyway, I wanted to start a blog about coding (and maybe Shopify), so this combines many vague appetites (and necessities) into one singular yummy project.

> 13.06. After creating a schedule for June - October and sorting out priorities (application phase coming soon!), it became very clear, that I need to leave the animal translator for now and focus on:

1. Portfolio, CV and Linkedin profile
2. Backend project

Also, I learned that creating tables in Markdown sucks! Definitely not my tool of choice for planning!

## Phase 3 (Oh, a competition!)

Hello, Animal Translator, here I am again!

But first, it is time for a small update: In the meantime, Markdown changed my life.

Because of Markdown, I am now building up my Personal Knowledge Base with Obsidian. Because of Obsidian I discovered Notion and the world of productivity.

Also, I am attending the "Online Hugo Congress" this weekend. I can't wait to learn more about it.

Also, I gave a 5 minute presentation last week for my class: "Markdown changed my life. Can it change yours?"

This was probably the first time, I willingly gave a presentation in my whole life.

Talking in front of people is - or should I say, used to be ? - one of my least favorite things. When the teacher announced, that we have 20 minutes to prepare a small presentation of our choice - I seriously thought about faking a failed internet connection. Very much to my relief, we only had time for two people to present. My buddy Regina delivered an excellent talk, like usual - confident, creative, witty. After that it was very clear, that I could only look bad in contrast. Yet, I heard myself saying: "I would like to go next."

Well, if that's not something, I don't know.

What else? Ah yes DCI offered a really helpful workshop about applying to jobs. So, now my LinkedIn profile and my CV are ready.

I discovered a 21-one-day challenge to build a Portfolio with Webflow from scratch- just what I need!

Plus, W3 schools is offering a competition - free choice of project and programming language. The perfect opportunity to keep working on my Animal Translator. So here I am again!

### July 16th 2022

Since this pretends to be a diary, I think it is time to announce dates like in a real diary.

Originally I wrote those notes just for myself, but since I decided to share it publicly, I had to review and edit it in order to make it more readable.

For some reason I happen to have my private English teachers most of the time (instead of being in a group class like everybody else), which is awesome! I am quite aware and grateful for this privilege as it really helped me to enter a new level regarding my English skills. So my teacher helped me with this text.

In case somebody reads this (I doubt it, but who knows :'D) at least they will not turn away in disgust because of typos and grammar mistakes.

So now I'm ready to push this version on GitHub, update it on Netlify and promote it on LinkedIn.

Of course I feel that this project is far from ready to present to the public.

But I suppose that's one thing I have to learn - better imperfect than not at all.

### Work coders do in order to avoid work

Coding is a highly empowering skill. More than this, it is an ever growing attitude I gained since I started to learn coding.

For example, I just realized, how annoying it is to google for those emojis every time, just to copy and paste them inside here. Many coders will agree, that we should have to leave VSCode few and far between. I know that for sure, because my favorite YouTuber "Web Dev Simplified" even coded a program which allows him to [order his pizza from the comfort of his VS Code](https://www.youtube.com/watch?v=qIrEwrMHU0M)! I can totally relate :pizza::yum:

We don't have to go that far, but it is such an imposition to copy and paste those emojis every time! No one should have to do boring, repetitive work like this!

So, my past self would be irritated, feel helpless and whine about cruel fate. But ...

- ... my present self knows, that every problem just exists to be solved.
- What is more, most of the problems have already been solved by my fellow coders out there. I bet there is an extension for emojis on VsCode.
- Yes, it is! But it isn't working :rage:
- You have to understand the problem to solve it: Could it be, that the extension doesn't work for .md files? :thinking:
- Sherlock, you cracked the case :'D
- But surely somebody else must have recognized this problem, too?
- Search for "Markdown emoji" extension -> It works :sweat_smile:
- One problem still remains - where do I find the emoji short codes, in case I can't guess them? -> here, [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) to the rescue!
- I probably "wasted" an insane amount of time, just to solve this little emoji inconvenience. But that is the wrong way to look at it. As Kyle ("Web Dev Simplified") pointed out, developers are people who spend lots of time in order to save many people lots of time. Now I know, how to solve the issue with the emojis. If some one else will have this issue in the future I can easily help. Also, I am training my skill to solve problems in the future. Every time I do this, I get faster and better.
- Is installing an extension such a big deal? Of course not. But for my past self it would have been. All those tiny little baby steps :baby: add up to big progress in the long run.
- Sorry, at the moment I am using emojis WAY to much :'D For now, we have to live with that. But I am pretty sure, the fascination with the new toy will normalize soon :smirk:

Also, I am enjoying writing way to much at the moment. It's time to get some work done.

[x] push this version to GitHub<br>
[x] update on Netlify <br>
[x] promote it on LinkedIn <br>
[] code a program to order pizza from my VSCode

... just kidding (regarding the pizza program), I am already quite hungry and will not make it before starvation.

OMG :scream: I accidentally committed to early. I always knew the day would come, so it's time to do

[x] ... my first soft reset

Oh nice! Seems like Netlify is updating automatically.

## Responsive Web Design

Now, lets review Kevin Powells course on **responsive web design** and see, if we can improve the CSS of the Animal Translator.

### July 20th 2022

I completed the review. It was a good idea to split it in two parts:

1. review the course & make notes on Obsidian
2. implement insights on responsive design regarding the Animal Translator

By this I got a good overview what's left to do. Also I have a nice list of changes to implement, a nice little to do list.

So let's change those em's into rem's, when it comes to font size. I first cautiously changed some font sizes and tested each carefully for different device sizes. Then I got bored and changed all of them at once, trusting that I would be able to deal with unexpected effects. Very much to my surprise nothing changed at all. I guess I could be a little less thorough and more bold sometimes. And Kevin Powell seems to exaggerate the importance of using rems for font sizes. Anyway, I will remember doing this as a best practice.

Next step - I was going for the line length for readability. I expected that to be a short task, but there was some research to do, some experimenting...

It seems the perfect line shouldn't be longer than 75 characters. If it's longer than that, readers will lose their focus (scientifically approved). After adding max-width and increasing the font for the paragraphs, I now have slightly more. I decided, that's ok, since we are not talking about big text blocks here and the font-size is quite large. Really makes a difference!

### Challenge: Making a carousel responsive

This carousel is really tough! It took me quite a while to realize that the height was coming from the `grid-template-row: 45vh 3em`! Handling this with a fixed height for small heights.

### August 29th 2022

Yesterday I finally made it back to my Animal Translator.

In the mean time...

- I was away on vacation. No coding, but I took a course about SASS on LinkedIn Learning. Now I feel I closed this gap in my understanding. Also I decided, that I don't need SASS for this project - it wouldn't bring along any improvements, at least nothing obvious.
- Speaking about LinkedIn Learning, as I was on the free trial month, I felt the pressure to use it. So I took some more courses: Shopify, Hugo, Markdown and WebFlow.
- After holidays I got the flue - it took me some time to recover.
- Regarding the backend module at school, I thought we would get some days to code our own personal project like we did for the other modules. But we didn't. I really wanted to code a Markdown Blog as my personal backend project, so that's what I did in the evenings and weekends.
- Also, I got a fine offer for an internship. I really would like to embrace this opportunity. I already passed the first interview, so now I should prepare for the tech interviews, I guess!
- Also, the final project with my class started. I am in the best team ever, working on the coolest project ever. So, I want to give my 100% for that as well.
- Also, I am looking for a better flat for two years now and I will have an apartment inspection this week...

With so much going on, no wonder I didn't find more time for my cute little Animal Translator! Tomorrow it's time to hand the project in, if I want to take part in the W3 competition.

I am a bit sad, that I couldn't implement all the ideas and improvements that were on my mind in a timely manner. Still there is so much to do. I doubt, that I will win anything with the project as it is now. But on the other hand, it's the taking part that counts.

At least I got the project responsive yesterday. That was quite a pile of work - more than expected. Today, I figured out how to add some real animal sounds. That was fun :smile: And as usual, I learned a lot on the go.

So this is it for now - I guess.

It is like life - always a work in progress.
