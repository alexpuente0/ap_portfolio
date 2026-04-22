import styles from './PageNumeral.module.css';

const PageNumeral = ({ value, position = 'top-right' }) => (
  <span
    aria-hidden="true"
    className={`${styles.numeral} ${styles[position]}`}
    data-reveal
    data-revealed="true"
  >
    {value}
  </span>
);

export default PageNumeral;
