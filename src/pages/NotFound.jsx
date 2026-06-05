import { Link } from '../router'
import Icon from '../components/Icons'

export default function NotFound() {
  return (
    <section className="notfound">
      <span className="eyebrow">404</span>
      <h1>This road doesn't lead anywhere</h1>
      <p>The page you were looking for can't be found. Let's get you back on track.</p>
      <div className="pagehead__actions">
        <Link to="/" className="btn btn--primary"><Icon name="arrow" size={18} /> Back home</Link>
        <Link to="/appointment" className="btn btn--ghost"><Icon name="calendar" size={18} /> Book an appointment</Link>
      </div>
    </section>
  )
}
