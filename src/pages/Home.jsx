import { Link } from '../router'
import { business, services, highlights, steps, images, serviceAreas } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Brands from '../components/Brands'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Mobile Mechanic | Atlanta, GA</span>
            <h1>
              You Drive It, <span className="accent">We Fix It.</span>
            </h1>
            <p className="hero__lead">
              A trusted mobile mechanic with {business.yearsExperience}+ years of experience, serving
              metro Atlanta. From brakes and tune-ups to water pumps and alternators, I come to your
              home or work and get the job done. Quick, reliable and affordable.
            </p>
            <div className="hero__actions">
              <a href={business.phoneHref} className="btn btn--primary btn--lg">
                <Icon name="phone" size={20} /> Call {business.phoneDisplay}
              </a>
              <a href={business.smsHref} className="btn btn--ghost btn--lg">
                <Icon name="message" size={20} /> Text Jesse
              </a>
            </div>
            <p className="hero__sub">
              <Icon name="clock" size={16} /> {business.hoursLine}
            </p>
          </div>
          <div className="hero__card">
            <img src={images.hero} alt="Jesse working on a vehicle" className="hero__photo" />
            <div className="hero__cardrow">
              <Icon name="car" size={18} />
              <span>Mobile service - we come to you</span>
            </div>
            <div className="hero__cardrow">
              <Icon name="check" size={18} />
              <span>{business.yearsExperience}+ years, work guaranteed</span>
            </div>
            <div className="hero__cardrow">
              <Icon name="dollar" size={18} />
              <span>Honest quotes, all cards accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stat highlights */}
      <section className="stats">
        {highlights.map((h, i) => (
          <Reveal key={h.label} className="stat" delay={i * 70}>
            <strong>{h.stat}</strong>
            <span>{h.label}</span>
          </Reveal>
        ))}
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="section__head">
          <div>
            <span className="eyebrow">What I fix</span>
            <h2>Services</h2>
          </div>
          <Link to="/services" className="link-arrow">
            All services <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="grid grid--3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 70}>
              <Link to={`/services#${s.id}`} className="scard">
                <span className="scard__icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Makes we work on */}
      <Brands />

      {/* How it works */}
      <section className="section">
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

      {/* Recent work gallery */}
      <section className="section section--alt">
        <div className="section__head section__head--center">
          <div>
            <span className="eyebrow">On the job</span>
            <h2>Recent work</h2>
            <p className="section__sub">A look at jobs done right, out in the field across metro Atlanta.</p>
          </div>
        </div>
        <div className="gallery">
          {images.gallery.map((src, i) => (
            <Reveal key={src} className="gallery__item" delay={(i % 5) * 50}>
              <img src={src} alt={`Jesse's Auto Repair work ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service area teaser */}
      <section className="section">
        <div className="split split--reverse">
          <Reveal className="split__copy">
            <span className="eyebrow">Where I work</span>
            <h2>Serving metro Atlanta</h2>
            <p>
              Mobile across the Atlanta metro, including but not limited to the counties below. Not
              sure if you are in range? Just call or text and ask - chances are I can get to you.
            </p>
            <div className="makes makes--left">
              {serviceAreas.map((a) => (
                <span key={a} className="make-chip">{a}</span>
              ))}
            </div>
            <Link to="/service-area" className="link-arrow">See the full area <Icon name="arrow" size={18} /></Link>
          </Reveal>
          <Reveal className="split__map" delay={80}>
            <iframe
              title="Jesse's Auto Repair metro-Atlanta service area"
              className="mapframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Atlanta+metropolitan+area,+GA&ll=33.74,-84.42&z=9&output=embed"
            />
            <p className="mapnote"><Icon name="car" size={15} /> Mobile service — Jesse comes to you across the metro.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
