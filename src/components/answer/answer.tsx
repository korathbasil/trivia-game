import { useScoreStore, useTimerStore } from "domain/store";
import { FC, FormEvent, useEffect, useState } from "react";
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
  const timer = useTimerStore((state) => state.timer);
  const decreaseTimer = useTimerStore((st) => st.decreaseTimer);
  const resetTimer = useTimerStore((state) => state.resetTimer);

  const increaseScore = useScoreStore((state) => state.increaseScore);
  const decreaseScore = useScoreStore((state) => state.decreaseScore);

  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      if (timer > 0 && !submitted) {
        decreaseTimer(1);
      } else {
        clearInterval(tick);
      }
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, [timer]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      const points = (15 - timer) * 10;
      increaseScore(points);
    } else {
      decreaseScore(5);
    }
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
        disabled={submitted || timer <= 0}
      />
      <div className={styles.actions}>
        <button disabled={!answer || submitted || timer <= 0} type="submit">
          Submit
        </button>
        {questionCount < 15 && (
          <div
            onClick={() => {
              resetTimer();
              handleNext();
            }}
          >
            <p>{submitted || timer <= 0 ? "Next" : "Skip"}</p>
          </div>
        )}
        {questionCount >= 15 && (
          <div
            onClick={() => {
              setSubmitted(true);
              resetTimer();
              handleNext();
            }}
          >
            <p>See Results</p>
          </div>
        )}
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
              : "Incorrect Answer"}
          </h3>
        )}
      </div>
    </form>
  );
};
