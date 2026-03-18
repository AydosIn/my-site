export type Achievement = {
  id: string;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "a-1",
    title: "IELTS Band 7",
    organization: "British Council",
    date: "2025",
    description: "Achieved IELTS Band 7",
  },
  {
    id: "a-2",
    title: "SAT Score 1360",
    organization: "College Board",
    date: "2025",
    description: "Scored 1360 on the SAT",
  },
  {
    id: "a-3",
    title: "Software Engineering",
    organization: "Self-taught",
    date: "2025-present",
    description: "i am not good at it yet, but i am walking towards it)",
  },
  {
    id: "a-4",
    title: "Critical Thinking",
    organization: "Independent",
    date: "Ongoing",
    description: "Developed strong analytical and problem-solving skills through reading, writing, and building.",
  },
  {
    id: "a-5",
    title: "Communication",
    organization: "Independent",
    date: "Ongoing",
    description: " Communication skills across written and verbal formats in multiple languages.",
  },
];

