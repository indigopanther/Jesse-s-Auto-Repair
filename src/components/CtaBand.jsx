import { business } from '../data/site'
import Icon from './Icons'

export default function CtaBand({
  title = 'Need a mechanic who comes to you?',
  text = 'Call or text Jesse with your year, make, model and the problem. You get an honest quote up front, then I come to you.',
}) {
  return (
    <section className="ctaband">
      <div className="ctaband__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">
          <a href={business.phoneHref} className="btn btn--primary btn--lg">
            <Icon name="phone" size={20} /> Call {business.phoneDisplay}
          </a>
          <a href={business.smsHref} className="btn btn--ghost btn--lg">
            <Icon name="message" size={20} /> Text instead
          </a>
        </div>
      </div>
    </section>
  )
}
