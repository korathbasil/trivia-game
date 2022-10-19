import type { NextPage } from "next";
import Head from "next/head";
import { useMenuStore } from "domain/store";
import { MenuTypes } from "app/constants";

import styles from "../styles/Home.module.css";
import { About, Header, Menu, Result, TopScores, Trivia } from "components";

const HomePage: NextPage = () => {
  const openedMenu = useMenuStore((state) => state.openedMenu);

  return (
    <div className={styles.root}>
      <Head>
        <title>Trivia Game</title>
        <meta name="description" content="Trivia Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        {!openedMenu && <Menu />}
        {openedMenu === MenuTypes.GAME && <Trivia />}
        {openedMenu === MenuTypes.RESULT && <Result />}
        {openedMenu === MenuTypes.TOP_SCORES && <TopScores />}
        {openedMenu === MenuTypes.ABOUT && <About />}
      </div>
    </div>
  );
};

export default HomePage;
