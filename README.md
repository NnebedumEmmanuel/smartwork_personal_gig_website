# SmartWorkHub Website Full Project

This is a complete Vite + React + Tailwind website project for SmartWorkHub.

## What is included

- Complete React/Vite project structure
- Tailwind CSS setup
- Modular source files
- Reusable Button and Card components
- Data file for services, packages, support plans, FAQ, and brand settings
- Calendly booking section
- Front-end inquiry form
- Portfolio/sample project section
- Responsive layout
- Deployment guide

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you.

## Build for production

```bash
npm run build
```

The production files will be created in:

```bash
dist/
```

## Edit before publishing

Open:

```bash
src/data.js
```

Update:

```js
calendlyUrl: "https://calendly.com/smartworkhub/ai-assistant-consultation"
contactEmail: "smartworkhub.com@gmail.com"
```

Replace the Calendly URL with your real Calendly event link.

## Deploy options

### Vercel
1. Upload this folder to GitHub
2. Go to Vercel
3. Import the GitHub repo
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
1. Upload this folder or connect GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### VPS
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Serve it with Nginx or another static server
