import styles from "./JobOpportunitiesPage.module.css";
import SendJobButton from "./sendJobButton";
import JobItem from "./jobItem";

export default function JobOpportunitiesPage() {
  return (
    <section>
      <div className={styles.jobOpportunitiesPageContainer}>
        <h1>نمایشگاه فرصت‌های شغلی</h1>
        <div className={"bodyText"}>امکان ارسال فرصت شغلی جهت نمایش در نمایشگاه کار مهیا شده است.</div>
        <SendJobButton />
        <JobItem />
      </div>
    </section>
  );
}
