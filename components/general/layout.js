import styles from "./Layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
