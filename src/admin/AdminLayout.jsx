import { useNavigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useTheme } from '../context/ThemeContext';
import './Admin.css';

const navItems = [
  { path: '/admin',              icon: '🏠', label: 'Dashboard' },
  { path: '/admin/gallery',      icon: '🖼️', label: 'Gallery Photos' },
  { path: '/admin/publications', icon: '📚', label: 'Publications' },
  { path: '/admin/events',       icon: '🎙', label: 'Speaking Events' },
];

export default function AdminLayout({ children, title }) {
  const { logout }           = useAdminAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate             = useNavigate();
  const { pathname }         = useLocation();

  const handleLogout = () => { logout(); navigate('/admin'); };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__title">Dr. Sofjan CMS</span>
          <span className="admin-sidebar__subtitle">Content Management Portal</span>
        </div>
        <nav className="admin-sidebar__nav">
          {navItems.map(item => (
            <a
              key={item.path}
              href={item.path}
              className={`admin-sidebar__link ${pathname === item.path ? 'admin-sidebar__link--active' : ''}`}
              onClick={e => { e.preventDefault(); navigate(item.path); }}
            >
              <span className="admin-sidebar__link-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <div style={{ flex: 1 }} />
          <a href="/" target="_blank" rel="noopener noreferrer" className="admin-sidebar__link">
            <span className="admin-sidebar__link-icon">🌐</span>
            View Public Site
          </a>
          <button className="admin-sidebar__link" onClick={toggleTheme}>
            <span className="admin-sidebar__link-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button className="admin-sidebar__link" onClick={handleLogout} style={{ color: '#fca5a5' }}>
            <span className="admin-sidebar__link-icon">→</span>
            Logout
          </button>
        </nav>
        <div className="admin-sidebar__footer">
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
            Logged in as<br /><strong style={{ color: 'rgba(255,255,255,0.5)' }}>Dr. Dicky Sofjan</strong>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <span className="admin-topbar__title">{title}</span>
          <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
        </div>
        {children}
      </main>
    </div>
  );
}
