import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { company, contact } from '../content'
import { Arrow } from './Icons'

type FieldName = 'name' | 'email' | 'message'
type Values = Record<FieldName, string>
type Status = 'idle' | 'invalid' | 'loading' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY: Values = { name: '', email: '', message: '' }
const UNTOUCHED: Record<FieldName, boolean> = { name: false, email: false, message: false }

function validate(values: Values): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {}
  if (!values.name.trim()) errors.name = 'Add your name so we know who to reply to.'
  if (!values.email.trim()) errors.email = 'Add an email address so we can reply.'
  else if (!EMAIL_RE.test(values.email)) errors.email = 'That email address is incomplete. Use the form name@company.com.'
  if (!values.message.trim()) errors.message = 'Add a short message so we know what you need.'
  return errors
}

/**
 * Delivers the message through Netlify Forms. Netlify intercepts form-encoded POSTs whose
 * `form-name` matches the static form declared in index.html and emails the configured address.
 */
async function deliver(values: Values, honeypot: string): Promise<void> {
  const body = new URLSearchParams({ 'form-name': 'contact', 'bot-field': honeypot, ...values })
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!response.ok) throw new Error(`Form delivery failed with status ${response.status}`)
}

export function Contact() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [honeypot, setHoneypot] = useState('')
  const [touched, setTouched] = useState(UNTOUCHED)
  const [status, setStatus] = useState<Status>('idle')
  const [sentTo, setSentTo] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const resetTimer = useRef<number | undefined>(undefined)

  const errors = validate(values)
  const errorFor = (field: FieldName) => (touched[field] ? errors[field] : undefined)

  const update = (field: FieldName) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (status !== 'loading') setStatus('idle')
  }
  const touch = (field: FieldName) => () => setTouched((t) => ({ ...t, [field]: true }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return
    setTouched({ name: true, email: true, message: true })
    const firstInvalid = (Object.keys(errors) as FieldName[])[0]
    if (firstInvalid) {
      setStatus('invalid')
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    if (import.meta.env.DEV) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await deliver(values, honeypot)
      setSentTo(values.email.trim())
      setValues(EMPTY)
      setTouched(UNTOUCHED)
      setStatus('success')
      window.clearTimeout(resetTimer.current)
      resetTimer.current = window.setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel =
    status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent' : 'Send message'

  const statusTone = status === 'invalid' || status === 'error' ? 'error' : status === 'success' ? 'success' : undefined

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="section-head">
        <h2 id="contact-title">Get in touch.</h2>
        <p className="lede">{contact.lede}</p>
      </div>

      <div className="cells contact__grid">
        <div className="cell contact__info">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a className="link" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>{company.legalName}</dd>
            </div>
          </dl>
        </div>

        <form
          className="cell form"
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="visually-hidden" aria-hidden="true">
            <label>
              Leave this field empty
              <input
                type="text"
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </p>

          <div className="form__row">
            <div className="field">
              <label className="field__label" htmlFor="contact-name">
                Full name
              </label>
              <input
                id="contact-name"
                name="name"
                className="input"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={update('name')}
                onBlur={touch('name')}
                aria-required="true"
                aria-invalid={errorFor('name') ? 'true' : undefined}
                aria-describedby="contact-name-help"
              />
              <p className="field__help" id="contact-name-help" data-tone={errorFor('name') ? 'error' : undefined}>
                {errorFor('name') ?? ''}
              </p>
            </div>
            <div className="field">
              <label className="field__label" htmlFor="contact-email">
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                className="input"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={update('email')}
                onBlur={touch('email')}
                aria-required="true"
                aria-invalid={errorFor('email') ? 'true' : undefined}
                aria-describedby="contact-email-help"
              />
              <p className="field__help" id="contact-email-help" data-tone={errorFor('email') ? 'error' : undefined}>
                {errorFor('email') ?? ''}
              </p>
            </div>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="contact-message">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="input"
              rows={5}
              value={values.message}
              onChange={update('message')}
              onBlur={touch('message')}
              aria-required="true"
              aria-invalid={errorFor('message') ? 'true' : undefined}
              aria-describedby="contact-message-help"
            />
            <p className="field__help" id="contact-message-help" data-tone={errorFor('message') ? 'error' : undefined}>
              {errorFor('message') ?? 'Tell us about the project, the systems involved, and your timeline.'}
            </p>
          </div>
          <div className="form__actions">
            <button
              className="btn btn--primary"
              type="submit"
              data-state={status === 'loading' || status === 'success' ? status : undefined}
              aria-disabled={status === 'loading' ? 'true' : undefined}
            >
              {status === 'loading' ? <span className="spinner" aria-hidden="true" /> : null}
              {buttonLabel}
              {status === 'idle' || status === 'invalid' ? <Arrow /> : null}
            </button>
            <p className="form__status" aria-live="polite" data-tone={statusTone}>
              {status === 'invalid' ? 'Fix the highlighted fields to send your message.' : null}
              {status === 'success' ? `Message sent. We’ll reply to ${sentTo}.` : null}
              {status === 'error' ? (
                import.meta.env.DEV ? (
                  'Sending only works on the live site. Locally the form is not connected.'
                ) : (
                  <>
                    We couldn’t send your message. Email us at{' '}
                    <a className="link" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>{' '}
                    instead.
                  </>
                )
              ) : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
