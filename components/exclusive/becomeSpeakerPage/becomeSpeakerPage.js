import styles from "./BecomeSpeakerPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BecomeSpeakerPage() {
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
        className={styles.becomeSpeakerPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.becomeSpeaker.t1")}</h1>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p1")}</div>
      </div>
    </section>
  );
}
