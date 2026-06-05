import { Link } from '../router'
import { services, business } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function Services() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">What we do</span>
          <h1>Services we offer</h1>
          <p>
            From routine maintenance to engine diagnostics, we keep St. Louis drivers safely on the
            road. Specializing in Toyota, Nissan, Honda and GM — and a whole lot more. Just ask.
          </p>
          <div className="pagehead__actions">
            <Link to="/appointment" className="btn btn--primary">
              <Icon name="calendar" size={18} /> Book appointment
            </Link>
            <a href={business.phoneHref} className="btn btn--ghost">
              <Icon name="phone" size={18} /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid--2 grid--gap">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80}>
              <article className="service" id={s.id}>
                <span className="service__icon"><Icon name={s.icon} size={28} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="policy">
          <h2>Good to know</h2>
          <div className="policy__grid">
            <div className="policy__item">
              <Icon name="check" size={20} />
              <p><strong>We provide the parts.</strong> To guarantee compatibility and warranty coverage, we supply parts as well as labor — we cannot install customer-supplied parts.</p>
            </div>
            <div className="policy__item">
              <Icon name="shield" size={20} />
              <p><strong>{business.warranty}.</strong> Most repairs are covered, giving you peace of mind long after you drive away.</p>
            </div>
            <div className="policy__item">
              <Icon name="calendar" size={20} />
              <p><strong>By appointment only.</strong> No walk-ins, please — booking ahead means we are ready for your vehicle when you arrive.</p>
            </div>
            <div className="policy__item">
              <Icon name="engine" size={20} />
              <p><strong>Wide model coverage.</strong> Engine diagnostics on vehicles from 1979 to the current model year, including PCM replacement and relearning.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure what your car needs?"
        text="Request a quote and tell us what's going on — we'll take a look and walk you through your options before any work begins."
      />
    </>
  )
}
