import { useState } from 'react'
import { business } from '../data/site'
import Icon from '../components/Icons'

const EMPTY = { name: '', phone: '', vehicle: '', location: '', problem: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = `Service request${form.vehicle ? ` - ${form.vehicle}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle (year/make/model): ${form.vehicle}`,
      `Location / area: ${form.location}`,
      '',
      'Problem / service needed:',
      form.problem,
    ].join('\n')
    window.location.href = `${business.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">Let's get you rolling</span>
          <h1>Request service</h1>
          <p>
            The fastest way to reach me is a call or text at {business.phoneDisplay}. Prefer to send
            the details? Fill out the form below with your year, make, model and what is going on, and
            it will open an email straight to me.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="contact">
          <div className="contact__cards">
            <a href={business.phoneHref} className="contactcard contactcard--primary">
              <Icon name="phone" size={24} />
              <span className="contactcard__label">Call</span>
              <span className="contactcard__value">{business.phoneDisplay}</span>
            </a>
            <a href={business.smsHref} className="contactcard">
              <Icon name="message" size={24} />
              <span className="contactcard__label">Text</span>
              <span className="contactcard__value">{business.phoneDisplay}</span>
            </a>
            <a href={business.emailHref} className="contactcard">
              <Icon name="mail" size={24} />
              <span className="contactcard__label">Email</span>
              <span className="contactcard__value contactcard__value--sm">{business.email}</span>
            </a>
            <div className="contactcard contactcard--static">
              <Icon name="clock" size={24} />
              <span className="contactcard__label">Hours</span>
              <span className="contactcard__value contactcard__value--sm">{business.hoursLine}</span>
            </div>
          </div>

          <form className="qform" onSubmit={submit}>
            <h2>Send the details</h2>
            <div className="qform__row">
              <label className="qform__field">
                <span>Your name</span>
                <input type="text" value={form.name} onChange={update('name')} placeholder="Jane Driver" required />
              </label>
              <label className="qform__field">
                <span>Phone</span>
                <input type="tel" value={form.phone} onChange={update('phone')} placeholder="(404) 555-0123" required />
              </label>
            </div>
            <div className="qform__row">
              <label className="qform__field">
                <span>Vehicle (year / make / model)</span>
                <input type="text" value={form.vehicle} onChange={update('vehicle')} placeholder="2014 Honda Accord" required />
              </label>
              <label className="qform__field">
                <span>Your location / area</span>
                <input type="text" value={form.location} onChange={update('location')} placeholder="Marietta, Cobb County" required />
              </label>
            </div>
            <label className="qform__field">
              <span>What is going on?</span>
              <textarea value={form.problem} onChange={update('problem')} rows={5} placeholder="Brakes squealing, check engine light on, won't start..." required />
            </label>
            <button type="submit" className="btn btn--primary btn--lg qform__submit">
              <Icon name="mail" size={20} /> Send to Jesse
            </button>
            <p className="qform__note">
              This opens your email app addressed to {business.email}. Prefer to talk?{' '}
              <a href={business.phoneHref}>Call or text {business.phoneDisplay}</a>.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
