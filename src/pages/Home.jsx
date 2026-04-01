import { Link } from 'react-router-dom';
import { IconBooks, IconMicrophone, IconLeaf, IconBuilding, IconCheck, IconArrowRight } from '../components/Icons';
import './Home.css';

const stats = [
  { value: '20+',  label: 'Years International Experience' },
  { value: '130+', label: 'Country Partners at Globethics' },
  { value: '15+',  label: 'Major International Platforms' },
  { value: '50+',  label: 'Publications & Contributions' },
];

const highlights = [
  { Icon: IconBooks,       title: 'Research & Publications',   desc: 'Peer-reviewed articles, books, Globethics contributions, and media mentions on Islam and politics, religious literacy, human dignity, and sustainability.', to: '/research',      cta: 'Browse Publications' },
  { Icon: IconMicrophone,  title: 'Speaking & Events',         desc: 'Keynotes and panels at UNFCCC-COP, G20 Interfaith Forum, EU Institutions, OHCHR, ASEAN, and Carnegie Council.', to: '/speaking',      cta: 'View Events' },
  { Icon: IconLeaf,        title: 'Nglanggeran Eco-Project',   desc: 'A pioneering hub for ecology, sustainability, philosophy, and spirituality in the volcanic highlands of Gunung Kidul.', to: '/eco-project',  cta: 'Explore the Project' },
  { Icon: IconBuilding,    title: 'Organizations & Leadership', desc: 'Founder of two development foundations. Vice President of Globethics, Geneva. Associate Professor at UGM.', to: '/organizations', cta: 'View Leadership Roles' },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero__bg" />
        <div className="container home-hero__content animate-fade-up">
          <div className="home-hero__badges">
            <span className="badge badge-gold">Universitas Gadjah Mada</span>
            <span className="badge badge-gold">Globethics — Geneva</span>
          </div>
          <h1 id="home-hero-heading">
            Dr. Dicky<br />
            <em className="home-hero__name-italic">Sofjan</em>
          </h1>
          <p className="home-hero__sub">
            Associate Professor · Ethicist · Interfaith Scholar<br />
            Bridging Academia, Ethics &amp; Sustainability
          </p>
          <div className="home-hero__cta">
            <Link to="/about"   className="btn btn-gold">Explore My Work</Link>
            <Link to="/contact" className="btn btn-white" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: '#fff' }}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <div className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map(s => (
              <div key={s.label} className="home-stats__item">
                <span className="home-stats__value">{s.value}</span>
                <span className="home-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About preview ────────────────────────────────── */}
      <section className="section" aria-labelledby="home-about-heading">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__img-wrap">
              <img
                src="/dr-sofjan.jpg"
                alt="Dr. Dicky Sofjan"
                className="home-about__img"
                loading="lazy"
              />
              <div className="home-about__img-badge">
                <span>VP</span>
                <span>Globethics</span>
              </div>
            </div>
            <div className="home-about__text">
              <span className="section-label">About Dr. Sofjan</span>
              <h2 id="home-about-heading" className="section-title">
                20+ Years at the Intersection of Faith, Ethics &amp; Global Engagement
              </h2>
              <p>
                Dr. Dicky Sofjan is an Associate Professor in the Inter-Religious Studies Program at <strong>Universitas Gadjah Mada (UGM)</strong>, Indonesia, and serves as Vice President of <strong>Globethics</strong>, the international ethics network headquartered in Geneva, Switzerland.
              </p>
              <p>
                His work spans <strong>Islam and politics, religious literacy, international human affairs,</strong> and <strong>environmental sustainability</strong> — supported by grants from the EU, Ford Foundation, UNDP, and Carnegie Council, among others.
              </p>
              <div className="home-about__tags">
                {['UGM Graduate School', 'Globethics, Geneva', 'G20 Interfaith Forum', 'Yadema Foundation', 'YKPAI Foundation'].map(t => (
                  <span key={t} className="badge badge-navy">{t}</span>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">Read Full Biography</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="home-highlights-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Areas of Work</span>
            <h2 id="home-highlights-heading" className="section-title">Key Areas of Impact</h2>
          </div>
          <div className="grid-4">
            {highlights.map(h => (
              <Link key={h.title} to={h.to} className="home-highlight-card">
                <div className="home-highlight-card__icon"><h.Icon size={32} color="currentColor" /></div>
                <h3 className="home-highlight-card__title">{h.title}</h3>
                <p className="home-highlight-card__desc">{h.desc}</p>
                <span className="home-highlight-card__cta">{h.cta} <IconArrowRight size={14} color="currentColor" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eco-Project teaser ───────────────────────────── */}
      <section className="home-eco" aria-labelledby="home-eco-heading">
        <div className="container">
          <div className="home-eco__grid">
            <div>
              <span className="section-label" style={{ color: '#86efac' }}>Latest Initiative</span>
              <h2 id="home-eco-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#fff', marginBottom: '1rem' }}>
                Nglanggeran<br />Eco-Project
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', maxWidth: 440 }}>
                Envisioned as a place of reflection and a learning hub for contemporary issues in
                <strong style={{ color: '#fff' }}> ecology, sustainability, philosophy, and spirituality</strong> — set against the volcanic landscape of Gunung Kidul, Yogyakarta.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['Ecological restoration & reforestation', 'Interfaith environmental learning', 'Sustainable agriculture practices', 'Spiritual reflection & contemplation'].map(item => (
                  <li key={item} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconCheck size={13} color="#86efac" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/eco-project" className="btn btn-gold">Discover the Eco-Project</Link>
            </div>
            <div className="home-eco__img-col">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=85"
                alt="Nglanggeran volcanic landscape"
                className="home-eco__img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────── */}
      <section className="home-quote section-alt" aria-label="Featured quote">
        <div className="container-narrow text-center">
          <blockquote className="home-quote__text">
            "The most urgent task of our age is to nurture the ethical imagination capable of holding together our plural traditions, our shared planet, and our common humanity — with wisdom, humility, and courage."
          </blockquote>
          <cite className="home-quote__cite">— Dr. Dicky Sofjan</cite>
        </div>
      </section>

      {/* ── Supporters ───────────────────────────────────── */}
      <section className="section" aria-labelledby="home-supporters-heading">
        <div className="container text-center">
          <span className="section-label">Institutional Support</span>
          <h2 id="home-supporters-heading" className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Supported by Leading Global Institutions
          </h2>
          <div className="home-supporters">
            {['European Union', 'Ford Foundation', 'UNDP', 'US State Dept.', 'Henry Luce Foundation', 'Carnegie Council', 'Greenpeace', 'The Nature Conservancy'].map(name => (
              <div key={name} className="home-supporter-chip">{name}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
