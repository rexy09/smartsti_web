import { create } from "zustand";
export interface KnowledgeHubFilterParameters {
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
const initialState: KnowledgeHubFilterParameters = {
  startDate: "",
  endDate: "",
  region: "",
  type: "",
  search: "",
};

export const useOpportunitiesParameters = create<KnowledgeHubFilterParameters & Actions>((set) => ({
  ...initialState,

  updateText(type, val) {
    set(() => ({ [type]: val }));
  },
  reset: () => {
    set(initialState);
  },
}));
