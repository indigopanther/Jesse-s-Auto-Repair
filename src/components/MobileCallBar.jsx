import { Link } from '../router'
import { business } from '../data/site'
import Icon from './Icons'

// Fixed bottom bar on small screens — keeps phone + booking one tap away.
export default function MobileCallBar() {
  return (
    <div className="callbar">
      <a href={business.phoneHref} className="callbar__btn callbar__btn--call">
        <Icon name="phone" size={18} /> Call
      </a>
      <Link to="/appointment" className="callbar__btn callbar__btn--book">
        <Icon name="calendar" size={18} /> Book appointment
      </Link>
    </div>
  )
}
