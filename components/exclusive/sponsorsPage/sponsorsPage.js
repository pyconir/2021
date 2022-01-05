import styles from "./SponsorsPage.module.css";
import SponsorsContainer from "./sponsorsContainer";
import BecomeSponserButton from "./becomeSponserButton";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function SponsorsPage() {
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
        className={styles.sponsorsPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.sponsors.page.t1")}</h1>
        <div className={"bodyText"}>{t("pages.sponsors.page.p1")}</div>
        <BecomeSponserButton />
        {/* <SponsorsContainer
          plan={t("pages.sponsors.page.p2")}
          color={"linear-gradient(to right, white , #D6D5D3 , #D6D5D3 )"}
        >
          در حال تکمیل
        </SponsorsContainer>
        <SponsorsContainer
          plan={t("pages.sponsors.page.p3")}
          color={"linear-gradient(to right, white , #D29A50 , #D29A50 )"}
        >
          در حال تکمیل
        </SponsorsContainer>
        <SponsorsContainer
          plan={t("pages.sponsors.page.p4")}
          color={"linear-gradient(to right, white , #757573 , #757573)"}
        >
          در حال تکمیل
        </SponsorsContainer> */}
      </div>
    </section>
  );
}
