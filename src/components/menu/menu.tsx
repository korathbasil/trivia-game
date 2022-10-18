import { FC } from "react";

import styles from "./menu.module.scss";

interface MenuProps {
  startHandler: () => void;
  highScore: number;
}

export const Menu: FC<MenuProps> = ({ startHandler, highScore }) => {
  return (
    <section className={styles.menu}>
      <h2 onClick={startHandler}>START</h2>
      <h2>TOP SCORES</h2>
      <h2>ABOUT</h2>
    </section>
  );
};
