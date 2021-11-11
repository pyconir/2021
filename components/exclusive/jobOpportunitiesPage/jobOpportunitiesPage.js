import styles from "./JobOpportunitiesPage.module.css";
import SendJobButton from "./sendJobButton";
import JobItem from "./jobItem";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function JobOpportunitiesPage() {
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
        className={styles.jobOpportunitiesPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.jobOpportunities.page.t1")}</h1>
        <div className={"bodyText"}>{t("pages.jobOpportunities.page.p1")}</div>
        <SendJobButton />
        <JobItem number={1} />
      </div>
    </section>
  );
}
