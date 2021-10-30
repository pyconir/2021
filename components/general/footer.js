import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.footerTexts}>&copy;2021 PyCon Iran</div>
      </div>
    </div>
  );
}
