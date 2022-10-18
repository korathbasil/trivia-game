import { useAnswersStore, useMenuStore } from "domain/store";
import styles from "./result.module.scss";

export const Result = () => {
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);
  const correct = useAnswersStore((state) => state.correct);
  const incorrect = useAnswersStore((state) => state.incorrect);
  const unattended = useAnswersStore((state) => state.unattended);
  return (
    <section className={styles.result}>
      <div className={styles.border}></div>
      <div className={styles.item}>
        <p>Correct Answers : </p>
        <p>{correct}</p>
      </div>
      <div className={styles.item}>
        <p>Incorrect Answers : </p>
        <p>{incorrect}</p>
      </div>
      <div className={styles.item}>
        <p>Unattended Questions : </p>
        <p>{unattended}</p>
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
