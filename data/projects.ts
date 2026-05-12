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
    title: 'BMW Manufacturing – AI Risk & Data Valuation Framework (2025–2026)',
    summary: 'Competitive interdisciplinary research initiative with BMW Manufacturing: developed AI-driven analytical frameworks and risk scoring models to optimize manufacturing data strategy and govern third-party AI integration decisions.',
    description:
      'Selected for a competitive, interdisciplinary research initiative with BMW Manufacturing focused on governing third-party AI integration into proprietary manufacturing systems. Developed economic models and Monte Carlo simulations to quantify the value of BMW\'s proprietary manufacturing data and evaluate the financial tradeoffs of granting AI vendors access to sensitive operations. Built a risk-scoring decision model that evaluates data readiness, operational risk, organizational constraints, and risk-adjusted ROI — producing structured adopt/delay/reject recommendations across hundreds of factory variables. Delivered interactive dashboards and scenario analysis tools for both technical teams and executive stakeholders.',
    problem: 'Manufacturing plants need a structured, analytically rigorous process to evaluate whether to adopt, delay, or reject third-party AI technologies — balancing data exposure risk, integration cost, operational disruption, and expected economic return.',
    solution: 'Built a risk-adjusted decision framework combining Monte Carlo simulation, SQL-based risk scoring logic, scenario parameter modeling, and a Tableau executive dashboard. The model translates complex operational data into clear, actionable recommendations.',
    impact: 'Delivered a deployable decision support system for manufacturing technology adoption — used by both technical teams and executive stakeholders at BMW Manufacturing.',
    techStack: ['Economic Modeling', 'Monte Carlo Simulation', 'Risk Scoring', 'SQL / PostgreSQL', 'Tableau', 'Python'],
    liveUrl: 'https://bmw-dashboard.vercel.app/',
    githubUrl: 'https://github.com/hanklinder1',
    tableauUrl: 'https://public.tableau.com/app/profile/hank.linder/viz/BMW-StyleDataRiskValueDashboard/Dashboard2?publish=yes',
    featured: true,
  },
  {
    id: 'carteroo',
    title: 'Carteroo – Marketplace Research & Business Model Development',
    summary: 'Identified a fragmented, underserved market and developed a full go-to-market strategy: business model design, monetization architecture, competitive positioning, and market entry for a nationwide golf cart marketplace.',
    description:
      'Identified a structural gap in the golf cart resale market — no dedicated marketplace existed, leaving sellers fragmented across Craigslist and Facebook Marketplace with no structured pricing, no dealer tools, and no payment infrastructure. Conducted market research to validate the opportunity, then designed the complete business model: tiered monetization following the AutoTrader/Zillow model (featured listing boosts and recurring dealer subscription tiers), go-to-market strategy targeting individual sellers and dealer networks, and a product roadmap prioritizing buyer search, seller workflows, and transactional infrastructure. The project was executed end-to-end as a solo venture, producing a live, revenue-ready platform.',
    problem: 'No dedicated marketplace existed for golf carts. Sellers were fragmented across general-purpose classifieds with no filtering, no pricing benchmarks, no dealer infrastructure, and no trust or payment mechanisms.',
    solution: 'Designed a monetization strategy and go-to-market approach: tiered dealer subscriptions (Standard/Premium/Pro), featured listing boosts with defined price points, and a buyer-seller matching architecture. Built and launched the live platform to validate the business model with real payment infrastructure.',
    impact: 'Live marketplace at carteroo.com with validated monetization infrastructure, demonstrating the viability of the business model from concept through market entry.',
    techStack: ['Market Research', 'Business Modeling', 'Monetization Strategy', 'Go-to-Market Design', 'Product Development'],
    liveUrl: 'https://carteroo.com',
    featured: true,
  },
  {
    id: 'situational-book-finder',
    title: 'Semantic Data Retrieval System – AI-Powered Query Engine (In Progress)',
    summary: 'End-to-end data pipeline and semantic retrieval system that matches user-defined contexts to relevant resources — demonstrating applied analytical skills in data ingestion, vector modeling, and query architecture.',
    description: 'Building an end-to-end semantic retrieval platform that recommends resources based on context, goals, and intent rather than keyword matching. The system demonstrates applied analytical skills across the full data lifecycle: structured ingestion of large-scale datasets, embedding generation for semantic representation, vector similarity search, and retrieval-augmented generation (RAG) for contextual output. Built on Supabase (PostgreSQL with pgvector), custom Python data pipelines, and a Streamlit interface. Currently expanding toward an LLM-assisted recommendation layer.',
    problem: 'Standard keyword-based search fails to capture user intent, contextual need, or semantic similarity — producing poor matches when the user knows what they want but not how to describe it precisely.',
    solution: 'Designed and built an analytical data pipeline: ingest and structure large datasets, generate vector embeddings, run semantic similarity search against a PostgreSQL vector backend, and return context-aligned results. Architecture designed for RAG integration.',
    impact: 'A deployable analytical tool demonstrating applied proficiency in data pipeline design, quantitative modeling, and decision-support system architecture.',
    techStack: ['Python', 'Vector Embeddings', 'Semantic Search', 'PostgreSQL', 'Data Pipeline Design', 'RAG Architecture'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/hanklinder1',
    featured: true,
  },
];
