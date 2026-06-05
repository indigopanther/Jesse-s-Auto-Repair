import { makes } from '../data/site'
import BrandLogo from './BrandLogos'
import Reveal from './Reveal'

export default function Brands({
  eyebrow = 'Every make & model',
  title = 'We work on all makes',
  sub = 'From daily drivers to work trucks and imports — if it has wheels, Jesse can fix it. A few of the makes serviced across metro Atlanta:',
  alt = true,
}) {
  return (
    <section className={`section${alt ? ' section--alt' : ''}`}>
      <div className="section__head section__head--center">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="section__sub">{sub}</p>
        </div>
      </div>
      <div className="brandwall">
        {makes.map((name, i) => (
          <Reveal key={name} className="brandwall__item" delay={(i % 4) * 50}>
            <BrandLogo name={name} className="brandwall__logo" />
          </Reveal>
        ))}
      </div>
      <p className="brandwall__note">…and many more. Don’t see your make? Just ask — chances are it’s covered.</p>
    </section>
  )
}
