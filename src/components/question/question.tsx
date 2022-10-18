import { FC } from "react";
import { serializeQuestion } from "app/utils";

import styles from "./question.module.scss";

interface QuestionProps {
  question: string;
}

export const Question: FC<QuestionProps> = ({ question }) => {
  return (
    <div className={styles.div}>
      <p>
        {serializeQuestion(question).map((element, index) => {
          return (
            <>
              <span>{element}</span>
              {index !== serializeQuestion(question).length - 1 && (
                <span>&quot;</span>
              )}
            </>
          );
        })}
      </p>
    </div>
  );
};
