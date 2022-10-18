import create from "zustand";

interface ScoreStoreState {
  score: number;
  increaseScore: (n: number) => void;
  decreaseScore: (n: number) => void;
  reset: () => void;
}

export const useScoreStore = create<ScoreStoreState>((set) => ({
  score: 0,
  increaseScore: (n: number) =>
    set((state: ScoreStoreState) => ({ score: state.score + n })),
  decreaseScore: (n: number) =>
    set((state: ScoreStoreState) => ({ score: state.score - n })),

  reset: () => set({ score: 0 }),
}));
