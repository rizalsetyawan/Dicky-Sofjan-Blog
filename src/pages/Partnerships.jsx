import { useState } from 'react';
import {
  LogoEU, LogoDoS, LogoUNDP, LogoASEAN,
  LogoFord, LogoLuce, LogoCarnegie, LogoGreenpeace,
  LogoTNC, LogoGlobethics, LogoUGM, LogoWCC,
} from '../components/PartnerLogos';
import './Partnerships.css';

const partners = [
  {
    id: 1, Logo: LogoEU,
    name: 'European Union',
    category: 'bilateral',
    role: 'Research & Programme Funder',
    desc: 'Grant support for comparative governance, democratic resilience, and interfaith dialogue research programmes across the Asia-Pacific region.',
    since: '2014',
    website: 'https://europa.eu',
  },
  {
    id: 2, Logo: LogoDoS,
    name: 'US Department of State',
    category: 'bilateral',
    role: 'International Visitor Leadership',
    desc: 'International Visitor Leadership Programme and democracy research grants supporting academic exchanges between Indonesian and US scholars.',
    since: '2012',
    website: 'https://state.gov',
  },
  {
    id: 3, Logo: LogoUNDP,
    name: 'UNDP',
    fullName: 'United Nations Development Programme',
    category: 'bilateral',
    role: 'Sustainable Development Partner',
    desc: 'Collaboration on governance capacity building, sustainable development goals, and religion-and-development policy frameworks.',
    since: '2016',
    website: 'https://undp.org',
  },
  {
    id: 4, Logo: LogoASEAN,
    name: 'ASEAN Secretariat',
    category: 'bilateral',
    role: 'Expert Adviser & Resource Person',
    desc: 'Appointed resource person and expert adviser on religion, culture, and social cohesion across ASEAN member states.',
    since: '2018',
    website: 'https://asean.org',
  },
  {
    id: 5, Logo: LogoFord,
    name: 'Ford Foundation',
    category: 'foundation',
    role: 'Research Grant Recipient',
    desc: 'Research grants supporting governance, human rights, and social justice programmes in Indonesia and the broader Muslim world.',
    since: '2010',
    website: 'https://fordfoundation.org',
  },
  {
    id: 6, Logo: LogoLuce,
    name: 'Henry Luce Foundation',
    category: 'foundation',
    role: 'Asia Programme Grantee',
    desc: 'Asia Programme grants supporting academic research on religion, politics, and public life in Southeast Asia.',
    since: '2015',
    website: 'https://hluce.org',
  },
  {
    id: 7, Logo: LogoCarnegie,
    name: 'Carnegie Council',
    fullName: 'Carnegie Council for Ethics in International Affairs',
    category: 'foundation',
    role: 'Visiting Fellow',
    desc: 'Fellowship and research support for international ethics and foreign policy, including a visiting fellowship in New York.',
    since: '2017',
    website: 'https://carnegiecouncil.org',
  },
  {
    id: 8, Logo: LogoGreenpeace,
    name: 'Greenpeace',
    category: 'ngo',
    role: 'Research Collaborator',
    desc: 'Research collaboration on environmental advocacy, Islamic ecological ethics, and community-based conservation movements.',
    since: '2019',
    website: 'https://greenpeace.org',
  },
  {
    id: 9, Logo: LogoTNC,
    name: 'The Nature Conservancy',
    category: 'ngo',
    role: 'Conservation Ethics Partner',
    desc: 'Partnership on conservation ethics, indigenous ecological wisdom, and support for the Nglanggeran Eco-Project.',
    since: '2020',
    website: 'https://nature.org',
  },
  {
    id: 10, Logo: LogoGlobethics,
    name: 'Globethics',
    fullName: 'Globethics — International Ethics Network',
    category: 'academic',
    role: 'Vice President, Board of Directors',
    desc: 'Global ethics network based in Geneva, partnering with 130+ countries. Dr. Sofjan serves as elected Vice President since 2015.',
    since: '2015',
    website: 'https://globethics.net',
  },
  {
    id: 11, Logo: LogoUGM,
    name: 'Universitas Gadjah Mada',
    category: 'academic',
    role: 'Associate Professor (Tenured)',
    desc: "Indonesia's oldest and most prestigious university. Dr. Sofjan has been a tenured faculty member in Inter-Religious Studies since 2005.",
    since: '2005',
    website: 'https://ugm.ac.id',
  },
  {
    id: 12, Logo: LogoWCC,
    name: 'World Council of Churches',
    category: 'academic',
    role: 'Interfaith Research Partner',
    desc: 'Collaboration on ecumenical dialogue, human dignity research, and interfaith environmental ethics programmes.',
    since: '2016',
    website: 'https://oikoumene.org',
  },
];

