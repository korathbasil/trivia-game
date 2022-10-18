import { FC, FormEvent, useState } from "react";
import styles from "./answer.module.scss";

interface AnswerPops {
  correctAnswer: string;
  questionCount: number;
  handleNext: () => void;
}

export const Answer: FC<AnswerPops> = ({
  correctAnswer,
  questionCount,
  handleNext,
}) => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="ans">Please enter your answer below.</label>
      <input
        type="text"
        name="ans"
        id="ans"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        disabled={submitted}
      />
      <div className={styles.actions}>
        <button disabled={!answer || submitted} type="submit">
          Submit
        </button>
        <div
          onClick={() => {
            handleNext();
          }}
        >
          <p>{submitted ? "Next" : "Skip"}</p>
        </div>
        {submitted && (
          <h3
            style={{
              color:
                answer.toLowerCase() === correctAnswer.toLowerCase()
                  ? "var(--clr-light-green)"
                  : "var(--clr-danger)",
            }}
          >
            {answer.toLowerCase() === correctAnswer.toLowerCase()
              ? `Correct Answer +10 points`
              : "Incorrect Answer"}{" "}
          </h3>
        )}
      </div>
    </form>
  );
};
