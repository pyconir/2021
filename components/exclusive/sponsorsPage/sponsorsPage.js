import styles from "./SponsorsPage.module.css";
import SponsorsContainer from "./sponsorsContainer";
import BecomeSponserButton from "./becomeSponserButton";

export default function SponsorsPage() {
  return (
    <section>
      <div className={styles.sponsorsPageContainer}>
        <h1>اسپانسرها</h1>
        <div className={"bodyText"}>
          کنفرانس PyconIr افتخار بهره‌مندی از حمایت اسپانسرهای ارایه شده در این
          صفحه را دارد.
        </div>
        <BecomeSponserButton />
        <SponsorsContainer
          plan={"پلاتینیوم"}
          color={"linear-gradient(to right, white , #D6D5D3 , #D6D5D3 )"}
        >
          در حال تکمیل
        </SponsorsContainer>
        <SponsorsContainer
          plan={"طلایی"}
          color={"linear-gradient(to right, white , #D29A50 , #D29A50 )"}
        >
          در حال تکمیل
        </SponsorsContainer>
        <SponsorsContainer
          plan={"نقره‌ای"}
          color={"linear-gradient(to right, white , #757573 , #757573)"}
        >
          در حال تکمیل
        </SponsorsContainer>
      </div>
    </section>
  );
}
