/* eslint-disable global-require */
import SectionLabel from '../../components/ui/SectionLabel';
import PageNumeral from '../../components/ui/PageNumeral';
import ContactBar from '../../components/ui/ContactBar';
import Marginalia from '../../components/ui/Marginalia';
import useReveal from '../../hooks/useReveal';
import styles from './About.module.css';

const About = () => {
  const p1 = useReveal();
  const p2 = useReveal();
  const quote = useReveal();
  const p3 = useReveal();

  return (
    <section className={styles.page}>
      <PageNumeral value="02" position="bottom-right" />

      <div className={styles.container}>
        <SectionLabel index="02" title="About" />

        <div className={styles.grid}>
          <aside className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <div className={styles.photoOffset} aria-hidden="true" />
              <img
                className={styles.photo}
                src={require('../../assets/myphoto.jpg')}
                alt="Alex Puente"
              />
            </div>
            <div className={styles.photoMeta}>
              <span>Monterrey, MX</span>
              <span aria-hidden="true">·</span>
              <span>Full-stack</span>
            </div>
          </aside>

          <div className={styles.textCol}>
            <h1 className={styles.heading}>
              A developer who speaks
              {' '}
              <em>two languages</em>
              :
              {' '}
              <span className={styles.accent}>code</span>
              {' '}
              and
              {' '}
              <span className={styles.accent}>people</span>.
            </h1>

            <p className={styles.paragraph} ref={p1} style={{ '--reveal-delay': '0ms' }}>
              I’m Alex — a full-stack developer from Monterrey, Mexico. I build web
              applications with React and Ruby on Rails, and I care more about the
              feel of a product than about chasing the newest framework.
            </p>

            <Marginalia align="left">React + Rails</Marginalia>

            <p className={styles.paragraph} ref={p2} style={{ '--reveal-delay': '120ms' }}>
              Before I wrote code I spent years in HR and organizational psychology.
              That background still shapes how I work: I listen more than I ship
              prototypes, and I treat users as colleagues rather than datasets.
            </p>

            <Marginalia align="left">HR &amp; psychology</Marginalia>

            <blockquote className={styles.quote} ref={quote} style={{ '--reveal-delay': '200ms' }}>
              <span aria-hidden="true" className={styles.quoteMark}>“</span>
              Good software is less about stacks and more about
              {' '}
              <em>attention</em>
              .
              <span aria-hidden="true" className={styles.quoteMarkEnd}>”</span>
            </blockquote>

            <p className={styles.paragraph} ref={p3} style={{ '--reveal-delay': '100ms' }}>
              Outside of work I read obsessively, make mediocre photographs, and am
              slowly rebuilding my family’s calendar into an app no one asked for.
              If you’d like to collaborate — or just talk shop — the channels below
              are the fastest way to reach me.
            </p>

            <Marginalia align="left">Monterrey MX</Marginalia>

            <ContactBar label="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
