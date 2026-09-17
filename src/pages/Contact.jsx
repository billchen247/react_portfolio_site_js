import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

// Empty shape used both for the initial state and to reset after submission.
const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: ''
};

export default function Contact() {
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend is required for this assignment; the browser's built-in
    // `required`/`type` validation runs first, then we log the payload for
    // debugging and hand the captured values to Home via router state so a
    // visible confirmation banner can render there.
    // eslint-disable-next-line no-console
    console.log('Contact form submitted:', formValues);
    const submittedFirstName = formValues.firstName;
    setFormValues(EMPTY_FORM);
    navigate('/', { state: { justSubmitted: true, firstName: submittedFirstName } });
  };

  return (
    <section className="contact">
      <h1 className="section-title">Contact Me</h1>
      <p className="lead">
        Want to work together, ask a question, or just say hello? Reach out below
        and I'll get back to you within a couple of business days.
      </p>

      <div className="contact-grid">
        <aside className="card contact-info">
          <h2>Get in touch</h2>
          <dl className="contact-info-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@billchen.dev">hello@billchen.dev</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+15555550123">+1 (555) 555-0123</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Toronto, Canada — open to remote</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Mon–Fri, 9am–6pm ET</dd>
            </div>
          </dl>
        </aside>

        <form className="card contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="form-row">
            <label className="form-field">
              <span>First name</span>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formValues.firstName}
                onChange={handleFieldChange}
                required
              />
            </label>

            <label className="form-field">
              <span>Last name</span>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={formValues.lastName}
                onChange={handleFieldChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+1 (555) 555-0123"
                value={formValues.phone}
                onChange={handleFieldChange}
                required
              />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formValues.email}
                onChange={handleFieldChange}
                required
              />
            </label>
          </div>

          <label className="form-field">
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleFieldChange}
              required
            />
          </label>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
