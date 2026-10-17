import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../css/style.css'
import { CATS, POSTS } from './posts.js'
import { ANIME, GAMES, CHARACTERS } from './favorites.js'
gsap.registerPlugin(ScrollTrigger)

const $ = (s, c = document) => c.querySelector(s)
const $$ = (s, c = document) => [...c.querySelectorAll(s)]
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const small = () => innerWidth < 768

/* ---------- Toasts ---------- */
const TOAST = { success: ['fa-circle-check', 'border-brand text-brand'], error: ['fa-circle-xmark', 'border-red-400 text-red-400'], warn: ['fa-triangle-exclamation', 'border-amber-400 text-amber-400'], info: ['fa-circle-info', 'border-neon text-neon'] }
function toast(msg, type = 'info', ms = 4000) {
  const [icon, cls] = TOAST[type], t = document.createElement('div')
  t.className = `glass pointer-events-auto relative overflow-hidden flex items-start gap-3 px-4 py-3 text-sm border-l-4 ${cls}`
  t.setAttribute('role', type === 'error' ? 'alert' : 'status')
  t.innerHTML = `<i class="fa-solid ${icon} mt-0.5"></i><span class="flex-1 text-fg">${msg}</span><button class="text-mute" aria-label="Dismiss"><i class="fa-solid fa-xmark"></i></button><span class="absolute left-0 bottom-0 h-0.5 w-full bg-current origin-left"></span>`
  $('#toasts').append(t)
  const close = () => gsap.to(t, { x: 40, opacity: 0, duration: .25, onComplete: () => t.remove() })
  $('button', t).onclick = close
  gsap.from(t, { x: 40, opacity: 0, duration: .3 })
  gsap.fromTo($('span:last-child', t), { scaleX: 1 }, { scaleX: 0, duration: ms / 1000, ease: 'none', onComplete: close })
}

