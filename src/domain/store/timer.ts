import create from "zustand";
import { MAX_TIME_LIMIT } from "domain/constants";

interface TimerStoreState {
  timer: number;
  decreaseTimer: (n: number) => void;
  resetTimer: () => void;
}

export const useTimerStore = create<TimerStoreState>((set) => ({
  timer: MAX_TIME_LIMIT,
  decreaseTimer: (n: number) =>
    set((state: TimerStoreState) => ({
      timer: state.timer - n,
    })),
  resetTimer: () =>
    set({
      timer: MAX_TIME_LIMIT,
    }),
}));
