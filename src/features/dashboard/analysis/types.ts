// src/types/Report.ts
export interface IReport {
  resourceTitle: string;
  category: string;
  publishDate: string;
  institution: string;
  downloads: number;
  action: string;
}


export const reports: IReport[] = [
  {
    resourceTitle: "AI in Education",
    category: "AI & Data Science",
    publishDate: "Jan 2025",
    institution: "UDSM Innovation Lab",
    downloads: 450,
    action: "...",
  },
  {
    resourceTitle: "Health Tech Innovations",
    category: "Health & Medicine",
    publishDate: "Dec 2024",
    institution: "AI4EduTech",
    downloads: 320,
    action: "...",
  },
  {
    resourceTitle: "Renewable Energy Solutions",
    category: "Engineering",
    publishDate: "Nov 2024",
    institution: "Green Energy Co.",
    downloads: 200,
    action: "...",
  },
  {
    resourceTitle: "STEM Policy Impact",
    category: "Education",
    publishDate: "Oct 2024",
    institution: "Ministry of Education",
    downloads: 150,
    action: "...",
  },
  {
    resourceTitle: "Data Science in Agriculture",
    category: "AI & Data Science",
    publishDate: "Sep 2024",
    institution: "AgriTech Lab",
    downloads: 100,
    action: "...",
  },
  {
    resourceTitle: "Sustainable Engineering Practices",
    category: "Engineering",
    publishDate: "Aug 2024",
    institution: "Tech4All Foundation",
    downloads: 80,
    action: "...",
  },
  {
    resourceTitle: "Digital Health Transformation",
    category: "Health & Medicine",
    publishDate: "Jul 2024",
    institution: "EduTech Tanzania",
    downloads: 70,
    action: "...",
  },
  {
    resourceTitle: "AI in Agriculture",
    category: "AI & Data Science",
    publishDate: "Jun 2024",
    institution: "AI Research Center",
    downloads: 60,
    action: "...",
  },
  {
    resourceTitle: "Renewable Energy Trends",
    category: "Engineering",
    publishDate: "May 2024",
    institution: "Green Energy Co.",
    downloads: 50,
    action: "...",
  },
  {
    resourceTitle: "Digital Transformation in Education",
    category: "STEM Education Reform",
    publishDate: "Apr 2024",
    institution: "Ministry of Education",
    downloads: 40,
    action: "...",
  },
];