/* ---------- Content (real info only) ---------- */
const NAV = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Testimonials', 'Blog', 'Contact']
const BARS = [['HTML', 85], ['CSS', 78], ['JavaScript', 65], ['TAILWIND', 65]]
const SKILLS = [
  ['Core', ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Web Design', 'Vite']],
  ['Development', ['Frontend Development', 'UI Implementation', 'Form Development', 'API Integration', 'JavaScript Functionality', 'Debugging', 'Browser Compatibility', 'Performance Awareness']],
  ['MY Experience Working With A Backend Developer', ['Laravel API integration', 'REST-style API consumption', 'JSON', 'Fetch API', 'Authentication-related workflows', 'File uploads', 'Form validation']],
  ['Workflow', ['Git', 'GitHub', 'Environment Variables', 'Deployment', 'Hosting', '.htaccess', 'Production troubleshooting']],
]
const SERVICES = [
  ['fa-laptop-code', 'Responsive Website Development', 'Websites that adapt cleanly from phones to large screens.'],
  ['fa-briefcase', 'Business Website Development', 'Professional sites that present your business clearly.'],
  ['fa-bullseye', 'Landing Pages', 'Focused pages built to turn visitors into enquiries.'],
  ['fa-code', 'Frontend Development', 'Clean, maintainable HTML, CSS and JavaScript.'],
  ['fa-rotate', 'Website Redesign', 'Modernise an existing site without losing what works.'],
  ['fa-object-group', 'UI Implementation', 'Designs turned into accurate, pixel-aware interfaces.'],
  ['fa-mobile-screen', 'Mobile-Friendly Websites', 'Touch-friendly layouts that work on every phone.'],
  ['fa-bolt', 'JavaScript Functionality', 'Interactive features that make pages useful.'],
  ['fa-pen-to-square', 'Form Development', 'Validated, accessible forms that are easy to complete.'],
  ['fa-plug', 'API Integration', 'Have work with a backend developer that help me build an API Integration while I connect it to the Frontend'],
  ['fa-rocket', 'Website Deployment', 'Hosting, environment setup and going live.'],
  ['fa-screwdriver-wrench', 'Website Maintenance', 'Ongoing care so your site stays healthy.'],
  ['fa-arrows-rotate', 'Website Updates', 'Content and feature updates when you need them.'],
]
// Replace "#" with real live-demo URLs when ready.
const PROJECTS = [
  {
    n: 'Caring Hands Transport',
    slot: 'caring-hands',
    d: 'A multi-page responsive website for a transportation service, connected to a Laravel API.',
    t: ['Frontend', 'Laravel API'],
    f: [
      'Responsive frontend, multiple pages',
      'Transportation request functionality',
      'Employment application',
      'Feedback functionality',
      'Staff-related functionality',
      'Laravel API integration & file handling',
      'Production deployment'
    ],
    demo: 'https://caringhandstransport.net'
  },
  {
    n: 'Breathe Easy Stretch',
    slot: 'breathe-easy-stretch',
    d: 'A responsive client-focused booking website with payment integration.',
    t: ['Frontend', 'Laravel API'],
    f: [
      'Responsive design',
      'Booking functionality',
      'Payment integration',
      'Client-focused UX',
      'Production deployment'
    ],
    demo: 'https://breatheeasystretch.com'
  },
  {
    n: 'My First Personal Portfolio',
    slot: 'first-personal-portfolio',
    d: 'My First personal developer portfolio showcasing projects, technical skills, services, and professional identity.',
    t: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    f: [
      'Personal branding and project showcase',
      'Responsive multi-section layout',
      'Interactive user interface',
      'Skills and services presentation',
      'Project navigation and external links',
      'Professional contact section',
      'Live deployment'
    ],
    demo: 'https://gedeveloper.netlify.app'
  },
  {
    n: 'Ekeson Fashion',
    slot: 'ekeson-fashion',
    d: 'A fashion-focused website designed to present clothing products through a dedicated online storefront.',
    t: ['HTML', 'CSS', 'JavaScript', 'E-commerce UI'],
    f: [
      'Fashion brand presentation',
      'Product-focused layouts',
      'Clothing and collection showcase',
      'Responsive storefront design',
      'Interactive shopping interface',
      'Live deployment'
    ],
    demo: 'https://ekesonfashion.netlify.app'
  },
  {
    n: 'Tic Tac Toe',
    slot: 'tic-tac-toe',
    d: 'A browser-based Tic Tac Toe game featuring interactive gameplay and JavaScript game logic.',
    t: ['HTML', 'CSS', 'JavaScript', 'Game Development'],
    f: [
      'Interactive game board',
      'Player move handling',
      'Win and draw detection',
      'Game-state management',
      'Dynamic gameplay feedback',
      'Live deployment'
    ],
    demo: 'https://project-tictactoe-x-and-o.netlify.app'
  },
  {
    n: 'GESync Text Convertor',
    slot: 'gesync',
    d: 'A text utility application built to transform user input through convenient text-processing tools.',
    t: ['HTML', 'CSS', 'JavaScript', 'Text Processing'],
    f: [
      'Text input and transformation',
      'JavaScript string manipulation',
      'Interactive utility interface',
      'Real-time input handling',
      'Convenient text-processing workflow',
      'Live deployment'
    ],
    demo: 'https://gesync.netlify.app'
  },
  {
    n: 'To Do List',
    slot: 'todo-list',
    d: 'A JavaScript productivity application for organizing tasks through an interactive task-management interface.',
    t: ['HTML', 'CSS', 'JavaScript', 'Productivity'],
    f: [
      'Task creation and display',
      'Interactive task management',
      'Task completion tracking',
      'Dynamic DOM updates',
      'Task organization interface',
      'Live deployment'
    ],
    demo: 'https://javascriptproject-to-do-list.netlify.app'
  },
  {
    n: 'Godapo Venture',
    slot: 'godapo-venture',
    d: 'A business website designed to establish an online presence and present a company and its offerings.',
    t: ['HTML', 'CSS', 'JavaScript', 'Business Website'],
    f: [
      'Business information presentation',
      'Company-focused website layout',
      'Service and offering showcase',
      'Responsive page design',
      'Business-oriented user experience',
      'Live deployment'
    ],
    demo: 'https://godapoventures.netlify.app'
  },
  {
    n: 'QR Code Generator',
    slot: 'qr-code-generator',
    d: 'A browser-based utility for turning user-provided content into QR codes through an interactive interface.',
    t: ['HTML', 'CSS', 'JavaScript', 'Utility App'],
    f: [
      'User input handling',
      'QR code generation interface',
      'Dynamic result presentation',
      'Practical utility-focused design',
      'Convenient user workflow',
      'Live deployment'
    ],
    demo: 'https://instant-qrcode-generator.netlify.app'
  },
  {
    n: 'EasyCalc Calculator',
    slot: 'easycalc',
    d: 'A web-based calculator built to provide an accessible interface for everyday mathematical operations.',
    t: ['HTML', 'CSS', 'JavaScript', 'Calculator'],
    f: [
      'Interactive calculator interface',
      'Numeric input handling',
      'Arithmetic operations',
      'Dynamic display updates',
      'Calculation-focused user experience',
      'Live deployment'
    ],
    demo: 'https://easycalcweb-online.netlify.app'
  },
  {
    n: 'Hungry Snake',
    slot: 'hungry-snake',
    d: 'A browser-based Snake game built around interactive movement, gameplay rules, and arcade-style mechanics.',
    t: ['HTML', 'CSS', 'JavaScript', 'Game Development'],
    f: [
      'Interactive snake gameplay',
      'Player movement controls',
      'Game-loop logic',
      'Collision detection',
      'Arcade-style gameplay experience',
      'Live deployment'
    ],
    demo: 'https://onlinegame-hungrysnake.netlify.app/'
  },
  {
    n: 'GEartify Image Generator',
    slot: 'geartify',
    d: 'A creative web application focused on image generation through an interactive user interface.',
    t: ['HTML', 'CSS', 'JavaScript', 'Creative App'],
    f: [
      'Interactive image-generation interface',
      'User input and prompt handling',
      'Visual content presentation',
      'Creative application design',
      'Image-generation workflow',
      'Live deployment'
    ],
    demo: 'https://geartify.netlify.app'
  },
  {
    n: 'RPS Arena',
    slot: 'rps-arena',
    d: 'A browser-based Rock Paper Scissors game featuring interactive choices and outcome-based gameplay.',
    t: ['HTML', 'CSS', 'JavaScript', 'Game Development'],
    f: [
      'Interactive rock, paper, and scissors choices',
      'Game outcome evaluation',
      'Conditional game logic',
      'Dynamic gameplay feedback',
      'Arcade-style interface',
      'Live deployment'
    ],
    demo: 'https://online-rpsarena.netlify.app/'
  },
  {
    n: 'My First Tailwind Project',
    slot: 'first-tailwind',
    d: 'An early web design project exploring utility-first styling and responsive interface development with Tailwind CSS.',
    t: ['HTML', 'Tailwind CSS', 'Responsive Design'],
    f: [
      'Utility-first CSS styling',
      'Responsive layout techniques',
      'Reusable styling patterns',
      'Typography and spacing',
      'Tailwind CSS practice',
      'Live deployment'
    ],
    demo: 'https://my1sttailwindproj.netlify.app'
  },
  {
    n: 'Eddie Jena Hotel',
    slot: 'eddie-jena-hotel',
    d: 'A hospitality website designed to present a hotel and provide visitors with an accessible online experience.',
    t: ['HTML', 'Tailwind CSS', 'JavaScript', 'Hospitality Website'],
    f: [
      'Hotel-focused website presentation',
      'Hospitality content and layout',
      'Accommodation-focused visual design', 'Responsive browsing experience','Guest-oriented interface', 'Utility-first CSS styling', 'Responsive layout techniques', 'Reusable styling patterns', 'Typography and spacing', 'Tailwind CSS practice', 'Live deployment'
    ],
    demo: 'https://eddie-jenahotel.netlify.app'
  }
];

const WHY = [
  ['fa-diagram-project', 'Real production projects', 'Caring Hands Transport and Breathe Easy Stretch run in production; 9JA-NIME shows my interactive side.'],
  ['fa-mobile-screen-button', 'Responsive by design', 'Layouts built for phones, tablets, laptops and large screens, not just scaled down.'],
  ['fa-plug', 'API-connected frontends', 'Experience connecting interfaces to Laravel APIs, including forms, validation and file uploads.'],
  ['fa-rocket', 'Deployment & troubleshooting', 'I take sites live and fix production issues: hosting, environment variables and .htaccess.'],
  ['fa-code', 'Clean, readable code', 'Simple, maintainable code that is easy to update later.'],
  ['fa-comments', 'Direct communication', 'Talk to me directly on WhatsApp or email.'],
]



const TESTIMONIALS = [
  {
    name: 'Ty',
    time: '09:18',
    chat: [
      ['c', 'I really love the Breathe Easy Stretch website. It looks clean and professional.'],
      ['me', 'Thank you! I really enjoyed building it.'],
      ['c', 'You did a great job bringing my ideas to life.'],
      ['c', 'The website really fits my business and the kind of service I offer.'],
      ['me', 'I wanted it to feel welcoming and easy for your customers to use.'],
      ['c', 'And you achieved that. The layout is simple but still looks good.'],
      ['me', 'That was the goal from the beginning.'],
      ['c', 'I also like how everything works on mobile.'],
      ['me', 'I made sure the responsive design was a priority.'],
      ['c', 'You really put effort into this project.'],
      ['me', 'Thank you! I appreciate the opportunity.'],
      ['c', 'You did a great job. Keep it up!'],
      ['me', 'Definitely! More projects coming soon.']
    ]
  },

  {
    name: 'Barnabas Okpara',
    time: '13:42',
    chat: [
      ['c', 'The Caring Hands Transport website looks clean and professional.'],
      ['me', 'Thank you! Just as you said, simple and easy to use.'],
      ['c', 'You did a great job with the design and details.'],
      ['me', 'I wanted visitors to find what they need without stress.'],
      ['c', 'Exactly. The layout makes the information easy to understand.'],
      ['me', 'That is important, especially for a business website.'],
      ['c', 'I like how the services are presented too.'],
      ['me', 'I tried to keep everything organized and consistent.'],
      ['c', 'The website feels much more professional now.'],
      ['me', 'That is good to hear!'],
      ['c', 'You paid attention to the little details.'],
      ['me', 'Those little details can make a big difference.'],
      ['c', 'You are welcome, sir. Keep doing great work.'],
      ['me', 'Thank you very much!']
    ]
  },

  {
    name: 'Dconco',
    time: '18:27',
    chat: [
      ['c', 'Bro, your designs are getting really good.'],
      ['me', 'Thanks bro! I have been working hard on them.'],
      ['c', 'I can see the improvement in every project.'],
      ['c', 'And your anime style is still there 😂.'],
      ['me', '😂 You already know! I cannot leave my anime inspiration behind.'],
      ['c', 'Your designs are becoming more polished though.'],
      ['me', 'I am trying to balance creativity with a professional look.'],
      ['c', 'That is what I am talking about. Keep improving.'],
      ['me', 'I have a lot more ideas I want to bring to life.'],
      ['c', 'I can imagine the kind of crazy projects you will build.'],
      ['me', 'Just wait until you see the next portfolio update 😂.'],
      ['c', 'I am waiting bro. Do not disappoint us.'],
      ['me', 'Never! More animations and crazy effects coming.'],
      ['c', 'Why not, you are literally addicted aswr 😂'],
      ['me', '😂😂 It is a lifestyle at this point.']
    ]
  },

  {
    name: 'Ayomide',
    time: '11:36',
    chat: [
      ['c', 'Your websites always have a really nice look.'],
      ['me', 'Thank you!'],
      ['c', 'I like your creative style and attention to detail.'],
      ['me', 'I really appreciate that.'],
      ['c', 'You know how to make a website look interesting.'],
      ['me', 'I try to make each project feel a little different.'],
      ['c', 'That is good because the designs do not all feel the same.'],
      ['me', 'Exactly! I like experimenting with different layouts.'],
      ['c', 'The colors and animations make a difference too.'],
      ['me', 'I am learning how to use animations without overdoing them.'],
      ['c', 'Keep going. Your work is improving.'],
      ['me', 'Thanks! I am only getting started.']
    ]
  },

  {
    name: 'Esther Godwin',
    time: '16:14',
    chat: [
      ['c', 'Your designs are really creative and unique, but they need improvement.'],
      ['me', 'Thank you so much, sis. I am still learning.'],
      ['c', 'I can also see how much your work has improved.'],
      ['me', 'I am always trying to get better.'],
      ['c', 'Sometimes you just need to refine the little details.'],
      ['me', 'You are right. I am learning to pay more attention to spacing and alignment.'],
      ['c', 'And make sure everything looks balanced.'],
      ['me', 'Definitely. I want my projects to look professional.'],
      ['c', 'You have good ideas. Just keep working on them.'],
      ['me', 'I will. Every project teaches me something new.'],
      ['c', 'That is nice. I like that you keep trying.'],
      ['me', 'Thanks, sis! I appreciate the honest feedback.'],
      ['c', 'You will get even better with time.'],
      ['me', 'Amen to that!']
    ]
  },

  {
    name: 'Cynthia Okpara',
    time: '08:52',
    chat: [
      ['c', 'I really like your website designs. They look modern and creative.'],
      ['me', 'Thank you!'],
      ['c', 'The animations and details make your projects stand out.'],
      ['me', 'I am glad you noticed!'],
      ['c', 'You put a lot of thought into how the pages look.'],
      ['me', 'I want the design to feel good and still be easy to use.'],
      ['c', 'I especially like the colors you use.'],
      ['me', 'Blue and purple are becoming my signature colors 😂.'],
      ['c', 'They suit your style, honestly.'],
      ['me', 'I am glad you think so.'],
      ['c', 'Your projects look more polished now.'],
      ['me', 'I have been trying to improve with every project.'],
      ['c', 'Keep it up!'],
      ['me', 'Thank you so much!']
    ]
  },

  {
    name: 'Kingsley',
    time: '20:08',
    chat: [
      ['c', 'Your development skills have improved a lot.'],
      ['me', 'Thank you! I have been pushing myself more.'],
      ['c', 'Your projects look much more professional now.'],
      ['me', 'That really means a lot.'],
      ['c', 'I remember when your designs were much simpler.'],
      ['me', '😂 We have come a long way.'],
      ['c', 'Now you are adding animations and all those effects.'],
      ['me', 'I enjoy making things interactive.'],
      ['c', 'Just make sure the website stays fast too.'],
      ['me', 'Absolutely. Performance and responsiveness matter.'],
      ['c', 'That is the mindset.'],
      ['me', 'I am learning to balance everything properly.'],
      ['c', 'Keep building, bro.'],
      ['me', 'Always!']
    ]
  },

  {
    name: 'Mr. Chibuicious',
    time: '15:29',
    chat: [
      ['c', 'Keep building. You are doing great.'],
      ['me', 'Thank you, sir!'],
      ['c', 'Your designs are getting better with every project.'],
      ['me', 'I really appreciate your advice and support.'],
      ['c', 'Do not stop learning new things.'],
      ['me', 'I will keep improving my skills.'],
      ['c', 'Pay attention to the user experience too.'],
      ['me', 'Yes, sir. I want the websites to be easy for everyone to use.'],
      ['c', 'Good. A website should look good and work properly.'],
      ['me', 'Exactly. I am working on both sides.'],
      ['c', 'You are making progress. Stay consistent.'],
      ['me', 'Thank you for the encouragement, sir.'],
      ['c', 'Sure, just keep building.'],
      ['me', 'I definitely will!']
    ]
  },

  {
    name: 'Clinton Kennedy',
    time: '10:47',
    chat: [
      ['c', 'I have seen your work improve a lot.'],
      ['me', 'Thank you!'],
      ['c', 'Your websites are becoming more creative and professional.'],
      ['me', 'I am glad you noticed.'],
      ['c', 'Your layouts are looking more organized now.'],
      ['me', 'I have been working on consistency and spacing.'],
      ['c', 'It makes a difference. The pages feel easier to follow.'],
      ['me', 'That is exactly what I want.'],
      ['c', 'You are also getting better with animations.'],
      ['me', 'GSAP has been fun to experiment with 😂.'],
      ['c', 'I can tell. Just keep learning.'],
      ['me', 'For sure!'],
      ['c', 'Looking forward to seeing your next project.'],
      ['me', 'I have some interesting ideas coming.']
    ]
  },

  {
    name: 'Francis Favor',
    time: '17:03',
    chat: [
      ['c', 'Your designs are clean and creative.'],
      ['me', 'Thank you!'],
      ['c', 'I like how your projects have their own style.'],
      ['me', 'That means a lot to me.'],
      ['c', 'You do not just copy the same layout for everything.'],
      ['me', 'I like giving every project its own identity.'],
      ['c', 'The colors and small details help with that.'],
      ['me', 'Yes! I spend time thinking about the visual direction.'],
      ['c', 'It shows in your work.'],
      ['me', 'I am happy to hear that.'],
      ['c', 'Keep creating more stuff.'],
      ['me', 'Definitely. There is still a lot I want to try.'],
      ['c', 'I will be watching your progress.'],
      ['me', 'Thanks for the support!']
    ]
  },

  {
    name: 'Eric Okpara',
    time: '12:21',
    chat: [
      ['c', 'You have always been a fast learner.'],
      ['me', 'Thank you, sir!'],
      ['c', 'You adapt quickly and keep improving, even as a self-taught developer.'],
      ['me', 'I really appreciate that.'],
      ['c', 'Every project seems to teach you something new.'],
      ['me', 'That is one of the best things about building projects.'],
      ['c', 'You also seem more confident with your designs now.'],
      ['me', 'I am learning to trust my ideas while still accepting feedback.'],
      ['c', 'That is important. Never stop asking questions.'],
      ['me', 'Absolutely. There is always something new to learn.'],
      ['c', 'Keep challenging yourself.'],
      ['me', 'I will keep pushing forward.'],
      ['c', 'I look forward to seeing how far you go.'],
      ['me', 'Thank you for the encouragement!']
    ]
  },

  {
    name: 'Raphael Ojomo',
    time: '19:24',
    chat: [
      ['c', 'Bro, I checked out your latest website design. 🔥'],
      ['me', 'Ohh, what do you think? 😂'],
      ['c', 'Honestly, the design is looking clean. I like the direction you are going.'],
      ['me', 'Thanks bro! I have been trying to improve my visual style.'],
      ['c', 'I can see that. The colors, layout and details are coming together.'],
      ['me', 'Coming from you, that means a lot. You know your design stuff.'],
      ['c', '😂 Bro, we are all learning. But you are making progress.'],
      ['me', 'You work with graphic design, CGI, VFX, motion and animation. I have a lot to learn from you.'],
      ['c', 'Those fields are different, but the same creative eye helps everywhere.'],
      ['me', 'Facts! I want to bring more cinematic effects into my websites.'],
      ['c', 'That could work really well. Just make sure the effects support the design.'],
      ['me', 'Exactly. I do not want animations that are just there for decoration.'],
      ['c', 'Now you are thinking like a designer 😂.'],
      ['me', '😂 I am trying to level up.'],
      ['c', 'Your recent work has more personality. It feels like your own style.'],
      ['me', 'That is what I am aiming for. I want people to recognize my work.'],
      ['c', 'Keep experimenting with motion, lighting and visual storytelling.'],
      ['me', 'Imagine combining web development with some proper CGI-inspired visuals. 🔥'],
      ['c', 'Brooo, that could be crazy if you execute it well.'],
      ['me', 'You will have to give me some design tips then 😂.'],
      ['c', 'Anytime, bro. Send me your work when you need feedback.'],
      ['me', 'Deal! I appreciate you always encouraging my designs.'],
      ['c', 'Of course. Keep creating and keep improving.'],
      ['me', 'We both have more ideas to bring to life. 🚀'],
      ['c', 'No doubt. Keep pushing!']
    ]
  }
];


const TOPICS = ['All',
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
  'Personal Thoughts']

/* ---------- Render ---------- */
const put = (id, h) => { const e = document.getElementById(id); if (e) e.innerHTML = h }
const href = (n) => (n === 'Home' ? '/' : `/${n.toLowerCase()}`)
const links = (cls) => NAV.map((n) => `<a href="${href(n)}" class="lnk ${cls}" data-link="${n.toLowerCase()}">${n}</a>`).join('')
$('#hdr nav').innerHTML = links('')
$('#mobileMenu nav').innerHTML = links('py-3 border-b border-[var(--line)]')
$('#footNav').innerHTML = links('text-mute')
const cur = location.pathname.split('/').filter(Boolean).pop() || 'home'
$$('[data-link]').forEach((a) => a.classList.toggle('active', a.dataset.link === (cur === 'index' ? 'home' : cur)))
put('bars', BARS.map(([n, v]) => `<div><div class="flex justify-between text-sm mb-1"><span>${n}</span><span class="text-brand"><b class="count" data-v="${v}">0</b>%</span></div><div class="h-2 rounded bg-fg/10"><div class="bar h-full w-0 rounded bg-brand shadow-[0_0_10px_#00ABF0]" data-v="${v}"></div></div></div>`).join(''))
put('skillGrid', SKILLS.map(([g, l]) => `<div class="glass glow p-5 rv"><h3 class="font-display font-bold text-brand mb-3">${g}</h3><div class="flex flex-wrap gap-2">${l.map((s) => `<span class="chip">${s}</span>`).join('')}</div></div>`).join(''))
put('svcGrid', SERVICES.map(([i, t, d]) => `<article class="glass glow tilt p-5 rv"><i class="fa-solid ${i} text-brand text-2xl mb-3"></i><h3 class="font-display font-bold mb-1">${t}</h3><p class="text-sm text-mute">${d}</p></article>`).join(''))
put('projGrid', PROJECTS.map((p) => `<article class="glass overflow-hidden flex flex-col rv">
  <div class="group relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand/20 to-neon/20">
    <img
      src="/images/projects/${p.slot}.webp"
      loading="lazy"
      alt="${p.n} project preview"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
      data-slot="${p.slot}"
    />

    <div class="absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 group-hover:pt-16">
      <h3 class="font-display font-bold text-xl text-white transition-transform duration-500 group-hover:-translate-y-1">
        ${p.n}
      </h3>
    </div>
  </div>

  <div class="p-5 flex flex-col gap-3 flex-1">
    <p class="text-sm text-mute">${p.d}</p>
    <div class="flex flex-wrap gap-2">${p.t.map((x) => `<span class="chip text-brand">${x}</span>`).join('')}</div>
    <ul class="text-sm text-mute grid gap-1 flex-1">${p.f.map((x) => `<li><i class="fa-solid fa-angle-right text-brand mr-2"></i>${x}</li>`).join('')}</ul>
    <a href="${p.demo}" class="btn btn-o justify-center" target="_blank" rel="noopener">VIEW LIVE</a>
  </div>
</article>`).join(''))
put('whyHome', WHY.slice(0, 4).map(([i, t, d]) => `<div class="glass glow tilt p-5 rv"><i class="fa-solid ${i} text-brand text-2xl mb-3"></i><h3 class="font-display font-bold mb-1">${t}</h3><p class="text-sm text-mute">${d}</p></div>`).join(''))
put('whyAbout', WHY.map(([i, t, d]) => `<li class="flex gap-3"><i class="fa-solid ${i} text-brand mt-1 w-5"></i><span><b>${t}.</b> <span class="text-mute">${d}</span></span></li>`).join(''))
/* ---------- Testimonials: 3D phone carousel (iPhone 13 front + back, flip, coverflow, popping messages) ---------- */
const phone = (t, i) => `<div class="ph" data-i="${i}"><div class="ph-flip">${Array.from({ length: 17 }, (_, i) => `<i class="ph-edge" style="transform:translateZ(${i * 0.4375 - 3.5}px)"></i>`).join('')}<article class="iphone ph-front" style="transform:translateZ(4px)"><div class="iphone-screen"><div class="notch"></div><div class="status"><span>9:41</span><span class="flex gap-1"><i class="fa-solid fa-signal"></i><i class="fa-solid fa-wifi"></i><i class="fa-solid fa-battery-full"></i></span></div><div class="flex flex-col items-center gap-1 pt-3 pb-2 border-b border-[var(--line)]"><span class="w-8 h-8 rounded-full bg-brand/20 text-brand grid place-items-center text-xs font-bold">${t.name[0]}</span><span class="text-[10px] font-semibold">${t.name}</span></div><div class="chat-scroll"><div class="flex flex-col gap-1.5 px-2.5 py-2.5 chat leading-snug"><p class="pop-t text-center text-[10px] text-mute">Today ${t.time}</p>${t.chat.map(([who, text]) => who === 'c' ? `<div class="pop-c self-start max-w-[80%] bg-brand/15 border border-[var(--line)] rounded-2xl rounded-bl-md px-2.5 py-1.5">${text}</div>` : `<div class="pop-m self-end max-w-[80%] grid"><div class="typing col-start-1 row-start-1 self-end justify-self-end bg-neon text-white rounded-2xl rounded-br-md px-4 py-2 text-[7px] flex gap-1"><span class="animate-pulse">●</span><span class="animate-pulse [animation-delay:.2s]">●</span><span class="animate-pulse [animation-delay:.4s]">●</span></div><div class="bub col-start-1 row-start-1"><p class="text-[9px] text-neon text-right mb-0.5 font-semibold">GE.developer</p><div class="bg-neon text-white rounded-2xl rounded-br-md px-2.5 py-1.5">${text}</div></div></div>`).join('')}</div></div><div class="home-bar"></div><div class="sheen"></div><div class="dim"></div></div></article><div class="iphone ph-back" style="transform:rotateY(180deg) translateZ(4px)"><div class="back-glass"><div class="cam"><i class="lens l1"><b></b></i><i class="lens l2"><b></b></i><i class="flash"></i><i class="mic"></i></div><div class="back-mark"><i class="fa-brands fa-apple"></i></div><div class="back-sub">iPhone</div><div class="dim"></div></div></div></div></div>`
put('testiGrid', TESTIMONIALS.map(phone).join(''))
put('testiDots', TESTIMONIALS.map((_, i) => `<button type="button" data-dot="${i}" aria-label="Show phone ${i + 1}" class="h-2.5 w-2.5 rounded-full bg-fg/20 transition-all"></button>`).join(''))

function initTestimonials() {
  const track = $('#testiGrid'); if (!track) return
  const phs = $$('.ph', track), flips = phs.map((p) => $('.ph-flip', p)), dots = $$('[data-dot]'), prev = $('#testiPrev'), next = $('#testiNext')
  if (!phs.length) return;
  let active = 0
  const center = (i) => phs[i].offsetLeft - (track.clientWidth - phs[i].offsetWidth) / 2
  const goto = (i) => track.scrollTo({ left: center(Math.max(0, Math.min(phs.length - 1, i))), behavior: reduce ? 'auto' : 'smooth' })
  // coverflow: phones turn, shrink and dim the further they are from the middle
  const coverflow = () => {
    const mid = track.scrollLeft + track.clientWidth / 2
    let best = 0, bd = 1e9
    phs.forEach((p, i) => {
      const d = (p.offsetLeft + p.offsetWidth / 2 - mid) / (p.offsetWidth + 24), a = Math.min(Math.abs(d), 2.5)
      if (Math.abs(d) < bd) { bd = Math.abs(d); best = i }
      gsap.set(p, { rotationY: -d * 32, z: -a * 80, scale: 1 - a * .09, zIndex: 20 - Math.round(a * 4), '--dim': Math.min(a * .38, .75) })
    })
    active = best
    dots.forEach((b, i) => { b.classList.toggle('bg-brand', i === best); b.classList.toggle('w-6', i === best); b.classList.toggle('bg-fg/20', i !== best); b.classList.toggle('w-2.5', i !== best) })
    if (prev) prev.classList.toggle('opacity-30', best === 0);
    if (next) next.classList.toggle('opacity-30', best === phs.length - 1);
  }
  let tick = false
  track.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { coverflow(); tick = false }) } }, { passive: true })
  addEventListener('resize', coverflow)
  if (prev) prev.onclick = () => goto(active - 1);
  if (next) next.onclick = () => goto(active + 1);
  dots.forEach((b) => (b.onclick = () => goto(+b.dataset.dot)))
  track.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') goto(active + 1); if (e.key === 'ArrowLeft') goto(active - 1) })
  dragScroll(track, coverflow)
    const shade = (f) => f.style.setProperty('--shade', (Math.abs(Math.sin(gsap.getProperty(f, 'rotationY') * Math.PI / 180)) * .55).toFixed(3))
  // flip like a real phone: pick it up, turn it over, put it down with a tiny bounce (the shadow follows)
  const flipTo = (i) => {
    const f = flips[i], sh = $('.ph-shadow', phs[i]); f._back = !f._back
    if (reduce) { gsap.set(f, { rotationY: f._back ? 180 : 0 }); return shade(f) }
    gsap.timeline({ onUpdate: () => shade(f) })
      .to(f, { y: -38, scale: 1.1, rotationX: -9, duration: .32, ease: 'power2.out' }, 0)
      .to(flips, { rotationY: 0, duration: 1.8, ease: 'power3.inOut', stagger: .14, onUpdate: () => flips.forEach(shade) }, 0)
      .to(f, { rotationZ: f._back ? 5 : -5, duration: .45, ease: 'sine.inOut' }, .04)
      .to(f, { rotationZ: 0, duration: .6, ease: 'back.out(1.7)' }, .5)
      .to(f, { y: 0, scale: 1, rotationX: 0, duration: .6, ease: 'back.out(1.7)' }, .72)
      .to(sh, { scaleX: .7, opacity: .35, duration: .32 }, 0)
      .to(sh, { scaleX: 1, opacity: 1, duration: .6, ease: 'back.out(1.5)' }, .72)
  }
  // tap the middle phone to flip it; tap a side phone to bring it to the middle
  phs.forEach((p, i) => p.addEventListener('click', () => {
    if (i !== active) return goto(i)
    flipTo(i)
  }))
  track.scrollLeft = center(Math.floor((phs.length - 1) / 2))
  coverflow()
  if (reduce) return
  // messages pop in one after another once a phone has flipped to its front    
    // $$('.pop-c, .pop-m', p).forEach((g) => {
    //   if (g.classList.contains('pop-c')) tl.to(g, { opacity: 1, scale: 1 }, '+=.45')
    //   else tl.to($('.typing', g), { opacity: 1, scale: 1, duration: .3 }, '+=.45').to($('.typing', g), { opacity: 0, scale: .6, duration: .15, ease: 'none' }, '+=.8').to($('.bub', g), { opacity: 1, scale: 1 })
    // })
    


  
  // Messages appear one after another in each phone.
  const pops = phs.map((p) => {
    const q = (s) => $(s, p);
    const chatScroll = q('.chat-scroll');
    const messages = $$('.pop-c, .pop-m', p);

    let followLatest = true;

    if (chatScroll) {
      chatScroll.addEventListener('scroll', () => {
        const remaining =
          chatScroll.scrollHeight -
          chatScroll.clientHeight -
          chatScroll.scrollTop;

        followLatest = remaining < 35;
      }, { passive: true });
    }

    gsap.set(q('.pop-t'), { opacity: 0 });

    messages.forEach((g) => {
      gsap.set(g, { display: 'none' });
    });

    gsap.set($$('.typing, .bub', p), {
      opacity: 0,
      scale: 0.85,
      transformOrigin: 'right bottom'
    });

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power2.out', duration: 0.35 }
    });

    const scrollToLatest = () => {
      if (!chatScroll || !followLatest) return;

      gsap.to(chatScroll, {
        scrollTop: () =>
          Math.max(0, chatScroll.scrollHeight - chatScroll.clientHeight),
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    tl.to(q('.pop-t'), {
      opacity: 1,
      duration: 0.25,
      ease: 'none'
    });

    messages.forEach((g) => {
      const isMe = g.classList.contains('pop-m');

      tl.set(g, {
        display: isMe ? 'grid' : 'block'
      }, '+=0.25');

      if (!isMe) {
        tl.fromTo(g,
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            onStart: scrollToLatest,
            onComplete: scrollToLatest
          }
        );

        tl.to({}, { duration: 0.45 });
      } else {
        const typing = $('.typing', g);
        const bubble = $('.bub', g);

        tl.to(typing, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          onStart: scrollToLatest,
          onComplete: scrollToLatest
        });

        tl.to({}, { duration: 0.6 });

        tl.to(typing, {
          opacity: 0,
          duration: 0.12,
          ease: 'none'
        });

        tl.fromTo(bubble,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            onStart: scrollToLatest,
            onComplete: scrollToLatest
          }
        );

        tl.to({}, { duration: 0.45 });
      }
    });

    return tl;
  });

  // Animate the phones into view, then play each conversation.
  gsap.set(flips, {
    rotationY: 540,
    y: 700,
    scale: 0.7
  });

  ScrollTrigger.create({
    trigger: track,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      const intro = gsap.timeline();

      intro
        .to(flips, {
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: 'power3.out',
          stagger: 0.14
        }, 0)
        .to(flips, {
          rotationY: 0,
          duration: 1.8,
          ease: 'power3.inOut',
          stagger: 0.14
        }, 0);

      pops.forEach((tl, i) => {
        intro.add(() => tl.play(0), 2.1 + i * 0.3);
      });
    }
  });
}

