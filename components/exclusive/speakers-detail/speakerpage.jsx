import styles from "./speakerPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function SpeakerPage(props) {
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
        className={styles.speakerPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1 className={styles.speakerName}>
          {t("pages.speakers.speakers." + props.speaker + ".name")}{" "}
          <span className={styles.speakType}>
            {" "}
            {t("pages.speakers.speakers." + props.speaker + ".type")}
          </span>
        </h1>
        <div className={styles.speakerImageContainer}>
          <img
            src={"/ExclusiveAssets/speakers/images/" + props.speaker + ".jpg"}
            alt={props.speaker + "-image"}
            className={styles.speakerImage}
          />
        </div>
        <div className={styles.aboutSpeaker}>
          {t("pages.speakers.speakers." + props.speaker + ".about")}
        </div>
        <h3 className={styles.speakTitle}>
          {t("pages.speakers.speakers." + props.speaker + ".talkTitle")}
        </h3>
        <div className={styles.speakDetails}>
          {Object.entries(
            t("pages.speakers.speakers." + props.speaker + ".talkDetail")
          ).map((text, index) => {
            if (text[0].startsWith("p")) {
              return (
                <div className={styles.speakerDetailsParagraphs} key={index}>
                  {text[1]}
                </div>
              );
            } else if (text[0].startsWith("ul")) {
              return (
                <ul>
                  {Object.entries(text[1]).map((list, index2) => {
                    if (list[0].startsWith("li")) {
                      return <li key={index2}>{list[1]}</li>;
                    } else if (list[0].startsWith("ul")) {
                      return (
                        <ul>
                          {Object.entries(list[1]).map((listInList, index3) => {
                            return <li key={index3}>{listInList[1]}</li>;
                          })}
                        </ul>
                      );
                    } else if (list[0].startsWith("p")) {
                      return <div key={index2}>{list[1]}</div>;
                    }
                  })}
                </ul>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
