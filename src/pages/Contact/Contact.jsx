import { useState } from 'react';
import SectionLabel from '../../components/ui/SectionLabel';
import PageNumeral from '../../components/ui/PageNumeral';
import ContactBar from '../../components/ui/ContactBar';
import Button from '../../components/ui/Button';
import styles from './Contact.module.css';

const encode = (data) => Object.keys(data)
  .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
  .join('&');

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = {
      'form-name': 'contact',
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      'bot-field': form.elements['bot-field'].value,
    };

    if (!body.name || !body.email || !body.message) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(body),
    })
      .then((res) => {
        if (!res.ok) throw new Error('network');
        form.reset();
        setStatus('sent');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className={styles.page}>
      <PageNumeral value="05" position="center-right" />

      <div className={styles.container}>
        <SectionLabel index="05" title="Contact" />

        <h1 className={styles.heading}>
          <em>Let&rsquo;s talk.</em>
        </h1>
        <p className={styles.subline}>
          <span aria-hidden="true" className={styles.arrow}>→</span>
          {' '}
          Send me a Message — or write directly to
          {' '}
          <a className={styles.mailto} href="mailto:alexpuentedev@gmail.com">
            alexpuentedev@gmail.com
          </a>
          .
        </p>

        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Leave blank:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input
              name="name"
              type="text"
              className={styles.input}
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </label>

          <div className={styles.actions}>
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </Button>
          </div>

          <div className={styles.statusRegion} aria-live="polite">
            {status === 'sent' && (
              <div className={`${styles.alert} ${styles.alertSent}`}>
                <strong>Sent.</strong>
                {' '}
                Thanks — I&rsquo;ll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className={`${styles.alert} ${styles.alertError}`}>
                <strong>Something went wrong.</strong>
                {' '}
                Try again, or email me directly at the address above.
              </div>
            )}
            {status === 'invalid' && (
              <div className={`${styles.alert} ${styles.alertError}`}>
                <strong>Missing a field.</strong>
                {' '}
                Please check name, email, and message.
              </div>
            )}
          </div>
        </form>

        <ContactBar label="Other channels" />
      </div>
    </section>
  );
};

export default Contact;