const bindSlots = () => $$('img[data-slot]').forEach((img) => (img.onerror = () => { img.parentElement.innerHTML = `<div class="absolute inset-0 grid place-items-center text-center p-4 text-xs text-mute font-mono"><div><svg class="mx-auto mb-2 w-10 h-10 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 16-5-5-8 8"/></svg>${img.dataset.dir ? 'Add picture' : 'Add project image'}<br>public/images/${img.dataset.dir || 'projects'}/${img.dataset.slot}.webp</div></div>` }))
bindSlots()
put('blogTopics', TOPICS.map((t) => `<span class="chip">${t}</span>`).join(''))

/* ---------- Theme ---------- */
const root = document.documentElement
const setTheme = (t) => {
  root.classList.toggle('light', t === 'light')
  try { localStorage.setItem('ge-theme', t) } catch (e) {}
  $('#themeBtn i').className = t === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
}
setTheme(root.classList.contains('light') ? 'light' : 'dark')
$('#themeBtn').onclick = () => { const t = root.classList.contains('light') ? 'dark' : 'light'; setTheme(t); toast(`${t === 'dark' ? 'Dark' : 'Light'} mode on`, 'info', 1800) }

/* ---------- Mobile menu ---------- */
const menuBtn = $('#menuBtn'), menu = $('#mobileMenu')
const toggleMenu = (open = !menuBtn.classList.contains('active')) => {
  menuBtn.classList.toggle('active', open)
  menuBtn.setAttribute('aria-expanded', open)
  menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu')
  menu.classList.toggle('invisible', !open); menu.classList.toggle('opacity-0', !open)
  document.body.classList.toggle('overflow-hidden', open)
}
menuBtn.onclick = () => toggleMenu()
$$('#mobileMenu a').forEach((a) => (a.onclick = () => toggleMenu(false)))
addEventListener('keydown', (e) => { if (e.key === 'Escape') { toggleMenu(false); toggleBot(false) } })

