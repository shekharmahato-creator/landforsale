### Repo snapshot
- Single-page static website for a real-estate listing: main files are `index.html`, `style.css`, `script.js` and image assets under `images/` and `etc/`.

### High-level architecture (what to know fast)
- This is a client-only static site (no backend). Pages are composed in `index.html` with sections: Hero (`#home`), Listings (`#listings`), Contact (`#contact`), Map (added at bottom). CSS is global in `style.css` and vanilla JS behavior lives in `script.js`.
- Assets: images live in `images/` and supportive images in `etc/`. Keep paths relative (e.g. `<img src="images/land1.jpg">`).

### Typical developer workflows
- Serve locally by opening `index.html` in a browser. For a simple local server (recommended to avoid iframe/CORS issues) use: `python3 -m http.server` from the `landforsale` folder.
- No build step, package manager, or tests detected. Changes are plain file edits and deploy as static files (GitHub Pages, Netlify, etc.).

### Patterns & conventions used in this repo
- Single CSS file (`style.css`) uses BEM-like class names for blocks such as `.navbar`, `.hero`, `.listings`, `.property-card`, and `.contact-form`.
- JavaScript is minimal and unobtrusive: `script.js` attaches event listeners on DOM anchors and the contact form. Keep JS small and avoid framework assumptions.
- Images referenced directly; avoid changing filenames unless updating references in `index.html`.

### Integration points & gotchas
- Google Maps iframe is embedded directly in `index.html` under `.map-section` — use an embed link (replace placeholder `...your-embed-link...`) and prefer serving site over HTTP(S) server to avoid local-file iframe restrictions.
- Contact form uses a client-side alert and reset in `script.js` — there is no server-side handling. If you add a backend, update the form's `action`/event handler accordingly.

### Helpful examples from the codebase
- Smooth scrolling: `script.js` selects `a[href^="#"]` and calls `element.scrollIntoView({behavior: 'smooth'})`.
- Property card structure: see repeated `.property-card` blocks in `index.html` — images, `.property-info`, title, metadata and `.details-btn`.
- Map section markup: `.map-section` contains `.map-container` with an `iframe` (replace the `src` placeholder).

### How to modify safely
- When adding images, place them into `images/` and reference with `images/<name>`. Keep image sizes moderate to preserve load performance.
- For new styles, append to `style.css` and follow existing color tokens (#0077b6 primary, #0096c7 hover). Maintain responsive rules in the `@media (max-width: 768px)` section.

### When to ask for clarification
- If a change requires a server (APIs, form handling, dynamic listings), ask where to host the backend and whether an API contract exists. The repo currently contains no server code.

If anything above looks incorrect or you want more detail (deploy steps, adding a build pipeline, or automated tests), tell me which area to expand.
