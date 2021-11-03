import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/general/layout";
import PresentWorkshopPage from "../components/exclusive/presentWorkshopPage/presentWorkshopPage";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PresentWorkshop() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Present Workshop</title>
        <meta name="description" content="" />
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link
          href="https://v1.fontapi.ir/css/Sahel:400;700;900"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <PresentWorkshopPage />
      </Layout>
    </div>
  );
}
