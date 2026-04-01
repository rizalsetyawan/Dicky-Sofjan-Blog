import { useEffect, useCallback } from 'react';
import './GalleryLightbox.css';

export default function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const image = images[currentIndex];

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose();
    if (e.key === 'ArrowLeft')  onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!image) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      {/* Backdrop */}
      <div className="lightbox__backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="lightbox__modal">
        {/* Image pane */}
        <div className="lightbox__img-pane">
          <img src={image.src} alt={image.caption} className="lightbox__img" />
        </div>

        {/* Info pane */}
        <div className="lightbox__info">
          <div className="lightbox__meta-top">
            <span className="badge badge-navy">{image.category}</span>
            <span className="lightbox__counter">{currentIndex + 1} / {images.length}</span>
          </div>
          <h3 className="lightbox__caption">{image.caption}</h3>
          {image.location && (
            <p className="lightbox__loc">📍 {image.location}</p>
          )}
          {image.date && (
            <p className="lightbox__date">🗓 {image.date}</p>
          )}
          {image.tags?.length > 0 && (
            <div className="lightbox__tags">
              {image.tags.map(t => <span key={t} className="badge badge-navy">{t}</span>)}
            </div>
          )}
        </div>

        {/* Close */}
        <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Nav */}
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label="Previous photo"
        >‹</button>
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Next photo"
        >›</button>
      </div>
    </div>
  );
}
