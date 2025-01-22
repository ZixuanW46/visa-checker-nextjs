import { create } from "zustand";

type DrawerStore = {
  isPolicyDrawerOpen: boolean;
  setPolicyDrawerOpen: (isOpen: boolean) => void;
  isInputDrawerOpen: boolean;
  setInputDrawerOpen: (isOpen: boolean) => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  isPolicyDrawerOpen: false,
  setPolicyDrawerOpen: (isOpen) => set({ isPolicyDrawerOpen: isOpen }),
  isInputDrawerOpen: false,
  setInputDrawerOpen: (isOpen) => set({ isInputDrawerOpen: isOpen }),
}));
