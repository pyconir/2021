import styles from "./Events.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Events() {
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
      <div className={styles.eventSectionContainer} style={
          pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }
        }>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>{t("pages.home.events.t1")}</div>
          <img
            src={prefix + "/GeneralAssets/titleUnderline.png"}
            alt="titleUnderline"
          />
        </div>
      </div>
    </section>
  );
}
