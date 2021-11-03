import styles from "./JobItem.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function JobItem() {
  return (
    <div className={styles.jobItemContainer}>
      <div className={styles.brand}>
        <img
          className={styles.brandImage}
          src="/GeneralAssets/onProcess.png"
          alt=""
        />
      </div>
      <div className={styles.jobDescription}>توضیحات فرصت شغلی</div>
      <div className={styles.jobPayment}>میزان و نحوه پرداخت</div>
    </div>
  );
}
