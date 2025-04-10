"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aless.vachuska@seznam.cz",
      subject: "Nová zpráva z kontaktního formuláře",
      html: `
        <h1>Nová zpráva z kontaktního formuláře</h1>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, message: "Při odesílání zprávy došlo k chybě." }
    }

    return { success: true, message: "Zpráva byla úspěšně odeslána." }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return { success: false, message: "Při odesílání zprávy došlo k chybě." }
  }
}