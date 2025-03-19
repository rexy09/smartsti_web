

export interface BidFilterParameters {
  startDate: string;
  endDate: string;
}

export interface Actions {
  updateText(type: "startDate" | "endDate", val: string): void;
  reset: () => void;
}

