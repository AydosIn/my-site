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
      title: "Won XYZ Hackathon",
      organization: "XYZ Org",
      date: "2025",
      description: "Built a prototype solving ABC with DEF.",
      link: "https://example.com/project"
    },
    {
      id: "a-2",
      title: "Launched Side Project",
      organization: "Indie",
      date: "2024",
      description: "Shipped a minimal product with real users.",
      link: "https://example.com"
    }
  ];

  