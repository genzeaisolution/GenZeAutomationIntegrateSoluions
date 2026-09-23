# GenZe Automation Integrate Solutions (GAIS) — Website

A multi-page marketing site for GAIS: call center, CRM (Vertox), EMS/AMS, AI tools, custom software (Node.js / .NET / PHP) and WebRTC softphone solutions.

## Structure
```
index.html        Home
solutions.html     Services overview
products.html      Vertox product suite
about.html         Company & team
contact.html       Contact form + details
assets/style.css   Shared styles
assets/script.js   Mobile nav + contact form behavior
```

## Usage
No build step — pure HTML/CSS/JS. Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages, Netlify, etc.).

To publish on GitHub Pages: push this folder to a repo, then enable Pages on the `main` branch (root).

## Notes
- Fonts loaded from Google Fonts (Fraunces, Inter, IBM Plex Mono).
- Contact form is front-end only — wire `assets/script.js`'s submit handler to your backend/email service to make it functional.
- Fully responsive, mobile-first breakpoints in `assets/style.css`.
