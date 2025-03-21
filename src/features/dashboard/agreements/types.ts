export interface IAgreement {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  responsiblePerson: string;
  status: "Active" | "Cancelled" | "Completed" | "At Risk";
  progress: number;
  reportsUploaded: "Semi-Annual" | "Annual" | "Quarterly" | "Not Expired";
  action: string;
}


export const agreements: IAgreement[] = [
  {
    id: "001",
    title: "Climate Action Partnership",
    startDate: "2023-01-01",
    endDate: "2023-01-01",
    responsiblePerson: "John Doe, Mary Smith",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Semi-Annual",
    action: "...",
  },
  {
    id: "002",
    title: "Digital Education Initiative",
    startDate: "2022-06-15",
    endDate: "2022-06-15",
    responsiblePerson: "Alex Johnson",
    status: "Cancelled",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Annual",
    action: "...",
  },
  {
    id: "003",
    title: "Renewable Energy Collaboration",
    startDate: "2023-03-01",
    endDate: "2023-03-01",
    responsiblePerson: "David Lee",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Quarterly",
    action: "...",
  },
  {
    id: "004",
    title: "Youth Empowerment Program",
    startDate: "2022-09-10",
    endDate: "2022-09-10",
    responsiblePerson: "Linda Malisa",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Semi-Annual",
    action: "...",
  },
  {
    id: "005",
    title: "Agriculture Support Program",
    startDate: "2020-10-01",
    endDate: "2020-10-01",
    responsiblePerson: "Peter Nyakusi",
    status: "Completed",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Quarterly",
    action: "...",
  },
  {
    id: "006",
    title: "Health & Wellbeing Consortium",
    startDate: "2021-04-01",
    endDate: "2021-04-01",
    responsiblePerson: "Dr. Regina Mushi",
    status: "At Risk",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Quarterly",
    action: "...",
  },
  {
    id: "007",
    title: "Infrastructure Development",
    startDate: "2019-07-01",
    endDate: "2019-07-01",
    responsiblePerson: "Michael Chacha",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Semi-Annual",
    action: "...",
  },
  {
    id: "008",
    title: "Environmental Conservation",
    startDate: "2022-01-01",
    endDate: "2022-01-01",
    responsiblePerson: "Nancy Kiewelu",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Not Expired",
    action: "...",
  },
  {
    id: "009",
    title: "Technology Innovation Hub",
    startDate: "2020-08-01",
    endDate: "2020-08-01",
    responsiblePerson: "Brenda Kimaro",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Quarterly",
    action: "...",
  },
  {
    id: "010",
    title: "Community Health Program",
    startDate: "2020-08-01",
    endDate: "2020-08-01",
    responsiblePerson: "Emily Mwambene",
    status: "Active",
    progress: Math.floor(Math.random() * 101),
    reportsUploaded: "Not Expired",
    action: "...",
  },
];

