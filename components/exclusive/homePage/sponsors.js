import styles from "./Sponsors.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Sponsors() {
  return (
    <section>
      <div className={styles.sponsorsSectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>اسپانسرها</div>
          <img
            src={prefix + "/GeneralAssets/titleUnderline.png"}
            alt="titleUnderline"
          />
        </div>
        <div className={styles.onProcessImageContainer}>
          <img
            src={prefix + "/GeneralAssets/onProcess.png"}
            alt="onProcess"
            width="200"
            height="172"
          />
        </div>
      </div>
    </section>
  );
}
