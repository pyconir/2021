import styles from "./Speakers.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Speakers() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const pagelang = () => {
    if (typeof query !== "undefined") {
      if (query.lang == "en") {
        return "en";
      } else {
        return "fa";
      }
    } else {
      return "fa";
    }
  };
  return (
    <section>
      <div className={styles.speakersSectionContainer} style={
          pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }
        }>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>{t("pages.home.speakers.t1")}</div>
          <img
            src={prefix +
              "/GeneralAssets/titleUnderline" +
              (pagelang() == "en" ? "Flip" : "") +
              ".png"}
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