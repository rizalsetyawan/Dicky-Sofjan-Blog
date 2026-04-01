import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { IconSun, IconMoon } from './Icons';
import './Navbar.css';

const navLinks = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About' },
  { to: '/research',      label: 'Research & Publications' },
  { to: '/speaking',      label: 'Speaking & Events' },
  { to: '/organizations', label: 'Organizations' },
  { to: '/partnerships',  label: 'Partnerships' },
  { to: '/eco-project',   label: 'Eco-Project' },
  { to: '/gallery',       label: 'Gallery' },
  { to: '/contact',       label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner">
          {/* Brand */}
          <Link to="/" className="navbar__brand" aria-label="Dr. Dicky Sofjan — Home">
            <span className="navbar__brand-monogram">DS</span>
            <span className="navbar__brand-text">
              <span className="navbar__brand-pre">Dr.</span>
              <strong>Dicky Sofjan</strong>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.slice(1).map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            {/* Dark mode toggle */}
            <button
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <IconMoon size={17} color="currentColor" /> : <IconSun size={17} color="currentColor" />}
            </button>

            <Link to="/contact" className="btn btn-gold btn-sm navbar__cta">
              Get in Touch
            </Link>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <nav>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__drawer-footer">
          <button className="navbar__theme-btn" onClick={toggleTheme}>
            {theme === 'light'
              ? <><IconMoon size={16} color="currentColor" /> Dark Mode</>
              : <><IconSun size={16} color="currentColor" /> Light Mode</>}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