const cats = [
  { id: 'all',        label: 'All Partners',              count: partners.length },
  { id: 'bilateral',  label: 'Bilateral & Multilateral',  count: 4 },
  { id: 'foundation', label: 'Foundations',               count: 3 },
  { id: 'ngo',        label: 'NGOs & Environment',        count: 2 },
  { id: 'academic',   label: 'Academic & Institutional',  count: 3 },
];

export default function Partnerships() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? partners : partners.filter(p => p.category === active);

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="page-hero" aria-labelledby="partnerships-heading">
        <div className="container">
          <span className="section-label">Global Network</span>
          <h1 id="partnerships-heading">Partner Institutions &amp; Funders</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.72)' }}>
            A two-decade network of bilateral agencies, international foundations, NGOs, and academic institutions that have shaped and supported Dr. Sofjan's research, advocacy, and international engagement.
          </p>
        </div>
      </section>

      {/* ── Summary strip ───────────────────────────────── */}
      <div className="partners__summary-strip">
        <div className="container">
          {[
            { n: '12+', l: 'Partner Institutions' },
            { n: '4',   l: 'Bilateral / Multilateral' },
            { n: '3',   l: 'Major Foundations' },
            { n: '20+', l: 'Years of Partnership' },
          ].map(s => (
            <div key={s.l} className="partners__summary-item">
              <span className="partners__summary-num">{s.n}</span>
              <span className="partners__summary-lbl">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Partners ────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Filter tabs */}
          <div className="partners__tabs" role="tablist" aria-label="Filter by partner type">
            {cats.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                id={`partner-tab-${cat.id}`}
                className={`partners__tab ${active === cat.id ? 'partners__tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
                <span className="partners__tab-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Partner grid */}
          <div className="partners__grid">
            {filtered.map(partner => {
              const LogoComponent = partner.Logo;
              return (
                <a
                  key={partner.id}
                  id={`partner-${partner.id}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                  aria-label={`Visit ${partner.name}`}
                >
                  {/* Logo */}
                  <div className="partner-card__logo-area">
                    <LogoComponent size={68} />
                  </div>

                  {/* Info */}
                  <div className="partner-card__info">
                    <div className="partner-card__header">
                      <h3 className="partner-card__name">{partner.name}</h3>
                      <span className="partner-card__since">Since {partner.since}</span>
                    </div>
                    <p className="partner-card__role">{partner.role}</p>
                    <p className="partner-card__desc">{partner.desc}</p>
                  </div>

                  {/* Arrow */}
                  <div className="partner-card__ext">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8.5 2.5H13.5V7.5M13.5 2.5L6 10M3 4H1V15H12V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Engagement note ─────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-narrow text-center">
          <span className="section-label">Collaborate</span>
          <h2 className="section-title">Interested in Partnership?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-mid)', fontSize: '1.02rem', lineHeight: 1.75 }}>
            Dr. Sofjan actively welcomes research collaborations, speaking invitations, grant partnerships, and institutional cooperation — particularly in the areas of Islamic ethics, interfaith environmental dialogue, and sustainable development.
          </p>
          <a href="/contact" className="btn btn-primary">Send a Partnership Enquiry</a>
        </div>
      </section>
    </main>
  );
}
