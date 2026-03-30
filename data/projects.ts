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
    id: 'bmw',
    title: 'BMW Manufacturing – Data Valuation & AI Decision Framework',
    summary: 'Risk-adjusted decision framework built in partnership with BMW to evaluate third-party AI integration into manufacturing operations — combining economic modeling, Monte Carlo simulation, SQL scoring logic, and executive dashboards.',
    description:
      'Selected for a competitive, interdisciplinary research initiative with BMW focused on governing third-party AI integration into proprietary manufacturing systems. Developed economic models and Monte Carlo simulations to quantify the value of BMW\'s proprietary manufacturing data and evaluate financial tradeoffs of granting AI vendors access to sensitive operations. Built a risk-scoring decision model that evaluates data readiness, operational/integration risk, organizational constraints, and risk-adjusted ROI to produce clear adopt/delay/reject recommendations across hundreds of factory variables. Delivered interactive dashboards and web-based tools for both technical teams and executive stakeholders.',
    problem: 'Manufacturing plants need a structured way to decide whether to adopt, delay, or reject third-party AI technologies — balancing data exposure, cost, operational risk, and expected economic value.',
    solution: 'Built a risk-adjusted decision framework with Monte Carlo simulations, SQL scoring logic, Tableau executive dashboard, and scenario parameters. The model evaluates data readiness, operational/integration risk, organizational constraints, and risk-adjusted ROI to produce actionable adopt/delay/reject recommendations.',
    impact: 'Provides BMW with a deployable decision support system for manufacturing technology adoption — used by both technical teams and executive stakeholders.',
    techStack: ['Python', 'PostgreSQL (Supabase)', 'SQL', 'Monte Carlo Simulation', 'Tableau Public', 'Vercel'],
    liveUrl: 'https://bmw-dashboard.vercel.app/',
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
