import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <div className={styles.logoandMenuContainer}>
          <div className={styles.logo}>لوگو</div>
          <div className={styles.itemsContainer}>
            <div className={styles.item}>منویک</div>
            <div className={styles.item}>منودو</div>
            <div className={styles.item}>منوسه</div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.languageButton}>EN</div>
          <div className={styles.buyButton}>خرید بلیت / حمایت از کنفرانس</div>
        </div>
      </div>
    </div>
  );
}
