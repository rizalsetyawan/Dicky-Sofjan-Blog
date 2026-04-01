import { Link } from 'react-router-dom';
import { IconPin, IconMail, IconGlobe } from './Icons';
import './Footer.css';

const navGroups = [
  {
    title: 'Navigation',
    links: [
      { to: '/about',         label: 'About' },
      { to: '/research',      label: 'Research & Publications' },
      { to: '/speaking',      label: 'Speaking & Events' },
      { to: '/organizations', label: 'Organizations' },
      { to: '/partnerships',  label: 'Partnerships' },
      { to: '/eco-project',   label: 'Eco-Project' },
      { to: '/gallery',       label: 'Gallery' },
      { to: '/contact',       label: 'Contact' },
    ],
  },
  {
    title: 'Affiliations',
    links: [
      { to: 'https://ugm.ac.id',         label: 'Universitas Gadjah Mada', ext: true },
      { to: 'https://globethics.net',    label: 'Globethics', ext: true },
      { to: '#',                         label: 'Yadema Foundation' },
      { to: '#',                         label: 'YKPAI Foundation' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-monogram">DS</span>
            <span className="footer__logo-name">Dr. Dicky Sofjan</span>
          </Link>
          <p>Associate Professor · Interfaith Scholar · Sustainability Advocate</p>
          <p className="footer__location"><IconPin size={12} color="currentColor" /> Yogyakarta, Indonesia &amp; Geneva, Switzerland</p>
          <div className="footer__social">
            <a href="mailto:d.sofjan@ugm.ac.id" aria-label="Email" className="footer__social-link"><IconMail size={16} color="currentColor" /></a>
            <a href="https://globethics.net"     aria-label="Globethics" className="footer__social-link" target="_blank" rel="noopener noreferrer"><IconGlobe size={16} color="currentColor" /></a>
            <a href="https://ugm.ac.id"          aria-label="UGM" className="footer__social-link" target="_blank" rel="noopener noreferrer">UGM</a>
          </div>
        </div>

        {/* Nav columns */}
        {navGroups.map(group => (
          <div key={group.title} className="footer__col">
            <h4 className="footer__col-title">{group.title}</h4>
            <ul>
              {group.links.map(link => (
                <li key={link.label}>
                  {link.ext
                    ? <a href={link.to} target="_blank" rel="noopener noreferrer" className="footer__link">{link.label}</a>
                    : <Link to={link.to} className="footer__link">{link.label}</Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA column */}
        <div className="footer__col footer__cta-col">
          <h4 className="footer__col-title">Let's Connect</h4>
          <p>Academic inquiries, speaking invitations, and media requests welcome.</p>
          <Link to="/contact" className="btn btn-gold btn-sm">Send a Message</Link>
          <div className="footer__contact-links">
            <a href="mailto:d.sofjan@ugm.ac.id">d.sofjan@ugm.ac.id</a>
            <span>·</span>
            <a href="https://globethics.net" target="_blank" rel="noopener noreferrer">globethics.net</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Dr. Dicky Sofjan. All rights reserved.</span>
          <span>Associate Professor, Universitas Gadjah Mada · Vice President, Globethics</span>
        </div>
      </div>
    </footer>
  );
}
