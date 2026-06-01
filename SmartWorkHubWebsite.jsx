import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  ChevronRight,
  Menu,
  X,
  Clock,
  Database,
  ServerCog,
  BarChart3,
  Lock,
  Send,
  Search,
  PenTool,
  BriefcaseBusiness,
  UserRound,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BRAND = {
  calendlyUrl: "https://calendly.com/smartworkhub/ai-assistant-consultation",
  contactEmail: "smartworkhub.com@gmail.com",
  businessName: "SmartWorkHub",
};

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Packages", href: "#packages" },
  { label: "Support", href: "#support" },
  { label: "Book", href: "#book" },
  { label: "FAQ", href: "#faq" },
];

const services = [
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

const packageCards = [
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

const supportPlans = [
  { name: "Starter Support", price: "$195+/mo", credits: "Light use", ideal: "Simple assistant usage, hosting, monitoring, and maintenance." },
  { name: "Standard Support", price: "$299+/mo", credits: "Regular use", ideal: "Daily/weekly use with more workflow activity." },
  { name: "Growth Support", price: "$499+/mo", credits: "Heavy use", ideal: "Research, content, documents, or multiple active workflows." },
  { name: "Premium Support", price: "$750+/mo", credits: "Custom", ideal: "Advanced operations, priority support, and high-volume usage." },
];

const tools = [
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

const faqs = [
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
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{description}</p>}
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{children}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">SmartWorkHub</div>
            <div className="text-xs text-slate-400">AI Assistants & Automation</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <Button asChild className="rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            <a href="#book">Book a call</a>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 px-5 py-20 md:py-28">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-violet-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles className="h-4 w-4" /> Done-for-you AI assistant systems for real workflows
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            Custom AI assistants that <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">do real work</span>, not just chat.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            SmartWorkHub builds practical AI assistant systems for individuals, creators, founders, executives, and busy professionals. You chat with the assistant; it helps plan, draft, summarize, research, organize, and prepare approval-based actions across your tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl bg-cyan-400 px-7 text-slate-950 hover:bg-cyan-300">
              <a href="#book">Book a consultation <ChevronRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-7 text-white hover:bg-white/10">
              <a href="#services">View services</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {tools.slice(0, 8).map((tool) => <Pill key={tool}>{tool}</Pill>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/60 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Assistant status</p>
                  <p className="text-xl font-bold text-white">Workflow Command Center</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" /> Running
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  { icon: Calendar, title: "Daily plan prepared", text: "Top priorities, meetings, reminders" },
                  { icon: Mail, title: "Gmail draft ready", text: "Waiting for approval before sending" },
                  { icon: Search, title: "Research brief generated", text: "Sources, summary, next actions" },
                  { icon: ClipboardList, title: "Follow-ups tracked", text: "Open loops and pending decisions" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.text}</p>
                    </div>
                    <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-300" />
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-gradient-to-r from-cyan-400/15 to-violet-500/15 p-4 text-sm text-slate-200">
                Approval-first design keeps you in control before emails, scheduling, publishing, or tool updates.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemOutcome() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {[
          { icon: Clock, title: "Save time", text: "Reduce repeated planning, summarizing, rewriting, organizing, and follow-up work." },
          { icon: Workflow, title: "Reduce tool switching", text: "Create workflows across chat, documents, calendars, email drafts, and workspaces." },
          { icon: ShieldCheck, title: "Stay in control", text: "Use approval-first actions for anything sensitive or external." },
        ].map((item) => (
          <Card key={item.title} className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Services" title="Choose the assistant system that matches your workflow" description="Each service is built around outcomes, not generic prompts. The assistant is configured around your tasks, tools, approval rules, and preferred output style." />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group border-white/10 bg-white/[0.04] text-white transition hover:-translate-y-1 hover:bg-white/[0.06]">
              <CardContent className="p-7">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm font-medium text-cyan-200">{service.audience}</p>
                <p className="mt-4 leading-7 text-slate-300">{service.outcome}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.workflows.map((w) => <Pill key={w}>{w}</Pill>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MessageCircle, title: "1. Tell me your workflow", text: "We define your goals, tools, package scope, approval rules, and first priority workflows." },
    { icon: ClipboardList, title: "2. Configure assistant behavior", text: "You complete a configuration form so the assistant can match your tone, output style, boundaries, and workflow rules." },
    { icon: ServerCog, title: "3. Build and connect", text: "I set up the chat interface, assistant instructions, workflows, tool behavior, and approval-first actions where included." },
    { icon: CheckCircle2, title: "4. Test and deliver", text: "I test commands, output quality, approval flow, and tool behavior before delivery and handover." },
    { icon: Headphones, title: "5. Support and improve", text: "Monthly support can keep the assistant hosted, monitored, maintained, and running with normal AI usage." },
  ];
  return (
    <section id="how-it-works" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Process" title="A done-for-you setup from idea to working assistant" description="The process is designed to protect scope, reduce confusion, and give you a working system you can actually use." />
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step) => (
            <Card key={step.title} className="border-white/10 bg-white/[0.04] text-white">
              <CardContent className="p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Packages" title="Start simple or build a full command center" description="Package pricing depends on service type and scope. Final quotes are confirmed after reviewing your workflow and tools." />
        <div className="grid gap-6 lg:grid-cols-3">
          {packageCards.map((pkg) => (
            <Card key={pkg.name} className={`relative border-white/10 ${pkg.featured ? "bg-cyan-400 text-slate-950" : "bg-white/[0.04] text-white"}`}>
              {pkg.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-bold text-slate-950">Recommended</div>}
              <CardContent className="p-7">
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className={`mt-2 text-3xl font-black ${pkg.featured ? "text-slate-950" : "text-cyan-300"}`}>{pkg.price}</p>
                <p className={`mt-2 ${pkg.featured ? "text-slate-800" : "text-slate-300"}`}>{pkg.subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 ${pkg.featured ? "text-slate-950" : "text-emerald-300"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-6 rounded-2xl p-4 text-sm ${pkg.featured ? "bg-slate-950/10 text-slate-900" : "bg-white/5 text-slate-300"}`}>{pkg.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Ongoing support" title="Keep the assistant running after setup" description="AI assistants use compute, hosting, monitoring, maintenance, and sometimes tool connections. Monthly support keeps the system stable without you managing the backend." />
        <div className="grid gap-5 md:grid-cols-4">
          {supportPlans.map((plan) => (
            <Card key={plan.name} className="border-white/10 bg-white/[0.04] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-2xl font-black text-cyan-300">{plan.price}</p>
                <p className="mt-1 text-sm text-slate-400">{plan.credits}</p>
                <p className="mt-4 leading-7 text-slate-300">{plan.ideal}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300"><BarChart3 /></div>
              <h3 className="text-2xl font-bold">Usage is managed by task weight</h3>
              <p className="mt-4 leading-7 text-slate-300">A short email draft is not the same as a long research report. Light, medium, heavy, and custom tasks are tracked so usage stays fair and predictable.</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300"><Lock /></div>
              <h3 className="text-2xl font-bold">Approval-first safety</h3>
              <p className="mt-4 leading-7 text-slate-300">Sensitive actions can be set to draft first and wait for approval. You stay in control of sending, scheduling, publishing, updating tools, or contacting people.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Infrastructure" title="What gets built behind the scenes" description="You use the assistant through a simple interface. Behind the scenes, the system can include workflow routing, AI instructions, tool connections, approval handling, logs, usage tracking, and support processes." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MessageCircle, title: "Client interface", text: "Discord, Telegram, or dashboard." },
            { icon: Workflow, title: "Workflow router", text: "Maps commands to the right workflow." },
            { icon: Database, title: "Storage/logs", text: "Profiles, preferences, usage, errors." },
            { icon: Zap, title: "Tool actions", text: "Gmail, Calendar, Sheets, Notion, web sources." },
          ].map((item) => (
            <Card key={item.title} className="border-white/10 bg-white/[0.04] text-white">
              <CardContent className="p-6">
                <div className="mb-4 text-cyan-300"><item.icon className="h-7 w-7" /></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio" title="Built around practical workflow systems" description="Examples of the type of systems SmartWorkHub builds and customizes for clients." />
        <Card className="overflow-hidden border-white/10 bg-white/[0.04] text-white">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">Sample project</div>
              <h3 className="text-3xl font-black">AgencyOps AI Agent System</h3>
              <p className="mt-4 leading-7 text-slate-300">A multi-agent workflow system with Discord command channels, AI integration, n8n/SMTP automation, system health monitoring, outreach review, reply handling, lead research, marketing research, data analytics, and error logging.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["OpenClaw", "n8n", "Discord", "Node.js", "MongoDB", "VPS", "Google tools", "SMTP"].map((x) => <Pill key={x}>{x}</Pill>)}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Command channels",
                "AI reply handling",
                "Lead research",
                "System health logs",
                "Approval workflows",
                "Automation backend",
              ].map((x) => (
                <div key={x} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-slate-200">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-300" />
                  {x}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Booking() {
  const [showEmbed, setShowEmbed] = useState(false);
  return (
    <section id="book" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Book a consultation" title="Let’s map your assistant workflow" description="Use the booking section to discuss your goals, tools, workflows, and support needs. Replace the Calendly URL in the code with your real Calendly link when ready." />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <h3 className="text-2xl font-bold">Before booking, prepare:</h3>
              <ul className="mt-5 space-y-4 text-slate-300">
                {[
                  "The service you want: Personal, Content, or Executive assistant",
                  "Top 1–3 workflows you want built first",
                  "Tools you want connected, such as Gmail, Calendar, Notion, Sheets, Discord, or Telegram",
                  "Whether you want hosting and monthly support",
                  "Any examples, files, notes, or current workflow screenshots",
                ].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" /><span>{item}</span></li>)}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <Button asChild className="rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                  <a href={BRAND.calendlyUrl} target="_blank" rel="noreferrer">Open Calendly booking</a>
                </Button>
                <Button onClick={() => setShowEmbed(!showEmbed)} variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                  {showEmbed ? "Hide embedded calendar" : "Show embedded calendar"}
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="min-h-[540px] border-white/10 bg-white/[0.04] text-white">
            <CardContent className="h-full p-4">
              {showEmbed ? (
                <iframe title="Calendly booking" src={BRAND.calendlyUrl} className="h-[620px] w-full rounded-3xl border-0 bg-white" />
              ) : (
                <div className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-slate-900/70 p-8 text-center">
                  <Calendar className="mb-5 h-14 w-14 text-cyan-300" />
                  <h3 className="text-2xl font-bold">Calendly embed ready</h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-300">Click “Show embedded calendar” to display the booking iframe. Replace the placeholder Calendly URL with your real event link before publishing.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InquiryForm() {
  const serviceOptions = useMemo(() => services.map((s) => s.title), []);
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Request a quote" title="Send your assistant idea" description="This form is front-end only for now. When we connect the backend later, submissions can go to email, Google Sheets, n8n, or your CRM." />
        <Card className="border-white/10 bg-white/[0.04] text-white">
          <CardContent className="p-7">
            {submitted ? (
              <div className="rounded-3xl bg-emerald-400/10 p-8 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-300" />
                <h3 className="text-2xl font-bold">Inquiry captured</h3>
                <p className="mt-3 text-slate-300">This demo form is ready for backend connection. For now, use the Calendly link or email {BRAND.contactEmail}.</p>
              </div>
            ) : (
              <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid gap-5 md:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                  <input required type="email" placeholder="Email address" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                </div>
                <select required className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300">
                  <option value="">Which service are you interested in?</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  <option>Not sure yet</option>
                </select>
                <textarea required rows={5} placeholder="Describe the main workflow or problem you want the assistant to solve." className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                <textarea rows={4} placeholder="Which tools should it work with? Gmail, Calendar, Notion, Sheets, Discord, Telegram, websites, etc." className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                <Button type="submit" className="rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Send className="mr-2 h-4 w-4" /> Submit inquiry</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="Questions buyers usually ask" description="Clear expectations protect the client and the build process." />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white">
              <summary className="cursor-pointer list-none text-lg font-bold marker:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 transition group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 to-violet-500/15 p-8 text-center md:p-12">
        <Sparkles className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
        <h2 className="text-3xl font-black text-white md:text-5xl">Ready to build your digital assistant?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">Tell me your workflow, tools, and top priorities. I’ll help you choose the right assistant setup and support plan.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-2xl bg-cyan-400 px-7 text-slate-950 hover:bg-cyan-300"><a href="#book">Book a consultation</a></Button>
          <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"><a href={`mailto:${BRAND.contactEmail}`}>Email SmartWorkHub</a></Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-bold text-white">SmartWorkHub</div>
          <div className="text-sm">Custom AI Assistants & Automation</div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} SmartWorkHub. Approval-first AI workflow systems.</div>
      </div>
    </footer>
  );
}

export default function SmartWorkHubWebsite() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      <Header />
      <Hero />
      <ProblemOutcome />
      <Services />
      <HowItWorks />
      <Packages />
      <Support />
      <Infrastructure />
      <Portfolio />
      <Booking />
      <InquiryForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
