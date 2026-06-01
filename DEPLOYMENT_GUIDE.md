# SmartWorkHub Deployment Guide

## Recommended for you: Vercel first

Vercel is easiest for a React website.

### Steps

1. Create a GitHub repository called:
   `smartworkhub-website`

2. Upload this project folder to GitHub.

3. Go to:
   https://vercel.com

4. Click:
   Add New Project

5. Import your GitHub repository.

6. Use:
   - Framework: Vite
   - Build command: npm run build
   - Output directory: dist

7. Deploy.

## Calendly

Create your Calendly event first, then replace the placeholder link in:

```bash
src/data.js
```

Search for:

```bash
https://calendly.com/smartworkhub/ai-assistant-consultation
```

Replace it with your real Calendly URL.

## Inquiry form

The inquiry form is front-end only for now.

Later we can connect it to:
- Formspree
- Tally
- Google Sheets
- n8n webhook
- your backend
- email notification

## Domain

Possible domain ideas:
- smartworkhub.com
- smartworkhub.ai
- smartworkhub.co
- smartworkhubautomation.com

Connect your domain in Vercel or Netlify once deployed.
