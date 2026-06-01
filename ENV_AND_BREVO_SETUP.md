# Environment Variables and Brevo Setup

## What goes in .env?

Use `.env` / `.env.local` for values that change between local, staging, and production.

### Public browser values

These must start with `VITE_` because Vite exposes only `VITE_` variables to frontend code:

```bash
VITE_CALENDLY_URL=
VITE_CONTACT_EMAIL=
VITE_BUSINESS_NAME=
VITE_FORM_ENDPOINT=/api/contact
```

These are okay to be public.

### Private server values

Never prefix secrets with `VITE_`.

```bash
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=
CONTACT_RECEIVER_EMAIL=
CONTACT_RECEIVER_NAME=
```

These are only used by `api/contact.js`.

## What do you need from Brevo?

You do not need a “Brevo link.” You need:

1. A Brevo account
2. A verified sender email or verified sending domain
3. A Transactional Email API key
4. The receiver email where inquiries should be sent

## Vercel setup

In Vercel:

Project Settings > Environment Variables

Add:

```bash
BREVO_API_KEY
BREVO_SENDER_EMAIL
BREVO_SENDER_NAME
CONTACT_RECEIVER_EMAIL
CONTACT_RECEIVER_NAME
VITE_CALENDLY_URL
VITE_CONTACT_EMAIL
VITE_BUSINESS_NAME
VITE_FORM_ENDPOINT
```

Then redeploy.

## Important

If you change environment variables in Vercel after deployment, redeploy the project.
