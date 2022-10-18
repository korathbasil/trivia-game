import { useMenuStore } from "domain/store";
import { MenuTypes } from "app/constants";

import styles from "./menu.module.scss";

export const Menu = () => {
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);
  return (
    <section className={styles.menu}>
      <h2
        onClick={() => {
          setOpenedMenu(MenuTypes.GAME);
        }}
      >
        START
      </h2>
      <h2
        onClick={() => {
          setOpenedMenu(MenuTypes.TOP_SCORES);
        }}
      >
        TOP SCORES
      </h2>
      <h2
        onClick={() => {
          setOpenedMenu(MenuTypes.ABOUT);
        }}
      >
        ABOUT
      </h2>
    </section>
  );
};
