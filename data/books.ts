export interface Book {
  title: string;
  author: string;
  whyItShaped: string;
  coverImage?: string;
}

export const books: Book[] = [
  {
    title: 'Basic Economics',
    author: 'Thomas Sowell',
    whyItShaped: 'Taught me to think systematically about incentives, trade-offs, and unintended consequences in economic systems.',
  },
  {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand',
    whyItShaped: 'Influenced my thinking on individual achievement, rational self-interest, and the importance of productive work in creating value.',
  },
];
