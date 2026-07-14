import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:5000';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    // Send the notification email and persist the enquiry to the admin
    // panel in parallel — one failing shouldn't block the other.
    const [emailResult, saveResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"DSS Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        replyTo: email,
        subject: `New Enquiry from ${name}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #004b9b; color: white; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">New Contact Request</h1>
              <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">Data Storage Solutions</p>
            </div>
            <div style="padding: 32px 24px; background-color: #ffffff;">
              <p style="margin-top: 0; font-size: 16px; color: #475569; line-height: 1.5;">You have received a new enquiry from the website contact form. Here are the details:</p>
              
              <table cellpadding="12" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-top: 24px; background-color: #f8fafc; border-radius: 6px;">
                <tr>
                  <td style="width: 30%; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Name</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Email</td>
                  <td style="border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Phone</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${phone}</td>
                </tr>
                ${company ? `
                <tr>
                  <td style="font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Company</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${company}</td>
                </tr>
                ` : ''}
              </table>
              
              ${message ? `
              <div style="margin-top: 24px;">
                <h3 style="font-size: 14px; color: #334155; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>
              ` : ''}
              
            </div>
            <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">This email was automatically generated from the Data Storage Solutions website.</p>
            </div>
          </div>
        `,
      }),
      fetch(`${BACKEND_API_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, message }),
      }),
    ]);

    if (emailResult.status === 'rejected') {
      console.error('Mail send error:', emailResult.reason);
    }
    if (saveResult.status === 'rejected') {
      console.error('Contact save error:', saveResult.reason);
    } else if (!saveResult.value.ok) {
      console.error('Contact save error: backend responded', saveResult.value.status);
    }

    if (emailResult.status === 'rejected' && saveResult.status === 'rejected') {
      return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
