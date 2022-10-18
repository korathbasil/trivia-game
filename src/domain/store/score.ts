import create from "zustand";

interface ScoreStoreState {
  score: number;
  increaseScore: (n: number) => void;
  decreaseScore: (n: number) => void;
}

export const useScoreStore = create((set) => ({
  score: 0,
  increaseScore: (n: number) =>
    set((state: ScoreStoreState) => ({ score: state.score + n })),
  decreaseScore: (n: number) =>
    set((state: ScoreStoreState) => {
      if (state.score - n < 0) {
        return { score: 0 };
      }
      return { score: state.score - n };
    }),
}));
