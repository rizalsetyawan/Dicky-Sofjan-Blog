import { useState, useEffect, useRef } from 'react';
import AdminLayout from './AdminLayout';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

const defaultForm = { caption: '', location: '', date: '', category: 'academia', tags: '' };
const categories = ['academia', 'conference', 'ecoproject', 'general'];

export default function AdminGallery() {
  const { authFetch } = useAdminAuth();
  const [photos,   setPhotos]   = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [dragging, setDragging] = useState(false);
  const [form,     setForm]     = useState(defaultForm);
  const [editId,   setEditId]   = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error,    setError]    = useState('');
  const fileInputRef = useRef();

  const loadPhotos = () => {
    setLoading(true);
    fetch('/api/gallery').then(r => r.json()).then(data => { setPhotos(data); setLoading(false); });
  };

  useEffect(() => { loadPhotos(); }, []);

  // ── Upload handler ──────────────────────────────────────
  const handleFiles = async (files) => {
    const file = files[0];
    if (!file || !file.type.startsWith('image/')) { setError('Please select an image file.'); return; }
    setShowModal(true);
    setEditId(null);
    setForm(f => ({ ...defaultForm }));
    // Store file ref on window for upload on save
    window._pendingUploadFile = file;
  };

  const handleDrop = (e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); };

  const handleSaveNew = async () => {
    const file = window._pendingUploadFile;
    if (!file) { setError('No file selected.'); return; }
    setUploading(true);
    setError('');
    const fd = new FormData();
    fd.append('photo', file);
    fd.append('caption',  form.caption);
    fd.append('location', form.location);
    fd.append('date',     form.date);
    fd.append('category', form.category);
    fd.append('tags',     form.tags);
    try {
      const res = await authFetch('/api/gallery', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      window._pendingUploadFile = null;
      setShowModal(false);
      loadPhotos();
    } catch (err) {
      setError('Upload failed. Please try again.');
    }
    setUploading(false);
  };

  // ── Edit handler ────────────────────────────────────────
  const openEdit = (photo) => {
    setEditId(photo.id);
    setForm({ caption: photo.caption, location: photo.location, date: photo.date, category: photo.category, tags: (photo.tags||[]).join(', ') });
    window._pendingUploadFile = null;
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    setUploading(true);
    setError('');
    try {
      const res = await authFetch(`/api/gallery/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) }),
      });
      if (!res.ok) throw new Error('Update failed');
      setShowModal(false);
      loadPhotos();
    } catch (err) {
      setError('Failed to update. Please try again.');
    }
    setUploading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this photo? This cannot be undone.')) return;
    await authFetch(`/api/gallery/${id}`, { method: 'DELETE' });
    loadPhotos();
  };

  return (
    <AdminLayout title="Gallery Photos" page="gallery">
      <div className="admin-content">
        <div className="admin-page-header">
          <h2>Gallery Photos</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{photos.length} photo{photos.length !== 1 ? 's' : ''}</span>
        </div>

        {error && <div style={{ background: '#fee2e2', border: '1px solid #fecaca', borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem', marginBottom: '1rem', color: '#b91c1c', fontSize: '0.85rem' }}>{error}</div>}

        {/* Upload zone */}
        <div
          id="gallery-upload-zone"
          className={`admin-upload-zone ${dragging ? 'admin-upload-zone--drag' : ''}`}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          aria-label="Upload photo"
        >
          <div className="admin-upload-zone__icon">📸</div>
          <div className="admin-upload-zone__title">Drag & drop a photo here, or click to browse</div>
          <div className="admin-upload-zone__hint">JPEG, PNG, WEBP · Max 15MB · One at a time</div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />

        {/* Photo grid */}
        {loading ? (
          <div className="admin-loading">Loading photos…</div>
        ) : (
          <div className="admin-photo-grid">
            {photos.map(photo => (
              <div key={photo.id} className="admin-photo-card">
                <img src={photo.thumb || photo.src} alt={photo.caption} className="admin-photo-card__img" />
                <div className="admin-photo-card__body">
                  <div className="admin-photo-card__caption">{photo.caption || '(no caption)'}</div>
                  <div className="admin-photo-card__meta">{photo.date} {photo.location ? `· ${photo.location}` : ''}</div>
                  <div className="admin-photo-card__actions">
                    <button className="btn btn-outline btn-sm" onClick={() => openEdit(photo)}>✎ Edit</button>
                    <button className="btn btn-danger btn-sm"  onClick={() => handleDelete(photo.id)}>🗑</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload / Edit modal */}
      {showModal && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal">
            <h3>{editId ? 'Edit Photo Details' : 'Add Photo Details'}</h3>
            <div className="admin-form">
              <div className="admin-field">
                <label>Caption</label>
                <input value={form.caption} onChange={e => setForm(f => ({...f, caption: e.target.value}))} placeholder="Describe the photo…" />
              </div>
              <div className="admin-form-row">
                <div className="admin-field">
                  <label>Location</label>
                  <input value={form.location} onChange={e => setForm(f => ({...f, location: e.target.value}))} placeholder="City, Country" />
                </div>
                <div className="admin-field">
                  <label>Date / Year</label>
                  <input value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))} placeholder="2024" />
                </div>
              </div>
              <div className="admin-field">
                <label>Category</label>
                <select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}>
                  {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>
              </div>
              <div className="admin-field">
                <label>Tags (comma-separated)</label>
                <input value={form.tags} onChange={e => setForm(f => ({...f, tags: e.target.value}))} placeholder="conference, keynote, ugm" />
              </div>
              {error && <p style={{ color: '#dc2626', fontSize: '0.82rem' }}>{error}</p>}
            </div>
            <div className="admin-modal-footer">
              <button className="btn btn-outline btn-sm" onClick={() => { setShowModal(false); window._pendingUploadFile = null; }}>Cancel</button>
              <button className="btn btn-primary btn-sm" onClick={editId ? handleSaveEdit : handleSaveNew} disabled={uploading}>
                {uploading ? (editId ? 'Saving…' : 'Uploading…') : (editId ? 'Save Changes' : 'Upload Photo')}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
