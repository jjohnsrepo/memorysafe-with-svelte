/**
 * Contact form email handler.
 *
 * Required environment variables (add to .env):
 *   RESEND_API_KEY   — your API key from resend.com (free tier: 3,000 emails/month)
 *   CONTACT_EMAIL    — the address you want messages delivered to
 *   FROM_EMAIL       — the "from" address (must be a verified domain on Resend,
 *                      or use "onboarding@resend.dev" while testing)
 *
 * To get started:
 *   1. Sign up at https://resend.com (free)
 *   2. Add/verify your domain (or use the sandbox address for testing)
 *   3. Create an API key in the Resend dashboard
 *   4. Add the three variables above to your .env file
 */

export async function POST({ request }) {
  const data = await request.formData();

  const name    = (data.get('name')    ?? '').toString().trim();
  const email   = (data.get('email')   ?? '').toString().trim();
  const phone   = (data.get('phone')   ?? '').toString().trim() || 'Not provided';
  const format  = (data.get('format')  ?? '').toString().trim() || 'Not specified';
  const message = (data.get('message') ?? '').toString().trim();

  // Basic validation
  if (!name || !email || !message) {
    return json({ error: 'Please fill in all required fields.' }, 400);
  }

  const apiKey    = process.env.RESEND_API_KEY;
  const toEmail   = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';

  // If not configured, log to server console (useful during development)
  if (!apiKey || !toEmail) {
    console.log('[MemorySafe contact] Email not configured. Submission received:');
    console.log({ name, email, phone, format, message });
    return json({ success: true });
  }

  const emailBody = `
    <div style="font-family: Courier, monospace; max-width: 600px; padding: 2rem;">
      <h2 style="margin: 0 0 1.5rem;">New inquiry via MemorySafe</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 0.4rem 1rem 0.4rem 0; opacity: 0.6; width: 140px; vertical-align: top;">Name</td>
          <td style="padding: 0.4rem 0;">${esc(name)}</td>
        </tr>
        <tr>
          <td style="padding: 0.4rem 1rem 0.4rem 0; opacity: 0.6; vertical-align: top;">Email</td>
          <td style="padding: 0.4rem 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 0.4rem 1rem 0.4rem 0; opacity: 0.6; vertical-align: top;">Phone</td>
          <td style="padding: 0.4rem 0;">${esc(phone)}</td>
        </tr>
        <tr>
          <td style="padding: 0.4rem 1rem 0.4rem 0; opacity: 0.6; vertical-align: top;">What they have</td>
          <td style="padding: 0.4rem 0;">${esc(format)}</td>
        </tr>
      </table>
      <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #ccc;" />
      <p style="white-space: pre-wrap; line-height: 1.7;">${esc(message)}</p>
    </div>
  `;

  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `MemorySafe <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: emailBody,
      }),
    });
  } catch {
    return json({ error: 'Network error. Please try again or email us directly.' }, 500);
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('[MemorySafe contact] Resend error:', res.status, detail);
    return json({ error: 'Failed to send. Please email us directly.' }, 500);
  }

  return json({ success: true });
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/** Basic HTML escape to prevent injection in the email body. */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
