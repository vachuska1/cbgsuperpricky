import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  console.log('Environment Variables:', {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS ? '***' : 'NOT SET',
    SMTP_RECEIVER: process.env.SMTP_RECEIVER
  })

  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Chybí povinná pole." },
        { status: 400 }
      )
    }

    // Testovací výstup do logů
    console.log('Form data received:', { name, email, phone, message })

    const transporter = nodemailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Webový formulář" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Nová zpráva od ${name}`,
      html: `
        <h3>Nová zpráva z kontaktního formuláře</h3>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'neuveden'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Zpráva byla úspěšně odeslána." }
    )
  } catch (error) {
    console.error('Full error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: `Chyba při odesílání: ${error instanceof Error ? error.message : 'Neznámá chyba'}` 
      },
      { status: 500 }
    )
  }
}