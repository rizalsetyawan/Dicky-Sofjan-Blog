import { useState } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

export default function AdminLogin() {
  const { login }       = useAdminAuth();
  const [pwd, setPwd]   = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(pwd);
    } catch (err) {
      setError(err.message || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <div className="admin-login__logo">
          <div className="admin-login__monogram">DS</div>
          <div>
            <div className="admin-login__title">Dr. Sofjan CMS</div>
            <div className="admin-login__subtitle">Content Management Portal</div>
          </div>
        </div>

        {error && <div className="admin-login__error">⚠ {error}</div>}

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-field">
            <label htmlFor="admin-password">Admin Password</label>
            <input
              id="admin-password"
              type="password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              placeholder="Enter your password…"
              autoFocus
            />
          </div>
          <button id="admin-login-btn" type="submit" className="btn btn-primary" disabled={loading || !pwd} style={{ marginTop: '0.5rem' }}>
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center' }}>
          This portal is for Dr. Sofjan's personal use only.
        </p>
      </div>
    </div>
  );
}
