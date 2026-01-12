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
    title: 'The Road to Serfdom',
    author: 'Friedrich Hayek',
    whyItShaped: 'Shaped my understanding of how central planning can lead to unintended outcomes and the importance of decentralized decision-making.',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    whyItShaped: 'Helped me recognize cognitive biases and the importance of systematic thinking in data analysis and decision-making.',
  },
  {
    title: 'Manias, Panics, and Crashes',
    author: 'Charles Kindleberger',
    whyItShaped: 'Provided frameworks for understanding market dynamics, bubbles, and the role of psychology in economic cycles.',
  },
];
