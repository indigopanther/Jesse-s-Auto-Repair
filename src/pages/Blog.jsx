import { blogPosts } from '../data/site'
import Icon from '../components/Icons'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function Blog() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__inner">
          <span className="eyebrow">Tips &amp; tactics</span>
          <h1>From the shop blog</h1>
          <p>
            Auto news, tips and tactics to improve your car-owning experience — straight from our
            team. Tap any post to read the full article.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid--2 grid--gap">
          {blogPosts.map((post, i) => (
            <Reveal key={post.url} delay={(i % 2) * 80}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="post">
                <div className="post__body">
                  <span className="post__cat">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="link-arrow">Read more <Icon name="arrow" size={16} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Got a question about your car?"
        text="We're always happy to help diagnose a noise, a warning light, or that 'something feels off' feeling. Book a visit and we'll take a look."
      />
    </>
  )
}
