export type CardType = {
  courseid?: number;
  bookid?: number;
  name: string;
  author: string;
  info: string;
  image: string;
  type: string;
};

export type ItemType = "books" | "courses";
