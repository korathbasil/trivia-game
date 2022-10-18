import { FC } from "react";

interface QuestionProps {
  question: string;
}

export const Question: FC<QuestionProps> = ({ question }) => {
  return (
    <div>
      <p>{question}</p>
    </div>
  );
};
