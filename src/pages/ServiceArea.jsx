import { business, serviceAreas, steps } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function ServiceArea() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">Where I work</span>
          <h1>Service area</h1>
          <p>
            Jesse's Auto Repair is fully mobile across metro Atlanta. I bring the shop to your
            driveway, parking lot or roadside - so you skip the tow and the wait.
          </p>
          <div className="pagehead__actions">
            <a href={business.phoneHref} className="btn btn--primary">
              <Icon name="phone" size={18} /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <Reveal className="split__copy">
            <span className="eyebrow">Counties served</span>
            <h2>Serving all of metro Atlanta</h2>
            <p>
              Including but not limited to the counties below. If you do not see yours, reach out
              anyway - I cover a wide stretch of the metro and travel is quoted up front.
            </p>
            <div className="makes makes--left">
              {serviceAreas.map((a) => (
                <span key={a} className="make-chip">{a}</span>
              ))}
            </div>
            <div className="infoline"><Icon name="dollar" size={20} /><span>{business.travel}</span></div>
          </Reveal>
          <Reveal className="split__map" delay={80}>
            <iframe
              title="Jesse's Auto Repair metro-Atlanta service area"
              className="mapframe mapframe--tall"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Atlanta+metropolitan+area,+GA&ll=33.74,-84.42&z=9&output=embed"
            />
            <p className="mapnote"><Icon name="car" size={15} /> Fully mobile — no storefront. Travel is quoted up front.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__head section__head--center">
          <div>
            <span className="eyebrow">Simple and straightforward</span>
            <h2>How it works</h2>
          </div>
        </div>
        <div className="grid grid--3">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="step" delay={i * 80}>
              <span className="step__num">{s.n}</span>
              <span className="step__icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split split--reverse">
          <Reveal className="split__copy">
            <span className="eyebrow">When I am available</span>
            <h2>Hours</h2>
            <div className="hours">
              {business.hours.map((h) => (
                <div key={h.day} className={`hours__row ${h.time === 'Closed' ? 'is-closed' : ''}`}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="split__copy" delay={80}>
            <span className="eyebrow">Reach me</span>
            <h2>Call, text or email</h2>
            <div className="infoline"><Icon name="phone" size={20} /><a href={business.phoneHref}>{business.phoneDisplay}</a></div>
            <div className="infoline"><Icon name="message" size={20} /><a href={business.smsHref}>Text {business.phoneDisplay}</a></div>
            <div className="infoline"><Icon name="mail" size={20} /><a href={business.emailHref}>{business.email}</a></div>
            <div className="infoline"><Icon name="shield" size={20} /><span>{business.payment}</span></div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
