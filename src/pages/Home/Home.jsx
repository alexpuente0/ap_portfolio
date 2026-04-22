import { useEffect, useState } from 'react';
import SectionLabel from '../../components/ui/SectionLabel';
import PageNumeral from '../../components/ui/PageNumeral';
import Button from '../../components/ui/Button';
import ContactBar from '../../components/ui/ContactBar';
import styles from './Home.module.css';

const FIRST = 'Alex';
const LAST = 'Puente';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={`${styles.page} ${mounted ? styles.mounted : ''}`}>
      <PageNumeral value="01" position="bottom-right" />

      <div className={styles.container}>
        <div className={styles.labelRow}>
          <SectionLabel index="01" title="Home" />
        </div>

        <h1 className={styles.display}>
          <span className={`${styles.line} ${styles.lineOne}`} aria-hidden="true">
            {FIRST.split('').map((c, i) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={`f-${i}`}
                className={styles.char}
                style={{ '--i': i }}
              >
                {c}
              </span>
            ))}
          </span>
          <span className={styles.rule} aria-hidden="true" />
          <span className={`${styles.line} ${styles.lineTwo}`} aria-hidden="true">
            {LAST.split('').map((c, i) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={`l-${i}`}
                className={styles.char}
                style={{ '--i': i + FIRST.length }}
              >
                {c}
              </span>
            ))}
          </span>
          <span className="sr-only">
            {FIRST}
            {' '}
            {LAST}
          </span>
        </h1>

        <p className={styles.subline}>
          <span className={styles.arrow} aria-hidden="true">→</span>
          {' '}
          Full-stack developer
          <span aria-hidden="true"> · </span>
          Monterrey, MX
          <span aria-hidden="true"> · </span>
          MMXXVI
        </p>

        <p className={styles.lead}>
          I build honest, considered web apps with
          {' '}
          <em>React</em>
          {' '}
          and
          {' '}
          <em>Rails</em>
          . I care about craft, rhythm, and the part of the work that
          the framework can’t do for you.
        </p>

        <div className={styles.ctas}>
          <Button to="/projects">View projects</Button>
          <Button to="/contact" variant="ghost">Contact</Button>
        </div>

        <ContactBar label="Follow" />
      </div>
    </section>
  );
};

export default Home;
