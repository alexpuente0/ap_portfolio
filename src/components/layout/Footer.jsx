import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const PAGE_MAP = {
  '/': '01',
  '/about': '02',
  '/stack': '03',
  '/projects': '04',
  '/contact': '05',
};

const Footer = () => {
  const { pathname } = useLocation();
  const page = PAGE_MAP[pathname] || '01';
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.cell}>Monterrey, MX</span>
        <span aria-hidden="true" className={styles.rule} />
        <span className={styles.cell}>
          Studio — Alex Puente
        </span>
        <span aria-hidden="true" className={styles.rule} />
        <span className={styles.cell}>
          <span className={styles.page}>
            p.
            {page}
          </span>
          <span aria-hidden="true"> / </span>
          <span className={styles.pageTotal}>p.05</span>
          <span aria-hidden="true"> · </span>
          ©
          {' '}
          {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
