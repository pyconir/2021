import styles from "./Landing.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Landing() {
  return (
    <section>
      <div className={styles.landingSectionContainer}>
        <img
          src={prefix + "/GeneralAssets/landingImage1.png"}
          alt="landingImage"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
