import { business, services } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Brands from '../components/Brands'

export default function Services() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">What I fix</span>
          <h1>Services</h1>
          <p>
            With {business.yearsExperience}+ years of experience, no job is too big or too small.
            Here is what I handle most - and if you do not see your problem listed, just ask.
          </p>
          <div className="pagehead__actions">
            <a href={business.phoneHref} className="btn btn--primary">
              <Icon name="phone" size={18} /> Call {business.phoneDisplay}
            </a>
            <a href={business.smsHref} className="btn btn--ghost">
              <Icon name="message" size={18} /> Text Jesse
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
                  <p>{s.short}</p>
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
              <Icon name="car" size={20} />
              <p><strong>I come to you.</strong> Mobile service at your home or work across metro Atlanta. No tow truck, no waiting room.</p>
            </div>
            <div className="policy__item">
              <Icon name="dollar" size={20} />
              <p><strong>Honest, up-front quotes.</strong> {business.travel}</p>
            </div>
            <div className="policy__item">
              <Icon name="check" size={20} />
              <p><strong>Work guaranteed.</strong> I stand behind my work and a reasonable price, every time.</p>
            </div>
            <div className="policy__item">
              <Icon name="shield" size={20} />
              <p><strong>Easy payment.</strong> {business.payment}.</p>
            </div>
          </div>
        </div>
      </section>

      <Brands alt={false} />

      <CtaBand
        title="Not sure what your car needs?"
        text="Tell me the year, make and model plus what it is doing. I will help you figure out the fix and give you a fair quote before any work starts."
      />
    </>
  )
}
