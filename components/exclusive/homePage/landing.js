import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section>
      <div className={styles.landingSectionContainer}>
        <img
          src="/GeneralAssets/landingImage.png"
          alt="landingImage"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
