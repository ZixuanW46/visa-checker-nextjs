import { create } from "zustand";

type MapStore = {
  selectedPath: string | null;
  setSelectedPath: (path: string | null) => void;
  zoom: number;
  panPosition: { x: number; y: number };
  setZoomAndPan: (zoom: number, panPosition: { x: number; y: number }) => void;
};

export const useMapStore = create<MapStore>((set) => ({
  selectedPath: null,
  setSelectedPath: (path) => set({ selectedPath: path }),
  zoom: 1,
  panPosition: { x: 0, y: 0 },
  setZoomAndPan: (zoom, panPosition) => set({ zoom, panPosition }),
}));