/* ---------- Time & timezones (IANA, no hardcoded offsets) ---------- */
const ZONES = { lagos: 'Africa/Lagos', nigeria: 'Africa/Lagos', london: 'Europe/London', uk: 'Europe/London', england: 'Europe/London', 'new york': 'America/New_York', 'los angeles': 'America/Los_Angeles', chicago: 'America/Chicago', denver: 'America/Denver', japan: 'Asia/Tokyo', tokyo: 'Asia/Tokyo', sydney: 'Australia/Sydney', australia: 'Australia/Sydney', paris: 'Europe/Paris', dubai: 'Asia/Dubai', accra: 'Africa/Accra', nairobi: 'Africa/Nairobi', johannesburg: 'Africa/Johannesburg', toronto: 'America/Toronto' }
const fmt = (tz, o) => new Intl.DateTimeFormat('en-GB', { timeZone: tz, ...o }).format(new Date())
const offMin = (tz) => {
  const v = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'longOffset' }).formatToParts(new Date()).find((p) => p.type === 'timeZoneName').value
  const m = v.match(/([+-])(\d\d):?(\d\d)?/)
  return m ? (m[1] === '-' ? -1 : 1) * (+m[2] * 60 + +(m[3] || 0)) : 0
}
const offLabel = (tz) => { const m = offMin(tz); return `UTC${m < 0 ? '-' : '+'}${Math.floor(Math.abs(m) / 60)}${Math.abs(m) % 60 ? ':' + String(Math.abs(m) % 60).padStart(2, '0') : ''}` }
const place = (tz) => tz.split('/').pop().replace('_', ' ')
const timeStr = (tz) => `${fmt(tz, { hour: '2-digit', minute: '2-digit', hour12: false })} on ${fmt(tz, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} (${place(tz)}, ${offLabel(tz)})`
const tick = () => {
  const clock = $('#clkT');
  if (!clock) return;

  const now = new Date();

  clock.textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).format(now);

  $('#clkD').textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(now);

  $('#clkZ').textContent =
    `Africa/Lagos · ${offLabel('Africa/Lagos')}`;
};

tick();
setInterval(tick, 1000);

