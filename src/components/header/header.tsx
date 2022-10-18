import { MenuTypes } from "app/constants";
import { useMenuStore, useScoreStore } from "domain/store";

import styles from "./header.module.scss";
import { BackArrow } from "components";

export const Header = () => {
  const score = useScoreStore((state) => state.score);
  const openedMenu = useMenuStore((state) => state.openedMenu);
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);

  return (
    <header
      style={{
        justifyContent:
          openedMenu === MenuTypes.GAME ? "space-between" : "center",
      }}
      className={styles.header}
    >
      {(openedMenu === MenuTypes.TOP_SCORES ||
        openedMenu === MenuTypes.ABOUT) && (
        <div
          onClick={() => {
            setOpenedMenu("");
          }}
          className={styles.backNav}
        >
          <BackArrow />
        </div>
      )}
      <h1>Trivia Game</h1>
      {openedMenu === MenuTypes.GAME && <h3>SCORE : {score}</h3>}
    </header>
  );
};
