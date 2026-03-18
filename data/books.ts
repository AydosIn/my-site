export type Book = {
    id: string;
    title: string;
    author: string;
    takeaway?: string;
    year?: number;
    tags?: string[];
  };
  
  export const books: Book[] = [
    {
      id: "b-1",
      title: "Clean Code",
      author: "Robert C. Martin",
      takeaway: "Value of readable names and small functions.",
      year: 2008,
      tags: ["engineering", "craft"]
    },
    {
      id: "b-2",
      title: "Atomic Habits",
      author: "James Clear",
      takeaway: "System over goals; compound effects of small habits.",
      year: 2018,
      tags: ["productivity", "behavior"]
    }
  ];