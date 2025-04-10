"use client"

import { useState, useRef } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | { success: boolean; message: string }>(null)
  const [dataProtectionConsent, setDataProtectionConsent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!dataProtectionConsent) {
      setSubmitStatus({
        success: false,
        message: "Pro odeslání formuláře je nutné souhlasit se zpracováním osobních údajů.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement)
      const result = await sendContactEmail(formData)
      setSubmitStatus(result)

      if (result.success && formRef.current) {
        formRef.current.reset()
        setDataProtectionConsent(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "Při odesílání zprávy došlo k chybě. Zkuste to prosím znovu.",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Jméno</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Zpráva</Label>
        <Textarea id="message" name="message" rows={4} required />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="dataProtection"
          checked={dataProtectionConsent}
          onCheckedChange={(checked) => setDataProtectionConsent(checked as boolean)}
          required
        />
        <Label htmlFor="dataProtection" className="text-sm">
          Souhlasím se{" "}
          <Link href="/ochrana-osobnich-udaju" className="text-blue-600 hover:underline">
            zpracováním osobních údajů
          </Link>
        </Label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Odesílání..." : "Odeslat"}
      </Button>

      {submitStatus && (
        <div className={`p-3 ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} rounded`}>
          {submitStatus.message}
        </div>
      )}
    </form>
  )
}