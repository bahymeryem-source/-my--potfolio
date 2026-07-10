# Meryem Bahy — Portfolio

Premium, animated, dark-mode-first personal portfolio built with pure **HTML, CSS and vanilla JavaScript** — no frameworks, no build step.

## 📁 Project structure
```
Portfolio/
├── index.html          # Hero, services, stats, testimonials, FAQ
├── about.html          # Bio, timeline, skills
├── projects.html       # Bahy Store, Your Mind Matters, Digital Moving Platform
├── certificates.html   # EPIK, Microsoft Office, Harvard CS50
├── experience.html     # Leadership + professional timelines
├── contact.html        # Form + info + map
├── css/
│   ├── style.css       # Design system, layout, components
│   ├── animations.css  # Reveal / fade / tilt animations
│   └── responsive.css  # Media queries
├── js/
│   ├── script.js       # Nav, cursor, theme, form, counters, reveals
│   ├── animations.js   # Parallax + animated gradient
│   └── particles.js    # Canvas particle background
├── assets/
│   ├── images/         # Certificate images, etc.
│   ├── icons/
│   ├── fonts/
│   └── Meryem_Bahy_CV.pdf
└── README.md
```

## 🚀 Run locally
Just open `index.html` in any modern browser — no server required.
For best results (fonts, iframes) use a local server:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## ✏️ Edit content
- **Text:** open the HTML file for the section and edit directly.
- **Skills / bar values:** update `data-value="80"` on `.bar` elements in `about.html`.
- **Projects:** edit the three `<article class="project ...">` blocks in `projects.html`.
- **Certificates:** edit `certificates.html` cards; replace images in `assets/images/`.
- **CV:** replace `assets/Meryem_Bahy_CV.pdf`.

## 🖼 Replace images
Drop new files into `assets/images/` and update the `<img src="...">` paths.

## 🎨 Customize colors
All colors are CSS variables in `css/style.css` under `:root`:
```css
--brand-1:#6366f1;  /* indigo */
--brand-2:#8b5cf6;  /* violet */
--brand-3:#3b82f6;  /* blue   */
--grad: linear-gradient(135deg,#3b82f6,#6366f1,#8b5cf6);
```
Change these values and the entire design updates.

## 🎬 Customize animations
- Reveal timing lives in `css/animations.css` (`.reveal` transition).
- Particle count / colors → `js/particles.js`.
- Typing words → `data-words="..."` on the `.type-wrap` element in `index.html`.

## 🌗 Dark / light mode
The toggle button in the nav switches themes and persists via `localStorage`.

## 🌐 Deploy
Any static host works:
- **Vercel / Netlify:** drag & drop the `Portfolio/` folder.
- **GitHub Pages:** push to a repo, enable Pages on the `main` branch.
- **Firebase Hosting:** `firebase init hosting` then `firebase deploy`.

---
© Meryem Bahy — Marrakech · Agadir
