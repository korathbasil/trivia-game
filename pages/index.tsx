import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { Header, Menu, Trivia } from "components";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);

  function startTrivia() {
    setStart(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia Game</title>
        <meta name="description" content="Trivia Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header started={start} score={score} />
        {!start && <Menu startHandler={startTrivia} highScore={200} />}
        {start && <Trivia score={score} />}
      </div>
    </div>
  );
};

export default HomePage;
