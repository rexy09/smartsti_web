export interface IPolicy {
  name: string;
  category: string;
  yearIssued: number;
  institutions: string;
}

export const policiesData: IPolicy[] = [
  {
    name: "National STEM Policy",
    category: "AI Research",
    yearIssued: 2023,
    institutions: "AI Research Center",
  },
  {
    name: "AI Ethics Framework",
    category: "Agriculture",
    yearIssued: 2022,
    institutions: "Agriculture",
  },
  {
    name: "Environmental STI Plan",
    category: "Engineering",
    yearIssued: 2021,
    institutions: "Green Tech Lab",
  },
  {
    name: "Others",
    category: "STEM Education",
    yearIssued: 2023,
    institutions: "National University",
  },
  {
    name: "ICT Policy for Education",
    category: "AI Research",
    yearIssued: 2022,
    institutions: "AI Research Center",
  },
  {
    name: "Renewable Energy Guidelines",
    category: "Agriculture",
    yearIssued: 2021,
    institutions: "University of Tanzania",
  },
  {
    name: "Agricultural Innovation Policy",
    category: "Engineering",
    yearIssued: 2023,
    institutions: "Green Tech Lab",
  },
  {
    name: "Smart City Development Plan",
    category: "AI Research",
    yearIssued: 2023,
    institutions: "National University",
  },
  {
    name: "Renewable Energy Guidelines",
    category: "Environmental Science",
    yearIssued: 2022,
    institutions: "Eco Innovation Lab",
  },
  {
    name: "Renewable Energy Guidelines",
    category: "Agriculture",
    yearIssued: 2021,
    institutions: "University of Tanzania",
  },
];

export interface IEducationalResource {
  title: string;
  type: string;
  provider: string;
  level: string;
}

export const resourcesData: IEducationalResource[] = [
  {
    title: "AI for Beginners",
    type: "Online Course",
    provider: "Ministry of Education",
    level: "BEGINNER",
  },
  {
    title: "Research Writing Toolkit",
    type: "PDF Guide",
    provider: "Green Tech Fund",
    level: "INTERMEDIATE",
  },
  {
    title: "Innovation & Startups Webinar",
    type: "Webinar",
    provider: "AI Research Grant",
    level: "ALL LEVELS",
  },
  {
    title: "Data Science Basics",
    type: "Video Lecture",
    provider: "Green Tech Fund",
    level: "ALL LEVELS",
  },
  {
    title: "Advanced Machine Learning",
    type: "Online Course",
    provider: "Green Tech Fund",
    level: "BEGINNER",
  },
  {
    title: "STEM Teaching Resources",
    type: "Webinar",
    provider: "AI Research Grant",
    level: "ALL LEVELS",
  },
  {
    title: "IoT and Smart Devices",
    type: "eBook",
    provider: "AI Research Grant",
    level: "BEGINNER",
  },
  {
    title: "Grant Writing 101",
    type: "Online Course",
    provider: "Ministry of Education",
    level: "BEGINNER",
  },
  {
    title: "Policy Development Insights",
    type: "PDF Guide",
    provider: "Ministry of Education",
    level: "BEGINNER",
  },
  {
    title: "Digital Transformation in Education",
    type: "PDF Guide",
    provider: "AI Research Grant",
    level: "BEGINNER",
  },
];

export interface FundingOpportunity {
  title: string;
  researcher: string;
  awardYear: string;
  recognition: string;
}

export const fundingData: FundingOpportunity[] = [
  {
    title: "AI-Powered Learning Systems",
    researcher: "Dr. Juma Mwakalinga",
    awardYear: "2023",
    recognition: "Best Innovation in EdTech",
  },
  {
    title: "Renewable Energy Storage Solutions",
    researcher: "Prof. Amina Mushi",
    awardYear: "2022",
    recognition: "Green Energy Pioneer Award",
  },
  {
    title: "Smart Farming Technologies",
    researcher: "Dr. Hamisi Chande",
    awardYear: "2021",
    recognition: "Agricultural Tech Excellence",
  },
  {
    title: "STEM Education for Rural Areas",
    researcher: "Dr. Fatma Kihwele",
    awardYear: "2024",
    recognition: "Social Impact Award",
  },
  {
    title: "Advanced Robotics in Healthcare",
    researcher: "Prof. Rehema Mrema",
    awardYear: "2021",
    recognition: "Healthcare Innovation Award",
  },
  {
    title: "Climate Change Monitoring Systems",
    researcher: "Dr. Baraka Msangi",
    awardYear: "2024",
    recognition: "Environmental Impact Award",
  },
  {
    title: "Quantum Computing Applications",
    researcher: "Dr. Halima Haze",
    awardYear: "2024",
    recognition: "Breakthrough Research Award",
  },
  {
    title: "Digital Health and Telemedicine",
    researcher: "Dr. Mwanadi Mushi",
    awardYear: "2022",
    recognition: "HealthTech Leadership Award",
  },
  {
    title: "Biotechnology for Disease Prevention",
    researcher: "Dr. Juma Mwakalinga",
    awardYear: "2022",
    recognition: "Medical Research Excellence",
  },
  {
    title: "AI Ethics and Policy Frameworks",
    researcher: "Prof. Jafari Lema",
    awardYear: "2022",
    recognition: "Policy Innovation Award",
  },
];

