import { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

const categories    = ['journal', 'book', 'chapter', 'globethics', 'media'];
const categoryLabel = { journal: 'Journal Article', book: 'Book', chapter: 'Book Chapter', globethics: 'Globethics', media: 'Media' };

const emptyForm = { title: '', category: 'journal', journal: '', publisher: '', outlet: '', bookTitle: '', year: '', volume: '', issue: '', pages: '', abstract: '', doi: '', url: '', tags: '' };

export default function AdminPublications() {
  const { authFetch } = useAdminAuth();
  const [pubs,      setPubs]      = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form,      setForm]      = useState(emptyForm);
  const [editId,    setEditId]    = useState(null);
  const [saving,    setSaving]    = useState(false);
  const [error,     setError]     = useState('');

  const loadPubs = () => {
    setLoading(true);
    fetch('/api/publications').then(r => r.json()).then(data => { setPubs(data); setLoading(false); });
  };

  useEffect(() => { loadPubs(); }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setError(''); setShowModal(true); };
  const openEdit = (pub) => {
    setForm({ ...emptyForm, ...pub, tags: (pub.tags||[]).join(', ') });
    setEditId(pub.id); setError(''); setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) { setError('Title is required.'); return; }
    setSaving(true); setError('');
    const body = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), year: form.year ? Number(form.year) : undefined };
    try {
      const url    = editId ? `/api/publications/${editId}` : '/api/publications';
      const method = editId ? 'PUT' : 'POST';
      const res    = await authFetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      setShowModal(false);
      loadPubs();
    } catch { setError('Save failed. Please try again.'); }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this publication? This cannot be undone.')) return;
    await authFetch(`/api/publications/${id}`, { method: 'DELETE' });
    loadPubs();
  };

  const f = (key, label, opts={}) => (
    <div className="admin-field" key={key}>
      <label>{label}</label>
      {opts.textarea
        ? <textarea rows={3} value={form[key]||''} onChange={e => setForm(f => ({...f, [key]: e.target.value}))} placeholder={opts.placeholder||''} />
        : <input type={opts.type||'text'} value={form[key]||''} onChange={e => setForm(f => ({...f, [key]: e.target.value}))} placeholder={opts.placeholder||''} />
      }
    </div>
  );

  return (
    <AdminLayout title="Publications" page="publications">
      <div className="admin-content">
        <div className="admin-page-header">
          <h2>Publications</h2>
          <button id="add-publication-btn" className="btn btn-primary btn-sm" onClick={openNew}>+ Add Publication</button>
        </div>

        {loading ? (
          <div className="admin-loading">Loading…</div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Source</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pubs.map(pub => (
                  <tr key={pub.id}>
                    <td className="admin-table__title">{pub.title}</td>
                    <td><span className="badge badge-navy">{categoryLabel[pub.category]||pub.category}</span></td>
                    <td className="admin-table__year">{pub.year||pub.date}</td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{pub.journal||pub.publisher||pub.outlet||pub.bookTitle||'—'}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button className="btn btn-outline btn-sm" onClick={() => openEdit(pub)}>✎ Edit</button>
                        <button className="btn btn-danger btn-sm"  onClick={() => handleDelete(pub.id)}>🗑</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal" style={{ maxWidth: 640 }}>
            <h3>{editId ? 'Edit Publication' : 'Add Publication'}</h3>
            <div className="admin-form">
              {f('title', 'Title *')}
              <div className="admin-form-row">
                <div className="admin-field">
                  <label>Type</label>
                  <select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}>
                    {categories.map(c => <option key={c} value={c}>{categoryLabel[c]}</option>)}
                  </select>
                </div>
                {f('year', 'Year', { type: 'number', placeholder: '2024' })}
              </div>
              {form.category === 'journal'   && f('journal',   'Journal Name')}
              {form.category === 'book'      && f('publisher', 'Publisher')}
              {form.category === 'chapter'   && <><div className="admin-form-row">{f('bookTitle','Book Title')}{f('publisher','Publisher')}</div></>}
              {form.category === 'globethics' && f('publisher', 'Publisher')}
              {form.category === 'media'     && <><div className="admin-form-row">{f('outlet','Media Outlet')}{f('date','Date', { placeholder: 'December 2024' })}</div></>}
              {form.category === 'journal'   && <div className="admin-form-row">{f('volume','Volume')}{f('issue','Issue')}{f('pages','Pages', { placeholder: '1–14' })}</div>}
              {f('abstract', 'Abstract / Description', { textarea: true })}
              <div className="admin-form-row">
                {f('doi', 'DOI / URL')}
                {f('tags', 'Tags (comma-separated)', { placeholder: 'ethics, Islam, environment' })}
              </div>
              {error && <p style={{ color: '#dc2626', fontSize: '0.82rem' }}>{error}</p>}
            </div>
            <div className="admin-modal-footer">
              <button className="btn btn-outline btn-sm" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
