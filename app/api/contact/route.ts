import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Chybí povinná pole." }, 
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Pro Vercel není potřeba tls.rejectUnauthorized
    })

    const mailOptions = {
      from: `"Webový formulář" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Nová zpráva z webu od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'neuvedeno'}</p>
        <p><strong>Zpráva:</strong><br>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { success: true, message: "Zpráva byla úspěšně odeslána." }
    )
    
  } catch (error) {
    console.error("CHYBA API:", error)
    return NextResponse.json(
      { success: false, message: "Nepodařilo se odeslat zprávu." }, 
      { status: 500 }
    )
  }
}