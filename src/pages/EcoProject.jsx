import { Link } from 'react-router-dom';
import { IconTree, IconSprout, IconDove, IconMeditation, IconAcademic, IconHandshake, IconPin, IconLeaf } from '../components/Icons';
import './EcoProject.css';

const pillars = [
  { Icon: IconTree,       title: 'Ecological Restoration',       desc: 'Native reforestation and habitat rehabilitation across the Gunung Kidul volcanic plateau, working with local communities to restore endemic flora.' },
  { Icon: IconSprout,     title: 'Sustainable Agriculture',      desc: 'Organic permaculture practices, water conservation systems, and community food gardens rooted in agroecological principles.' },
  { Icon: IconDove,       title: 'Interfaith Environmental Ethics', desc: 'A centre for reflection on Islamic, Buddhist, Christian, and Hindu environmental ethics — exploring transcultural approaches to ecological care.' },
  { Icon: IconMeditation, title: 'Spiritual Contemplation',      desc: 'Dedicated spaces for personal and communal reflection inspired by the spiritual dimensions of natural beauty and ecological interdependence.' },
  { Icon: IconAcademic,   title: 'Environmental Education',      desc: 'Residential programmes for students, faith leaders, and researchers exploring the intersections of ecology, philosophy, and sustainability.' },
  { Icon: IconHandshake,  title: 'Community Partnership',        desc: 'Working hand-in-hand with Nglanggeran village communities, supporting local livelihoods while building long-term ecological resilience.' },
];

const timeline = [
  { year: '2019', phase: 'Vision & Land', desc: 'Dr. Sofjan envisions the Eco-Project during fieldwork in Gunung Kidul. Initial land secured in the volcanic highlands of Nglanggeran.' },
  { year: '2020', phase: 'Community Engagement', desc: 'First community consultations with village leaders and local ecological experts. Framework for community partnership established.' },
  { year: '2021', phase: 'Design & Planning', desc: 'Architectural and ecological planning phase. Partnerships secured with The Nature Conservancy and Greenpeace Southeast Asia.' },
  { year: '2022', phase: 'Foundation Works', desc: 'Initial construction and reforestation programmes begin. First ecological surveys and soil restoration projects launched.' },
  { year: '2023', phase: 'Programme Launch', desc: 'First interfaith environmental ethics retreat hosted. Educational partnerships established with UGM and international institutions.' },
  { year: '2024+', phase: 'Expansion', desc: 'Full facilities development, international residency programme, and regional sustainability research hub in development.' },
];

