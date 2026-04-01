import { useState, useEffect } from 'react';
import './Speaking.css';

const PLATFORM_META = {
  'UNFCCC-COP':           { color: '#0f6b46', label: 'Climate'        },
  'G20 Interfaith Forum': { color: '#1a4a8a', label: 'G20'            },
  'EU Institutions':      { color: '#003399', label: 'European Union' },
  'OHCHR':                { color: '#8b1a1a', label: 'Human Rights'   },
  'Carnegie Council':     { color: '#3a1a5c', label: 'Ethics'         },
  'ASEAN':                { color: '#1a3a5c', label: 'Regional'       },
  'WCC':                  { color: '#2d4a1a', label: 'Ecumenical'     },
};

const ROLE_STYLE = {
  'Keynote Speaker':   { color: '#92400e', bg: '#fef3c7' },
  'Invited Speaker':   { color: '#065f46', bg: '#d1fae5' },
  'Panel Speaker':     { color: '#1e3a8a', bg: '#dbeafe' },
  'Expert Witness':    { color: '#6d28d9', bg: '#ede9fe' },
  'Resource Person':   { color: '#0f766e', bg: '#ccfbf1' },
  'Presenter':         { color: '#1e3a8a', bg: '#dbeafe' },
  'Faith Pavilion Presenter': { color: '#065f46', bg: '#d1fae5' },
};

export default function Speaking() {
  const [events,    setEvents]   = useState([]);
  const [loading,   setLoading]  = useState(true);
  const [platform,  setPlatform] = useState('all');
  const [expanded,  setExpanded] = useState(null);

  useEffect(() => {
    fetch('/api/events')
      .then(r => r.json())
      .then(data => { setEvents(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const platforms = ['all', ...new Set(events.map(e => e.platform).filter(Boolean))];

  const filtered = platform === 'all'
    ? events
    : events.filter(e => e.platform === platform);

  const byYear = filtered.reduce((acc, ev) => {
    const y = ev.year || 'Unknown';
    if (!acc[y]) acc[y] = [];
    acc[y].push(ev);
    return acc;
  }, {});

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  const totals = {
    events:    events.length,
    platforms: [...new Set(events.map(e => e.platform))].length,
    countries: [...new Set(events.map(e => (e.location || '').split(',').pop().trim()).filter(Boolean))].length,
  };

  return (
    <main className="speaking-page">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="page-hero" aria-labelledby="speaking-h1">
        <div className="container">
          <span className="section-label">Global Engagement</span>
          <h1 id="speaking-h1">Speaking &amp; International Events</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Keynotes, expert testimonies, and panel presentations at the world's foremost policy, diplomacy, and interfaith platforms — from Geneva to Dubai, Brussels to New York.
          </p>
        </div>
      </section>

      {/* ── Totals ──────────────────────────────────────────── */}
      <div className="speaking__totals-bar">
        <div className="container">
          <div className="speaking__totals-inner">
            {[
              { n: totals.events,    l: 'Major Engagements' },
              { n: totals.platforms, l: 'Global Platforms'  },
              { n: totals.countries, l: 'Countries'         },
              { n: '20+',            l: 'Years Speaking'    },
            ].map((s, i) => (
              <div key={i} className="speaking__total-item">
                <span className="speaking__total-num">{s.n}</span>
                <span className="speaking__total-lbl">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Platform filter */}
          <div className="speaking__filter-row">
            <span className="speaking__filter-label">Filter by platform:</span>
            <div className="speaking__filters">
              {platforms.map(p => (
                <button
                  key={p}
                  id={`speaking-filter-${p.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`speaking__filter ${platform === p ? 'speaking__filter--active' : ''}`}
                  onClick={() => setPlatform(p)}
                >
                  {p === 'all' ? 'All Platforms' : p}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="speaking__loading">Loading events…</div>
          ) : (
            <div className="speaking__content">
              {years.map(year => (
                <div key={year} className="speaking__year-section">
                  {/* Year marker */}
                  <div className="speaking__year-marker">
                    <span className="speaking__year-num">{year}</span>
                    <div className="speaking__year-line" />
                    <span className="speaking__year-count">
                      {byYear[year].length} event{byYear[year].length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Events */}
                  <div className="speaking__events-col">
                    {byYear[year].map(ev => {
                      const meta  = PLATFORM_META[ev.platform] || { color: '#1a2e4a', label: ev.platform };
                      const role  = ROLE_STYLE[ev.role]        || { color: '#1e3a8a', bg: '#dbeafe' };
                      const isExp = expanded === ev.id;

                      return (
                        <article
                          key={ev.id}
                          id={`event-${ev.id}`}
                          className={`ev-card ${isExp ? 'ev-card--expanded' : ''}`}
                        >
                          {/* Platform accent stripe */}
                          <div
                            className="ev-card__stripe"
                            style={{ background: meta.color }}
                            aria-hidden="true"
                          />

                          <div className="ev-card__body">
                            {/* Row 1: Title + Role badge */}
                            <div className="ev-card__top">
                              <h3 className="ev-card__title">{ev.title}</h3>
                              <span
                                className="ev-card__role"
                                style={{ color: role.color, background: role.bg }}
                              >
                                {ev.role}
                              </span>
                            </div>

                            {/* Row 2: Meta chips */}
                            <div className="ev-card__meta">
                              <span className="ev-card__platform-chip" style={{ background: meta.color }}>
                                {meta.icon} {ev.platform}
                              </span>
                              {ev.location && (
                                <span className="ev-card__meta-item">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                  {ev.location}
                                </span>
                              )}
                              {ev.date && (
                                <span className="ev-card__meta-item">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                  {ev.date}
                                </span>
                              )}
                            </div>

                            {/* Topic */}
                            {ev.topic && (
                              <p className="ev-card__topic">
                                <strong>Topic:</strong> {ev.topic}
                              </p>
                            )}

                            {/* Expandable description */}
                            {ev.description && (
                              <>
                                {isExp && (
                                  <p className="ev-card__desc">{ev.description}</p>
                                )}
                                <button
                                  className="ev-card__toggle"
                                  onClick={() => setExpanded(isExp ? null : ev.id)}
                                  aria-expanded={isExp}
                                >
                                  {isExp ? 'Show less ↑' : 'Read more ↓'}
                                </button>
                              </>
                            )}

                            {/* Tags */}
                            {ev.tags?.length > 0 && (
                              <div className="ev-card__tags">
                                {ev.tags.map(t => (
                                  <span key={t} className="ev-card__tag">{t}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="speaking__empty">
                  <p>No events found for this platform.</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setPlatform('all')}>Clear filter</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-narrow text-center">
          <span className="section-label">Bookings</span>
          <h2 className="section-title">Invite Dr. Sofjan to Speak</h2>
          <p style={{ marginBottom: '2rem' }}>
            Dr. Sofjan is available for keynote addresses, expert panel participation, workshop facilitation, and lectures on Islam &amp; politics, ethics, interfaith dialogue, environmental sustainability, and global governance.
          </p>
          <a href="/contact" className="btn btn-primary">Submit a Speaking Invitation</a>
        </div>
      </section>
    </main>
  );
}
