import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, company, phone, message } = body;

    // ZOHO SMTP CONFIG
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
      from: `"Southern Stock Website" <${process.env.ZOHO_USER}>`,
      to: "info@southernstock.co.za",
      subject: `New Website Enquiry - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#2563eb;">
            New Website Enquiry
          </h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background:#f5f5f5; padding:15px; border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    // AUTO RESPONSE TO CLIENT
    await transporter.sendMail({
      from: `"Southern Stock" <${process.env.ZOHO_USER}>`,
      to: email,
      subject: "Thank You for Contacting Southern Stock",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin:auto; border:1px solid #eee; border-radius:10px; overflow:hidden;">

          <div style="padding:30px; background:#ffffff;">
            <h1 style="margin:0; color:#111;">
              SOUTHERN STOCK
            </h1>

            <p style="margin-top:5px; color:#2563eb;">
              Technology Solutions
            </p>
          </div>

          <div style="height:5px; background:#2563eb;"></div>

          <div style="padding:30px;">
            <h2>Hello ${name},</h2>

            <p>
              Thank you for contacting
              <strong>Southern Stock Technology Solutions</strong>.
            </p>

            <p>
              We have received your enquiry and our team will
              review it shortly.
            </p>

            <p>
              We appreciate your interest in our IT solutions,
              software development, cybersecurity, cloud
              infrastructure, and digital services.
            </p>

            <p>
              One of our team members will contact you soon.
            </p>

            <br />

            <p>
              Best Regards,
            </p>

            <p>
              <strong>Southern Stock Team</strong><br />
              info@southernstock.co.za<br />
              Durban, South Africa
            </p>
          </div>

          <div style="background:#111827; color:white; text-align:center; padding:20px;">
            Building Technology. Delivering Confidence.
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}