import styles from "./Events.module.css";

export default function Events() {
  return (
    <section>
      <div className={styles.eventSectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>خبرهای کنفرانس</div>
          <img
            src="/GeneralAssets/titleUnderline.png"
            alt="titleUnderline"
          />
        </div>
      </div>
    </section>
  );
}
