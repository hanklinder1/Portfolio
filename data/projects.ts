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
    id: 'ibm-skillsbuild',
    title: 'IBM SkillsBuild AI Challenge',
    summary: 'Selected participant in a competitive, semester-long AI innovation challenge focused on applying artificial intelligence to real-world industry problems.',
    description: 'Selected participant in a competitive, semester-long AI innovation challenge (Feb 19 – May 1) focused on applying artificial intelligence to real-world industry problems. While the specific industry case has not yet been presented, the program centers on designing AI-powered solutions, building intelligent workflows, and translating business problems into deployable data-driven systems. The challenge emphasizes practical AI implementation—not just theory—including model design, structured problem solving, and solution prototyping within business constraints.',
    problem: 'Real-world industry problems require AI-powered solutions that can be operationalized within business constraints, not just theoretical models.',
    solution: 'Designing AI-powered solutions, building intelligent workflows, and translating business problems into structured data frameworks. Focus on practical implementation including model design, structured problem solving, and solution prototyping.',
    impact: 'Developing deployable AI solutions that operationalize analytics and translate business challenges into actionable, data-driven systems.',
    techStack: ['AI/ML', 'Model Design', 'Structured Problem Solving', 'Solution Prototyping', 'Business Analytics'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/hanklinder1',
    featured: true,
  },
  {
    id: 'situational-book-finder',
    title: 'Situational Book Finder – AI-Powered Virtual Library (In Progress)',
    summary: 'End-to-end semantic book discovery system that recommends books based on emotional state, goals, and user context—not keyword matching.',
    description: 'Currently building an end-to-end semantic book discovery platform that recommends books based on emotional state, goals, and user context rather than simple keyword matching. The system is designed as a full AI retrieval architecture: ingesting and structuring large-scale book data, generating vector embeddings, implementing semantic search, and preparing for integration of a custom LLM layer for personalized recommendations and conversational explanations. Built using Supabase (PostgreSQL) as the vector database backend, custom Python ingestion pipelines, and a Streamlit front-end interface. The system converts user input into embedding vectors and retrieves semantically similar books across 4,000+ entries. Currently expanding toward a Retrieval-Augmented Generation (RAG) architecture integrating LLM-based response generation on top of vector search.',
    problem: 'Readers often know how they want to feel or what they want to accomplish, but keyword-based search fails to capture intent, context, and semantic similarity.',
    solution: 'Built an end-to-end AI retrieval system: ingest and structure book metadata at scale, generate embeddings, perform semantic search against a vector-enabled PostgreSQL backend, and return context-aligned recommendations. The architecture is designed to evolve into a RAG workflow with an LLM layer for personalized explanations and conversational refinement.',
    impact: 'A deployable AI tool that operationalizes semantic retrieval for practical recommendations, providing a foundation for LLM-assisted discovery and decision support.',
    techStack: [
      'Python',
      'Supabase (PostgreSQL)',
      'Vector embeddings',
      'Semantic search',
      'Streamlit',
      'VS Code',
      'OpenAI / LLM APIs',
      'Retrieval-Augmented Generation (RAG)',
      'Data ingestion pipelines',
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/hanklinder1',
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
