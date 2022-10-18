import { MenuTypes } from "app/constants";
import {
  useAnswersStore,
  useMenuStore,
  useScoreStore,
  useTimerStore,
} from "domain/store";
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
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);

  const timer = useTimerStore((state) => state.timer);
  const decreaseTimer = useTimerStore((st) => st.decreaseTimer);
  const resetTimer = useTimerStore((state) => state.resetTimer);

  const increaseScore = useScoreStore((state) => state.increaseScore);
  const decreaseScore = useScoreStore((state) => state.decreaseScore);

  const increaseCorrect = useAnswersStore((state) => state.increaseCorrect);
  const increaseIncorrect = useAnswersStore((state) => state.increaseIncorrect);
  const increaseUnattended = useAnswersStore(
    (state) => state.increaseUnattended
  );

  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(10);

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
      increaseCorrect();
      const points = timer * 10;
      setPoints(points);
      increaseScore(points);
    } else {
      increaseIncorrect();
      decreaseScore(50);
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
              if (!submitted) {
                increaseUnattended();
              }
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
              if (!submitted) {
                increaseUnattended();
              }
              setSubmitted(true);
              resetTimer();
              setOpenedMenu(MenuTypes.RESULT);
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
                  ? "var(--clr-green-yellow)"
                  : "var(--clr-danger)",
            }}
          >
            {answer.toLowerCase() === correctAnswer.toLowerCase()
              ? `Correct Answer ${points} points`
              : "Incorrect Answer"}
          </h3>
        )}
      </div>
    </form>
  );
};
