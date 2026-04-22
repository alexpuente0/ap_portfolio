import styles from './SectionLabel.module.css';

const SectionLabel = ({ index, title }) => (
  <div className={styles.label}>
    <span className={styles.marker} aria-hidden="true" />
    <span className={styles.index}>{index}</span>
    <span className={styles.slash} aria-hidden="true">/</span>
    <span className={styles.title}>{title}</span>
  </div>
);

export default SectionLabel;
