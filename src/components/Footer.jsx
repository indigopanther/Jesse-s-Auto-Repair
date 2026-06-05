import { Link } from '../router'
import { business } from '../data/site'
import Icon from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h3 className="footer__brand">Jesse's Automotive LLC</h3>
          <p className="footer__tag">{business.tagline} · {business.cityLine}</p>
          <a
            href={business.bbbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__bbb"
          >
            <img src={business.bbbSeal} alt="BBB A+ Accredited Business" />
          </a>
        </div>

        <div className="footer__col">
          <h4>Visit / Call</h4>
          <a className="footer__line" href={business.phoneHref}>
            <Icon name="phone" size={16} /> {business.phoneDisplay}
          </a>
          <a className="footer__line" href={business.mapUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={16} /> {business.address}
          </a>
          <span className="footer__line">
            <Icon name="clock" size={16} /> {business.hoursLine}
          </span>
          <span className="footer__note">By appointment only — no walk-ins, please.</span>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/services" className="footer__link">Services</Link>
          <Link to="/about" className="footer__link">About us</Link>
          <Link to="/blog" className="footer__link">Blog</Link>
          <Link to="/appointment" className="footer__link">Book an appointment</Link>
        </div>

        <div className="footer__col">
          <h4>Follow us</h4>
          <div className="footer__social">
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href={business.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="youtube" size={20} />
            </a>
          </div>
          <Link to="/appointment" className="btn btn--primary footer__cta">
            <Icon name="calendar" size={18} /> Book appointment
          </Link>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Jesse's Automotive LLC. All rights reserved.</span>
        <a href="https://jessesauto.com/privacy-policy448844737109" target="_blank" rel="noopener noreferrer">
          Privacy policy
        </a>
      </div>
    </footer>
  )
}
