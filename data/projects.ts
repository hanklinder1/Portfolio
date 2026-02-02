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
  tableauUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'bmw-2025',
    title: 'BMW Manufacturing Data Project – 2025',
    summary: 'Foundational data exploration and early analysis of manufacturing context for the BMW collaboration.',
    description: 'Exploratory phase of the BMW partnership: learning the manufacturing context, initial data analysis, and early data exploration.',
    problem: 'Understanding manufacturing data structures and operational context before building decision support tools.',
    solution: 'Conducted exploratory data analysis and learned manufacturing workflows to establish a foundation for later modeling work.',
    impact: 'Established context and data familiarity that enabled the 2026 decision framework.',
    techStack: ['Data Analysis', 'Manufacturing Context', 'Exploratory Work'],
    liveUrl: 'https://bmw-dashboard.vercel.app/',
    githubUrl: 'https://github.com/hanklinder1',
    featured: true,
  },
  {
    id: 'bmw-2026',
    title: 'BMW Manufacturing Data Valuation & Decision Modeling – 2026',
    summary: 'Risk-adjusted decision framework to evaluate whether manufacturing plants should adopt, delay, or reject third-party technologies.',
    description: 'Built a risk-adjusted decision framework for manufacturing technology adoption. Focuses on data readiness, operational and integration risk, organizational constraints, and expected economic value (risk-adjusted ROI). Goal is decision support for technology adoption—not just dashboards or reporting.',
    problem: 'Manufacturing plants need a structured way to decide whether to adopt, delay, or reject third-party technologies based on data readiness, risk, and economic value.',
    solution: 'Developed a risk-adjusted decision framework with SQL scoring logic, Tableau executive dashboard, and scenario parameters. Evaluates data readiness, operational/integration risk, organizational constraints, and risk-adjusted ROI.',
    impact: 'Provides decision support for manufacturing technology adoption with clear adopt/delay/reject recommendations.',
    techStack: ['PostgreSQL (Supabase)', 'SQL', 'Tableau Public', 'GitHub', 'Vercel'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/hanklinder1',
    tableauUrl: 'https://public.tableau.com/app/profile/hank.linder/viz/BMW-StyleDataRiskValueDashboard/Dashboard2?publish=yes',
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
