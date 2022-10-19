import { sortScores } from "./array";

describe("sortSCore function", () => {
  const arr = [
    {
      id: new Date().toISOString(),
      score: 120,
      date: new Date().toDateString(),
    },
    {
      id: new Date().toISOString(),
      score: 270,
      date: new Date().toDateString(),
    },
    {
      id: new Date().toISOString(),
      score: 85,
      date: new Date().toDateString(),
    },
  ];

  it("returns an array containing Score objects", () => {
    const res = sortScores(arr);
    expect(res[0]).toHaveProperty("id");
    expect(res[0]).toHaveProperty("score");
    expect(res[0]).toHaveProperty("date");
  });

  it("sorts given array", () => {
    const res = sortScores(arr);
    expect(res[0].score).toEqual(85);
    expect(res[1].score).toEqual(120);
    expect(res[2].score).toEqual(270);
  });
});
