import {
  BriefcaseBusiness,
  PenTool,
  UserRound,
} from "lucide-react";

export const BRAND = {
  // Public frontend configuration. These can safely use VITE_ variables.
  calendlyUrl:
    import.meta.env.VITE_CALENDLY_URL ||
    "https://calendly.com/smartworkhub-com/smartworkhub-ai-assistant-consultation",
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "smartworkhub.com@gmail.com",
  businessName: import.meta.env.VITE_BUSINESS_NAME || "SmartWorkHub",
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "/api/contact",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Packages", href: "#packages" },
  { label: "Support", href: "#support" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book", href: "#book" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    icon: UserRound,
    title: "Personal AI Assistant",
    audience: "For individuals who want less overwhelm and more organization.",
    outcome: "Plan your day, organize tasks, draft messages, summarize documents, remember follow-ups, and turn scattered notes into action.",
    workflows: ["Daily planning", "Notes-to-action", "Email/message drafts", "Document summaries", "Reminders", "Research summaries"],
  },
  {
    icon: PenTool,
    title: "AI Content Workflow Assistant",
    audience: "For creators, coaches, consultants, founders, freelancers, and personal brands.",
    outcome: "Turn ideas, voice notes, articles, and transcripts into written drafts, content calendars, captions, newsletters, and scripts.",
    workflows: ["Idea capture", "Transcript repurposing", "Brand voice drafts", "Content calendar", "Trend/topic research", "Approval queue"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Executive AI Assistant",
    audience: "For founders, consultants, managers, agency owners, and busy professionals.",
    outcome: "Prepare faster, track follow-ups, summarize meetings/documents, draft replies, create research briefs, and reduce context switching.",
    workflows: ["Meeting prep", "Daily priorities", "Follow-up tracking", "Gmail drafts", "Decision notes", "Weekly reviews"],
  },
];

export const packageCards = [
  {
    name: "Starter",
    price: "From $150–$200",
    subtitle: "Best for one simple workflow",
    included: ["1 assistant workflow", "Chat interface setup", "Basic assistant instructions", "Command list", "Testing", "7 days support"],
    note: "Good for testing one focused use case before upgrading.",
  },
  {
    name: "Workflow",
    price: "From $450–$550",
    subtitle: "Best for regular personal/professional use",
    included: ["Up to 3 workflows", "Approval-based actions", "Tool setup where included", "Assistant behavior tuning", "Testing and refinement", "14 days support"],
    note: "Recommended for most clients who want a real working system.",
    featured: true,
  },
  {
    name: "Command Center",
    price: "From $950–$1,200",
    subtitle: "Best for advanced workflows and ongoing operations",
    included: ["Up to 5 workflows", "Advanced workflow logic", "Reports/tracking", "Integrations where agreed", "Handover guide", "30 days support"],
    note: "Best for clients who want a serious AI assistant infrastructure.",
  },
];

export const supportPlans = [
  { name: "Starter Support", price: "$195+/mo", credits: "Light use", ideal: "Simple assistant usage, hosting, monitoring, and maintenance." },
  { name: "Standard Support", price: "$299+/mo", credits: "Regular use", ideal: "Daily/weekly use with more workflow activity." },
  { name: "Growth Support", price: "$499+/mo", credits: "Heavy use", ideal: "Research, content, documents, or multiple active workflows." },
  { name: "Premium Support", price: "$750+/mo", credits: "Custom", ideal: "Advanced operations, priority support, and high-volume usage." },
];

export const tools = [
  "Discord",
  "Telegram",
  "Gmail",
  "Google Calendar",
  "Google Sheets",
  "Google Docs",
  "Notion",
  "Web/news sources",
  "RSS/newsletters",
  "Dashboards",
  "n8n workflows",
  "VPS hosting",
];

export const portfolio = [
  {
    title: "AgencyOps AI Agent System",
    description:
      "Built a VPS-hosted multi-agent workflow command center for outreach review, reply handling, lead research, marketing research, analytics, operator scans, health monitoring, approval logs, and SMTP/n8n workflow support.",
    metrics: ["10+ operating workflows", "24/7 VPS-hosted monitoring"],
    tags: ["OpenClaw", "n8n", "Discord", "Node.js", "MongoDB", "PM2", "VPS"],
    status: "Built system",
  },
  {
    title: "Personal Assistant Agent System",
    description:
      "Designed a chat-based personal assistant workflow for daily planning, reminders, message drafting, research support, notes-to-action, and document summaries through a simple command interface.",
    metrics: ["5+ productivity workflows", "Approval-first task handling"],
    tags: ["AI Agents", "Telegram/Discord", "Gmail", "Calendar", "Workflow Design"],
    status: "Assistant demo",
  },
  {
    title: "YouTube Autonomous Agent Workflow",
    description:
      "Built a creator operations workflow concept for topic research, script planning, metadata preparation, content tracking, approval steps, and future YouTube publishing support.",
    metrics: ["8-stage creator workflow", "Idea → script → upload pipeline"],
    tags: ["YouTube API", "ContentOps", "n8n", "Automation", "Dashboard"],
    status: "Creator workflow",
  },
  {
    title: "Automated Lead Routing & CRM Sync",
    description:
      "Eliminated manual data entry by building a workflow that qualifies inbound leads and syncs them across the CRM instantly.",
    metrics: ["14 hours/week saved", "Zero manual data entry"],
    tags: ["n8n", "CRM", "Agentic Workflow"],
    status: "Workflow template",
  },
  {
    title: "AI Customer Support Command Center",
    description:
      "Deployed an approval-first support agent that drafts context-aware responses to standard tickets, requiring only one click from a human agent to send.",
    metrics: ["80% faster response time", "Scalable support"],
    tags: ["OpenClaw", "AI Agents", "Customer Success"],
    status: "Support workflow",
  },
  {
    title: "Document & Report Automation Agent",
    description:
      "Created a document workflow that turns long notes, files, and research inputs into structured summaries, action items, client-ready reports, and reusable templates.",
    metrics: ["Multi-document summaries", "Reusable report templates"],
    tags: ["Google Docs", "AI Summaries", "Reports", "Research", "Automation"],
    status: "Report workflow",
  },
  {
    title: "Telegram Approval Workflow",
    description:
      "Built an approval-first automation layer where draft actions are sent to Telegram for review before emails, updates, or external workflow steps are completed.",
    metrics: ["1-click approvals", "Audit trail for actions"],
    tags: ["Telegram", "n8n", "Approvals", "Webhooks", "Safety Layer"],
    status: "Automation component",
  },
];

export const faqs = [
  {
    q: "Is this just ChatGPT prompts?",
    a: "No. The goal is to build a practical assistant system with workflows, command structure, tool behavior, approval rules, testing, and support. ChatGPT can answer; this system is designed to help you repeatedly get work prepared through a workflow.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. These services are designed for non-technical clients. You use the assistant through Discord, Telegram, or a dashboard while SmartWorkHub handles setup, workflow logic, hosting options, and maintenance.",
  },
  {
    q: "Can it send emails or schedule events?",
    a: "Where possible, yes, but sensitive actions can be approval-based. The assistant can prepare a draft or proposed calendar action and wait for your approval before completion.",
  },
  {
    q: "Is hosting included forever?",
    a: "No. Each package includes support only for the included support period. Ongoing hosting, monitoring, maintenance, updates, and normal AI usage require monthly support.",
  },
  {
    q: "What is normal AI usage?",
    a: "Normal usage includes typical assistant tasks like planning, drafts, summaries, reminders, and workflow testing. Heavy usage such as large documents, scraping, long research reports, or high-volume content generation may need a higher support plan.",
  },
  {
    q: "Can I approve actions before they happen?",
    a: "Yes. Approval-first design is recommended for emails, calendar events, publishing, applying for jobs, updating tools, contacting people, or any sensitive external action.",
  },
  {
    q: "Can the project be transferred to me later?",
    a: "Where possible, yes. Self-hosting or handover may require a paid source-code/handover extra, your own server, your own API keys, and technical setup.",
  },
  {
    q: "Does the content assistant include video editing or graphic design?",
    a: "No. The content workflow assistant focuses on written content workflows such as posts, captions, newsletters, short video scripts, outlines, calendars, and repurposing text from ideas, notes, or transcripts.",
  },
  {
    q: "What happens if a third-party API updates or breaks?",
    a: "APIs update, and webhooks sometimes fail—that is the reality of software. My service isn't just about building the system and walking away. With the monthly support retainers, I actively monitor logs, patch API breaks, and keep your workflow command center operational so you don't have to worry about the technical plumbing.",
  },
];
