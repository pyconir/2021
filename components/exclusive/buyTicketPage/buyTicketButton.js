import styles from "./BuyTicketButton.module.css";

export default function BuyTicketButton() {
  return (
    <div className={styles.BuyTicketButtonContainer + " " + "buttonsText"}>
      <div>خرید بلیت</div>
    </div>
  );
}
