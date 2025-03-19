import { create } from "zustand";

export interface DashboardFilterParameters {
  startDate: string;
  endDate: string;
  state: string;
}

export interface Actions {
  updateText(type: "startDate" | "endDate" | "state", val: string): void;
  reset: () => void;
}

// define the initial state
const initialState: DashboardFilterParameters = {
  startDate: "",
  endDate: "",
  state: "",
};

export const useDashboardParameters = create<
  DashboardFilterParameters & Actions
>((set) => ({
  ...initialState,

  updateText(type, val) {
    set(() => ({ [type]: val }));
  },
  reset: () => {
    set(initialState);
  },
}));
