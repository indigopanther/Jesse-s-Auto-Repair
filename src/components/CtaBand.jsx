import { Link } from '../router'
import { business } from '../data/site'
import Icon from './Icons'

export default function CtaBand({
  title = 'Ready to get your vehicle taken care of?',
  text = 'Booking is quick and easy. Pick a time that works for you, or give us a call — we are happy to help.',
}) {
  return (
    <section className="ctaband">
      <div className="ctaband__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">
          <Link to="/appointment" className="btn btn--primary btn--lg">
            <Icon name="calendar" size={20} /> Book appointment
          </Link>
          <a href={business.phoneHref} className="btn btn--ghost btn--lg">
            <Icon name="phone" size={20} /> {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
