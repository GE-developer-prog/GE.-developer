// ============================================================================
// BLOG POSTS - edit this file to add, change or remove articles.
//
// Each post has:
//   title    the article title
//   cat      one of the categories in CATS below
//   image    a site picture number '01'..'21' OR your own image file
//   date     e.g. '12 Oct 2026' (leave '' while it is still a draft)
//   read     e.g. '5 min read' (leave '' while it is still a draft)
//   featured true on ONE post to show it big at the top (optional)
//   body     the article text. Leave '' for a draft.
//
// Writing the body:
//   ## Heading       creates a heading and Contents entry
//   Blank line       starts a new paragraph
//   ~~~              put a line with only ~~~ before and after code
// ============================================================================

export const CATS = [
  'All',
  'Frontend Development',
  'JavaScript',
  'HTML & CSS',
  'Tailwind CSS',
  'Web Design',
  'UI/UX',
  'APIs',
  'Laravel',
  'Deployment',
  'Git & GitHub',
  'Development Journey',
  'Projects',
  'Technology',
  'Anime & Gaming',
  'Anime Updates',
  'Gaming',
  'DC & Marvel',
  'Student Life',
  'Personal Thoughts'
];

export const POSTS = [
  // ========================================================================
  // 1. PERSONAL TECH JOURNEY
  // ========================================================================
  {
    title: 'From a Cyber Café to Frontend Development: My Tech Journey',
    cat: 'Development Journey',
    image: '/images/blog/cybercafe.webp',
    date: '9th October, 2026',
    read: '10minutes',
    featured: true,
    body: `## Where It All Started

My journey into web development started in 2023, when I was in SS3. Back then, I knew web development existed, but I did not really understand how websites were created or what it took to become a developer.

After secondary school, I decided to explore it more seriously.

## My First Steps Into Web Development

I registered for web development lessons at a cyber café. The lessons introduced me to the basics and helped me get started, but I eventually realized there were still many concepts I needed to understand.

Rather than depending entirely on those lessons, I began teaching myself. I explored new concepts, practiced what I learned, researched problems, and worked on improving my skills.

That experience taught me something important: learning how to code does not end when a lesson ends.

## Learning Beyond the Classroom

As I continued learning, I discovered that becoming a developer requires more than memorizing code. It takes patience, practice, problem-solving, and the willingness to learn from mistakes.

Building projects helped me understand how different parts of a website work together. Every challenge gave me another opportunity to improve.

## Where I Am Today

Today, I work as a frontend developer, building websites and exploring ways to create better digital experiences.

I am also looking forward to learning React and expanding my knowledge of web development. My goal is to keep improving, take on more challenging projects, and eventually broaden my skills beyond frontend development.

## The Next Chapter

My next major chapter is studying Computer Science at Lagos State University. I look forward to combining my practical experience with what I will learn at university.

My journey is still beginning, and there is much more I want to accomplish.

For now, I will keep learning, keep building, and keep moving forward.

Welcome to my journey.

**— GE.developer**`
  },

  // ========================================================================
  // 2. PROJECTS
  // ========================================================================
  {
    title: 'How I Built a Real-World Transportation Website',
    cat: 'Projects',
    image: '/images/blog/built.webp',
    date: '31st July, 2026',
    read: '10minutes',
    body: `## The Idea Behind the Project

Building a website for a real organization is different from creating a small practice project. Real-world websites need to communicate clearly, work across devices, and help visitors complete actual tasks.

While working on a transportation website, I had to think about how visitors would learn about the organization, explore its services, and find the right forms.

## Thinking Beyond the Design

A professional website is not just about making something look attractive. Navigation, accessibility, responsive layouts, forms, and clear information all matter.

I also had to consider how the frontend would communicate with the backend and how information would be presented to users.

## What I Learned

The project helped me appreciate the importance of planning, testing, and understanding the needs of the people who will use a website.

It also showed me that development involves communication and coordination, especially when different parts of a project are handled by different people.

## Final Thoughts

Real-world projects have taught me to approach development as a process of solving problems rather than simply writing code.

Every project gives me another opportunity to improve my skills and build something more useful.`
  },

  // ========================================================================
  // 3. TAILWIND CSS
  // ========================================================================
  {
    title: 'Building Responsive Websites With Tailwind CSS',
    cat: 'Tailwind CSS',
    image: '/images/blog/responsive.webp',
    date: '9th October, 2026',
    read: '9minutes',
    body: `## What Is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that lets developers style interfaces using small, composable utility classes directly in their markup.

Instead of writing a separate CSS rule for every small styling decision, you can combine utilities for spacing, colors, typography, layout, and responsive behavior.

## Why Responsive Design Matters

A website should remain usable on phones, tablets, laptops, and larger screens.

Tailwind provides responsive prefixes that allow styles to change at different screen sizes. This makes it easier to adapt layouts to the available space.

## A Simple Example

~~~
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <article class="rounded-xl p-4 shadow">
    First card
  </article>

  <article class="rounded-xl p-4 shadow">
    Second card
  </article>

  <article class="rounded-xl p-4 shadow">
    Third card
  </article>
</div>
~~~

This layout displays one column by default, two columns on medium screens, and three columns on large screens.

## My Approach

When building interfaces, I try to focus on clear layouts, reusable patterns, readable code, and consistent spacing.

Tailwind is a tool that can make styling faster, but understanding CSS fundamentals is still important.

## Conclusion

Responsive design is not an optional finishing touch. It is part of creating a website that works well for different people and devices.`
  },

  // ========================================================================
  // 4. DEPLOYMENT
  // ========================================================================
  {
    title: 'What I Learned From Deploying a Production Website',
    cat: 'Deployment',
    image: '/images/blog/deploy.webp',
    date: '7th october, 2026',
    read: '11minutes',
    body: `## Writing Code Is Only One Part of Development

A website can work perfectly on a local computer and still have problems when deployed.

Production deployment introduces additional things to consider, including build commands, environment configuration, file paths, hosting settings, and domain configuration.

## Understanding the Build Process

Modern frontend projects often use tools such as Vite to process files and prepare an optimized production build.

The generated output must then be deployed to the correct directory on the hosting platform.

For example, a Vite project commonly uses the dist directory as its build output.

## Common Deployment Challenges

Some issues only appear after deployment. Routes might behave differently, assets may fail to load, or environment settings may be incorrect.

The solution is to inspect error messages, verify configuration, and test the deployed website instead of assuming that a successful build means everything is working.

## What I Take Away

Deployment has taught me that finishing a website means more than completing its interface. It also means checking that the site works in the environment where people will actually use it.

## Conclusion

Every deployment gives me another opportunity to understand the complete process of turning a development project into a working website.`
  },

  // ========================================================================
  // 5. DEVELOPMENT JOURNEY
  // ========================================================================
  {
    title: 'My Journey From Frontend Development Toward Full-Stack Development',
    cat: 'Development Journey',
    image: '/images/blog/tech.webp',
    date: '10th October, 2026',
    read: '12minutes',
    body: `## Starting With the Frontend

My web development journey began with the visible side of websites: layouts, colors, typography, navigation, and interactive elements.

Frontend development helped me understand how users interact with websites and how design becomes a functional interface.

## Discovering the Bigger Picture

As I worked on more projects, I became increasingly interested in what happens behind the interface.

Websites often depend on servers, databases, APIs, authentication, and other systems that allow information to move between the frontend and backend.

## What I Want to Learn Next

I want to continue strengthening my frontend skills while exploring technologies that will help me build more complete applications.

React is one of the technologies I am looking forward to learning next. I also want to keep improving my understanding of APIs, backend development, and application architecture.

## Taking It One Step at a Time

I know that becoming a stronger developer takes time. I do not need to learn every technology at once.

My focus is on understanding the fundamentals, building practical projects, and learning from each challenge.

## Looking Ahead

My goal is to become more versatile as a developer while continuing to build useful, well-designed digital experiences.`
  },

  // ========================================================================
  // 6. APIS
  // ========================================================================
  {
    title: 'Understanding API Integration as a Frontend Developer',
    cat: 'APIs',
    image: '/images/blog/api.webp',
    date: '5th Octover, 2026',
    read: '12minutes',
    body: `## What Is an API?

An API provides a defined way for different software systems to communicate.

In web development, a frontend can use an API to request information from a server or send information to it.

## Why Frontend Developers Need APIs

A website may need to retrieve products, submit a contact form, display account information, or send a booking request.

When the frontend communicates with a backend API, it can support these features without storing all the application's data directly in the interface.

## A Basic Fetch Example

~~~
async function loadData() {
  try {
    const response = await fetch('/api/items');

    if (!response.ok) {
      throw new Error('Unable to load items');
    }

    const items = await response.json();
    console.log(items);
  } catch (error) {
    console.error(error);
  }
}

loadData();
~~~

This example requests data, checks whether the response was successful, and handles errors.

## Important Things to Remember

A frontend developer should understand HTTP responses, JSON, asynchronous JavaScript, loading states, and error handling.

Real applications may also require authentication and careful handling of sensitive information.

## Conclusion

Learning API integration helps frontend developers move beyond static interfaces and build applications that communicate with real services.`
  },

  // ========================================================================
  // 7. WEB DESIGN
  // ========================================================================
  {
    title: 'Building Better Responsive Interfaces',
    cat: 'Web Design',
    image: '/images/blog/responsive.webp',
    date: '15th October, 2026',
    read: '10 minutes',
    body: `## Design for Different Screens

A responsive interface adjusts to the screen and available space rather than forcing every visitor to use the same layout.

A design that looks excellent on a desktop can become difficult to use on a phone if text is too small, cards overflow, or buttons are difficult to tap.

## Start With the Content

I believe it helps to understand the purpose of each section before deciding how it should look.

Important information should be easy to find, headings should establish a clear hierarchy, and actions should be understandable.

## Make Layouts Flexible

CSS Grid, Flexbox, relative sizing, and media queries can help interfaces adapt to different screen sizes.

Images should also fit their containers without stretching or unexpectedly overflowing.

## Test Realistic Screen Sizes

Testing at several viewport widths can reveal problems that are not obvious on a large monitor.

It is worth checking navigation, forms, buttons, cards, images, and long text.

## Conclusion

Good responsive design is not just about making everything smaller. It is about making the experience feel natural on every device.`
  },

  // ========================================================================
  // 8. LARAVEL
  // ========================================================================
  {
    title: 'Lessons From Working With Laravel APIs',
    cat: 'Laravel',
    image: '/images/blog/laravel.webp',
    date: '12th October, 2026',
    read: '8 minutes',
    body: `## Connecting a Frontend to a Backend

When a frontend communicates with a Laravel backend, both sides need to agree on how requests and responses should work.

The frontend sends requests, and the backend processes them before returning a response.

## Understanding the Contract

It is important to know the correct API endpoints, expected request fields, validation rules, and response format.

For example, a frontend may use camelCase property names while a backend expects snake_case fields. If the two sides are not aligned, data may not be processed as expected.

## Handling Responses

A frontend should check whether a request succeeded and provide clear feedback when it fails.

Forms should account for validation errors, loading states, and unexpected server responses.

## Security Matters

Sensitive operations and authorization checks must be enforced by the backend. Hiding a button in the frontend is not a replacement for proper server-side authorization.

## What This Teaches Me

Working across frontend and backend boundaries reinforces the importance of clear communication, consistent data structures, and testing.

## Conclusion

Successful integration requires both sides of an application to work together according to a shared contract.`
  },

  // ========================================================================
  // 9. DEBUGGING
  // ========================================================================
  {
    title: 'How I Approach Debugging Frontend Problems',
    cat: 'Frontend Development',
    image: '/images/blog/debugging.webp',
    date: '2nd October, 2026',
    read: '5minutes',
    body: `## Bugs Are Part of Development

When building websites, something will eventually behave differently from what I expected.

The important part is not pretending that errors will never happen. It is learning how to investigate them.

## Reproduce the Problem

I first try to identify what is going wrong and when it happens.

Can I reproduce the issue consistently? Does it happen on every screen size, or only on one device? Does it appear after a particular interaction?

## Read the Error Messages

The browser console and developer tools can provide useful clues about JavaScript errors, failed requests, and layout problems.

Instead of changing random lines of code, I try to understand what the error is telling me.

## Check One Thing at a Time

Making many unrelated changes at once makes it difficult to identify which change fixed or caused a problem.

A more careful approach is to test a possible solution, check the result, and continue from there.

## Learn From the Fix

Once I solve a problem, I try to understand why it happened so that I can recognize similar issues in future projects.

## Conclusion

Debugging is not separate from development. It is one of the skills that helps developers become more capable and confident.`
  },

  // ========================================================================
  // 10. PROJECT-BASED LEARNING
  // ========================================================================
  {
    title: 'Why I Prefer Building Projects Instead of Only Following Tutorials',
    cat: 'Development Journey',
    image: '/images/blog/built.webp',
    date: '3rd October, 2026',
    read: '9minutes',
    body: `## Tutorials Are Useful, but They Are Not the Whole Journey

Tutorials can introduce concepts and show how particular features work. They are useful learning tools, especially when a topic is new.

However, following instructions is not always the same as being able to solve a problem independently.

## Projects Force You to Think

When I build a project, I have to make decisions about its structure, layout, functionality, and user experience.

I also encounter problems that may not have appeared in the tutorial.

## Mistakes Become Lessons

A feature might not work as expected. A layout might break on mobile. A deployment might fail.

Each of these challenges creates an opportunity to investigate, learn, and improve.

## Build Something Meaningful

Small projects can help develop fundamentals, while larger projects introduce more complex decisions and integrations.

The important thing is to choose projects that challenge you without making it impossible to keep progressing.

## My Takeaway

I want my learning to produce things I can use, test, improve, and share.

Tutorials can guide the process, but building projects helps turn knowledge into practical experience.`
  },

  // ========================================================================
  // 11. TECHNOLOGY
  // ========================================================================
  {
    title: 'The Future of AI and Frontend Development',
    cat: 'Technology',
    image: '/images/blog/ai.webp',
    date: '7th October, 2026',
    read: '6minutes',
    body: `## AI Is Becoming Part of Development

AI-powered tools can help developers explore ideas, understand unfamiliar code, generate starting points, and investigate errors.

They can make some tasks faster, but the quality of the result still depends on how the tools are used.

## Why Fundamentals Still Matter

Developers need to understand the code they use, recognize incorrect suggestions, test behavior, and make informed technical decisions.

Without that understanding, it becomes harder to identify mistakes or maintain an application.

## AI as an Assistant

I see AI as a tool that can support learning and productivity rather than a replacement for understanding the fundamentals.

It can be useful to compare suggestions with documentation, experiment with the code, and verify that the result behaves as expected.

## What This Means for New Developers

Learning web development still involves understanding HTML, CSS, JavaScript, accessibility, responsive design, and problem-solving.

AI tools can support that process, but practice remains important.

## Conclusion

Technology will continue to evolve. My goal is to keep learning, adapt to useful tools, and build a strong understanding of the technologies I work with.`
  },

  // ========================================================================
  // 12. ANIME & GAMING
  // ========================================================================
  {
    title: 'My Top 12 Anime Characters and Why They Stand Out',
    cat: 'Anime & Gaming',
    image: '/images/blog/list.webp',
    date: '10th October, 2026',
    read: '9minutes',
    body: `## Anime Is More Than Entertainment to Me

Anime offers memorable characters, unusual perspectives, powerful stories, and moments that stay with you long after an episode ends.

These are twelve characters who stand out among my personal favourites.

## My Top 12

1. ## Shadow — The Eminence in Shadow
2. ##L — Death Note
3. ## Shikamaru Nara — Naruto
4. ## Kiyotaka Ayanokoji — Classroom of the Elite
5. ## Rimuru Tempest — That Time I Got Reincarnated as a Slime
6. ## Shinmon Benimaru — Fire Force
7. ## Zenitsu Agatsuma — Demon Slayer
8. ## Ms.Makima — Chainsaw Man
9. ## Ryomen Sukuna — Jujutsu Kaisen
10. ## Hiromi Higuruma — Jujutsu Kaisen
11. ## Reze — Chainsaw Man
12. ## Osaragi — Sakamoto Days

## Why These Characters?

What makes a character interesting can be different for everyone. Some stand out because of their intelligence, others because of their abilities, personality, unpredictability, or role in the story.

My favourites reflect the kinds of characters I enjoy watching and thinking about.

## My Number One

Shadow, also known as Cid Kagenou, takes the top spot on my personal list. His unusual approach to life and the contrast between his ambitions and the situations around him make him entertaining to watch.

## Your Turn

Who would make your top twelve? Everyone has a different ranking, and that is part of what makes discussing anime fun.`
  },

  // ========================================================================
  // 13. ANIME UPDATES
  // ========================================================================
  {
    title: 'Why I Am Excited About the Anime Lineup for 2027',
    cat: 'Anime Updates',
    image: '/images/blog/anime.webp',
    date: '1st October, 2026',
    read: '12minutes',
    body: `## Looking Forward to More Anime

One of the things I enjoy about following anime is having new stories, returning favourites, and new characters to discover.

I am especially excited about the anime releases expected in 2027.

## The Anticipation Is Part of the Fun

Waiting for upcoming seasons and adaptations gives fans plenty to discuss. Trailers, announcements, character reveals, and release windows can make the time before a premiere exciting.

## Keeping Track of Announcements

Release schedules can change, so I prefer to distinguish confirmed announcements from rumours and speculation.

For the latest information, it is worth checking official anime websites and verified announcements from production committees or distributors.

## What I Hope to Watch

I am looking forward to seeing which new releases catch my attention and which returning series deliver memorable moments.

## Conclusion

For me, the excitement comes from discovering stories worth following and sharing those experiences with other fans.

As 2027 approaches, I plan to keep an eye on official announcements and update my watchlist accordingly.`
  },

  // ========================================================================
  // 14. GAMING
  // ========================================================================
  {
    title: 'Why Marvel’s Spider-Man Is My Favourite PlayStation Game',
    cat: 'Gaming',
    image: '/images/blog/spider-man.webp',
    date: '7th August, 2026',
    read: '7minutes',
    body: `## A Hero I Can Relate To

Among the PlayStation games I have played, Marvel's Spider-Man stands out as my favourite.

Spider-Man is a superhero, but his life is not only about fighting villains. He also has responsibilities, personal struggles, difficult decisions, and everyday problems.

## More Than Superpowers

What makes Spider-Man interesting to me is the balance between his extraordinary abilities and the challenges of being a young person.

He has to deal with the consequences of his choices while trying to do what he believes is right.

## Why the Game Stands Out

The experience of moving through the city, helping people, fighting enemies, and following Peter Parker's story makes the game memorable.

It brings together superhero storytelling and interactive gameplay in a way that works for me.

## A Personal Favourite

I also enjoy gaming on Call of Duty: Mobile, but when it comes to my favourite PlayStation experience, Spider-Man has a special place.

## Conclusion

A great game is not only about its mechanics. Sometimes, its characters and the stories they tell are what make it memorable.`
  },

  // ========================================================================
  // 15. DC & MARVEL
  // ========================================================================
  {
    title: 'Why I Am More of a DC Fan, but Still Love Spider-Man',
    cat: 'DC & Marvel',
    image: '/images/blog/dc-logo.webp',
    date: '10th October, 2026',
    read: '17minutes',
    body: `## DC Has My Heart

I enjoy both DC and Marvel, but I lean more toward DC.

Batman and the Flash are my favourite DC characters. They represent two very different approaches to being a hero: Batman relies on preparation, intelligence, and determination, while the Flash is known for incredible speed and the responsibilities that come with it.

## Why Batman Stands Out

Batman is fascinating because he has no conventional superpowers. He relies on his mind, training, resources, and ability to prepare for difficult situations.

His stories often explore fear, justice, discipline, and the limits of human determination.

## Why I Like the Flash

The Flash brings a different kind of energy. His speed opens up extraordinary possibilities, while his stories can explore responsibility, consequences, and the impact of decisions.

## Marvel Still Has Spider-Man

Even though I prefer DC overall, Spider-Man is one of my favourite superheroes.

I can relate to his life as a young person trying to handle responsibilities while dealing with personal struggles. His story reminds me that someone can have big ambitions and still face ordinary difficulties.

## Different Heroes, Different Lessons

DC and Marvel offer different worlds and storytelling styles, and both have characters worth appreciating.

For me, Batman, the Flash, and Spider-Man each represent something I enjoy about superhero stories.

## Your Choice

If you had to choose between DC and Marvel, which would you pick, and who is your favourite character?`
  },

  // ========================================================================
  // 16. STUDENT LIFE
  // ========================================================================
  {
    title: 'Starting My Computer Science Journey at Lagos State University',
    cat: 'Student Life',
    image: '/images/blog/lasu.webp',
    date: '12th August, 2026',
    read: '8minutes',
    body: `## A New Chapter

My interest in technology started before university, and web development has already given me practical experience with building websites.

Now, I am looking forward to taking the next step by studying Computer Science at Lagos State University.

## Bringing Practical Experience Into My Studies

Building websites has introduced me to problem-solving, programming, debugging, and the process of turning ideas into working applications.

I hope to build on that experience through my university studies and develop a deeper understanding of computing.

## Learning Beyond the Classroom

I want to continue building personal projects while studying. I also look forward to learning new technologies, improving my programming fundamentals, and exploring areas of computer science beyond frontend development.

## Finding the Balance

University will bring new responsibilities, so managing my time and maintaining consistent learning habits will be important.

I want to make room for academics, projects, personal growth, and the interests that keep me inspired.

## Looking Four Years Ahead

My goal is to finish university with stronger technical knowledge, meaningful practical experience, and a clearer understanding of the kind of developer I want to become.

This is the beginning of another important chapter in my journey.`
  },

  // ========================================================================
  // 17. PERSONAL THOUGHTS
  // ========================================================================
  {
    title: 'Why I Believe Every Developer Should Build Their Own Projects',
    cat: 'Personal Thoughts',
    image: '/images/blog/built.webp',
    date: '10th October, 2026',
    read: '8minutes',
    body: `## Learning by Creating

One of the most valuable parts of learning development is turning an idea into something real.

Reading documentation and watching tutorials can introduce concepts, but personal projects create opportunities to use those concepts in practice.

## Projects Reveal What You Still Need to Learn

When you work on your own idea, you have to make decisions without always having a step-by-step guide.

You may need to research a layout problem, learn a new API, fix a bug, or rethink how a feature should work.

These moments can reveal gaps in your understanding and help you decide what to learn next.

## Start Small, Then Improve

A project does not need to be huge to be valuable. A to-do list, a text converter, a simple game, or a personal website can teach useful lessons.

The key is to keep improving the project and understand why your code works.

## Build Things You Care About

Choosing projects that interest you makes it easier to stay motivated.

Whether it is a portfolio, a game, a useful tool, or an application for a real problem, your project can become a record of your growth.

## Conclusion

For me, building projects is a way to turn learning into practical experience. Every finished project becomes another step forward, and every unfinished challenge gives me something new to understand.`
  }
];

