import create from "zustand";

interface AnswersStoreState {
  correct: number;
  incorrect: number;
  unattended: number;
  increaseCorrect: () => void;
  increaseIncorrect: () => void;
  increaseUnattended: () => void;
}

export const useAnswersStore = create<AnswersStoreState>((set) => ({
  correct: 0,
  incorrect: 0,
  unattended: 0,
  increaseCorrect: () => set((state) => ({ correct: state.correct + 1 })),
  increaseIncorrect: () => set((state) => ({ incorrect: state.incorrect + 1 })),
  increaseUnattended: () =>
    set((state) => ({ unattended: state.unattended + 1 })),
}));
