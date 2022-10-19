import { useEffect, useState } from "react";
import { Score } from "domain/models";
import { sortScores } from "app/utils";

import styles from "./top-scores.module.scss";

export const TopScores = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    let scores: Score[] = [];

    if (localStorage.getItem("SCORES")) {
      scores = JSON.parse(localStorage.getItem("SCORES")!);
    }

    let sortedScores = sortScores(scores);
    if (sortScores.length > 5) {
      sortedScores = sortedScores.slice(0, 6);
    }
    setScores(sortedScores);

    localStorage.setItem("SCORES", JSON.stringify(sortedScores));
  }, []);
  return (
    <section className={styles.scores}>
      <div className={styles.border}></div>
      {scores.length !== 0 && <h3>Top scores</h3>}
      {scores.length === 0 && (
        <div className={styles.messageContainer}>
          <p>No scores.</p>
        </div>
      )}
      <div className={styles.scores}>
        {scores.map((sc) => (
          <p key={sc.date}>
            {sc.score} - {sc.date}
          </p>
        ))}
      </div>
    </section>
  );
};
