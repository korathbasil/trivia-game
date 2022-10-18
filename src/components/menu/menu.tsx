import { FC } from "react";

interface MenuProps {
  startHandler: () => void;
}

export const Menu: FC<MenuProps> = ({ startHandler }) => {
  return (
    <section>
      <h2 onClick={startHandler}>START</h2>
    </section>
  );
};
