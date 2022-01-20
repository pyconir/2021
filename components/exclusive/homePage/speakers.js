import styles from "./Speakers.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function SpeakerCard(props) {
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
    <>
      <div className={styles.speakerCardContainer}>
        <Link
          href={{ pathname: "/speakers-detail/" + props.speaker, query: query }}
        >
          <div className={styles.speakerImageContainer}>
            <img
              src={props.imageUrl}
              alt="speaker-image"
              className={styles.speakerImage}
            />
          </div>
        </Link>
        <Link
          href={{ pathname: "/speakers-detail/" + props.speaker, query: query }}
        >
          <div className={styles.speakerName}>{props.name}</div>
        </Link>

        <div className={styles.spkeakerTitle}>{props.title}</div>
        <div className={styles.aboutSpeaker}>{props.about}</div>
        <div className={styles.speakerTalkTitle}>{props.talkTitle}</div>
        {props.social && (
          <div className={styles.speakerContactsContainer}>
            {props.github.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.github.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/github.svg`}
                  alt="github-icon"
                />
              </a>
            )}
            {props.twitter.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.twitter.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/twitter.svg`}
                  alt="twitter-icon"
                />
              </a>
            )}
            {props.linkedin.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.linkedin.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/linkedin.svg`}
                  alt="linkedin-icon"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}

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
      <div
        className={styles.speakersSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <div className={styles.sectionTitleContainer}>
          <h1>
            {t("pages.home.speakers.t1")}
            <div style={{ fontSize: "16px" }}>
              {t("pages.home.speakers.t1-1")}
            </div>
          </h1>

          <img
            src={
              prefix +
              "/GeneralAssets/titleUnderline" +
              (pagelang() == "en" ? "Flip" : "") +
              ".png"
            }
            alt="titleUnderline"
            style={{ marginBottom: "30px" }}
            className={styles.underLineImage}
          />
        </div>
        <div className={styles.speakersContainer}>
          <SpeakerCard
            speaker={"speaker1"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker1.jpg"}
            name={t("pages.home.speakers.speakers.speaker1.name")}
            title={t("pages.home.speakers.speakers.speaker1.title")}
            about={t("pages.home.speakers.speakers.speaker1.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker1.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker2"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker2.jpg"}
            name={t("pages.home.speakers.speakers.speaker2.name")}
            title={t("pages.home.speakers.speakers.speaker2.title")}
            about={t("pages.home.speakers.speakers.speaker2.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker2.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker3"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker3.jpg"}
            name={t("pages.home.speakers.speakers.speaker3.name")}
            title={t("pages.home.speakers.speakers.speaker3.title")}
            about={t("pages.home.speakers.speakers.speaker3.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker3.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker4"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker4.jpg"}
            name={t("pages.home.speakers.speakers.speaker4.name")}
            title={t("pages.home.speakers.speakers.speaker4.title")}
            about={t("pages.home.speakers.speakers.speaker4.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker4.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/alireza-zolanvari",
            }}
          />
          <SpeakerCard
            speaker={"speaker5"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker5.jpg"}
            name={t("pages.home.speakers.speakers.speaker5.name")}
            title={t("pages.home.speakers.speakers.speaker5.title")}
            about={t("pages.home.speakers.speakers.speaker5.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker5.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/sadrasabouri" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/sadra-sabouri-136354170",
            }}
          />
          <SpeakerCard
            speaker={"speaker6"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker6.jpg"}
            name={t("pages.home.speakers.speakers.speaker6.name")}
            title={t("pages.home.speakers.speakers.speaker6.title")}
            about={t("pages.home.speakers.speakers.speaker6.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker6.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker7"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker7.jpg"}
            name={t("pages.home.speakers.speakers.speaker7.name")}
            title={t("pages.home.speakers.speakers.speaker7.title")}
            about={t("pages.home.speakers.speakers.speaker7.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker7.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker8"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker8.jpg"}
            name={t("pages.home.speakers.speakers.speaker8.name")}
            title={t("pages.home.speakers.speakers.speaker8.title")}
            about={t("pages.home.speakers.speakers.speaker8.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker8.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/AFanaei" }}
            twitter={{ valid: true, link: "https://twitter.com/AhmadFanaei" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/ahmad-fanaei-408b19128/",
            }}
          />
          <SpeakerCard
            speaker={"speaker9"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker9.jpg"}
            name={t("pages.home.speakers.speakers.speaker9.name")}
            title={t("pages.home.speakers.speakers.speaker9.title")}
            about={t("pages.home.speakers.speakers.speaker9.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker9.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: false,
              link: "",
            }}
          />
        </div>
      </div>
    </section>
  );
}
