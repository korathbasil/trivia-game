import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useMenuStore } from "domain/store";
import { MenuTypes } from "app/constants";

import styles from "../styles/Home.module.css";
import { Header, Menu, Trivia } from "components";

const HomePage: NextPage = () => {
  const [start, setStart] = useState(false);

  const openedMenu = useMenuStore((state) => state.openedMenu);

  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia Game</title>
        <meta name="description" content="Trivia Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header started={start} />
        {!openedMenu && <Menu />}
        {openedMenu === MenuTypes.GAME && <Trivia />}
      </div>
    </div>
  );
};

export default HomePage;