/* ---------- AI assistant (rule-based, answers only from real info) ---------- */
const botBtn = $('#botBtn'), bot = $('#bot'), log = $('#botLog'), input = $('#botIn')
const CHIPS = ['What skills does GE.developer have?', 'Which anime do you watch?', 'Who is your favorite character?', 'What time is it in London?']
let busy = false
function toggleBot(open = bot.classList.contains('invisible')) {
  bot.classList.toggle('invisible', !open); bot.classList.toggle('opacity-0', !open); bot.classList.toggle('translate-y-3', !open)
  bot.classList.toggle('flex', open); botBtn.setAttribute('aria-expanded', open)
  document.body.classList.toggle('overflow-hidden', open && innerWidth < 640) // full screen on phones: stop the page behind from scrolling
  if (open && !log.children.length) welcome()
  if (open) { hideTeasers(); if (innerWidth >= 640) input.focus() }
}
function welcome() {
  log.innerHTML = ''
  addMsg('assistant', "Hi, I'm GE. Ask me about GE's skills, services and projects, how to contact him, or the time in any city.")
  $('#botChips').innerHTML = CHIPS.map((c) => `<button type="button" class="chip whitespace-nowrap hover:text-brand">${c}</button>`).join('')
  $$('#botChips button').forEach((b) => (b.onclick = () => send(b.textContent)))
}
botBtn.onclick = () => toggleBot(); $('#botClose').onclick = () => toggleBot(false)
const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))
const md = (s) => esc(s).replace(/```([\s\S]*?)```/g, '<pre class="bg-black/40 text-brand rounded-lg p-2 my-1 overflow-x-auto text-xs">$1</pre>').replace(/`([^`]+)`/g, '<code class="text-brand">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/^[-*] (.+)$/gm, '• $1').replace(/\n/g, '<br>')
function addMsg(role, text) {
  const me = role === 'user', row = document.createElement('div')
  row.className = `flex gap-2 ${me ? 'justify-end' : ''}`
  row.innerHTML = `${me ? '' : '<span class="w-7 h-7 shrink-0 rounded-full bg-brand/20 text-brand grid place-items-center text-xs"><i class="fa-solid fa-robot"></i></span>'}<div class="msg px-3 py-2 rounded-2xl max-w-[85%] break-words ${me ? 'bg-neon/25 rounded-br-sm' : 'bg-brand/10 border border-[var(--line)] rounded-tl-sm'}"></div>`
  const el = $('.msg', row)
  if (me) el.textContent = text; else el.innerHTML = text ? md(text) : '<span class="animate-pulse text-brand">●●●</span>'
  log.append(row); log.scrollTop = log.scrollHeight
  return el
}
const go = (id) => { setTimeout(() => (location.href = id === 'home' ? '/' : `/${id}`), 900); return `Taking you to ${id}.` }
// ---- Teach the assistant: it answers from your favorites list automatically, plus any lines you add below ----
const FAQ = [
  { keys: ['anime', 'watch'], reply: () => `Anime I love: ${ANIME.map((a) => a.name + (a.genre ? ` (${a.genre})` : '')).join(', ')}.` },
  { keys: ['character', 'characters'], reply: () => `My favorite characters: ${CHARACTERS.map((c) => `${c.name} from ${c.anime}`).join(', ')}.` },
  { keys: ['game', 'gaming', 'play'], reply: () => `Games I love: ${GAMES.map((g) => g.name + (g.genre ? ` (${g.genre})` : '')).join(', ')}.` },
  { keys: ['hobby', 'hobbies', 'interest', 'free time'], reply: 'I enjoy anime, gaming, DC, Marvel, animation and technology.' },
  // Add your own like this (a word the visitor might type, and your answer):
  // { keys: ['price', 'cost', 'how much'], reply: 'Prices depend on the project. Message me on WhatsApp for a quote.' },
]
function faqAnswer(q) {
  const named = [...ANIME.map((x) => [x, 'anime']), ...GAMES.map((x) => [x, 'game']), ...CHARACTERS.map((x) => [x, 'character'])].find(([x]) => x.name && q.includes(x.name.toLowerCase()))
  if (named) {
    const [x, kind] = named
    return kind === 'character'
      ? `${x.name} is from ${x.anime}. Abilities: ${[].concat(x.abilities || []).join(', ')}. ${x.about} Why I love them: ${x.why}`
      : `${x.name}${x.genre ? ` (${x.genre})` : ''}. Why it's my best: ${x.why} About it: ${x.about}`
  }
  const f = FAQ.find((f) => f.keys.some((k) => new RegExp('\\b' + k).test(q)))
  return f ? (typeof f.reply === 'function' ? f.reply() : f.reply) : ''
}
function answer(q) {
  q = q.toLowerCase()
  const hit = faqAnswer(q); if (hit) return hit
  if (/\b(time|date|clock|zone|today|day is it|difference|ahead|behind)\b/.test(q)) {
    if (/\b(usa|america|united states|\bus\b)\b/.test(q) && !/new york|los angeles|chicago|denver|toronto/.test(q))
      return `The United States has several time zones. Right now: New York ${fmt('America/New_York', { hour: '2-digit', minute: '2-digit', hour12: false })}, Chicago ${fmt('America/Chicago', { hour: '2-digit', minute: '2-digit', hour12: false })}, Denver ${fmt('America/Denver', { hour: '2-digit', minute: '2-digit', hour12: false })}, Los Angeles ${fmt('America/Los_Angeles', { hour: '2-digit', minute: '2-digit', hour12: false })}. Tell me a city for one answer.`
    const found = Object.keys(ZONES).filter((k) => q.includes(k)).sort((a, b) => q.indexOf(a) - q.indexOf(b)).map((k) => ZONES[k]).filter((z, i, a) => a.indexOf(z) === i)
    if (/difference|ahead|behind/.test(q) && found.length >= 2) {
      const d = offMin(found[1]) - offMin(found[0]), h = Math.abs(d) / 60
      return d === 0 ? `${place(found[0])} and ${place(found[1])} share the same time right now.` : `${place(found[1])} is ${h} hour${h === 1 ? '' : 's'} ${d > 0 ? 'ahead of' : 'behind'} ${place(found[0])} right now.`
    }
    if (found.length) return found.map(timeStr).join('\n')
    const local = Intl.DateTimeFormat().resolvedOptions().timeZone
    return `Your local time: ${timeStr(local)}.`
  }
  if (/(take me|go to|open|show me|navigate)/.test(q)) {
    const id = NAV.map((n) => n.toLowerCase()).find((n) => q.includes(n)); if (id) return go(id)
  }
  if (/skill|tech|stack|know/.test(q)) return `Core: HTML5, CSS3, JavaScript, Tailwind CSS, responsive design, Vite. Plus API integration with Laravel, Git/GitHub and deployment. Ratings: HTML 85%, CSS 78%, JavaScript 65%, Bootstrap 65%.`
  if (/service|offer|hire|build for/.test(q)) return `GE offers responsive and business websites, landing pages, redesigns, UI implementation, forms, API integration, deployment and maintenance.`
  if (/project|work|portfolio|caring|breathe|nime/.test(q)) return `Real projects: Caring Hands Transport, Breathe Easy Stretch and 9JA-NIME.`
  if (/contact|email|whatsapp|phone|reach|location|where/.test(q)) return `WhatsApp: 07062470998 · Email: godwinemmanueluche@gmail.com · Location: Ojo, Lagos, Nigeria.`
  if (/blog|article/.test(q)) return `The blog is coming soon, so there are no published articles yet.`
  if (/testimonial|review|client/.test(q)) return 'Clientz and Friends messages will appear in the Testimonials section.'
  if (/who|godwin|about|ge\.?dev/.test(q)) return `Godwin Emmanuel (GE.developer) is a frontend developer from Ojo, Lagos who builds responsive websites and API-connected interfaces. He enjoys anime, gaming, DC, Marvel and animation.`
  if (/^(hi|hello|hey|yo)\b/.test(q)) return 'Hey! What would you like to know?'
  return "I don't have that information. I can help with GE's skills, services, projects, contact details, site navigation, and time or date in any city."
}
function send(text) {
  text = text.trim(); if (!text || busy) return
  busy = true; input.value = ''; input.style.height = 'auto'; $('#botChips').innerHTML = ''
  addMsg('user', text)
  const el = addMsg('assistant', '')
  setTimeout(() => { el.innerHTML = md(answer(text)); log.scrollTop = log.scrollHeight; busy = false }, 350)
}
$('#botForm').onsubmit = (e) => { e.preventDefault(); send(input.value) }
input.onkeydown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value) } }
input.oninput = () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 112) + 'px' }

/* ---------- Contact form: a normal HTML form posted to your Gmail by FormSubmit (no fetch) ---------- */
if ($('#formAlert') && location.search.includes('sent=1')) {
  $('#formAlert').className = 'rounded-lg border px-3 py-2 text-sm border-brand text-brand bg-brand/10'
  $('#formAlert').textContent = "Message sent. I'll reply to your email soon."
  setTimeout(() => toast('Message sent successfully', 'success'), 500)
  history.replaceState(null, '', location.pathname)
}

