import styles from "./Events.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Events() {
  return (
    <section>
      <div className={styles.eventSectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>خبرهای کنفرانس</div>
          <img
            src={prefix + "/GeneralAssets/titleUnderline.png"}
            alt="titleUnderline"
          />
        </div>
      </div>
    </section>
  );
}
