import create from "zustand";

interface MenuStoreState {
  openedMenu: string;
  setOpenedMenu: (menu: string) => void;
}

export const useMenuStore = create<MenuStoreState>((set) => ({
  openedMenu: "",
  setOpenedMenu: (menu: string) => set({ openedMenu: menu }),
}));