/* ---------- Visuals: every supplied image is used somewhere ---------- */
const ALT = { '01': '3D browser windows with code symbols', '02': 'Code editor on a monitor with floating symbols', '03': 'Developer at a multi-monitor desk', '04': 'Developer coding beside floating interface panels', '05': 'Person in a VR headset touching a holographic interface', '06': 'Two people working on laptops in a blue city', '07': 'Astronaut floating in blue and purple light', '08': 'Phone with chat bubbles and a small robot', '09': 'Stack of glass phone screens', '10': 'Robot working on a laptop', '11': 'Friendly white robot pointing upward', '12': 'Hologram robot above a phone', '13': 'Robotic hand touching a holographic panel', '14': 'Two robotic hands in purple light', '15': 'Cybernetic eye with circuit patterns', '16': 'Cyber head with a neon visor', '17': 'Two chrome robotic heads facing each other', '18': 'Robot head with a rainbow visor and headphones', '19': 'Neon VR character in a futuristic jacket', '20': 'Chrome android head with a dark visor', '21': 'Android profile with a rainbow visor' }
const img = (n, cls = '') => `<img src="/images/ge-visual-${n}.webp" alt="${ALT[n]}" loading="lazy" class="${cls}" />`
const BANNERS = {
  about: ['About', 'About Me', 'I build real-world websites and learn through real projects, debugging and deployment.', ['20']],
  skills: ['Skills', 'Developer HUD', 'The tools and experience behind every build.', ['02']],
  services: ['Services', 'What I can build for you', 'From landing pages to API-connected websites.', ['01', '09']],
  projects: ['Projects', 'Projects built for real use', 'A look at the work behind the brand.', ['18']],
  testimonials: ['Testimonials', 'Client & Friends messages', 'Feedback from the people I build for and people that have seen my work.', ['06', '08']],
  blog: ['Blog', 'Articles & notes', 'Frontend, APIs, deployment and the journey.', ['07']],
  contact: ['Contact', "Let's talk", 'Tell me about your project.', ['21']],
}
const B = BANNERS[cur]
if (B) {
  const pics = B[3], glow = ['rgba(0,171,240,.45)', 'rgba(139,92,246,.45)']
  const art = pics.length > 1
    ? `<div class="relative h-56 sm:h-72">${img(pics[0], `float banner-img absolute left-0 top-0 h-full w-auto max-w-[60%] object-contain drop-shadow-[0_0_24px_${glow[0]}]`)}${img(pics[1], `float banner-img absolute right-0 bottom-0 h-4/5 w-auto max-w-[55%] object-contain drop-shadow-[0_0_24px_${glow[1]}]`)}</div>`
    : `<div class="flex items-center justify-center h-56 sm:h-72">${img(pics[0], 'float banner-img h-full w-auto max-w-full object-contain drop-shadow-[0_0_24px_rgba(0,171,240,.45)]')}</div>`
  const first = document.querySelector('main > section')
  first.classList.replace('pt-28', 'pt-10')
  const ey = first.querySelector('p.font-mono'), h2 = first.querySelector('h2')
  if (ey && ey.textContent.replace('// ', '').trim().toLowerCase() === B[0].toLowerCase()) ey.remove()
  if (h2 && h2.textContent.trim() === B[1]) h2.remove()
  first.insertAdjacentHTML('beforebegin', `<section class="pt-28 px-4 sm:px-6"><div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center glass p-6 sm:p-10 overflow-hidden"><div><p class="font-mono text-brand text-sm mb-2">// ${B[0].toUpperCase()}</p><h1 class="font-display font-extrabold text-4xl sm:text-5xl mb-3">${B[1]}</h1><p class="text-mute">${B[2]}</p></div>${art}</div></section>`)
}

/* ---------- Blog (the articles live in src/js/posts.js) ---------- */
POSTS.forEach((p, i) => (p.id = i))
const SAMPLE = '## Overview\nThis article is still a draft. The full text is coming soon.\n\n## Example layout\n~~~\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n~~~\n\n## What next\nCheck back soon for the full article.'
const pic = (p, cls) => (/^\d\d$/.test(p.image) ? img(p.image, cls) : `<img src="${p.image}" alt="${esc(p.title)}" loading="lazy" class="${cls}" />`)
const meta = (p) => `<p class="text-xs text-mute">Godwin Emmanuel · ${p.body ? `${p.date}${p.read ? ' · ' + p.read : ''}` : 'Draft · Date and reading time to be added'}</p>`
let cat = 'All', query = ''
function renderBlog() {
  const all = cat === 'All' && !query
  const feat = all ? POSTS.find((p) => p.featured) || POSTS[0] : null
  const list = (all ? POSTS.filter((p) => p !== feat) : POSTS.filter((p) => (cat === 'All' || p.cat === cat) && (p.title + ' ' + p.cat).toLowerCase().includes(query)))
  put('blogCats', CATS.map((c) => `<button type="button" data-cat="${c}" class="chip whitespace-nowrap ${c === cat ? 'border-brand text-brand' : ''}">${c}</button>`).join(''))
  put('blogFeat', feat ? `<article class="glass glow overflow-hidden grid md:grid-cols-2"><div class="h-56 md:h-64 overflow-hidden bg-gradient-to-br from-brand/20 to-neon/20">
  ${pic(feat, 'w-full blog-imag h-full object-cover object-center block')}
  </div><div class="p-6 flex flex-col gap-3 justify-center"><span class="chip text-brand self-start">Featured · ${feat.cat}</span><h3 class="font-display font-extrabold text-2xl">${feat.title}</h3>${meta(feat)}<button type="button" data-open="${feat.id}" class="btn btn-p self-start">Read More</button></div></article>` : '')
  put('blogGrid', list.map((p) => `<article class="glass glow tilt overflow-hidden flex flex-col"><div class="h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-brand/20 to-neon/20">
  ${pic(p, 'w-full blog-imag h-full object-cover object-center block')}
</div><div class="p-5 flex flex-col gap-2 flex-1"><div class="flex gap-2"><span class="chip text-brand">${p.cat}</span>${p.body ? '' : '<span class="chip">Draft</span>'}</div><h3 class="font-display font-bold">${p.title}</h3>${meta(p)}<button type="button" data-open="${p.id}" class="btn btn-o justify-center mt-auto">Read More</button></div></article>`).join('') || '<p class="text-mute">No articles match your search.</p>')
  $$('[data-cat]').forEach((b) => (b.onclick = () => { cat = b.dataset.cat; renderBlog() }))
  $$('[data-open]').forEach((b) => (b.onclick = () => openPost(POSTS[b.dataset.open])))
}
function postHTML(body) {
  const toc = []
  const html = body.split(/~~~/).map((ch, i) => i % 2 ? `<div class="relative my-3"><button type="button" class="copy chip absolute right-2 top-2">Copy</button><pre class="bg-black/40 text-brand rounded-lg p-3 pt-9 overflow-x-auto text-xs"><code>${esc(ch.replace(/^\n/, '').replace(/\n$/, ''))}</code></pre></div>` : esc(ch).replace(/^## (.+)$/gm, (_, h) => `<h3 id="h${toc.push(h)}" class="font-display font-bold text-lg mt-4 mb-1">${h}</h3>`).replace(/\n\n/g, '<br><br>')).join('')
  return { html, toc }
}
function openPost(p) {
  const { html, toc } = postHTML(p.body || SAMPLE)
  const rel = POSTS.filter((x) => x.id !== p.id).sort((a, b) => (b.cat === p.cat) - (a.cat === p.cat)).slice(0, 2)
  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm grid place-items-center p-4'
  m.innerHTML = `<article role="dialog" aria-modal="true" aria-label="${esc(p.title)}" class="glass bg-bg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6"><button type="button" class="close float-right text-mute lnk" aria-label="Close article"><i class="fa-solid fa-xmark"></i></button><span class="chip text-brand">${p.cat}</span><h2 class="font-display font-extrabold text-2xl my-3">${p.title}</h2>${meta(p)}<nav class="glass p-3 text-sm my-4" aria-label="Contents"><b>Contents</b>${toc.map((h, i) => `<a class="block lnk text-mute" href="#h${i + 1}">${h}</a>`).join('')}</nav>${html}<h3 class="font-display font-bold mt-6 mb-2">Related articles</h3>${rel.map((r) => `<a href="#" data-id="${r.id}" class="rel block lnk text-mute py-1">${r.title}</a>`).join('')}</article>`
  document.body.append(m); document.body.classList.add('overflow-hidden')
  const close = () => { m.remove(); document.body.classList.remove('overflow-hidden'); removeEventListener('keydown', onKey) }
  const onKey = (e) => e.key === 'Escape' && close()
  addEventListener('keydown', onKey)
  m.onclick = (e) => {
    const t = e.target
    if (t === m || t.closest('.close')) close()
    else if (t.classList.contains('copy')) navigator.clipboard.writeText(t.nextElementSibling.textContent).then(() => toast('Code copied', 'success', 1800), () => toast('Could not copy. Select the code and copy it manually.', 'error', 3000))
    else if (t.classList.contains('rel')) { e.preventDefault(); close(); openPost(POSTS[t.dataset.id]) }
  }
  $('.close', m).focus()
}
if ($('#blogGrid')) { renderBlog(); $('#blogSearch').oninput = (e) => { query = e.target.value.toLowerCase().trim(); renderBlog() } }

/* ---------- Favorites: cards, tabs, and two-row 3D scrolling rows (data in src/js/favorites.js) ---------- */
const favCard = (f, tag) => `<article class="fc tilt"><div class="fc-media"><div class="fc-pic"><img src="/images/favorites/${f.image}.webp" loading="lazy" alt="${esc(f.name)}" data-slot="${f.image}" data-dir="favorites" /></div><div class="fc-tags"><span class="chip text-brand">${tag}</span>${f.genre ? `<span class="chip text-white/80">${f.genre}</span>` : ''}</div><h4 class="fc-title">${f.name}</h4></div><div class="fc-body"><div><p class="fc-label text-neon">WHY IT'S MY BEST</p><p class="fc-text">${f.why}</p></div><div><p class="fc-label text-brand">ABOUT IT</p><p class="fc-text">${f.about}</p></div></div></article>`
const charCard = (c) => `<article class="fc tilt"><div class="fc-media fc-tall"><div class="fc-pic"><img src="/images/characters/${c.image}.webp" loading="lazy" alt="${esc(c.name)}" class="object-top" data-slot="${c.image}" data-dir="characters" /></div><div class="fc-tags"><span class="chip text-brand">From: ${c.anime}</span></div><h4 class="fc-title">${c.name}</h4></div><div class="fc-body"><div><p class="fc-label text-neon">ABILITIES</p><div class="flex flex-wrap gap-1.5">${[].concat(c.abilities || []).map((a) => `<span class="chip">${a}</span>`).join('')}</div></div><div><p class="fc-label text-brand">ABOUT THE CHARACTER</p><p class="fc-text">${c.about}</p></div><div><p class="fc-label text-neon">WHY MY FAVORITE</p><p class="fc-text">${c.why}</p></div></div></article>`
put('favAnime', ANIME.map((f) => favCard(f, 'Anime')).join(''))
put('favGames', GAMES.map((f) => favCard(f, 'Game')).join(''))
put('favCharacters', CHARACTERS.map(charCard).join(''))
bindSlots()

// Mouse drag-to-scroll (touch screens and trackpads already scroll by themselves)
function dragScroll(el, onEnd) {
  let down = false, sx = 0, sl = 0, moved = 0
  el.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = el.scrollLeft; el.style.scrollSnapType = 'none'; el.style.cursor = 'grabbing' })
  addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); el.scrollLeft = sl - dx })
  addEventListener('pointerup', () => { if (!down) return; down = false; el.style.scrollSnapType = ''; el.style.cursor = ''; if (onEnd) onEnd() })
  el.addEventListener('click', (e) => { if (moved > 6) { e.stopPropagation(); e.preventDefault(); moved = 0 } }, true)
}

