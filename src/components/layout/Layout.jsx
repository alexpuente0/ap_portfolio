import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Cursor from './Cursor';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.shell}>
    <Nav />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
    <Cursor />
  </div>
);

export default Layout;
