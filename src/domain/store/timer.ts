import create from "zustand";

interface TimerStoreState {
  timer: number;
  decreaseTimer: (n: number) => void;
}

export const useTimerStore = create<TimerStoreState>((set) => ({
  timer: 15,
  decreaseTimer: (n: number) =>
    set((state: TimerStoreState) => ({
      timer: state.timer - n,
    })),
}));
