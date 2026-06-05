import { business } from '../data/site'
import Icon from './Icons'

// Fixed bottom bar on small screens - keeps call + text one tap away.
export default function MobileCallBar() {
  return (
    <div className="callbar">
      <a href={business.phoneHref} className="callbar__btn callbar__btn--book">
        <Icon name="phone" size={18} /> Call now
      </a>
      <a href={business.smsHref} className="callbar__btn callbar__btn--call">
        <Icon name="message" size={18} /> Text
      </a>
    </div>
  )
}
