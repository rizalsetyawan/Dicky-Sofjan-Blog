import { Link } from 'react-router-dom';
import {
  IconIslamPolitics, IconReligiousLiteracy, IconInternationalAffairs,
  IconEthics, IconSustainability, IconInterfaith,
  IconGradCap, IconDownload, IconMail,
} from '../components/Icons';
import './About.css';

const specializations = [
  { Icon: IconIslamPolitics,        title: 'Islam & Politics',            desc: 'Exploring the dynamics between Islamic political thought, governance structures, and democratic processes in Muslim-majority societies.' },
  { Icon: IconReligiousLiteracy,    title: 'Religious Literacy',          desc: 'Understanding of religious traditions, texts, and practices as foundational to pluralist coexistence and democratic citizenship.' },
  { Icon: IconInternationalAffairs, title: 'International Affairs',       desc: 'Examining the roles of faith communities, ethics networks, and civil society in shaping global governance and international relations.' },
  { Icon: IconEthics,               title: 'Ethics & Human Dignity',      desc: 'Developing applied ethical frameworks grounded in diverse traditions to address contemporary challenges in governance, technology, and development.' },
  { Icon: IconSustainability,       title: 'Environmental Sustainability', desc: 'Bridging ecological science with religious and philosophical wisdom to build community-led sustainability initiatives.' },
  { Icon: IconInterfaith,           title: 'Interfaith Dialogue',         desc: 'Facilitating meaningful exchange between religious communities to build shared values and collaborative responses to global challenges.' },
];

const timeline = [
  { year: '2005–present', role: 'Associate Professor, Inter-Religious Studies', org: 'Universitas Gadjah Mada, Yogyakarta' },
  { year: '2015–present', role: 'Vice President, Board of Directors', org: 'Globethics, Geneva, Switzerland' },
  { year: '2016–present', role: 'Founder & President, Board of Directors', org: 'YKPAI Indonesian Foundation for Peace & Academic Cooperation' },
  { year: '2012–present', role: 'Founder & President, Board of Directors', org: 'Yadema Foundation for International Ethics' },
  { year: '2017',         role: 'Visiting Fellow', org: 'Carnegie Council for Ethics in International Affairs, New York' },
  { year: '2016',         role: 'Visiting Professor', org: 'University of Bologna, Italy' },
  { year: '2013',         role: 'Visiting Scholar', org: 'International Research Institute, Japan' },
  { year: '2010',         role: 'Visiting Researcher', org: 'Institute for Humanities, Bulgaria' },
  { year: '2008',         role: 'Visiting Scholar', org: 'Research Institute, Iran' },
];

const education = [
  { degree: 'Ph.D. in Religious Studies', institution: 'McGill University, Canada', year: 'with distinction' },
  { degree: 'M.A. in Islamic Studies', institution: 'Leiden University, Netherlands', year: '' },
  { degree: 'B.A. in Theology & Philosophy', institution: 'Universitas Gadjah Mada, Indonesia', year: 'Summa Cum Laude' },
];