const FAV_ROWS = ['favAnime', 'favGames', 'favCharacters']
function initFavorites() {
  FAV_ROWS.map((id) => document.getElementById(id)).filter(Boolean).forEach((row) => {
    row.classList.add('fav-row')
    $$(':scope > article', row).forEach((a) => { const s = document.createElement('div'); s.className = 'fav-slide'; const w = document.createElement('div'); w.className = 'fav-inner'; a.replaceWith(s); w.append(a); s.append(w) })
    row.insertAdjacentHTML('afterend', '<div class="h-1 rounded bg-fg/10 mt-1 overflow-hidden"><i class="block h-full w-0 bg-brand rounded"></i></div>')
    const bar = row.nextElementSibling.firstElementChild, slides = $$('.fav-slide', row), btns = $$(`[data-scroll="${row.id}"]`)
    const inners = slides.map((s) => s.firstElementChild)
    const update = () => {
      if (!row.clientWidth) return
      const mid = row.clientWidth / 2, max = row.scrollWidth - row.clientWidth
      bar.style.width = ((row.scrollLeft + row.clientWidth) / row.scrollWidth) * 100 + '%'
    //   slides.forEach((s, i) => {
    //   const d = Math.max(-1.3, Math.min(1.3, (s.offsetLeft + s.offsetWidth / 2 - row.scrollLeft - mid) / mid)), a = Math.abs(d)
    //   const el = inners[i]
    //   el.style.transform = `translateZ(${-a * 60}px) rotateY(${-d * 14}deg) scale(${1 - a * .05})`
    //   el.style.opacity = 1 - a * .18
    // })
    slides.forEach((s, i) => {
    const x = s.offsetLeft - row.scrollLeft
    if (x > row.clientWidth + 400 || x + s.offsetWidth < -400) return // skip far off-screen slides
    const d = Math.max(-1.3, Math.min(1.3, (s.offsetLeft + s.offsetWidth / 2 - row.scrollLeft - mid) / mid)), a = Math.abs(d)
    const el = inners[i]
    el.style.transform = `translateZ(${-a * 60}px) rotateY(${-d * 14}deg) scale(${1 - a * .05})`
    el.style.opacity = 1 - a * .18
  })
      btns.forEach((b) => {
        const off = +b.dataset.dir < 0 ? row.scrollLeft <= 2 : row.scrollLeft >= max - 2
        b.classList.toggle('opacity-30', off); b.classList.toggle('pointer-events-none', off)
        b.parentElement.classList.toggle('invisible', max <= 2) // nothing to scroll: hide the arrows
      })
    }
    row._update = update
    let tick = false
    row.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { update(); tick = false }) } }, { passive: true })
    addEventListener('resize', update)
    btns.forEach((b) => (b.onclick = () => row.scrollBy({ left: +b.dataset.dir * (slides[0].offsetWidth + 20), behavior: 'smooth' })))
    row.addEventListener('click', (e) => { const c = e.target.closest('.fc'); if (c) c.classList.toggle('open') })
    dragScroll(row, update)
    update()
    if (!reduce) ScrollTrigger.create({ trigger: row, start: 'top 88%', once: true, onEnter: () => gsap.from(slides, { y: 70, rotationX: -24, opacity: 0, duration: .9, stagger: .07, ease: 'power3.out', clearProps: 'transform,opacity' }) })
  })
}
initFavorites()

/* ---------- Favorites tabs: All / Anime / Games / Characters ---------- */
const favTabs = $('#favTabs')
if (favTabs) {
  const TABS = [['all', 'All', ANIME.length + GAMES.length + CHARACTERS.length], ['anime', 'Anime', ANIME.length], ['games', 'Games', GAMES.length], ['characters', 'Characters', CHARACTERS.length]]
  favTabs.innerHTML = TABS.map(([id, label, n]) => `<button type="button" role="tab" data-tab="${id}" class="flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-colors"><span>${label}</span><span class="tabnum min-w-6 px-1.5 rounded-full text-xs leading-6">${n}</span></button>`).join('')
  const show = (id) => {
    $$('[data-tab]', favTabs).forEach((b) => {
      const on = b.dataset.tab === id, n = $('.tabnum', b)
      b.setAttribute('aria-selected', on)
      b.classList.toggle('bg-brand', on); b.classList.toggle('text-[#041018]', on); b.classList.toggle('text-mute', !on)
      n.classList.toggle('bg-black/15', on); n.classList.toggle('bg-fg/10', !on)
    })
    $$('[data-group]').forEach((g) => {
      const on = id === 'all' || g.dataset.group === id
      g.classList.toggle('hidden', !on)
      if (on && !reduce) gsap.fromTo(g, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .4 })
    })
    requestAnimationFrame(() => FAV_ROWS.forEach((r) => { const el = document.getElementById(r); if (el && el._update) el._update() }))
  }
  favTabs.onclick = (e) => { const b = e.target.closest('[data-tab]'); if (b) show(b.dataset.tab) }
  show(['anime', 'games', 'characters'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'all')
}

/* ---------- Floating WhatsApp button (above the AI button) + friendly teaser bubbles ---------- */
const WA = 'https://wa.me/2347062470998'
const wa = document.createElement('a')
wa.id = 'waBtn'; wa.href = WA; wa.target = '_blank'; wa.rel = 'noopener'; wa.setAttribute('aria-label', 'Chat with me on WhatsApp')
wa.className = 'fixed right-4 bottom-[5.25rem] z-50 w-14 h-14 rounded-full grid place-items-center text-white text-3xl shadow-[0_0_24px_rgba(37,211,102,.5)]'
wa.style.background = 'linear-gradient(145deg,#2be26f,#119b4a)'
wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>'
document.body.append(wa)

const mkTeaser = (tag, id, text, bottom) => {
  const b = document.createElement(tag)
  b.id = id
  b.className = `fixed right-[4.9rem] ${bottom} z-50 max-w-[13.5rem] text-left text-sm glass px-3 py-2 rounded-2xl rounded-br-sm hidden`
  b.innerHTML = `${text}<span class="block text-[10px] text-brand mt-1">Tap here</span>`
  if (tag === 'a') { b.href = WA; b.target = '_blank'; b.rel = 'noopener' } else b.type = 'button'
  document.body.append(b)
  return b
}
const aiTeaser = mkTeaser('button', 'aiTeaser', "Hi, I'm GE, want to know more about me?", 'bottom-5')
const waTeaser = mkTeaser('a', 'waTeaser', "Hi, I'm on WhatsApp, tap it", 'bottom-[6.1rem]')
aiTeaser.onclick = () => toggleBot(true)
const showTeaser = (el) => {
  if (!bot.classList.contains('invisible')) return // assistant already open
  el.classList.remove('hidden')
  if (!reduce) gsap.fromTo(el, { opacity: 0, scale: .6, y: 10, transformOrigin: 'right bottom' }, { opacity: 1, scale: 1, y: 0, duration: .5, ease: 'back.out(2)' })
  setTimeout(() => hideOne(el), 8000)
}
const hideOne = (el) => { if (el.classList.contains('hidden')) return; if (reduce) return el.classList.add('hidden'); gsap.to(el, { opacity: 0, y: 8, duration: .3, onComplete: () => el.classList.add('hidden') }) }
function hideTeasers() { clearTimeout(t1); clearTimeout(t2); hideOne(aiTeaser); hideOne(waTeaser) }

let t1 = setTimeout(() => showTeaser(aiTeaser), 9000);
let t2 = setTimeout(() => showTeaser(waTeaser), 17000);

waTeaser.addEventListener('click', () => hideOne(waTeaser)); wa.addEventListener('click', hideTeasers)

