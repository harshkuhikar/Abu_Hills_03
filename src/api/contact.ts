// Contact form API endpoint using Resend
// This file demonstrates the structure for the contact form API
// In a real application, this would be implemented as a server-side API route

import { Resend } from "resend";

// Configuration - these should be environment variables in production
const RESEND_CONFIG = {
  apiKey: process.env.RESEND_API_KEY || "re_22KBkv8y_6KazrsZegojXiVXqYGjsf6Za",
  fromEmail: "harshkuhikar68@gmail.com",
  toEmail: "harshkuhikar68@gmail.com",
};

// Initialize Resend client
const resend = new Resend(RESEND_CONFIG.apiKey);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  propertyType?: string;
  budget?: string;
  timestamp: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      throw new Error("Missing required fields");
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 28px; margin: 0;">Abu Hills Real Estate</h1>
            <p style="color: #666; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: #f8f6f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; font-size: 20px; margin: 0 0 15px 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${formData.email}</td>
              </tr>
              ${
                formData.phone
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${formData.phone}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #333;">${formData.subject}</td>
              </tr>
              ${
                formData.propertyType
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Property Type:</td>
                <td style="padding: 8px 0; color: #333;">${formData.propertyType}</td>
              </tr>
              `
                  : ""
              }
              ${
                formData.budget
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Budget:</td>
                <td style="padding: 8px 0; color: #333;">${formData.budget}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Submitted:</td>
                <td style="padding: 8px 0; color: #333;">${new Date(formData.timestamp).toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; border: 2px solid #d4af37; border-radius: 8px; padding: 20px;">
            <h3 style="color: #333; font-size: 18px; margin: 0 0 15px 0;">Message</h3>
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from the Abu Hills Real Estate contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: RESEND_CONFIG.fromEmail,
      to: RESEND_CONFIG.toEmail,
      subject: `New Contact Form: ${formData.subject}`,
      html: emailContent,
      replyTo: formData.email,
    });

    // Send confirmation email to the user
    const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 28px; margin: 0;">Abu Hills Real Estate</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Thank you for contacting us!</p>
          </div>
          
          <div style="background-color: #f8f6f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; font-size: 20px; margin: 0 0 15px 0;">Dear ${formData.name},</h2>
            <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
              Thank you for reaching out to Abu Hills Real Estate. We have received your message and will get back to you within 24 hours.
            </p>
            <p style="color: #333; line-height: 1.6; margin: 0;">
              Our team of luxury real estate experts is reviewing your inquiry and will provide you with personalized assistance based on your requirements.
            </p>
          </div>
          
          <div style="background-color: #ffffff; border: 2px solid #d4af37; border-radius: 8px; padding: 20px;">
            <h3 style="color: #333; font-size: 18px; margin: 0 0 15px 0;">Your Message Summary</h3>
            <p style="color: #666; margin: 0 0 10px 0;"><strong>Subject:</strong> ${formData.subject}</p>
            <p style="color: #666; margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #333; font-size: 16px; margin: 0 0 15px 0;">
              <strong>Contact Information</strong>
            </p>
            <p style="color: #666; margin: 0 0 5px 0;">📞 +971 4 123 4567 | +971 50 123 4567</p>
            <p style="color: #666; margin: 0 0 5px 0;">✉️ info@abuhills.com</p>
            <p style="color: #666; margin: 0;">📍 Abu Hills Business Center, Sheikh Zayed Road, Dubai</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong style="color: #d4af37;">Abu Hills Real Estate Team</strong>
            </p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: RESEND_CONFIG.fromEmail,
      to: formData.email,
      subject: "Thank you for contacting Abu Hills Real Estate",
      html: confirmationEmail,
    });

    return {
      success: true,
      message: "Email sent successfully",
      data: result,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Example API route handler (for Next.js API routes or similar)
export async function handleContactForm(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const result = await sendContactEmail(req.body);

    if (result.success) {
      return res.status(200).json({ message: "Message sent successfully" });
    } else {
      return res
        .status(500)
        .json({ message: result.message, error: result.error });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Configuration instructions for easy setup:
/*
SETUP INSTRUCTIONS:

1. Install Resend:
   npm install resend

2. Get your Resend API key:
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Add it to your environment variables

3. Environment Variables (.env.local):
   RESEND_API_KEY=your_actual_resend_api_key_here

4. Domain Setup:
   - Add and verify your domain in Resend dashboard
   - Update RESEND_CONFIG.fromEmail to use your verified domain

5. API Route Setup:
   - Create /pages/api/contact.js (Next.js) or equivalent
   - Import and use handleContactForm function

6. Frontend Integration:
   - The contact form already sends POST requests to /api/contact
   - Make sure your API route is properly configured

Example API route (/pages/api/contact.js):
```javascript
import { handleContactForm } from '../../src/api/contact';
export default handleContactForm;
```

For other frameworks, adapt the handleContactForm function accordingly.
*/
