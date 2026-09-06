# lucashill.dev

My portfolio. CS and software engineering student at UM-Flint.

**Live:** [lucashill.dev](https://lucashill.dev)

## Stack

Vanilla TypeScript, plain CSS, Vite. No framework, no CSS library, no
runtime dependencies beyond Vercel Analytics. Deployed on Vercel.

Type is IBM Plex Sans, Mono and Serif, self-hosted from `public/fonts`
as latin-subset woff2 (about 148KB total). There are no external font
or icon requests.

## Layout

Two pages. `index.html` is a fixed sidebar holding the personal details
beside a main column of projects, record and skills. `resume.html`
links the PDF and embeds it on desktop only.

```
src/
  data/        content: projects, record, skills
  sections/    render functions returning HTML strings
  styles/      tokens, base, sidebar, one file per section
  lib/         html escaping
public/
  fonts/       self-hosted IBM Plex woff2
  images/bot/  screenshots of the Discord bot, cropped
  resume/      the resume PDF
```

Content lives in `src/data`. To change what the site says, edit those
files rather than the section renderers.

## Development

```
npm install
npm run dev      # dev server on :5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npx tsc --noEmit # typecheck
```

## Notes

The record rows use native `<details>`, so opening an entry needs no
JavaScript. The only script on the page is the analytics call.

Project figures are real screenshots, cropped but not redrawn. Paired
portrait figures are locked to one aspect ratio so they render at an
identical size.

## Contact

- Email: [contact.lucashill@gmail.com](mailto:contact.lucashill@gmail.com)
- LinkedIn: [lucashill-dev](https://linkedin.com/in/lucashill-dev)
- GitHub: [lucashill-dev](https://github.com/lucashill-dev)
