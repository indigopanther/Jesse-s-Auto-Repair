import { Link } from '../router'
import { business, services, highlights, images, reviewsWidgetUrl } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">St. Louis · Since 1986 · BBB A+</span>
            <h1>
              Quality Assured <span className="accent">Auto Repair</span>
            </h1>
            <p className="hero__lead">
              Honest, transparent service on Toyota, Nissan, Honda and GM vehicles —
              backed by 40 years of experience and a 24-month / 24,000-mile warranty
              on most repairs.
            </p>
            <div className="hero__actions">
              <Link to="/appointment" className="btn btn--primary btn--lg">
                <Icon name="calendar" size={20} /> Book appointment
              </Link>
              <a href={business.phoneHref} className="btn btn--ghost btn--lg">
                <Icon name="phone" size={20} /> {business.phoneDisplay}
              </a>
            </div>
            <p className="hero__sub">
              <Icon name="clock" size={16} /> {business.hoursLine} · By appointment only
            </p>
          </div>
          <div className="hero__card">
            <img src={images.logo} alt={`${business.name} logo`} />
            <div className="hero__cardrow">
              <Icon name="pin" size={18} />
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                {business.address}
              </a>
            </div>
            <div className="hero__cardrow">
              <Icon name="shield" size={18} />
              <span>Licensed Missouri inspection station</span>
            </div>
            <div className="hero__cardrow">
              <Icon name="check" size={18} />
              <span>{business.warranty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Construction / appointment notice */}
      <div className="notice">
        <Icon name="pin" size={18} />
        <p>
          <strong>Please excuse the construction</strong> — follow the detour signs to reach us.
          Services are <strong>by appointment only</strong>; no walk-ins, please.
        </p>
      </div>

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
            <span className="eyebrow">What we do</span>
            <h2>Services we offer</h2>
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

      {/* Why us + photos */}
      <section className="section section--alt">
        <div className="split">
          <Reveal className="split__media">
            <img src={images.shop1} alt="Inside Jesse's Automotive" className="split__img" />
            <img src={images.shop2} alt="Jesse's Automotive shop" className="split__img split__img--offset" />
          </Reveal>
          <Reveal className="split__copy" delay={80}>
            <span className="eyebrow">Why drivers trust us</span>
            <h2>A neighborhood shop that stands by its work</h2>
            <p>
              The family started Jesse's back in 1986, and we have worked on the same Hillsdale
              corner since 1995. The commitment hasn't changed: honest, transparent work, and a
              clear explanation of what your car needs (and what it will cost) before we begin.
            </p>
            <ul className="ticklist">
              <li><Icon name="check" size={18} /> Clear, up-front communication on every job</li>
              <li><Icon name="check" size={18} /> {business.warranty}</li>
              <li><Icon name="check" size={18} /> We supply quality parts for compatibility &amp; warranty</li>
              <li><Icon name="check" size={18} /> Rooted in the St. Louis community since {business.founded}</li>
            </ul>
            <Link to="/about" className="link-arrow">Our story <Icon name="arrow" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Makes we service */}
      <section className="section">
        <div className="section__head section__head--center">
          <div>
            <span className="eyebrow">Makes we specialize in</span>
            <h2>We work on Toyota, Nissan, Honda &amp; GM</h2>
            <p className="section__sub">
              Plus engine diagnostics on most vehicles from 1979 to the current model year — just ask.
            </p>
          </div>
        </div>
        <div className="makes">
          {business.makes.map((m) => (
            <span key={m} className="make-chip">{m}</span>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--alt">
        <div className="section__head section__head--center">
          <div>
            <span className="eyebrow">In their words</span>
            <h2>What our customers have to say</h2>
          </div>
        </div>
        <div className="reviews">
          <iframe
            title="Customer reviews"
            src={reviewsWidgetUrl}
            className="reviews__frame"
            loading="lazy"
          />
          <a href={business.bbbUrl} target="_blank" rel="noopener noreferrer" className="reviews__bbb">
            <img src={business.bbbSeal} alt="BBB A+ Accredited Business" />
          </a>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="split split--reverse">
          <Reveal className="split__copy">
            <span className="eyebrow">Find us</span>
            <h2>Stop by the shop</h2>
            <div className="infoline"><Icon name="pin" size={20} /><a href={business.mapUrl} target="_blank" rel="noopener noreferrer">{business.address}</a></div>
            <div className="infoline"><Icon name="phone" size={20} /><a href={business.phoneHref}>{business.phoneDisplay}</a></div>
            <div className="infoline"><Icon name="clock" size={20} /><span>{business.hoursLine}</span></div>
            <p className="section__sub">Closed Saturday &amp; Sunday. Appointments are required.</p>
            <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <Icon name="pin" size={18} /> Get directions
            </a>
          </Reveal>
          <Reveal className="split__map" delay={80}>
            <iframe
              title="Map to Jesse's Automotive"
              className="mapframe"
              loading="lazy"
              src="https://www.google.com/maps?q=2124+Darver+Lane,+St.+Louis,+MO+63121&output=embed"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
