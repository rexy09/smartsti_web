export interface IOpportunity {
  id: string;
  name: string;
  type: "Research" | "Training (Short)" | "Competition" | "Funding Call";
  funding: number;
  deadline: string;
  status: "Ongoing" | "Closed";
  views: number;
}

export const opportunities: IOpportunity[] = [
  {
    id: "1",
    name: "AI in Education Grant",
    type: "Research",
    funding: 50000,
    deadline: "15/04/2024",
    status: "Ongoing",
    views: 320,
  },
  {
    id: "2",
    name: "Renewable Energy Bootcamp",
    type: "Training (Short)",
    funding: 10000,
    deadline: "15/04/2024",
    status: "Closed",
    views: 87,
  },
  {
    id: "3",
    name: "Robotics Challenge",
    type: "Competition",
    funding: 8500,
    deadline: "15/02/2024",
    status: "Ongoing",
    views: 220,
  },
  {
    id: "4",
    name: "Renewable Energy Testing",
    type: "Funding Call",
    funding: 125000,
    deadline: "15/02/2024",
    status: "Ongoing",
    views: 73,
  },
  {
    id: "5",
    name: "AI Robotics Challenge",
    type: "Competition",
    funding: 0,
    deadline: "15/02/2024",
    status: "Closed",
    views: 155,
  },
];
