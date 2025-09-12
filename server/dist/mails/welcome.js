"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWelcomeEmail = generateWelcomeEmail;
function generateWelcomeEmail(data) {
    const { name, email, message } = data;
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Albero</title>
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
        padding: 40px 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 26px;
        font-weight: 700;
        color: #111;
      }
      .content {
        padding: 30px;
      }
      .content p {
        color: #444;
        line-height: 1.7;
        margin-bottom: 20px;
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
      .social-links {
        margin: 25px 0;
        text-align: center;
      }
      .social-links a {
        color: #111;
        margin: 0 10px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.3s ease;
      }
      .social-links a:hover { opacity: 0.7; }
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
        .content p { color: #ccc; }
        .message-card { background: rgba(255,255,255,0.05); border-left-color: #fff; color: #ddd; }
        .social-links a { color: #fff; }
        .footer { background: #0a0a0a; color: #666; border-top: 1px solid rgba(255,255,255,0.1); }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Thank You, ${name}!</h1>
        <p>Your message has been received</p>
      </div>
      <div class="content">
        <p>We’ve received your message and will review it shortly.  
        Expect a response within <strong>24-48 hours</strong> at <strong>${email}</strong>.</p>
        
        <div class="message-card">
          <strong>Your Message:</strong><br>
          ${message.replace(/\n/g, '<br>')}
        </div>

        <p>Meanwhile, feel free to explore our work or connect with us on socials:</p>
        <div class="social-links">
          <a href="https://github.com/Anuj3553/">GitHub</a>
          <a href="https://www.linkedin.com/in/anuj-verma-67493125a/">LinkedIn</a>
          <a href="https://www.instagram.com/anuj.verma_official/">Instagram</a>
        </div>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Albero. All Rights Reserved
      </div>
    </div>
  </body>
  </html>
  `;
}
//# sourceMappingURL=welcome.js.map