import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, phone, subject, message } = await req.json();

    await resend.emails.send({
      from: "Techgenius Haiti <onboarding@resend.dev>",
      to: "techgeniushaiti@gmail.com",
      subject: `📩 ${subject}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis Techgenius Haiti</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Téléphone :</strong> ${phone}</p>

        <p><strong>Sujet :</strong> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}