export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'bmw-ai-dashboard',
    title: 'BMW AI Cost Dashboard',
    summary: 'An interactive dashboard and economic model to evaluate cost structures, risk tradeoffs, and AI integration decisions.',
    description: 'A comprehensive economic modeling tool and interactive dashboard for evaluating AI integration costs, risks, and tradeoffs for BMW.',
    problem: 'Decision-makers needed a clear way to evaluate the economic implications of AI integration, including cost structures and risk tradeoffs.',
    solution: 'Developed an interactive dashboard with Monte Carlo simulation capabilities to model various scenarios and their economic outcomes.',
    impact: 'Provided data-driven insights that informed strategic AI integration decisions.',
    techStack: ['Python', 'Pandas', 'Streamlit', 'Monte Carlo Simulation', 'Data Visualization'],
    liveUrl: 'https://bmw-dashboard.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'barflow',
    title: 'BarFlow',
    summary: 'A location-based social app that helps friends coordinate nights out with real-time presence and privacy controls.',
    description: 'BarFlow is a mobile application designed to help friends coordinate social outings in real-time while maintaining privacy controls.',
    problem: 'Coordinating group outings is difficult when people are scattered across different locations and have varying availability.',
    solution: 'Built a location-based social app with real-time presence tracking, privacy controls, and group coordination features.',
    impact: 'Enabled seamless coordination for friend groups while respecting user privacy preferences.',
    techStack: ['React Native', 'Expo', 'Map Integration', 'Authentication', 'Backend API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
];
