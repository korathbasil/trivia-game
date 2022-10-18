import { useEffect, useState } from "react";
import { QuestionsService } from "infra/services";
import { Question } from "domain/models";

import styles from "./trivia.module.scss";
import { Question as QuestionUI } from "components";

export const Trivia = () => {
  const [count, setCount] = useState(1);

  const [q, setQ] = useState<Question | null>(null);

  async function fetchQuestion() {
    try {
      const questions = await QuestionsService.getOneQuestion();

      if (questions) {
        setQ(questions[0]);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchQuestion();
    console.log("fetching");
  }, []);
  return (
    <section className={styles.trivia}>
      {q && <QuestionUI question={q.question} />}
    </section>
  );
};
