import { FC, useEffect, useState } from "react";
import { serializeQuestion } from "app/utils";

import styles from "./question.module.scss";
import { useTimerStore } from "domain/store";

interface QuestionProps {
  question: string;
  timer: number;
}

export const Question: FC<QuestionProps> = ({ question, timer }) => {
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
