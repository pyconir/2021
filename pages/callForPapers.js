import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/general/layout";
import CallForPapersPage from "../components/exclusive/callForPapersPage/callForPapersPage";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CallForPapers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Call For Papers</title>
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
        <CallForPapersPage />
      </Layout>
    </div>
  );
}