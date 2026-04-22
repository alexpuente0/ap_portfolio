import socials from '../../data/socials';
import styles from './ContactBar.module.css';

const ContactBar = ({ label = 'Redes', align = 'start' }) => (
  <div className={`${styles.bar} ${styles[`align-${align}`]}`}>
    {label && <span className={styles.label} aria-hidden="true">{label}</span>}
    <ul className={styles.list}>
      {socials.map((s) => (
        <li key={s.name}>
          <a
            className={styles.link}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.name}
          >
            <span
              aria-hidden="true"
              className={styles.icon}
              style={{ maskImage: `url(${s.icon})`, WebkitMaskImage: `url(${s.icon})` }}
            />
            <span className={styles.name}>{s.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactBar;
