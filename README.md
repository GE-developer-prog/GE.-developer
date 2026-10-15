# GE.developer 2.0

Vite + Tailwind CSS v4 + GSAP. Pages: index, about, skills, services, projects, testimonials, blog, contact.

## Run / build / upload
    npm install          (first time only)
    npm run dev          (preview while editing)
    npm run build        (creates the "dist" folder)
Upload the contents of **dist** to Netlify (or any host). A ready-built `dist` is already included.

## Pictures (all of them)
All pictures are in `public/images/` as `ge-visual-01.webp` ... `ge-visual-21.webp`.
- **Replace a picture:** make a WebP with a transparent background, give it the SAME file name, overwrite the old one, rebuild.
- **Add a new picture:** save it as `ge-visual-22.webp`, then add a line for it in the `ALT` list at the top of the "Visuals" part of `src/js/main.js`.
- **Page banners** (the card at the top of every inner page): `BANNERS` in `src/js/main.js`. The numbers in the last brackets are the pictures, e.g. `['20']` = one picture, `['01', '09']` = two pictures. Both float.
- **Project card pictures:** put `caring-hands.webp`, `breathe-easy-stretch.webp`, `9ja-nime.webp` in `public/images/projects/`.
- **Blog pictures:** use a number `'01'`-`'21'`, or put your own file in `public/images/blog/` and write `'/images/blog/my-post.webp'`.
- **Floating:** every picture floats because of the `main img:not([data-slot])` rule in `src/css/style.css`. Delete that one line to stop most floating. The home robot, About robot, Contact hand and assistant robot use the `float` class.

## Testimonials
`TESTIMONIALS` in `src/js/main.js`. Each phone is a chat: `['c', 'client message']` then `['me', 'your reply']` and so on. Change names, times and messages, add or remove lines, or copy a whole `{ ... }` block to add another phone. The messages pop in when the phone scrolls into view.

## Projects
`PROJECTS` in `src/js/main.js`. Copy one block to add a project (name `n`, picture name `slot`, description `d`, technologies `t`, features `f`, live link `demo`).

## Testimonial phone size
In `src/css/style.css`, the `.iphone` rule: `--w:240px` is the phone width (the height follows it automatically), and `--fs:11px` is the message text size, in the `.chat` rule. Make both smaller or bigger. About 6 two-line messages fit in one phone at the default size; add more by adding more `['c', '...']` / `['me', '...']` lines in `TESTIMONIALS`.

## Favorite anime & games (About page)
Edit `src/js/favorites.js`: name, picture, why it is your best, and a description. Put the pictures in `public/images/favorites/` (WebP, landscape), named after the `image` value.

## Blog
Edit `src/js/posts.js`. Each post has title, category, image, date, read time and body. Leave `body: ''` while it is a draft. Instructions and a ready example are at the top and bottom of that file.

## Contact form
It is a normal HTML form posting to FormSubmit, which emails godwinemmanueluche@gmail.com. The FIRST time, submit a test message and click the activation link FormSubmit emails you. In `contact.html` the hidden field `_next` is the page visitors return to after sending; change the address there if your site is not on gedeveloper.netlify.app.

## Colours
Brand colour `#00ABF0` and purple `#8B5CF6` are set at the top of `src/css/style.css`. Light and dark colours are the `:root` and `:root.light` lines.
