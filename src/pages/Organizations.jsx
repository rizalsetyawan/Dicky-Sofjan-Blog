import './Organizations.css';

const orgs = [
  {
    id: 1,
    logo:  'UGM',
    color: '#003399',
    name:  'Universitas Gadjah Mada',
    abbr:  'UGM',
    role:  'Associate Professor — Inter-Religious Studies',
    since: '2005',
    website: 'https://ugm.ac.id',
    location: 'Yogyakarta, Indonesia',
    description: 'Indonesia\'s oldest and most prestigious public university. Dr. Sofjan is a tenured Associate Professor in the Inter-Religious Studies (IRS) Program within the Graduate School — a programme he helped develop into one of Southeast Asia\'s leading postgraduate programmes in religious pluralism, ethics, and interfaith relations.',
    responsibilities: [
      'Teaching graduate courses in Islamic politics, ethics, and inter-religious dialogue',
      'Supervising doctoral and master\'s thesis research',
      'Co-ordinating international academic partnerships and faculty exchanges',
      'Contributing to the university\'s global ranking and research output',
    ],
  },
  {
    id: 2,
    logo:  'GE',
    color: '#1b4332',
    name:  'Globethics',
    abbr:  'Globethics',
    role:  'Vice President, Board of Directors',
    since: '2015',
    website: 'https://globethics.net',
    location: 'Geneva, Switzerland',
    description: 'A global ethics network based in Geneva, Switzerland, partnering with more than 130 countries. Globethics is the world\'s most extensive network on applied and academic ethics, spanning governance, business, healthcare, education, and environmental ethics.',
    responsibilities: [
      'Governance oversight as elected Vice President of the Board',
      'Strategic partnerships with UN agencies and international institutions',
      'Contributing to the Globethics Publications Series on religion and ethics',
      'Representing Asian Islamic perspectives in global ethics discourse',
    ],
  },
  {
    id: 3,
    logo:  'YD',
    color: '#7c3aed',
    name:  'Yayasan Dharma Etika Mandiri',
    abbr:  'Yadema',
    role:  'Founder & President, Board of Directors',
    since: '2012',
    website: null,
    location: 'Yogyakarta, Indonesia',
    description: 'A development foundation established by Dr. Sofjan, focused on applied ethics, civic education, and community empowerment. Yadema designs and implements educational programmes that build ethical leadership capacity at grassroots and institutional levels across Indonesia.',
    responsibilities: [
      'Founding vision, strategic leadership, and governance',
      'National applied ethics training and facilitation programmes',
      'Civic education curricula for secondary and tertiary institutions',
      'Partnerships with Indonesian government agencies and civil society',
    ],
  },
  {
    id: 4,
    logo:  'YK',
    color: '#c9a96e',
    name:  'Yayasan Kerjasama Perdamaian dan Akademik Indonesia',
    abbr:  'YKPAI',
    role:  'Founder & President, Board of Directors',
    since: '2016',
    website: null,
    location: 'Yogyakarta, Indonesia',
    description: 'A foundation dedicated to peacebuilding and academic cooperation, with a particular focus on cultivating Indonesian scholarship and diplomatic engagement within the broader Asia-Pacific and Muslim world. YKPAI organises track-two dialogues, academic conferences, and cross-cultural exchange programmes.',
    responsibilities: [
      'Founding governance and strategic direction',
      'Track-two dialogue and peacebuilding facilitation',
      'International academic exchange and research partnerships',
      'Peacebuilding education for religious leaders and community actors',
    ],
  },
];

export default function Organizations() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="orgs-heading">
        <div className="container">
          <span className="section-label">Leadership & Institutional Roles</span>
          <h1 id="orgs-heading">Organizations</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Institutional leadership spanning academic institutions, international ethics networks, and civil society foundations across four continents.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {orgs.map((org, idx) => (
            <article key={org.id} id={`org-${org.id}`} className={`org-card ${idx % 2 === 1 ? 'org-card--reverse' : ''}`}>
              <div className="org-card__accent" style={{ background: org.color }}>
                <div className="org-card__logo-circle">
                  <span className="org-card__logo-text">{org.logo}</span>
                </div>
                <span className="org-card__abbr">{org.abbr}</span>
                <div className="org-card__since">
                  <span>Since</span>
                  <strong>{org.since}</strong>
                </div>
              </div>
              <div className="org-card__content">
                <div className="org-card__header">
                  <div>
                    <h2 className="org-card__name">{org.name}</h2>
                    <p className="org-card__role">{org.role}</p>
                    <div className="org-card__meta">
                      <span>📍 {org.location}</span>
                      {org.website && (
                        <a href={org.website} target="_blank" rel="noopener noreferrer" className="org-card__link">
                          🌐 {org.website.replace('https://', '')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="org-card__desc">{org.description}</p>
                <div className="org-card__responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {org.responsibilities.map(r => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
