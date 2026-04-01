import { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

export default function AdminDashboard() {
  const { authFetch } = useAdminAuth();
  const [stats, setStats] = useState({ gallery: '…', publications: '…', events: '…' });

  useEffect(() => {
    Promise.all([
      fetch('/api/gallery').then(r => r.json()),
      fetch('/api/publications').then(r => r.json()),
      fetch('/api/events').then(r => r.json()),
    ]).then(([g, p, e]) => setStats({ gallery: g.length, publications: p.length, events: e.length }));
  }, []);

  const statCards = [
    { icon: '🖼️', label: 'Gallery Photos',    num: stats.gallery,       color: '#1a3a5c', bg: '#e6f0fa' },
    { icon: '📚', label: 'Publications',        num: stats.publications,  color: '#1b4332', bg: '#edfaf5' },
    { icon: '🎙️', label: 'Speaking Events',     num: stats.events,        color: '#4a1a6e', bg: '#f5f3ff' },
  ];

  const quickLinks = [
    { to: '/admin/gallery',      icon: '🖼️', label: 'Manage Gallery',      desc: 'Upload new photos, edit captions, delete images' },
    { to: '/admin/publications', icon: '📄', label: 'Manage Publications',  desc: 'Add, edit, and remove journal articles, books, and media entries' },
    { to: '/admin/events',       icon: '📅', label: 'Manage Events',        desc: 'Add speaking engagements and international events' },
  ];

  return (
    <AdminLayout title="Dashboard" page="dashboard">
      <div className="admin-content">
        <div className="admin-page-header">
          <h2>Welcome back, Dr. Sofjan</h2>
        </div>

        <div className="admin-dashboard-stats">
          {statCards.map(s => (
            <div key={s.label} className="admin-stat-card">
              <div className="admin-stat-card__icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
              <div>
                <div className="admin-stat-card__num">{s.num}</div>
                <div className="admin-stat-card__label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Quick Actions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {quickLinks.map(link => (
            <a key={link.to} href={link.to} className="admin-stat-card" style={{ textDecoration: 'none', cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.75rem' }}>{link.icon}</span>
              <strong style={{ color: 'var(--navy)', fontSize: '0.95rem' }}>{link.label}</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{link.desc}</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'var(--bg-alt)', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--text-dark)' }}>💡 How to use:</strong> Use the sidebar to navigate between sections.
          Upload photos in <em>Gallery</em>, add publications in <em>Publications</em>, and log speaking engagements in <em>Events</em>.
          All changes are saved immediately and appear on the public website.
        </div>
      </div>
    </AdminLayout>
  );
}
