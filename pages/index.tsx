import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia Game</title>
        <meta name="description" content="Trivia Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Trivia Game</h3>
    </div>
  );
};

export default Home;
