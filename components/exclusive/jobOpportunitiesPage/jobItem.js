import styles from "./JobItem.module.css";
import { useTranslation } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function JobItem(props) {
  const { t } = useTranslation();
  const jobNumber = props.number;
  return (
    <div className={styles.jobItemContainer}>
      <div className={styles.brand}>
        <img
          className={styles.brandImage}
          src={prefix + "/GeneralAssets/onProcess.png"}
          alt=""
        />
      </div>
      <div className={styles.jobDescription}>
        {t(`pages.jobOpportunities.jobs.job${jobNumber}.description`)}
      </div>
      <div className={styles.jobPayment}>
        {t(`pages.jobOpportunities.jobs.job${jobNumber}.payment`)}
      </div>
    </div>
  );
}