/* ---------- GE.developer wordmark: particles + spider web come together, then an alphabet countdown ---------- */
function wordFx(el, o = {}) {
  if (!el || reduce) return
  const gap = o.gap || (small() ? 4 : 3), pad = o.pad || 60, web = o.web || (small() ? 22 : 30), ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const cv = document.createElement('canvas'); cv.setAttribute('aria-hidden', 'true')
  cv.style.cssText = 'position:absolute;pointer-events:none;opacity:0;z-index:1'
  el.dataset.wf = '1'; el.style.position = 'relative'
  if (getComputedStyle(el).display === 'inline') el.style.display = 'inline-block'
  el.append(cv)
  const ctx = cv.getContext('2d')
  let P = [], C = [], W = 0, H = 0, dpr = 1, raf = 0, busy = false
  // read the word as it is on the page (position, font, colour), then turn it into particles
  const measure = () => {
    const er = el.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2)
    W = Math.ceil(er.width + pad * 2); H = Math.ceil(er.height + pad * 2)
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.style.left = -pad + 'px'; cv.style.top = -pad + 'px'
    const off = document.createElement('canvas'); off.width = W; off.height = H
    const oc = off.getContext('2d', { willReadFrequently: true }); C = []
    ;[...el.childNodes].filter((n) => n !== cv && (n.nodeType === 3 || n.nodeType === 1)).forEach((n) => {
      const st = getComputedStyle(n.nodeType === 3 ? el : n), r = document.createRange(); r.selectNodeContents(n)
      const rr = r.getBoundingClientRect(), txt = n.textContent, font = `${st.fontWeight} ${st.fontSize} ${st.fontFamily}`
      oc.font = font; oc.textBaseline = 'alphabetic'; oc.fillStyle = st.color
      const asc = oc.measureText('M').fontBoundingBoxAscent || parseFloat(st.fontSize) * .8
      const x0 = rr.left - er.left + pad, base = rr.top - er.top + pad + asc
      oc.fillText(txt, x0, base)
      for (let i = 0; i < txt.length; i++) C.push({ ch: txt[i], x: x0 + oc.measureText(txt.slice(0, i)).width, y: base, font, color: st.color })
    })
    const d = oc.getImageData(0, 0, W, H).data; P = []
    for (let y = 0; y < H; y += gap) for (let x = 0; x < W; x += gap) {
      const i = (y * W + x) * 4
      if (d[i + 3] > 140) P.push({ i: P.length, hx: x, hy: y, x, y, vx: 0, vy: 0, c: `${d[i]},${d[i + 1]},${d[i + 2]}` })
    }
  }
  const run = (mode) => {
    if (busy) return; busy = true
    el.classList.remove('wf-hide'); measure(); el.classList.add('wf-hide')
    gsap.set(cv, { opacity: 1 })
    if (mode === 'intro') P.forEach((p) => { const a = Math.random() * 6.283, r = (.3 + Math.random() * .8) * Math.max(W, H) * .5; p.x = W / 2 + Math.cos(a) * r; p.y = H / 2 + Math.sin(a) * r * .7 })
    else { // break apart, then rearrange: every particle flies to a different spot of the word
      const homes = P.map((p) => ({ hx: p.hx, hy: p.hy, c: p.c })).sort(() => Math.random() - .5)
      P.forEach((p, k) => { Object.assign(p, homes[k]); p.vx = (Math.random() - .5) * 34; p.vy = (Math.random() - .5) * 34 })
    }
    const rem = C.map((c) => (/[a-z]/i.test(c.ch) ? 6 + Math.floor(Math.random() * 14) : 0))
    let t0 = performance.now(), stage = 'web', tc = 0, last = 0
    const frame = (now) => {
      const t = (now - t0) / 1000
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H)
      const k = stage === 'web' ? .06 : .1
      P.forEach((p) => { p.vx = (p.vx + (p.hx - p.x) * k) * .84; p.vy = (p.vy + (p.hy - p.y) * k) * .84; p.x += p.vx; p.y += p.vy })
      if (stage === 'web' && t > 1.7) { stage = 'count'; tc = now }
      const tcs = stage === 'count' ? (now - tc) / 1000 : 0
      const pa = stage === 'count' ? Math.max(0, 1 - tcs / .7) : 1                       // particles fade while the letters count down
      const wa = stage === 'count' ? Math.max(0, .5 - tcs) : Math.min(.55, .12 + t * .4) * (t > 1.1 ? Math.max(.3, 1 - (t - 1.1) / 1) : 1)
      // spider web between nearby particles
      if (wa > .01) {
        const cell = web, grid = new Map(), nodes = P.filter((p) => p.i % 3 === 0)
        nodes.forEach((p) => { const key = ((p.x / cell) | 0) + ',' + ((p.y / cell) | 0); if (!grid.has(key)) grid.set(key, []); grid.get(key).push(p) })
        ctx.lineWidth = .7
        nodes.forEach((p) => {
          const cx = (p.x / cell) | 0, cy = (p.y / cell) | 0
          for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) (grid.get((cx + dx) + ',' + (cy + dy)) || []).forEach((q) => {
            if (q.i <= p.i) return
            const d = Math.hypot(p.x - q.x, p.y - q.y)
            if (d < cell) { ctx.strokeStyle = `rgba(0,171,240,${(1 - d / cell) * wa})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke() }
          })
        })
      }
      if (pa > .01) P.forEach((p) => { ctx.fillStyle = `rgba(${p.c},${pa})`; ctx.fillRect(p.x - .9, p.y - .9, 1.8, 1.8) })
      // alphabet countdown: each letter counts down the alphabet until it lands on the right one
      let done = false
      if (stage === 'count') {
        if (now - last > 55) { last = now; C.forEach((c, i) => { if (tcs > i * .07 && rem[i] > 0) rem[i]-- }) }
        C.forEach((c, i) => {
          if (tcs <= i * .07) return
          let ch = c.ch
          if (rem[i] > 0) { const j = ALPHA.indexOf(ch.toUpperCase()); const x = ALPHA[(j + rem[i]) % 26]; ch = ch === ch.toLowerCase() ? x.toLowerCase() : x }
          ctx.font = c.font; ctx.fillStyle = c.color; ctx.globalAlpha = rem[i] > 0 ? .7 : 1; ctx.fillText(ch, c.x, c.y); ctx.globalAlpha = 1
        })
        done = rem.every((r) => r <= 0) && tcs > C.length * .07 + .25
      }
      if (done) {
        el.classList.remove('wf-hide')
        gsap.to(cv, { opacity: 0, duration: .35, onComplete: () => { ctx.clearRect(0, 0, W, H); busy = false } })
        return
      }
      raf = requestAnimationFrame(frame)
    }
    cancelAnimationFrame(raf); raf = requestAnimationFrame(frame)
  }
  const again = () => { if (!busy) run('burst') }
  if (matchMedia('(hover:hover)').matches) el.addEventListener('pointerenter', again)
  if (o.tap) el.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') again() })
  run('intro')
}

/* ---------- Footer social banner (fill in your links; entries with an empty url are hidden) ---------- */
const SOCIALS = [
  { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', url: 'https://wa.me/2347062470998', color: '#25D366' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram', url: '#', color: '#E4405F' },
  { name: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', url: '#', color: 'var(--fg)' },
  { name: 'TikTok', icon: 'fa-brands fa-tiktok', url: '#', color: '#FF0050' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: '#', color: '#0A66C2' },
  { name: 'Facebook', icon: 'fa-brands fa-facebook-f', url: '#', color: '#1877F2' },
  { name: 'YouTube', icon: 'fa-brands fa-youtube', url: '#', color: '#FF0000' },
  { name: 'Telegram', icon: 'fa-brands fa-telegram', url: '#', color: '#26A5E4' },
  { name: 'Snapchat', icon: 'fa-brands fa-snapchat', url: '#', color: '#FFD400' },
]
const footEl = $('footer')
if (footEl) footEl.insertAdjacentHTML('afterbegin', `<div class="max-w-6xl mx-auto mb-10 glass p-5 sm:p-6 bg-gradient-to-br from-brand/10 to-neon/10"><div class="flex flex-wrap items-end justify-between gap-2 mb-4"><div><p class="font-mono text-brand text-xs">// CONNECT</p><h2 class="font-display font-extrabold text-2xl">Follow me everywhere</h2></div><p class="text-mute text-sm">Tap a card to open my page.</p></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">${SOCIALS.filter((s) => s.url).map((s) => `<a class="soc" style="--c:${s.color}" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}"><i class="${s.icon}"></i><span class="font-semibold text-sm">${s.name}</span></a>`).join('')}</div></div>`)

/* ---------- Particles (start after loading) ---------- */
function particles() {
  const c = $('#fx'), x = c.getContext('2d'); let w, h, mouse = { x: -999, y: -999 }
  const N = small() ? 28 : 75, P = []
  const size = () => { w = c.width = innerWidth; h = c.height = innerHeight }
  size(); addEventListener('resize', size)
  addEventListener('pointermove', (e) => { mouse = { x: e.clientX, y: e.clientY } })
  for (let i = 0; i < N; i++) P.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, p: Math.random() > .8 })
  gsap.to(c, { opacity: 1, duration: 1 })
  ;(function draw(t) {
    x.clearRect(0, 0, w, h)
    P.forEach((a, i) => {
      a.x += a.vx; a.y += a.vy
      if (a.x < 0 || a.x > w) a.vx *= -1
      if (a.y < 0 || a.y > h) a.vy *= -1
      const dx = a.x - mouse.x, dy = a.y - mouse.y, d = Math.hypot(dx, dy)
      if (d < 110) { a.x += dx / d * 1.2; a.y += dy / d * 1.2 }
      x.fillStyle = a.p ? '#8B5CF6' : '#00ABF0'; x.beginPath(); x.arc(a.x, a.y, 1.8, 0, 7); x.fill()
      for (let j = i + 1; j < N; j++) {
        const b = P[j], l = Math.hypot(a.x - b.x, a.y - b.y)
        if (l < 130) { x.strokeStyle = `rgba(0,171,240,${(1 - l / 130) * (.25 + .15 * Math.sin(t / 500 + i))})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke() }
      }
    })
    requestAnimationFrame(draw)
  })(0)
}

/* ---------- GSAP: float, tilt, reveals, counters, header, active nav ---------- */
function motion() {
  wordFx($('#home h1'), { tap: true })
  wordFx($('#hdr a'), { gap: 2, pad: 14, web: 14 })
  if (!reduce) {
    gsap.from('.hero-in', { y: 30, opacity: 0, stagger: .12, duration: .8, ease: 'power2.out' })
    gsap.set('.rv', { opacity: 0 })
    ScrollTrigger.batch('.rv', { once: true, start: 'top 90%', onEnter: (b) => gsap.fromTo(b, { y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: .7, overwrite: true }) })
    // Card tilt: works with mouse hover AND finger press (phones/tablets)
    $$('.tilt, .glow').forEach((el) => {
      const max = small() ? 6 : 12 // gentler tilt on phones
      const tilt = (e) => {
        const r = el.getBoundingClientRect()
        gsap.to(el, { rotationY: ((e.clientX - r.left) / r.width - .5) * max, rotationX: -((e.clientY - r.top) / r.height - .5) * max, transformPerspective: 800, duration: .3 })
      }
      const reset = () => gsap.to(el, { rotationX: 0, rotationY: 0, duration: .5 })
      el.addEventListener('pointerdown', tilt)
      el.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.buttons) tilt(e) })
      ;['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => el.addEventListener(t, reset))
    })
    // Hero robot following the mouse stays desktop-only
    if (!small() && matchMedia('(hover:hover)').matches) addEventListener('pointermove', (e) => gsap.to('.hero-wrap', { x: (e.clientX / innerWidth - .5) * 20, duration: 1 }))
  }
  if (!reduce && !small()) $$('.prlx').forEach((el) => gsap.to(el, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }))
  if ($('#bars')) ScrollTrigger.create({ trigger: '#bars', start: 'top 85%', once: true, onEnter: () => {
    $$('.bar').forEach((b) => gsap.to(b, { width: b.dataset.v + '%', duration: reduce ? 0 : 1.4, ease: 'power2.out' }))
    $$('.count').forEach((c) => { const o = { v: 0 }; gsap.to(o, { v: +c.dataset.v, duration: reduce ? 0 : 1.4, onUpdate: () => (c.textContent = Math.round(o.v)) }) })
  } })
  // Chat messages "pop" in one after another when a testimonial phone scrolls into view
  initTestimonials()
  const hdr = $('#hdr')
  ScrollTrigger.create({ start: 60, end: 'max', onUpdate: (s) => { const on = s.scroll() > 60; gsap.to(hdr, { height: on ? 56 : 64, duration: .25, overwrite: true }); hdr.style.boxShadow = on ? '0 1px 24px rgba(0,171,240,.35)' : '' } })
}

/* ---------- Loading screen ---------- */
const MSG = ['PLEASE WAIT...', "I'M COMING...", 'GIMME A SEC...', 'ABEG NO VEX ALMOST...', 'OYA, WE DON REACH...']
let step = 0
const ld = setInterval(() => {
  step++; $('#ldText').textContent = MSG[Math.min(step, 4)]; $('#ldBar').style.width = Math.min(step * 25, 100) + '%'
  if (step >= 4) { clearInterval(ld); setTimeout(finish, 450) }
}, reduce ? 120 : 500)
function finish() {
  gsap.to('#loader', { opacity: 0, duration: .6, onComplete: () => {
    $('#loader').remove(); document.body.classList.remove('overflow-hidden')
    particles(); motion()
  } })
}

// Year Updates
document.getElementById('year').textContent = new Date().getFullYear()