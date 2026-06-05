import { business, images, highlights } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

const TIMELINE = [
  { year: '1986', text: 'Opened our very first shop in the Wellston area of the city of St. Louis.' },
  { year: '1995', text: 'Moved into our current location in Hillsdale, where we still serve drivers today.' },
  { year: 'Today', text: 'Four decades later, an A+ BBB-accredited shop trusted across the St. Louis area.' },
]

export default function About() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">Our story</span>
          <h1>About Jesse's Automotive</h1>
          <p>
            Many years of experience, a wide range of expertise, and a reputation built one honest
            repair at a time. We have adapted to an ever-changing auto-service world with an
            optimistic look to the future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <Reveal className="split__media">
            <img src={images.shop1} alt="Jesse's Automotive shop" className="split__img" />
            <img src={images.shop2} alt="Jesse's Automotive team at work" className="split__img split__img--offset" />
          </Reveal>
          <Reveal className="split__copy" delay={80}>
            <h2>Built on honesty and quality workmanship</h2>
            <p>
              We have a wide range of qualifications and expertise that has earned us a strong
              reputation in our field. Our core values have never changed: honesty, transparency and
              quality workmanship on every repair and maintenance service we offer.
            </p>
            <p>
              We are more than just a place that fixes cars — we build relationships with our
              customers. We will make sure you understand the work needed and the costs involved
              before we proceed, and we take pride in doing every job to the highest standard.
            </p>
            <p>
              We also stay engaged in our community, supporting local causes and the great people of
              St. Louis who have trusted us all these years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="stats stats--bare">
          {highlights.map((h, i) => (
            <Reveal key={h.label} className="stat" delay={i * 70}>
              <strong>{h.stat}</strong>
              <span>{h.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head section__head--center">
          <div>
            <span className="eyebrow">Four decades on the job</span>
            <h2>Our journey</h2>
          </div>
        </div>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} className="timeline__item" delay={i * 90}>
              <span className="timeline__year">{t.year}</span>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="split split--reverse">
          <Reveal className="split__copy">
            <span className="eyebrow">Our promise</span>
            <h2>We stand by our work</h2>
            <ul className="ticklist">
              <li><Icon name="check" size={18} /> {business.warranty}</li>
              <li><Icon name="check" size={18} /> Transparent estimates before any work begins</li>
              <li><Icon name="check" size={18} /> Quality parts supplied for guaranteed compatibility</li>
              <li><Icon name="check" size={18} /> Licensed Missouri inspection station</li>
            </ul>
            <div className="infoline"><Icon name="shield" size={20} /><a href={business.bbbUrl} target="_blank" rel="noopener noreferrer">BBB Accredited · {business.bbbRating} rating</a></div>
          </Reveal>
          <Reveal className="split__copy" delay={80}>
            <span className="eyebrow">Visit us</span>
            <h2>Hours &amp; location</h2>
            <div className="hours">
              {business.hours.map((h) => (
                <div key={h.day} className={`hours__row ${h.time === 'Closed' ? 'is-closed' : ''}`}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
            <div className="infoline"><Icon name="pin" size={20} /><a href={business.mapUrl} target="_blank" rel="noopener noreferrer">{business.address}</a></div>
            <div className="infoline"><Icon name="phone" size={20} /><a href={business.phoneHref}>{business.phoneDisplay}</a></div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