export default function About() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <span className="section-label">About</span>
          <h1 id="about-heading">Dr. Dicky Sofjan</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Associate Professor · Ethicist · International Thought Leader — 20+ Years Bridging Academia, Interfaith Dialogue, and Global Sustainability
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="section" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about__grid">
            {/* Sidebar */}
            <aside className="about__sidebar">
              <div className="about__photo-wrap">
                <img
                  src="/dr-sofjan.jpg"
                  alt="Dr. Dicky Sofjan"
                  className="about__photo"
                  loading="lazy"
                />
              </div>
              <div className="about__sidebar-info">
                <div className="about__info-item"><span>Position</span><strong>Associate Professor</strong></div>
                <div className="about__info-item"><span>Institution</span><strong>Universitas Gadjah Mada</strong></div>
                <div className="about__info-item"><span>Program</span><strong>Inter-Religious Studies</strong></div>
                <div className="about__info-item"><span>Other Role</span><strong>VP, Globethics (Geneva)</strong></div>
                <div className="about__info-item"><span>Location</span><strong>Yogyakarta, Indonesia</strong></div>
                <div className="about__info-item"><span>Experience</span><strong>20+ Years International</strong></div>
              </div>
              <div className="about__sidebar-cta">
                <a href="/dicky-sofjan-cv.pdf" download className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
                  <IconDownload size={15} color="currentColor" /> Download CV (PDF)
                </a>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
                  <IconMail size={15} color="currentColor" /> Contact Dr. Sofjan
                </Link>
              </div>
            </aside>

            {/* Biography text */}
            <article>
              <span className="section-label">Biography</span>
              <h2 id="bio-heading" className="section-title">A Life in Service of Understanding</h2>
              <p>Dr. Dicky Sofjan is one of Indonesia's most prominent scholars at the intersection of religion, ethics, and international affairs. As an Associate Professor in the <strong>Inter-Religious Studies (IRS) Program</strong> at the Graduate School of Universitas Gadjah Mada (UGM) — Indonesia's oldest and most prestigious university — Dr. Sofjan has spent more than two decades cultivating a body of work that bridges the finest traditions of Indonesian Islamic scholarship while globally engaged through Globethics.</p>
              <p>Simultaneously, Dr. Sofjan serves as <strong>Vice President of Globethics</strong>, the international ethics network headquartered in Geneva, Switzerland, engaging with ethical challenges across more than 130 partner countries. This dual identity — deeply rooted in Indonesian Islamic scholarship while globally engaged through Globethics — gives Dr. Sofjan a uniquely powerful vantage point from which to address the world's most pressing questions at the intersection of faith, ethics, and development.</p>
              <p>His research traverses <strong>Islam and politics, religious literacy, international human rights, human dignity, development ethics,</strong> and <strong>environmental sustainability</strong>. He has published extensively in leading peer-reviewed journals including the <em>Review of Faith and International Affairs</em>, <em>Journal of Religions</em>, <em>Journal of Middle Eastern and North African Studies</em>, and <em>Al-Jam'an</em>, and through major publishers including Areca Books, Yayasan Obor, and Mizan.</p>
              <p>As an accomplished international speaker and thought leader, Dr. Sofjan has presented at the highest global platforms — including the <strong>UNFCCC Conference of the Parties (COP28, COP27, COP26)</strong>, the <strong>G20 Interfaith Forum</strong>, <strong>European Union institutions</strong>, the <strong>UN Office of the High Commissioner for Human Rights (OHCHR)</strong>, ASEAN meetings, and Carnegie Council — consistently bringing perspectives from Islamic ethics and Southeast Asian religious pluralism to international policy conversations.</p>
              <p>Beyond academia and international advocacy, Dr. Sofjan has built institutional legacies through his role as <strong>Founder and President of two development foundations</strong>: Yayasan Dharma Etika Mandiri (Yadema), focused on applied ethics and civic education; and Yayasan Kerjasama Perdamaian dan Akademik Indonesia (YKPAI), dedicated to peacebuilding and academic cooperation.</p>
              <p>His latest and perhaps most personal initiative is the <strong>Nglanggeran Eco-Project</strong> in Gunung Kidul, Yogyakarta — a transformative community project envisioned as both a place of spiritual reflection and an active learning hub for ecology, sustainability, philosophy, and interfaith environmental ethics.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section section-alt" aria-labelledby="spec-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Expertise</span>
            <h2 id="spec-heading" className="section-title">Research Specializations</h2>
          </div>
          <div className="grid-3">
            {specializations.map(s => (
              <div key={s.title} className="about__spec-card">
                <div className="about__spec-icon"><s.Icon size={32} color="currentColor" /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Career</span>
            <h2 id="timeline-heading" className="section-title">Professional Timeline</h2>
          </div>
          <div className="about__timeline">
            {timeline.map((item, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-year">{item.year}</div>
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <strong>{item.role}</strong>
                  <span>{item.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section section-alt" aria-labelledby="edu-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Education</span>
            <h2 id="edu-heading" className="section-title">Academic Qualifications</h2>
          </div>
          <div className="about__edu-grid">
            {education.map(e => (
              <div key={e.degree} className="about__edu-card">
                <div className="about__edu-cap"><IconGradCap size={28} color="currentColor" /></div>
                <div>
                  <h4>{e.degree}</h4>
                  <p>{e.institution}</p>
                  {e.year && <span className="badge badge-gold">{e.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
