import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    await transporter.sendMail({
      from: `"DSS Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1e293b;">New Contact Request</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="font-weight:bold;color:#555;padding-right:16px">Name</td><td>${name}</td></tr>
          <tr><td style="font-weight:bold;color:#555;padding-right:16px">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="font-weight:bold;color:#555;padding-right:16px">Phone</td><td>${phone}</td></tr>
          ${company ? `<tr><td style="font-weight:bold;color:#555;padding-right:16px">Company</td><td>${company}</td></tr>` : ''}
          ${message ? `<tr><td style="font-weight:bold;color:#555;padding-right:16px;vertical-align:top">Message</td><td>${message}</td></tr>` : ''}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
