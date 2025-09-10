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
            background: #000;
            margin: 0;
            padding: 0;
            color: #fff;
        }
        .email-container {
            max-width: 600px;
            margin: 30px auto;
            background: #0a0a0a;
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 8px 24px rgba(0,0,0,0.6);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #ffffff0d, #6366f150);
            text-align: center;
            padding: 30px 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            background: linear-gradient(90deg, #fff, #888);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .heading{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
        .content {
            padding: 30px;
        }
        .detail {
            margin-bottom: 12px;
            font-size: 14px;
            color: #ccc;
        }
        .detail strong {
            color: #fff;
        }
        .message-card {
            background: rgba(255,255,255,0.05);
            border-left: 4px solid #fff;
            padding: 16px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 14px;
            color: #ddd;
        }
        .action-button {
            display: inline-block;
            margin-top: 25px;
            padding: 10px 18px;
            border-radius: 6px;
            background: #fff;
            color: #000;
            font-weight: 600;
            text-decoration: none;
            font-size: 14px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 13px;
            color: #666;
            background: #0a0a0a;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        </style>
    </head>
    <body>
        <div class="email-container">
        <div class="header">
            <h1 class="heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <span>New Contact Submission</span>
            </h1>
            <p>Someone just reached out via your portfolio</p>
        </div>
        <div class="content">
            <div class="detail"><strong>From:</strong> ${name} &lt;<a href="mailto:${email}" style="color:#fff;">${email}</a>&gt;</div>
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
