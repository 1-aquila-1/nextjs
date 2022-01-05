import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from '../../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main id={styles.main}>{children}</main>
      <Footer />
    </>
  )
}