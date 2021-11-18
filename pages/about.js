import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/general/layout";
import AboutPyconIr from "../components/exclusive/aboutPage/aboutPyconIr";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About PyconIr</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link
          href="https://v1.fontapi.ir/css/Sahel:400;700;900"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <AboutPyconIr />
      </Layout>
    </div>
  );
}
