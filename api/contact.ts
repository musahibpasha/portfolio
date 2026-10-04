import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactRequest = { method?: string; body?: unknown }
type ContactResponse = {
  setHeader: (name: string, value: string) => void
  status: (code: number) => ContactResponse
  json: (body: Record<string, boolean | string>) => void
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body as Record<string, unknown> : {}
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const website = typeof body.website === 'string' ? body.website.trim() : ''

  if (website) return res.status(200).json({ success: true })

  if (!name || name.length > 120 || !emailPattern.test(email) || email.length > 254 || !message || message.length > 10000) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !from || !to) {
    return res.status(503).json({ error: 'Contact email is not configured. Please email directly instead.' })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.error('Resend contact email failed:', error)
      return res.status(502).json({ error: 'Unable to send your message right now. Please try again later.' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact email request failed:', error)
    return res.status(502).json({ error: 'Unable to send your message right now. Please try again later.' })
  }
}