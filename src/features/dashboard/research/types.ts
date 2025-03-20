export interface IResearchOutput {
  title: string;
  author: string;
  year: number;
  category: string;
  citations: number;
  institution: string;
}

export const researchData: IResearchOutput[] = [
  {
    title: "AI in Healthcare",
    author: "Dr. John Doe",
    year: 2023,
    category: "Healthcare",
    citations: 850,
    institution: "AI Research Center",
  },
  {
    title: "Smart Farming",
    author: "Prof. Jane Smith",
    year: 2023,
    category: "Agriculture",
    citations: 520,
    institution: "Agriculture Lab",
  },
  {
    title: "Data Science in Education",
    author: "Dr. Sarah Lee",
    year: 2023,
    category: "STEM Education",
    citations: 95,
    institution: "National University",
  },
  {
    title: "Machine Learning Intelligence",
    author: "Dr. John Doe",
    year: 2023,
    category: "AI Research",
    citations: 2450,
    institution: "AI Research Center",
  },
  {
    title: "Agricultural Statistics",
    author: "Prof. Jane Smith",
    year: 2023,
    category: "Agriculture",
    citations: 150,
    institution: "University of Pretoria",
  },
];

export interface IPublicationInsight {
  id: string;
  title: string;
  type: string;
  focusArea: string;
  contribution: string;
  authors: string;
  date: string;
  publicAccess: boolean;
}

export const publicationInsightData: IPublicationInsight[] = [
  {
    id: "P001",
    title: "Impact of Climate Change on Agriculture",
    type: "Journal Article",
    focusArea: "Climate Change",
    contribution: "Environmental Sustainability",
    authors: "Dr. John Doe, S. Smith",
    date: "2023-05-12",
    publicAccess: true,
  },
  {
    id: "P002",
    title: "Economic Growth Through Renewable Energy",
    type: "Conference Paper",
    focusArea: "Economic Impact",
    contribution: "Economic Growth",
    authors: "M. Johnson, C. Lee",
    date: "2022-11-08",
    publicAccess: false,
  },
  {
    id: "P003",
    title: "Social Development via Digital Education",
    type: "Report",
    focusArea: "Social Development",
    contribution: "Social Development",
    authors: "T. Mwambene",
    date: "2023-03-25",
    publicAccess: true,
  },
  {
    id: "P004",
    title: "Climate Change and Public Health",
    type: "Journal Article",
    focusArea: "Climate Change",
    contribution: "Health & Wellbeing",
    authors: "Dr. A. Hassan, E. Mushi",
    date: "2021-09-17",
    publicAccess: true,
  },
  {
    id: "P005",
    title: "Environmental Policies in Tanzania",
    type: "Report",
    focusArea: "Climate Change",
    contribution: "Environmental Sustainability",
    authors: "N. Kivelu, J. Chacha",
    date: "2023-07-10",
    publicAccess: false,
  },
  {
    id: "P006",
    title: "Digital Solutions for Economic Growth",
    type: "Conference Paper",
    focusArea: "Economic Impact",
    contribution: "Economic Growth",
    authors: "S. Chikopa, B. Mwepopo",
    date: "2022-12-05",
    publicAccess: true,
  },
  {
    id: "P007",
    title: "Youth Empowerment and Social Change",
    type: "Journal Article",
    focusArea: "Social Development",
    contribution: "Social Development",
    authors: "D. Kahama, L. Malisa",
    date: "2024-01-15",
    publicAccess: true,
  },
  {
    id: "P008",
    title: "Climate Adaptation in Rural Tanzania",
    type: "Report",
    focusArea: "Climate Change",
    contribution: "Environmental Sustainability",
    authors: "H. Nyalusi, V. Masanja",
    date: "2023-06-20",
    publicAccess: false,
  },
  {
    id: "100132",
    title: "Public Health Strategies in Urban Areas",
    type: "Journal Article",
    focusArea: "Social Development",
    contribution: "Health & Wellbeing",
    authors: "Dr. R. Mgaya",
    date: "2023-04-30",
    publicAccess: true,
  },
  {
    id: "100135",
    title: "Renewable Energy Adoption Challenges",
    type: "Conference Paper",
    focusArea: "Economic Impact",
    contribution: "Economic Growth",
    authors: "J. Komba, M. Kineng",
    date: "2023-02-28",
    publicAccess: false,
  },
];


export interface IPatent {
  title: string;
  inventor: string;
  datePublished: string;
  category: string;
  patentNumber: string;
}

