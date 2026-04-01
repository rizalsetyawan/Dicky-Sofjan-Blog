import { useState, useEffect } from 'react';
import './Research.css';

const categoryBadge = { journal: 'badge-navy', book: 'badge-green', chapter: 'badge-blue', globethics: 'badge-purple', media: 'badge-teal' };
const categoryLabel = { journal: 'Journal Article', book: 'Book', chapter: 'Book Chapter', globethics: 'Globethics', media: 'Media' };

const cats = [
  { id: 'all', label: 'All' },
  { id: 'journal', label: 'Journal Articles' },
  { id: 'book', label: 'Books' },
  { id: 'chapter', label: 'Book Chapters' },
  { id: 'globethics', label: 'Globethics' },
  { id: 'media', label: 'Media' },
];

export default function Research() {
  const [pubs,           setPubs]           = useState([]);
  const [loading,        setLoading]        = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery,    setSearchQuery]    = useState('');

  useEffect(() => {
    fetch('/api/publications')
      .then(r => r.json())
      .then(data => { setPubs(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = pubs.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchQ = !q
      || p.title.toLowerCase().includes(q)
      || (p.journal || '').toLowerCase().includes(q)
      || (p.publisher || '').toLowerCase().includes(q)
      || (p.outlet || '').toLowerCase().includes(q)
      || (p.tags || []).some(t => t.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  return (
    <main>
      <section className="page-hero" aria-labelledby="research-heading">
        <div className="container">
          <span className="section-label">Scholarship</span>
          <h1 id="research-heading">Research &amp; Publications</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Peer-reviewed articles, books, Globethics contributions, and media mentions spanning two decades of scholarship on religion, ethics, and sustainability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="research__controls">
            <div className="research__search">
              <span className="research__search-icon">🔍</span>
              <input
                id="publications-search"
                type="text"
                placeholder="Search publications, journals, topics…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="research__search-input"
              />
            </div>
            <div className="research__filters">
              {cats.map(cat => (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  className={`research__filter-btn ${activeCategory === cat.id ? 'research__filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  <span className="research__filter-count">
                    {pubs.filter(p => cat.id === 'all' || p.category === cat.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="research__loading">Loading publications…</div>
          ) : (
            <>
              <p className="research__result-count">
                Showing <strong>{filtered.length}</strong> publication{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="research__list">
                {filtered.length === 0 ? (
                  <div className="research__empty">
                    <p>No publications found.</p>
                    <button className="btn btn-outline btn-sm" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>Clear filters</button>
                  </div>
                ) : filtered.map(pub => (
                  <article key={pub.id} className="pub-card" id={`pub-${pub.id}`}>
                    <div className="pub-card__header">
                      <span className={`badge ${categoryBadge[pub.category] || 'badge-navy'}`}>{categoryLabel[pub.category] || pub.category}</span>
                      <span className="pub-card__year">{pub.year || pub.date}</span>
                    </div>
                    <h3 className="pub-card__title">{pub.title}</h3>
                    <p className="pub-card__source">
                      {pub.journal || pub.publisher || pub.outlet || pub.bookTitle}
                      {pub.volume && `, Vol. ${pub.volume}`}
                      {pub.issue  && `, No. ${pub.issue}`}
                      {pub.pages  && `, pp. ${pub.pages}`}
                    </p>
                    {(pub.abstract || pub.description) && (
                      <p className="pub-card__abstract">{pub.abstract || pub.description}</p>
                    )}
                    {pub.tags?.length > 0 && (
                      <div className="pub-card__tags">
                        {pub.tags.map(t => <span key={t} className="badge badge-navy">{t}</span>)}
                      </div>
                    )}
                    {(pub.doi || pub.url) && (
                      <a href={pub.doi || pub.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm pub-card__link">
                        {pub.doi ? 'View Article →' : 'Read More →'}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
