import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import markImage from '../../assets/image.png';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/', label: 'Home', match: (p) => p === '/' },
  { to: '/about', label: 'About', match: (p) => p.startsWith('/about') },
  { to: '/stack', label: 'Stack', match: (p) => p.startsWith('/stack') },
  { to: '/projects', label: 'Projects', match: (p) => p.startsWith('/projects') },
  { to: '/contact', label: 'Contact', match: (p) => p.startsWith('/contact') },
];

const THEME_LABELS = {
  burnt: 'Burnt Orange theme',
  cool: 'Cool theme',
  atelier: 'Atelier theme',
};

const ThemeSwitch = ({ themes, theme, setTheme }) => (
  <div role="group" aria-label="Theme" className={styles.themeSwitch}>
    {themes.map((name) => (
      <button
        key={name}
        type="button"
        className={`${styles.themeChip} ${styles[`chip-${name}`]} ${theme === name ? styles.themeChipActive : ''}`}
        aria-pressed={theme === name}
        aria-label={THEME_LABELS[name]}
        onClick={() => setTheme(name)}
      />
    ))}
  </div>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const {
    theme, themes, setTheme, bubble,
  } = useTheme();
  const { pathname } = useLocation();

  const bubbleProps = { ...bubble, duration: 900 };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <div className={styles.inner}>
        <Link
          to="/"
          className={styles.mark}
          {...bubbleProps}
        >
          <img src={markImage} alt="Alex Puente" className={styles.markImg} />
        </Link>

        <nav aria-label="Main" className={styles.links}>
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${link.match(pathname) ? styles.active : ''}`}
              {...bubbleProps}
            >
              <span aria-hidden="true" className={styles.arrow}>→</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.rail}>
          <div className={styles.themeSwitchDesktop}>
            <ThemeSwitch themes={themes} theme={theme} setTheme={setTheme} />
          </div>
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        aria-hidden={!open}
      >
        <div className={styles.overlayTop}>
          <ThemeSwitch themes={themes} theme={theme} setTheme={setTheme} />
          <button
            type="button"
            className={styles.overlayClose}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close
            <span aria-hidden="true"> ×</span>
          </button>
        </div>
        <nav aria-label="Mobile" className={styles.overlayNav}>
          {LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={styles.overlayLink}
              style={{ '--i': i }}
              {...bubbleProps}
            >
              <span className={styles.overlayIndex} aria-hidden="true">
                0
                {i + 1}
              </span>
              <span className={styles.overlayLinkLabel}>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.overlayMeta}>
          <span>Monterrey, MX</span>
          <span aria-hidden="true">·</span>
          <span>MMXXVI</span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
