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
];
