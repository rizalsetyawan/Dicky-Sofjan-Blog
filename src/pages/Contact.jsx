import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const inquiryTypes = ['Academic Collaboration', 'Speaking Invitation', 'Media Request', 'Partnership Proposal', 'Eco-Project Inquiry', 'General Inquiry'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', type: '', subject: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSubmitted(true);
  };

  const field = (id, label, required) => ({
    id, label, required,
    value:    form[id] || '',
    onChange:  e => setForm(f => ({ ...f, [id]: e.target.value })),
    error:    errors[id],
  });

  return (
    <main>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1 id="contact-heading">Contact Dr. Sofjan</h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Academic inquiries, speaking invitations, media requests, and partnership proposals are all welcome. Please use the form below or reach out directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            {/* Info column */}
            <aside className="contact__info">
              <h2 className="contact__info-title">Contact Information</h2>
              <div className="contact__info-items">
                <div className="contact__info-item"><span>Academic Email</span><a href="mailto:d.sofjan@ugm.ac.id">d.sofjan@ugm.ac.id</a></div>
                <div className="contact__info-item"><span>Globethics Profile</span><a href="https://globethics.net" target="_blank" rel="noopener noreferrer">globethics.net</a></div>
                <div className="contact__info-item"><span>UGM Profile</span><a href="https://ugm.ac.id" target="_blank" rel="noopener noreferrer">ugm.ac.id</a></div>
                <div className="contact__info-item"><span>Primary Location</span><strong>Yogyakarta, Indonesia</strong></div>
                <div className="contact__info-item"><span>Secondary Location</span><strong>Geneva, Switzerland (Globethics)</strong></div>
              </div>

              <div className="contact__special-card contact__special-card--navy">
                <h4>📰 Media &amp; Press Inquiries</h4>
                <p>Dr. Sofjan is available for expert commentary on religion, ethics, interfaith dialogue, Islamic politics, and environmental sustainability. Please include your deadline in your inquiry.</p>
                <a href="mailto:d.sofjan@ugm.ac.id?subject=Media%20Inquiry" className="btn btn-white btn-sm">Media Contact →</a>
              </div>

              <div className="contact__special-card contact__special-card--green">
                <h4>🌿 Nglanggeran Eco-Project</h4>
                <p>For visit requests, research partnerships, or learning programme inquiries related to the Nglanggeran Eco-Project.</p>
                <Link to="/eco-project" className="btn btn-gold btn-sm">Eco-Project Inquiry →</Link>
              </div>
            </aside>

            {/* Form */}
            <div className="contact__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✓</div>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. Dr. Sofjan's office will respond within 3–5 business days.</p>
                  <button className="btn btn-primary btn-sm" onClick={() => { setSubmitted(false); setForm({ name:'',email:'',org:'',type:'',subject:'',message:'' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" className="contact__form" onSubmit={handleSubmit} noValidate>
                  <h2 className="contact__form-title">Send a Message</h2>
                  <div className="contact__form-row">
                    <FormField {...field('name','Full Name', true)} />
                    <FormField {...field('email','Email Address', true)} type="email" />
                  </div>
                  <div className="contact__form-row">
                    <FormField {...field('org','Organisation / Institution', false)} />
                    <div className="form-field">
                      <label htmlFor="inquiry-type">Nature of Inquiry</label>
                      <select id="inquiry-type" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className="form-field__input">
                        <option value="">Select inquiry type…</option>
                        {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <FormField {...field('subject','Subject', false)} />
                  <div className="form-field">
                    <label htmlFor="message">Message <span className="form-field__required">*</span></label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={6}
                      placeholder="Please describe your inquiry in detail…"
                      className={`form-field__input ${errors.message ? 'form-field__input--error' : ''}`}
                    />
                    {errors.message && <span className="form-field__error">{errors.message}</span>}
                  </div>
                  <div className="contact__form-footer">
                    <p>Your information is handled with discretion and will only be used to respond to your inquiry. No marketing or third-party sharing.</p>
                    <button id="contact-submit" type="submit" className="btn btn-primary" disabled={sending}>
                      {sending ? 'Sending…' : 'Send Message →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section section-alt" aria-labelledby="locations-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Locations</span>
            <h2 id="locations-heading" className="section-title">Where Dr. Sofjan Works</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              { code: 'ID', name: 'Yogyakarta, Indonesia', type: 'Primary Location', desc: 'Primary base at Universitas Gadjah Mada. Also home to the Nglanggeran Eco-Project and the Yadema & YKPAI foundations.' },
              { code: 'CH', name: 'Geneva, Switzerland',   type: 'International Base', desc: 'Regular presence at Globethics headquarters for board engagements, international partnerships, and UN-related work.' },
            ].map(loc => (
              <div key={loc.code} className="contact__location-card">
                <div className="contact__location-code">{loc.code}</div>
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{loc.type}</div>
                  <h3>{loc.name}</h3>
                  <p>{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FormField({ id, label, required, value, onChange, error, type = 'text' }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label} {required && <span className="form-field__required">*</span>}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
        placeholder={`Your ${label.toLowerCase()}`}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
