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
    <header className={styles.header}>
      <h1
        style={{
          textAlign: started ? "left" : "center",
        }}
      >
        Trivia Game
      </h1>
    </header>
  );
};
