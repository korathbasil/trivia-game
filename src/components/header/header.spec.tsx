import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "./header";

describe("Header", () => {
  it("renders Trivia Game heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      //   name: /welcome to next\.js!/i,
      name: "Trivia Game",
    });
    expect(heading).toBeInTheDocument();
  });
});
