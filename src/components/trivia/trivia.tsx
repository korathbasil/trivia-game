import { useEffect, useState } from "react";
import { QuestionsService } from "infra/services";
import { Question } from "domain/models";

import styles from "./trivia.module.scss";
import { Spinner, Question as QuestionUI, Answer } from "components";
import { useTimerStore } from "domain/store";

export const Trivia = () => {
  const timer = useTimerStore((state) => state.timer);
  const resetTimer = useTimerStore((state) => state.resetTimer);

  const [count, setCount] = useState(1);
  const [question, setQuestion] = useState<Question | null>(null);

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
      const questions = await QuestionsService.getOneQuestion();

      if (questions) {
        setQuestion(questions[0]);
      }
    } catch (error) {}
  }

  return (
    <section className={styles.trivia}>
      {!question && (
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
    </section>
  );
};
