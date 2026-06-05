import { useState } from 'react'
import { business, scheduler } from '../data/site'
import Icon from '../components/Icons'

export default function Appointment() {
  const [tab, setTab] = useState('book')
  const src = tab === 'book' ? scheduler.bookUrl : scheduler.quoteUrl

  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">Let's get you scheduled</span>
          <h1>Book an appointment</h1>
          <p>
            Pick a date and time that works for you right here, no phone tag required. Prefer to
            describe the problem first? Switch to <strong>Request a quote</strong> and tell us what's
            going on. Service is by appointment only; no walk-ins, please.
          </p>
          <div className="pagehead__actions">
            <a href={business.phoneHref} className="btn btn--ghost">
              <Icon name="phone" size={18} /> Or call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="booktabs">
          <button
            className={`booktab ${tab === 'book' ? 'is-active' : ''}`}
            onClick={() => setTab('book')}
          >
            <Icon name="calendar" size={18} /> Schedule a visit
          </button>
          <button
            className={`booktab ${tab === 'quote' ? 'is-active' : ''}`}
            onClick={() => setTab('quote')}
          >
            <Icon name="engine" size={18} /> Request a quote
          </button>
        </div>

        <div className="bookbar">
          <span className="bookbar__hint">
            The {tab === 'book' ? 'calendar' : 'quote form'} loads below and can take a moment.
          </span>
          <a href={src} target="_blank" rel="noopener noreferrer" className="btn btn--ghost bookbar__btn">
            <Icon name="arrow" size={18} /> Open full screen
          </a>
        </div>

        <div className="bookframe">
          <iframe
            key={tab}
            title={tab === 'book' ? 'Schedule an appointment' : 'Request a quote'}
            src={src}
            className="bookframe__iframe"
            loading="lazy"
          />
        </div>

        <p className="bookframe__fallback">
          Form not loading?{' '}
          <a href={src} target="_blank" rel="noopener noreferrer">Open it in a new tab</a>{' '}
          or call <a href={business.phoneHref}>{business.phoneDisplay}</a> and we'll book you in.
        </p>
      </section>

      <section className="section section--alt">
        <div className="infocards">
          <div className="infocard">
            <Icon name="clock" size={24} />
            <h3>Hours</h3>
            <p>{business.hoursLine}</p>
            <p className="muted">Closed weekends. Appointment only.</p>
          </div>
          <div className="infocard">
            <Icon name="pin" size={24} />
            <h3>Location</h3>
            <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">{business.address}</a>
            <p className="muted">Follow the detour signs - please excuse our construction.</p>
          </div>
          <div className="infocard">
            <Icon name="phone" size={24} />
            <h3>Call us</h3>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <p className="muted">We're glad to answer questions before you book.</p>
          </div>
        </div>
      </section>
    </>
  )
}
