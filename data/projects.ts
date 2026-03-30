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
    id: 'carteroo',
    title: 'Carteroo – Nationwide Golf Cart Marketplace',
    summary: 'A full-stack marketplace for buying and selling golf carts nationwide — built from scratch as an independent project with Stripe payments, dealer subscriptions, and listing boosts.',
    description:
      'I identified a gap in the market — no dedicated golf cart marketplace existed, so sellers relied on Craigslist and Facebook Marketplace. I built Carteroo from scratch as a full-stack product: a nationwide marketplace where sellers create multi-step listings with photo uploads, buyers browse and filter by make, condition, power type, and price, and inquiries are routed via transactional email. Monetization follows the AutoTrader/Zillow model with featured listing boosts (7-day $9.99 or 30-day $19.99 via Stripe Checkout) and recurring dealer subscription tiers (Standard/Premium/Pro via Stripe Billing). Users have profile dashboards to manage listings, saved carts, and boost status. The entire product — frontend, backend, payments, auth, storage, and deployment — was built independently with no computer science background, using AI-assisted development.',
    problem: 'No dedicated marketplace existed for golf carts — sellers were fragmented across Craigslist, Facebook Marketplace, and local classifieds with no filtering, no payment infrastructure, and no dealer tools.',
    solution: 'Built a full-stack marketplace with filtered search, multi-step listing creation with photo uploads, buyer inquiry system with transactional email, Stripe-powered featured listing boosts, recurring dealer subscriptions, Supabase Auth with Row-Level Security, and profile dashboards.',
    impact: 'A live, revenue-ready marketplace at carteroo.com with real payment infrastructure, dealer subscription tiers, and a scalable architecture — built entirely as a solo independent project.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase (PostgreSQL + Auth + Storage)', 'Stripe (Checkout, Webhooks, Subscriptions)', 'Resend', 'Vercel'],
    liveUrl: 'https://carteroo.com',
    githubUrl: 'https://github.com/hanklinder1/Carteroo',
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
    summary: 'A real-time nightlife coordination app for college students—see where your friends are and coordinate nights out instantly.',
    description:
      'BarFlow is a real-time nightlife coordination app built for college students to answer one question quickly: where are my friends tonight? The platform combines live bar presence, friend discovery, direct messaging, and lightweight "nudge" invites in a mobile-first interface optimized for fast decisions while going out. I built it as a full-stack system with secure auth, profile onboarding, mutual friend permissions, geolocation-based automatic check-ins, and real-time updates so location and conversations stay in sync instantly. The stack includes a TypeScript/Node backend with Prisma and PostgreSQL, a React frontend deployed on Vercel, and socket-based event delivery for live social coordination.',
    problem: 'When going out, friends need to quickly answer: where is everyone tonight?',
    solution:
      'Built a full-stack mobile-first platform with live bar presence, friend discovery, direct messaging, nudge invites, geolocation-based automatic check-ins, and real-time sync for location and conversations.',
    impact: 'Enables fast decisions while going out—location and conversations stay in sync instantly.',
    techStack: ['TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'React', 'Vercel', 'WebSockets', 'Geolocation'],
    liveUrl: 'https://barflowcodex.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
];