export const patentsData: IPatent[] = [
  {
    title: "Smart Farming Drone",
    inventor: "Dr. John Doe",
    datePublished: "2023",
    category: "AI Research",
    patentNumber: "US123456781",
  },
  {
    title: "AI-Powered Diagnosis System",
    inventor: "Prof. Jane Smith",
    datePublished: "2022",
    category: "Agriculture",
    patentNumber: "US765432161",
  },
  {
    title: "Renewable Energy Storage Device",
    inventor: "Dr. Alex Kim",
    datePublished: "2021",
    category: "Engineering",
    patentNumber: "EP09876548B2",
  },
  {
    title: "Data Science in Education",
    inventor: "Dr. Sarah Lee",
    datePublished: "2023",
    category: "STEM Education",
    patentNumber: "US765432161",
  },
  {
    title: "Machine Learning for Healthcare",
    inventor: "Dr. John Doe",
    datePublished: "2022",
    category: "AI Research",
    patentNumber: "EP09876548B2",
  },
  {
    title: "Agricultural Robotics",
    inventor: "Dr. Sarah Lee",
    datePublished: "2021",
    category: "STEM Education",
    patentNumber: "US765432161",
  },
  {
    title: "Machine Learning for Healthcare",
    inventor: "Dr. John Doe",
    datePublished: "2023",
    category: "AI Research",
    patentNumber: "US765432161",
  },
  {
    title: "Agricultural Robotics",
    inventor: "Prof. Jane Smith",
    datePublished: "2021",
    category: "Agriculture",
    patentNumber: "US123456781",
  },
  {
    title: "Predictive Analytics in Agriculture",
    inventor: "Dr. Laura Zhang",
    datePublished: "2023",
    category: "Engineering",
    patentNumber: "EP09876548B2",
  },
  {
    title: "Smart Cities and IoT",
    inventor: "Dr. Alex Kim",
    datePublished: "2023",
    category: "AI Research",
    patentNumber: "EP09876548B2",
  },
  {
    title: "AI-Powered Diagnosis in Healthcare",
    inventor: "Dr. Sarah Lee",
    datePublished: "2022",
    category: "Environmental Science",
    patentNumber: "US123456781",
  },
  {
    title: "Renewable Materials for Sustainable Tech",
    inventor: "Prof. Michael Chen",
    datePublished: "2021",
    category: "Agriculture",
    patentNumber: "US123456781",
  },
  {
    title: "Predictive Analytics in Agriculture",
    inventor: "Dr. Laura Zhang",
    datePublished: "2021",
    category: "Education",
    patentNumber: "US123456781",
  },
];

export interface IResearchProject {
  title: string;
  researcher: string;
  startDate: string;
  endDate: string;
  status: string;
  fundingSource: string;
}

export const researchProjectData: IResearchProject[] = [
  {
    title: "AI in Healthcare",
    researcher: "Dr. John Doe",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "Ministry of Education",
  },
  {
    title: "Smart Farming",
    researcher: "Prof. Jane Smith",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "In Progress",
    fundingSource: "Green Tech Fund",
  },
  {
    title: "Renewable Energy Storage Device",
    researcher: "Dr. Alex Kim",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Near Completion",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Data Science in Education",
    researcher: "Dr. Sarah Lee",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "In Progress",
    fundingSource: "Green Tech Fund",
  },
  {
    title: "Machine Learning for Healthcare",
    researcher: "Dr. John Doe",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "In Progress",
    fundingSource: "Green Tech Fund",
  },
  {
    title: "Agricultural Robotics",
    researcher: "Dr. Sarah Lee",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Machine Learning for Healthcare",
    researcher: "Dr. John Doe",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Agricultural Robotics",
    researcher: "Prof. Jane Smith",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "In Progress",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Predictive Analytics in Agriculture",
    researcher: "Dr. Laura Zhang",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Near Completion",
    fundingSource: "Ministry of Education",
  },
  {
    title: "Smart Cities and IoT",
    researcher: "Dr. Alex Kim",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Near Completion",
    fundingSource: "Ministry of Education",
  },
  {
    title: "AI-Powered Diagnosis in Healthcare",
    researcher: "Dr. Sarah Lee",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Renewable Materials for Sustainable Tech",
    researcher: "Prof. Michael Chen",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "AI Research Grant",
  },
  {
    title: "Predictive Analytics in Agriculture",
    researcher: "Dr. Laura Zhang",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "Active",
    fundingSource: "AI Research Grant",
  },
];