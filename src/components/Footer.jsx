import { Link } from '../router'
import { business, serviceAreas } from '../data/site'
import Icon from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h3 className="footer__brand">Jesse's Auto Repair</h3>
          <p className="footer__tag">{business.role} | {business.city}</p>
          <p className="footer__tag">"{business.tagline}"</p>
          <p className="footer__note">{business.promise} {business.yearsExperience}+ years of experience.</p>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <a className="footer__line" href={business.phoneHref}>
            <Icon name="phone" size={16} /> {business.phoneDisplay}
          </a>
          <a className="footer__line" href={business.smsHref}>
            <Icon name="message" size={16} /> Text {business.phoneDisplay}
          </a>
          <a className="footer__line" href={business.emailHref}>
            <Icon name="mail" size={16} /> {business.email}
          </a>
          <span className="footer__line">
            <Icon name="clock" size={16} /> {business.hoursLine}
          </span>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/services" className="footer__link">Services</Link>
          <Link to="/service-area" className="footer__link">Service area</Link>
          <Link to="/contact" className="footer__link">Request service</Link>
        </div>

        <div className="footer__col">
          <h4>Service area</h4>
          <p className="footer__note">Mobile across metro Atlanta. We come to you.</p>
          <div className="footer__chips">
            {serviceAreas.slice(0, 6).map((a) => (
              <span key={a} className="footer__chip">{a}</span>
            ))}
          </div>
          <a href={business.phoneHref} className="btn btn--primary footer__cta">
            <Icon name="phone" size={18} /> Call or text now
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Jesse's Auto Repair. {business.payment}.</span>
        <a href={business.emailHref}>{business.email}</a>
      </div>
    </footer>
  )
}
