import styles from "./SendJobButton.module.css";

export default function SendJobButton() {
  return (
    <div className={styles.SendJobButtonButtonContainer + " " + "buttonsText"}>
      <div>ارسال فرصت شغلی</div>
    </div>
  );
}