export interface ITechnologyInnovation {
  insiteTitle: string;
  category: string;
  institution: string;
  year: number;
}

export const technologyData: ITechnologyInnovation[] = [
  {
    insiteTitle: "BeyondRenewableEnergySolutions",
    category: "Green Technology",
    institution: "Green Innovators",
    year: 2023,
  },
  {
    insiteTitle: "AiPredictiveModeling",
    category: "Artificial Intelligence",
    institution: "AI Research Lab",
    year: 2023,
  },
  {
    insiteTitle: "WearableTechAdvances",
    category: "Wearable Technology",
    institution: "Consumer Electronics Corp",
    year: 2022,
  },
  {
    insiteTitle: "QuantumComputingBreakthrough",
    category: "Quantum Computing",
    institution: "Quantum Labs",
    year: 2024,
  },
  {
    insiteTitle: "SolarEnergyHarvesting",
    category: "Green Technology",
    institution: "Solar Innovators",
    year: 2021,
  },
  {
    insiteTitle: "GenomeEditingInnovations",
    category: "Biotechnology",
    institution: "Genetics Research Institute",
    year: 2023,
  },
  {
    insiteTitle: "CyberSecurityThreatPrevention",
    category: "Cybersecurity",
    institution: "SecureTech",
    year: 2022,
  },
  {
    insiteTitle: "DroneDeliverySystems",
    category: "Logistics & Drones",
    institution: "Air Logistics",
    year: 2023,
  },
];

export interface InnovationData {
  institutionName: string;
  projectTitle: string;
  field: string;
  status: "Completed" | "Ongoing" | "Pending";
  action: string; // For the action column (e.g., icons or buttons)
}


export const innovationData: InnovationData[] = [
  {
    institutionName: "Sokoine University of Agriculture",
    projectTitle: "Smart Irrigation Technology",
    field: "Healthcare",
    status: "Completed",
    action: "...",
  },
  {
    institutionName: "University of Dar es Salaam",
    projectTitle: "AI-Powered Diagnostic System",
    field: "Agriculture",
    status: "Ongoing",
    action: "...",
  },
  {
    institutionName: "Muhimbili University of Health",
    projectTitle: "Urban Planning using GIS",
    field: "Energy",
    status: "Pending",
    action: "...",
  },
  {
    institutionName: "Ardhi University",
    projectTitle: "STEM Education for Rural Areas",
    field: "Urban Development",
    status: "Ongoing",
    action: "...",
  },
  {
    institutionName: "University of Dodoma",
    projectTitle: "Advanced Robotics in Healthcare",
    field: "HealthTech",
    status: "Ongoing",
    action: "...",
  },
  {
    institutionName: "Nelson Mandela African Institute",
    projectTitle: "Climate Change Monitoring Systems",
    field: "EdTech",
    status: "Completed",
    action: "...",
  },
  {
    institutionName: "Mzumbe University",
    projectTitle: "Quantum Computing Applications",
    field: "Healthcare",
    status: "Completed",
    action: "...",
  },
  {
    institutionName: "Sokoine University of Agriculture",
    projectTitle: "Digital Health and Telemedicine",
    field: "HealthTech",
    status: "Ongoing",
    action: "...",
  },
  {
    institutionName: "University of Dodoma",
    projectTitle: "Biotechnology for Disease Prevention",
    field: "University of Dodoma",
    status: "Pending",
    action: "...",
  },
  {
    institutionName: "Ardhi University",
    projectTitle: "AI Ethics and Policy Frameworks",
    field: "Ardhi University",
    status: "Completed",
    action: "...",
  },
];