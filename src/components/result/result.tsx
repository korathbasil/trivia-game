import { useMenuStore } from "domain/store";
import styles from "./result.module.scss";

export const Result = () => {
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);
  return (
    <section className={styles.result}>
      <div className={styles.border}></div>
      <div className={styles.item}>
        <p>Correct Answers : </p>
        <p>5</p>
      </div>
      <div className={styles.item}>
        <p>Incorrect Answers : </p>
        <p>8</p>
      </div>
      <div className={styles.item}>
        <p>Unattended Questions : </p>
        <p>2</p>
      </div>
      <div className={styles.item}>
        <p>Total Score : </p>
        <p>40</p>
      </div>
      <h4
        onClick={() => {
          setOpenedMenu("");
        }}
      >
        Go to Menu
      </h4>
    </section>
  );
};
