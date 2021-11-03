import styles from "./BecomeSponsorPage.module.css";

export default function BecomeSponsorPage() {
  return (
    <section>
      <div className={styles.becomeSponsorPageContainer}>
        <h1>اسپانسر شوید</h1>
        <div className={"bodyText"}>
          کنفرانس PyconIr در قبال حمایت اسپانسرها مزایای زیر را در نظر گرفته است
          :
        </div>
        <ul className={"bodyText"}>
          <li>قرار گرفتن نام یا نشان تجاری شرکت در صفحه نخست کنفرانس</li>
        </ul>
      </div>
    </section>
  );
}
