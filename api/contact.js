const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").toLowerCase());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name = "",
    email = "",
    business = "",
    service = "",
    message = "",
    tools = "",
    company = "",
  } = req.body || {};

  // Honeypot spam trap.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name.trim() || !email.trim() || !message.trim() || !service.trim()) {
    return res.status(400).json({ error: "Please fill in name, email, service, and message." });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "SmartWorkHub Website";
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "smartworkhub.com@gmail.com";
  const receiverName = process.env.CONTACT_RECEIVER_NAME || "SmartWorkHub";

  if (!apiKey || !senderEmail) {
    return res.status(500).json({ error: "Email service is not configured yet." });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    business: escapeHtml(business || "Not provided"),
    service: escapeHtml(service),
    message: escapeHtml(message),
    tools: escapeHtml(tools || "Not provided"),
  };

  const htmlContent = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2>New SmartWorkHub Website Inquiry</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Business/Brand:</strong> ${safe.business}</p>
      <p><strong>Service:</strong> ${safe.service}</p>
      <p><strong>Tools:</strong><br/>${safe.tools.replace(/\n/g, "<br/>")}</p>
      <p><strong>Message:</strong><br/>${safe.message.replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="font-size:12px;color:#6b7280;">Sent from the SmartWorkHub website contact form.</p>
    </div>
  `;

  const adminPayload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: receiverEmail, name: receiverName }],
    replyTo: { email, name },
    subject: `New SmartWorkHub inquiry: ${service}`,
    htmlContent,
  };

  const userPayload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email, name }],
    subject: "SmartWorkHub received your inquiry",
    htmlContent: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
        <h2>Thank you for contacting SmartWorkHub</h2>
        <p>Hi ${safe.name},</p>
        <p>I received your inquiry about <strong>${safe.service}</strong>.</p>
        <p>I will review your workflow details and get back to you as soon as possible.</p>
        <p>Best,<br/>SmartWorkHub</p>
      </div>
    `,
  };

  try {
    const adminResponse = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(adminPayload),
    });

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      console.error("Brevo admin email error:", errorText);
      return res.status(502).json({ error: "Email could not be sent right now." });
    }

    // Auto-reply should not block lead notification if it fails.
    fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userPayload),
    }).catch((err) => console.error("Brevo auto-reply error:", err));

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
}
