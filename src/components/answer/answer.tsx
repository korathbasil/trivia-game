import { FC, FormEvent } from "react";
import styles from "./answer.module.scss";

interface AnswerPops {
  answer: string;
  questionCount: number;
}

export const Answer: FC<AnswerPops> = ({ answer, questionCount }) => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="ans">Please enter your answer below.</label>
      <input type="text" name="ans" id="ans" />
      <div className={styles.actions}>
        <button type="submit">Submit</button>
        <div>
          <p>Next</p>
        </div>
      </div>
    </form>
  );
};
