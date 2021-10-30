import styles from "./Speakers.module.css";

const prefix = '/pyconir2021'

export default function Speakers() {
  return (
    <section>
      <div className={styles.speakersSectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>سخنرانان</div>
          <img src={prefix + "/GeneralAssets/titleUnderline.png"} alt="titleUnderline" />
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
