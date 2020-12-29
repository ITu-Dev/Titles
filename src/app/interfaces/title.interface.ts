export  interface TitleInterface{
  id: number;
  source: string;
  score: number;
  mems: string[];
  time: number;
  sourceUrl: string;
  author: string;
  title: string;
  description: string;
  body: string;
  content?: {
    type?: string,
    url?: string
  }[];
}

