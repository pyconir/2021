import styles from "./Landing.module.css";

const prefix = '/pyconir2021'

export default function Landing() {
  return (
    <section>
      <div className={styles.landingSectionContainer}>
        <img
          src={prefix + "/GeneralAssets/landingImage.png"}
          alt="landingImage"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
