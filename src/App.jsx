import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider }    from './context/ThemeContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

// Public pages
import Home          from './pages/Home';
import About         from './pages/About';
import Research      from './pages/Research';
import Speaking      from './pages/Speaking';
import Organizations from './pages/Organizations';
import Partnerships  from './pages/Partnerships';
import EcoProject    from './pages/EcoProject';
import Gallery       from './pages/Gallery';
import Contact       from './pages/Contact';

// Admin pages
import AdminLogin        from './admin/AdminLogin';
import AdminDashboard    from './admin/AdminDashboard';
import AdminGallery      from './admin/AdminGallery';
import AdminPublications from './admin/AdminPublications';
import AdminEvents       from './admin/AdminEvents';

import { useAdminAuth } from './context/AdminAuthContext';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AdminRoute({ element }) {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? element : <AdminLogin />;
}

function PublicLayout({ children }) {
  const { pathname } = useLocation();
  
  return (
    <>
      <Navbar />
      <div key={pathname} className="page-transition">
        {children}
      </div>
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public site */}
        <Route path="/"              element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about"         element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/research"      element={<PublicLayout><Research /></PublicLayout>} />
        <Route path="/speaking"      element={<PublicLayout><Speaking /></PublicLayout>} />
        <Route path="/organizations" element={<PublicLayout><Organizations /></PublicLayout>} />
        <Route path="/partnerships"  element={<PublicLayout><Partnerships /></PublicLayout>} />
        <Route path="/eco-project"   element={<PublicLayout><EcoProject /></PublicLayout>} />
        <Route path="/gallery"       element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/contact"       element={<PublicLayout><Contact /></PublicLayout>} />

        {/* Admin CMS */}
        <Route path="/admin"              element={<AdminRoute element={<AdminDashboard />} />} />
        <Route path="/admin/gallery"      element={<AdminRoute element={<AdminGallery />} />} />
        <Route path="/admin/publications" element={<AdminRoute element={<AdminPublications />} />} />
        <Route path="/admin/events"       element={<AdminRoute element={<AdminEvents />} />} />

        {/* 404 */}
        <Route path="*" element={
          <PublicLayout>
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem' }}>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--navy)', marginBottom: '1rem' }}>404</h1>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Page not found.</p>
              <a href="/" className="btn btn-primary">Return Home</a>
            </div>
          </PublicLayout>
        } />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <AppRoutes />
      </AdminAuthProvider>
    </ThemeProvider>
  );
}
