import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAnswersStore,
  useMenuStore,
  useScoreStore,
  useTimerStore,
} from "domain/store";
import { MenuTypes } from "app/constants";
import {
  CORRECT_ANSWER_MULTIPLIER,
  MAX_QUEESTIONS_LIMIT,
} from "domain/constants";

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
  // Form
  const validationSchema = Yup.object({
    ans: Yup.string().min(1).max(100),
  });
  const formik = useFormik({
    initialValues: {
      ans: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

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
  }, [timer, submitted, decreaseTimer]);

  function handleSubmit() {
    setSubmitted(true);

    if (formik.values.ans.toLowerCase() === correctAnswer.toLowerCase()) {
      increaseCorrect();
      const points = timer * CORRECT_ANSWER_MULTIPLIER;
      setPoints(points);
      increaseScore(points);
    } else {
      increaseIncorrect();
      decreaseScore(50);
    }
  }
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="ans">Please enter your answer below.</label>
      <input
        type="text"
        name="ans"
        id="ans"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ans}
        disabled={submitted || timer <= 0}
      />
      <div className={styles.actions}>
        <button
          disabled={!formik.values.ans || submitted || timer <= 0}
          type="submit"
        >
          Submit
        </button>
        {questionCount < MAX_QUEESTIONS_LIMIT && (
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
        {questionCount >= MAX_QUEESTIONS_LIMIT && (
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
                formik.values.ans.toLowerCase() === correctAnswer.toLowerCase()
                  ? "var(--clr-green-yellow)"
                  : "var(--clr-danger)",
            }}
          >
            {formik.values.ans.toLowerCase() === correctAnswer.toLowerCase()
              ? `Correct Answer ${points} points`
              : "Incorrect Answer"}
          </h3>
        )}
      </div>
    </form>
  );
};
