import SectionLabel from '../../components/ui/SectionLabel';
import PageNumeral from '../../components/ui/PageNumeral';
import stack from '../../data/stack';
import useReveal from '../../hooks/useReveal';
import styles from './Stack.module.css';

const StackGroup = ({ group, delay }) => {
  const ref = useReveal();
  return (
    <section ref={ref} className={styles.group} style={{ '--reveal-delay': `${delay}ms` }}>
      <header className={styles.groupHeader}>
        <h2 className={styles.groupTitle}>{group.heading}</h2>
        <span className={styles.groupCount}>
          {group.items.length.toString().padStart(2, '0')}
        </span>
      </header>
      <ul className={styles.grid}>
        {group.items.map((item) => (
          <li key={item.name} className={styles.item}>
            <div className={styles.iconWrap}>
              <img src={item.icon} alt="" className={styles.icon} />
            </div>
            <span className={styles.name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Stack = () => (
  <section className={styles.page}>
    <PageNumeral value="03" position="top-right" />

    <div className={styles.container}>
      <header className={styles.head}>
        <SectionLabel index="03" title="Stack" />
        <h1 className={styles.title}>
          The
          {' '}
          <em>kit</em>
          {' '}
          I reach for.
        </h1>
        <p className={styles.subtitle}>
          A workshop, not a shrine. Languages I write daily, frameworks that pay
          rent, and a handful of tools I keep sharp.
        </p>
      </header>

      <div className={styles.groups}>
        {stack.map((group, i) => (
          <StackGroup key={group.heading} group={group} delay={i * 80} />
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
