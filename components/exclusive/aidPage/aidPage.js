import styles from "./AidPage.module.css";
import SupportButton from "./supportButton";

export default function AidPage() {
  return (
    <section>
      <div className={styles.aidPageContainer}>
        <h1>حمایت از کنفرانس</h1>
        <div className={"bodyText"}>
          کنفرانس{" "}
          <span>
            <a
              href="https://pycon.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              PyCon
            </a>
          </span>{" "}
          از معتبرترین کنفرانس‌های بین المللی در حوزه برنامه نویسی است. این
          کنفرانس با هدف جمع کردن برنامه نویسانی که از زبان برنامه نویسی پایتون
          استفاده می‌کنند حول یک موضوع مشترک یعنی Python به صورت سالانه در
          کشورهای زیادی برگزار می‌شود.
        </div>
        <div className={"bodyText"}>
          خوشحالیم که در کشور عزیزمان، موفق به کسب مجوزهای مربوطه از کمیته
          برگزارکننده کنفرانس جهت برگزاری بخش ایران این کنفرانس شده‌ایم و بیش از
          آن از برگزاری یک دورهمی پایتونی با حضور شما برنامه نویسان خوب کشورمان
          مسروریم.
        </div>
        <div className={"bodyText"}>
          شما می‌توانید با فشردن دکمه حمایت در زیر، برای امکان ادامه فعالیت
          کنفرانس در بهترین سطح ممکن ما را یاری نمایید.
        </div>
        <SupportButton />
      </div>
    </section>
  );
}
