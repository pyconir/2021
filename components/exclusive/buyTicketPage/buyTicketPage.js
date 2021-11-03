import styles from "./BuyTicketPage.module.css";
import BuyTicketButton from "./buyTicketButton";

export default function BuyTicketPage() {
  return (
    <section>
      <div className={styles.buyTicketPageContainer}>
        <h1>خرید بلیت</h1>
        <h2>انواع بلیت</h2>
        <div className={"bodyText"}>
          برای این دوره از کنفرانس یک نوع بلیت در نظر گرفته شده است که شامل
          استفاده از همه امکانات کنفرانس می‌شود. از این رو با خرید این بلیت
          دسترسی به همه ارایه های آنلاین و ورکشاپ‌ها مهیا خواهد شد.
        </div>

        <ul className={"bodyText"}>
          <li>هزینه بلیت شرکت در کنفرانس برای هر نفر 99 هزار تومان است</li>
        </ul>
        <div className={"bodyText"}>
          برای ثبت نام و تهیه بلیت بر روی دکمه زیر کلیک کنید تا به سایت ایوند
          جهت تهیه بلیت ارجاع داده شود.
        </div>
        <BuyTicketButton />
      </div>
    </section>
  );
}
