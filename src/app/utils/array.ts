import { Score } from "domain/models";

export function sortScores(arr: Score[]): Score[] {
  const newArr = arr.sort((a, b) => {
    if (a.score > b.score) return 1;
    if (a.score < b.score) return -1;
    return 0;
  });

  return newArr;
}
