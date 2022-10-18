import { FC, useEffect, useState } from "react";
import { serializeQuestion } from "app/utils";

import styles from "./question.module.scss";
import { useTimerStore } from "domain/store";

interface QuestionProps {
  question: string;
}

export const Question: FC<QuestionProps> = ({ question }) => {
  const timer = useTimerStore((state) => state.timer);
  const decreaseTimer = useTimerStore((st) => st.decreaseTimer);

  useEffect(() => {
    const tick = setTimeout(() => {
      if (timer > 0) {
        decreaseTimer(1);
      } else {
        clearTimeout(tick);
      }
    }, 1000);

    return () => {
      clearTimeout(tick);
    };
  }, [timer]);

  return (
    <div className={styles.div}>
      <p>{serializeQuestion(question)}</p>
      <div className={styles.timer}>
        <h3
          style={{
            color: timer <= 3 ? "var(--clr-danger)" : "var(--clr-primary)",
          }}
        >
          {timer}s
        </h3>
      </div>
    </div>
  );
};
