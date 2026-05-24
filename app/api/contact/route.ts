import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, company, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // EMAIL TO SOUTHERN STOCK
    await transporter.sendMail({
      from: `"Southern Stock Website" <info@southernstock.co.za>`,
      to: "info@southernstock.co.za",
      subject: `New Website Enquiry - ${name}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // AUTO RESPONSE TO CLIENT
    await transporter.sendMail({
      from: `"Southern Stock" <info@southernstock.co.za>`,
      to: email,
      subject: "Thank You for Contacting Southern Stock",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;border:1px solid #ddd;border-radius:10px;">
          <h1>SOUTHERN STOCK</h1>
          <p style="color:#2563eb;">Technology Solutions</p>

          <hr>

          <p>Dear ${name},</p>

          <p>
            Thank you for contacting Southern Stock (Pty) Ltd.
          </p>

          <p>
            We have successfully received your enquiry.
            A member of our team will contact you shortly.
          </p>

          <p>
            We appreciate your interest in Southern Stock
            Technology Solutions.
          </p>

          <br>

          <p>Kind Regards,</p>
          <strong>Southern Stock Team</strong>

          <hr>

          <p>📧 info@southernstock.co.za</p>
          <p>🌐 www.southernstock.co.za</p>
          <p>📞 +27 68 512 3151</p>

          <p style="color:#2563eb;">
            INNOVATE • SECURE • SCALE
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}