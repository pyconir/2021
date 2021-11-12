import styles from "./SpeakersPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function SpeakersPage() {
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
      <div
        className={styles.speakersPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.speakers.t1")}</h1>
        <div className={"bodyText"}>{t("pages.speakers.p1")}</div>
      </div>
    </section>
  );
}
