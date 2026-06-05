import { useState, useEffect } from 'react'
import { Link, useRouter } from '../router'
import { business, images } from '../data/site'
import Icon from './Icons'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/appointment', label: 'Appointment' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { path } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={images.logo} alt={`${business.name} logo`} className="nav__logo" />
          <span className="nav__brandtext">
            <strong>Jesse's Automotive</strong>
            <em>{business.tagline}</em>
          </span>
        </Link>

        <nav id="primary-nav" className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav__link ${path === item.to ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/appointment" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            <Icon name="calendar" size={18} /> Book appointment
          </Link>
        </nav>

        <a href={business.phoneHref} className="nav__call">
          <Icon name="phone" size={18} />
          <span>{business.phoneDisplay}</span>
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <span /><span /><span />
        </button>
      </div>
      {open && <div className="nav__scrim" onClick={() => setOpen(false)} />}
    </header>
  )
}
