# SmartWorkHub Website — Env + Brevo + Portfolio Ready

This version preserves your website changes and adds:

- Builder's Manifesto section
- Your extra FAQ
- Expanded portfolio section with multiple quantified projects
- Environment-based public config
- Brevo-powered contact form endpoint
- Tailwind v4 setup
- Vercel deployment support

## Run locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:5173
```

## Test the API route locally

Vite alone does not run `/api/contact`.

Use Vercel dev:

```bash
npm install -g vercel
vercel dev
```

## Build

```bash
npm run build
npm run preview
```

## Main files to edit

```bash
src/data.js
src/App.jsx
api/contact.js
.env.local
```
