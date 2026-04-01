import { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

const platforms = ['UNFCCC-COP', 'G20 Interfaith Forum', 'EU Institutions', 'OHCHR', 'Carnegie Council', 'ASEAN', 'WCC', 'Other'];
const roles     = ['Keynote Speaker', 'Invited Speaker', 'Panel Speaker', 'Expert Witness', 'Presenter', 'Resource Person', 'Faith Pavilion Presenter'];

const emptyForm = { title: '', platform: 'Other', location: '', date: '', year: new Date().getFullYear().toString(), role: 'Invited Speaker', topic: '', description: '', tags: '' };

export default function AdminEvents() {
  const { authFetch } = useAdminAuth();
  const [events,    setEvents]    = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form,      setForm]      = useState(emptyForm);
  const [editId,    setEditId]    = useState(null);
  const [saving,    setSaving]    = useState(false);
  const [error,     setError]     = useState('');

  const load = () => { setLoading(true); fetch('/api/events').then(r => r.json()).then(d => { setEvents(d); setLoading(false); }); };
  useEffect(() => { load(); }, []);

  const openNew  = () => { setForm(emptyForm); setEditId(null); setError(''); setShowModal(true); };
  const openEdit = ev  => { setForm({ ...emptyForm, ...ev, tags: (ev.tags||[]).join(', '), year: String(ev.year||'') }); setEditId(ev.id); setError(''); setShowModal(true); };

  const handleSave = async () => {
    if (!form.title.trim()) { setError('Title is required.'); return; }
    setSaving(true); setError('');
    const body = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), year: Number(form.year) };
    try {
      const url = editId ? `/api/events/${editId}` : '/api/events';
      const res = await authFetch(url, { method: editId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      setShowModal(false); load();
    } catch { setError('Save failed.'); }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this event?')) return;
    await authFetch(`/api/events/${id}`, { method: 'DELETE' });
    load();
  };

  const field = (key, label, {type='text', placeholder='', select=null}={}) => (
    <div className="admin-field" key={key}>
      <label>{label}</label>
      {select
        ? <select value={form[key]||''} onChange={e => setForm(f => ({...f, [key]: e.target.value}))}>{select.map(o => <option key={o} value={o}>{o}</option>)}</select>
        : <input type={type} value={form[key]||''} onChange={e => setForm(f => ({...f, [key]: e.target.value}))} placeholder={placeholder} />
      }
    </div>
  );

  return (
    <AdminLayout title="Speaking Events" page="events">
      <div className="admin-content">
        <div className="admin-page-header">
          <h2>Speaking Events</h2>
          <button id="add-event-btn" className="btn btn-primary btn-sm" onClick={openNew}>+ Add Event</button>
        </div>

        {loading ? (
          <div className="admin-loading">Loading…</div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Event</th><th>Platform</th><th>Year</th><th>Role</th><th>Location</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {events.map(ev => (
                  <tr key={ev.id}>
                    <td className="admin-table__title">{ev.title}</td>
                    <td style={{ fontSize: '0.8rem' }}><span className="badge badge-navy">{ev.platform}</span></td>
                    <td className="admin-table__year">{ev.year}</td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{ev.role}</td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{ev.location}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button className="btn btn-outline btn-sm" onClick={() => openEdit(ev)}>✎ Edit</button>
                        <button className="btn btn-danger btn-sm"  onClick={() => handleDelete(ev.id)}>🗑</button>
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
          <div className="admin-modal" style={{ maxWidth: 620 }}>
            <h3>{editId ? 'Edit Event' : 'Add Speaking Event'}</h3>
            <div className="admin-form">
              {field('title', 'Event Name *')}
              <div className="admin-form-row">
                {field('platform', 'Platform', { select: platforms })}
                {field('role',     'Role',     { select: roles })}
              </div>
              <div className="admin-form-row">
                {field('location', 'Location', { placeholder: 'Geneva, Switzerland' })}
                {field('date',     'Date',     { placeholder: 'November 2024' })}
              </div>
              <div className="admin-form-row">
                {field('year', 'Year', { type: 'number', placeholder: '2024' })}
                {field('topic', 'Topic / Paper Title')}
              </div>
              <div className="admin-field">
                <label>Description</label>
                <textarea rows={3} value={form.description||''} onChange={e => setForm(f => ({...f, description: e.target.value}))} placeholder="Brief description of the engagement…" />
              </div>
              {field('tags', 'Tags (comma-separated)', { placeholder: 'climate, interfaith, keynote' })}
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
