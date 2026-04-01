import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import GalleryLightbox from '../components/GalleryLightbox';
import './Gallery.css';

const galleryCategories = [
  { id: 'all',        label: 'All Photos' },
  { id: 'academia',   label: 'Academia' },
  { id: 'conference', label: 'Conferences' },
  { id: 'ecoproject', label: 'Eco-Project' },
  { id: 'general',    label: 'General' },
];

export default function Gallery() {
  const [images,         setImages]         = useState([]);
  const [loading,        setLoading]        = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex,  setLightboxIndex]  = useState(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then(r => r.json())
      .then(data => { setImages(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() =>
    activeCategory === 'all' ? images : images.filter(img => img.category === activeCategory),
    [images, activeCategory]
  );

  return (
    <main>
      <section className="page-hero" aria-labelledby="gallery-heading">
        <div className="container">
          <span className="section-label">Visual Archive</span>
          <h1 id="gallery-heading">Photo Gallery</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Twenty years in images — from academic halls in Yogyakarta to UN conferences in Geneva, ecological work in Gunung Kidul, and everything in between.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery__filters">
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                className={`gallery__filter-btn ${activeCategory === cat.id ? 'gallery__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="gallery__filter-count">
                  {cat.id === 'all' ? images.length : images.filter(img => img.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          <p className="gallery__count">Showing <strong>{filtered.length}</strong> photo{filtered.length !== 1 ? 's' : ''}</p>

          {loading ? (
            <div style={{ textAlign: 'center', color: 'var(--text-light)', padding: '4rem', fontStyle: 'italic' }}>Loading gallery…</div>
          ) : (
            <div className="gallery__grid">
              {filtered.map((img, idx) => (
                <button
                  key={img.id}
                  id={`gallery-img-${img.id}`}
                  className="gallery__item"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open photo: ${img.caption}`}
                >
                  <img src={img.thumb || img.src} alt={img.caption} className="gallery__img" loading="lazy" />
                  <div className="gallery__overlay">
                    <div className="gallery__overlay-content">
                      <span className="gallery__overlay-caption">{img.caption}</span>
                      <div className="gallery__overlay-meta">
                        {img.location && <span>📍 {img.location}</span>}
                        {img.date     && <span>🗓 {img.date}</span>}
                      </div>
                    </div>
                    <div className="gallery__overlay-icon">⤢</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => Math.max(0, i - 1))}
          onNext={() => setLightboxIndex(i => Math.min(filtered.length - 1, i + 1))}
        />
      )}
    </main>
  );
}
