import styles from "./CallPapers.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CallPapers() {
  return (
    <section>
      <div className={styles.callPapersSectionContainer}>
        <div className={styles.callActionButtonsContainer}>
          <img
            className={styles.callActionButtons}
            src={prefix + "/GeneralAssets/callPaperButton.png"}
          ></img>
          <div className={styles.actionButtonText} style={{ color: "#307ea0" }}>
            ارسال مقاله
          </div>
        </div>
        <div className={styles.callActionButtonsContainer}>
          <img
            className={styles.callActionButtons}
            src={prefix + "/GeneralAssets/buyTicketButton.png"}
          ></img>
          <div className={styles.actionButtonText} style={{ color: "#48af6a" }}>
            خرید بلیت
          </div>
        </div>
      </div>
    </section>
  );
}