export default function EcoProject() {
  return (
    <main>
      {/* Hero */}
      <section className="eco-hero" aria-labelledby="eco-heading">
        <div className="eco-hero__bg" />
        <div className="container eco-hero__content">
          <span className="section-label" style={{ color: '#86efac' }}>Latest Initiative</span>
          <h1 id="eco-heading">Nglanggeran<br />Eco-Project</h1>
          <p className="eco-hero__tagline">
            Where ecology meets philosophy, spirituality meets science,<br />
            and ancient landscapes inspire contemporary wisdom.
          </p>
          <div className="eco-hero__meta">
              <span><IconPin size={13} color="rgba(255,255,255,0.7)" /> Gunung Kidul, Yogyakarta</span>
              <span><IconLeaf size={13} color="rgba(255,255,255,0.7)" /> Est. 2019</span>
              <span>Community-led Initiative</span>
            </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section" aria-labelledby="eco-vision-heading">
        <div className="container">
          <div className="eco-vision__grid">
            <div>
              <span className="section-label">Our Vision</span>
              <h2 id="eco-vision-heading" className="section-title">A Living Laboratory for Ecological Wisdom</h2>
              <p>The Nglanggeran Eco-Project is Dr. Sofjan's most personal and ambitious undertaking — a transformative initiative set in the volcanic landscape of Gunung Kidul, Yogyakarta. Envisioned as both a <strong>place of spiritual reflection</strong> and an <strong>active learning hub</strong>, the project synthesises the values of ecology, sustainability, philosophy, and interfaith environmental ethics.</p>
              <p>Located in one of Java's most remarkable geological landscapes — the ancient volcanic plug mountains of Nglanggeran — the project holds dear what Dr. Sofjan believes are four pillars of a meaningful human life: scholarship, community, land, spirit, and responsibility to future generations.</p>
              <p>The project aspires to be a model of ecologically sustainable community development, demonstrating how faith traditions, philosophical wisdom, and scientific knowledge can work together to address the ecological crisis.</p>
              <div className="eco-vision__stats">
                {[{ v: '40+', l: 'Hectares' }, { v: '15+', l: 'Partner Orgs' }, { v: '200+', l: 'Community Members' }, { v: '5+', l: 'Active Programmes' }].map(s => (
                  <div key={s.l} className="eco-vision__stat">
                    <strong>{s.v}</strong><span>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="eco-vision__img-wrap">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=85" alt="Nglanggeran Eco-Project" className="eco-vision__img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section-alt" aria-labelledby="eco-pillars-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Core Programmes</span>
            <h2 id="eco-pillars-heading" className="section-title">Six Pillars of the Project</h2>
          </div>
          <div className="grid-3">
            {pillars.map(p => (
              <div key={p.title} className="eco-pillar">
                <div className="eco-pillar__icon"><p.Icon size={32} color="currentColor" /></div>
                <h3 className="eco-pillar__title">{p.title}</h3>
                <p className="eco-pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo mosaic */}
      <section className="eco-gallery" aria-label="Eco-Project photo mosaic">
        <div className="eco-gallery__mosaic">
          {[
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
            'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
            'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
          ].map((src, i) => (
            <div key={i} className={`eco-gallery__img eco-gallery__img--${i}`}>
              <img src={src} alt={`Eco-Project landscape ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-labelledby="eco-timeline-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Development</span>
            <h2 id="eco-timeline-heading" className="section-title">Project Timeline</h2>
          </div>
          <div className="eco-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="eco-timeline__item">
                <div className="eco-timeline__year">{item.year}</div>
                <div className="eco-timeline__connector"><div className="eco-timeline__dot" /></div>
                <div className="eco-timeline__content">
                  <h4>{item.phase}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Village Highlight */}
      <section className="section section-alt" aria-labelledby="eco-village-heading">
        <div className="container">
          <div className="eco-vision__grid" style={{ alignItems: 'center' }}>
            <div className="eco-vision__img-wrap eco-vision__img-wrap--reverse">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=85" alt="Nglanggeran Eco-Village" className="eco-vision__img" loading="lazy" />
            </div>
            <div>
              <span className="section-label">Residential Retreat</span>
              <h2 id="eco-village-heading" className="section-title">Nglanggeran Eco-Village</h2>
              <p>Experience the Eco-Project firsthand at our residential retreat. The <strong>Nglanggeran Eco-Village</strong> offers 10 rustic, recycled teakwood villas perched on the edge of the Pentung River, serving as the physical sanctuary for our broader ecological initiatives.</p>
              <p>Designed for slow living and meaningful contemplation, the Eco-Village is the perfect place for private retreats, ecological residencies, or simply disconnecting from hypermodernity to awaken the soul in the presence of nature.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--gold)' }}>✦</span> Riverside A-Frames, Limasan & Gladak traditional villas</li>
                <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--gold)' }}>✦</span> Multi-purpose amphitheatre & "Eco-sophy Lane"</li>
                <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--gold)' }}>✦</span> Immersive slow living and ecological conservation activities</li>
              </ul>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="https://eco-village.nglanggeran.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Visit Eco-Village Website <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eco-cta">
        <div className="container text-center">
          <h2>Interested in the Eco-Project?</h2>
          <p>For research collaborations, educational partnerships, visit requests, or volunteer opportunities, please get in touch.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-gold">Contact for Inquiries</Link>
            <a href="https://eco-village.nglanggeran.com/" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}>Book a Villa</a>
          </div>
        </div>
      </section>
    </main>
  );
}
