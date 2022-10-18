import { useEffect, useState } from "react";
import { QuestionsService } from "infra/services";
import { Question } from "domain/models";

import styles from "./trivia.module.scss";
import { Spinner, Question as QuestionUI, Answer } from "components";

export const Trivia = () => {
  const [count, setCount] = useState(1);

  const [question, setQuestion] = useState<Question | null>(null);

  async function fetchQuestion() {
    try {
      const questions = await QuestionsService.getOneQuestion();

      if (questions) {
        setQuestion(questions[0]);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchQuestion();
    console.log("fetching");
  }, []);
  return (
    <section className={styles.trivia}>
      {!question && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      {question && <QuestionUI question={question.question} />}
      {question && <Answer />}
    </section>
  );
};
