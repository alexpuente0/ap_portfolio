import styles from './Marginalia.module.css';

const Marginalia = ({ children, align = 'right' }) => (
  <aside
    aria-hidden="true"
    className={`${styles.note} ${styles[align]}`}
  >
    <span className={styles.slash}>&#47;&#47;</span>
    {' '}
    {children}
  </aside>
);

export default Marginalia;
