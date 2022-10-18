import { useAnswersStore, useMenuStore, useScoreStore } from "domain/store";
import styles from "./result.module.scss";

export const Result = () => {
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);
  const answersStore = useAnswersStore();
  const scoreStore = useScoreStore();

  return (
    <section className={styles.result}>
      <div className={styles.border}></div>
      <div className={styles.item}>
        <p>Correct Answers : </p>
        <p>{answersStore.correct}</p>
      </div>
      <div className={styles.item}>
        <p>Incorrect Answers : </p>
        <p>{answersStore.incorrect}</p>
      </div>
      <div className={styles.item}>
        <p>Unattended Questions : </p>
        <p>{answersStore.unattended}</p>
      </div>
      <div className={styles.item}>
        <p>Total Score : </p>
        <p>{scoreStore.score}</p>
      </div>
      <h4
        onClick={() => {
          scoreStore.reset();
          answersStore.reset();
          setOpenedMenu("");
        }}
      >
        Go to Menu
      </h4>
    </section>
  );
};
