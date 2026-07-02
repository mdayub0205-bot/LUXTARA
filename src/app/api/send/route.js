
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, company, service, budget, details } = await request.json()

    // Validate required fields (budget removed — your form doesn't send it)
    if (!name || !email || !service ) {
      return Response.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const toEmail = process.env.TO_EMAIL || 'hello@luxtara.studio'

    const { data, error } = await resend.emails.send({
      from: 'LUXTARA Studio <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Project Inquiry</title>
        </head>
        <body style="margin:0;padding:0;background-color:#0d0d0d;font-family:'Inter',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0d0d;">
            <tr>
              <td align="center" style="padding:40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#111111;border:1px solid #1e1e1e;">
                  <!-- Header -->
                  <tr>
                    <td style="padding:40px 40px 30px;border-bottom:1px solid #1e1e1e;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="width:32px;height:32px;border:1px solid #1e1e1e;background-color:#111111;text-align:center;vertical-align:middle;">
                            <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:bold;color:#c9a84c;">LX</span>
                          </td>
                          <td style="padding-left:12px;">
                            <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:14px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#e5e2e1;">LUXTARA</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding:30px 40px 10px;">
                      <h1 style="font-family:'EB Garamond',Georgia,serif;font-size:28px;font-weight:600;color:#e5e2e1;margin:0;line-height:1.3;">
                        New Project Inquiry
                      </h1>
                    </td>
                  </tr>

                  <!-- Subtitle -->
                  <tr>
                    <td style="padding:0 40px 30px;">
                      <p style="font-family:'Inter',Arial,sans-serif;font-size:14px;color:#99907e;margin:0;">
                        Received via the contact form on luxtara.studio
                      </p>
                    </td>
                  </tr>

                  <!-- Details -->
                  <tr>
                    <td style="padding:0 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding:16px 0;border-bottom:1px solid #1e1e1e;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">NAME</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;">${escapeHtml(name)}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 0;border-bottom:1px solid #1e1e1e;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">EMAIL</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;">${escapeHtml(email)}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 0;border-bottom:1px solid #1e1e1e;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">COMPANY</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;">${company ? escapeHtml(company) : 'Not provided'}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 0;border-bottom:1px solid #1e1e1e;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">SERVICE REQUIRED</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;">${escapeHtml(service)}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 0;border-bottom:1px solid #1e1e1e;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">BUDGET</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;">${budget ? escapeHtml(budget) : 'Not specified'}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 0 30px;">
                            <p style="font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#99907e;margin:0 0 6px;">PROJECT DETAILS</p>
                            <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#e5e2e1;margin:0;line-height:1.7;white-space:pre-wrap;">${escapeHtml(details)}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px;border-top:1px solid #1e1e1e;">
                      <p style="font-family:'Inter',Arial,sans-serif;font-size:12px;color:#4d4637;margin:0;">
                        &copy; 2024 LUXTARA STUDIO. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Project Inquiry - LUXTARA Studio

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service: ${service}
Budget: ${budget || 'Not specified'}

Project Details:
${details}

---
Received via luxtara.studio contact form
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text) {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}