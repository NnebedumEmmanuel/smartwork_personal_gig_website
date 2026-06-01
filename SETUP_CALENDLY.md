# Calendly Setup

Create a Calendly event called:

SmartWorkHub AI Assistant Consultation

Recommended:

- Duration: 30 minutes
- Location: Google Meet or Zoom
- Add buffer between meetings
- Ask invitee questions:
  1. Which service are you interested in?
  2. What top 1–3 workflows do you want built?
  3. Which tools should the assistant work with?
  4. Do you want hosting/monthly support?
  5. What outcome are you hoping for?

After creating the event, copy the event URL and set it in:

```bash
VITE_CALENDLY_URL=your_calendly_event_link
```

or edit the fallback in:

```bash
src/data.js
```
