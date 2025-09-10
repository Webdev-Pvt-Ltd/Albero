export function generateNotificationEmail(data: { name: string; email: string; phone: string; message: string }) {
    const { name, email, phone, message } = data

    return `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
      <style>
      body {
          font-family: 'Inter', Arial, sans-serif;
          background: #f9f9f9;
          margin: 0;
          padding: 0;
          color: #222;
      }
      .email-container {
          max-width: 600px;
          margin: 30px auto;
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          overflow: hidden;
      }
      .header {
          background: linear-gradient(135deg, #f0f0f0, #d6d6d6);
          text-align: center;
          padding: 30px 20px;
      }
      .header h1 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #111;
      }
      .content {
          padding: 30px;
      }
      .detail {
          margin-bottom: 12px;
          font-size: 14px;
          color: #444;
      }
      .detail strong {
          color: #000;
      }
      .message-card {
          background: #f4f4f4;
          border-left: 4px solid #333;
          padding: 16px;
          border-radius: 8px;
          margin-top: 20px;
          font-size: 14px;
          color: #333;
      }
      .action-button {
          display: inline-block;
          margin-top: 25px;
          padding: 12px 22px;
          border-radius: 6px;
          background: linear-gradient(90deg, #2563eb, #7c3aed); /* Blue → Purple */
          color: #fff !important;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: opacity 0.2s ease-in-out;
      }
      .action-button:hover {
          opacity: 0.85;
      }
      .footer {
          text-align: center;
          padding: 20px;
          font-size: 13px;
          color: #777;
          background: #fafafa;
          border-top: 1px solid rgba(0,0,0,0.1);
      }

      /* Dark Mode */
      @media (prefers-color-scheme: dark) {
        body { background: #000; color: #fff; }
        .email-container { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.6); }
        .header { background: linear-gradient(135deg, #ffffff0d, #6366f150); }
        .header h1 { background: linear-gradient(90deg, #fff, #aaa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .detail { color: #ccc; }
        .detail strong { color: #fff; }
        .message-card { background: rgba(255,255,255,0.05); border-left-color: #fff; color: #ddd; }
         .action-button {
            background: linear-gradient(90deg, #60a5fa, #c084fc); /* Lighter gradient for dark */
            color: #000 !important;
            box-shadow: 0 4px 12px rgba(255,255,255,0.1);
        }
        .footer { background: #0a0a0a; color: #666; border-top: 1px solid rgba(255,255,255,0.1); }
      }
      </style>
  </head>
  <body>
      <div class="email-container">
      <div class="header">
          <h1 class="heading">New Contact Submission</h1>
          <p>Someone just reached out via your portfolio</p>
      </div>
      <div class="content">
          <div class="detail"><strong>From:</strong> ${name} &lt;<a href="mailto:${email}" style="color:inherit;">${email}</a>&gt;</div>
          <div class="detail"><strong>Phone:</strong> ${phone || 'No phone number provided'}</div>

          <div class="message-card">
          <strong>Message:</strong><br>
          ${message.replace(/\n/g, '<br>')}
          </div>

          <a href="mailto:${email}" class="action-button">Reply to ${name.split(' ')[0]}</a>
      </div>
      <div class="footer">
          © ${new Date().getFullYear()} Albero. All Rights Reserved
      </div>
      </div>
  </body>
  </html>
  `
}
