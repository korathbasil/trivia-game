import styles from "./about.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.border}></div>
      <div className={styles.item}>
        <div>
          <p>Developed By : </p>
        </div>
        <div>
          <p>Bazil Korath</p>
          <p>korathbasil@gmail.com</p>
        </div>
      </div>
      <div className={styles.item}>
        <div>
          <p>Powered By : </p>
        </div>
        <div>
          <a href="https://opentdb.com" target="_blank" rel="noreferrer">
            <p>Open Trivia Database</p>
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <div>
          <p>GitHub : </p>
        </div>
        <div>
          <a
            href="https://github.com/korathbasil/trivia-game"
            target="_blank"
            rel="noreferrer"
          >
            <p>korathbasil/trivia-game</p>
          </a>
        </div>
      </div>
    </section>
  );
};
