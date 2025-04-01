import { create } from "zustand";
export interface ResearchFilterParameters {
  startDate: string;
  endDate: string;
  region: string;
  type: string;
  search: string;
}

export interface Actions {
  updateText(
    type: "startDate" | "endDate" | "region" | "type"| "search",
    val: string
  ): void;
  reset: () => void;
}
// define the initial state
const initialState: ResearchFilterParameters = {
  startDate: "",
  endDate: "",
  region: "",
  type: "",
  search: "",
};

export const useOpportunitiesParameters = create<ResearchFilterParameters & Actions>((set) => ({
  ...initialState,

  updateText(type, val) {
    set(() => ({ [type]: val }));
  },
  reset: () => {
    set(initialState);
  },
}));
