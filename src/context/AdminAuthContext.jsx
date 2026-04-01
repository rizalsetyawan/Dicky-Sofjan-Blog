import { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem('sofjan-admin-token'));

  const login = async (password) => {
    const res  = await fetch('/api/auth/login', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ password }),
    });
    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: 'Login failed' }));
      throw new Error(error);
    }
    const { token: newToken } = await res.json();
    setToken(newToken);
    sessionStorage.setItem('sofjan-admin-token', newToken);
    return newToken;
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('sofjan-admin-token');
  };

  const authFetch = (url, opts = {}) => {
    return fetch(url, {
      ...opts,
      headers: {
        ...opts.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <AdminAuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout, authFetch }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
