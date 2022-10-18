import { FC, useEffect } from "react";

import styles from "./header.module.scss";

interface HeaderProps {
  started: boolean;
}

export const Header: FC<HeaderProps> = ({ started }) => {
  useEffect(() => {
    console.log("Rerender");
  }, []);
  return (
    <header
      style={{
        justifyContent: started ? "space-between" : "center",
      }}
      className={styles.header}
    >
      <h1>Trivia Game</h1>
      {started && <h3>SCORE : {0}</h3>}
    </header>
  );
};
