import { useEffect, useState } from "react";
import { QuestionsService } from "infra/services";
import { Question } from "domain/models";

import styles from "./trivia.module.scss";
import { Spinner, Question as QuestionUI, Answer } from "components";
import { useMenuStore, useTimerStore } from "domain/store";
import { MenuTypes } from "app/constants";

export const Trivia = () => {
  const timer = useTimerStore((state) => state.timer);
  const resetTimer = useTimerStore((state) => state.resetTimer);
  const setOpenedMenu = useMenuStore((state) => state.setOpenedMenu);

  const [count, setCount] = useState(1);
  const [question, setQuestion] = useState<Question | null>(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetchQuestion();
  }, [count]);

  function handleNext() {
    if (count <= 15) {
      setCount((c) => c + 1);
      setQuestion(null);
    }
  }

  async function fetchQuestion() {
    try {
      const question = await QuestionsService.getOneQuestion();

      if (question) {
        setQuestion(question);
      }
    } catch (error: any) {
      setErr(error.message);
    }
  }

  return (
    <section className={styles.trivia}>
      {!question && !err && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      {question && <QuestionUI question={question.question} timer={timer} />}
      {question && (
        <Answer
          correctAnswer={question.correct_answer}
          questionCount={count}
          handleNext={handleNext}
        />
      )}
      <p className={styles.title}>Question {count}</p>
      {err && !question && (
        <div className={styles.err}>
          <p>{err}</p>

          <h4
            onClick={() => {
              resetTimer();
              setOpenedMenu(MenuTypes.HOME);
            }}
          >
            Go to Menu
          </h4>
        </div>
      )}
    </section>
  );
};
