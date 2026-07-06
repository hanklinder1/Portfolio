export interface ProjectPhase {
  label: string;
  title: string;
  description: string;
}

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
  deckUrl?: string;
  phases?: ProjectPhase[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'bmw',
    title: 'BMW Manufacturing – AI Risk & Data Valuation Framework',
    summary: 'Two-semester research initiative with BMW Manufacturing: built economic models to quantify AI-adoption ROI, then led the risk-scoring workstream governing third-party AI access to proprietary manufacturing data.',
    description:
      'Selected for a competitive, interdisciplinary research initiative with BMW Manufacturing focused on governing third-party AI integration into proprietary manufacturing systems. Semester one centered on economic modeling and Monte Carlo simulation of AI-adoption ROI; semester two shifted to leading the risk-scoring workstream, building a confidentiality risk framework and data valuation model addressing third-party leak exposure.',
    problem: 'Manufacturing plants need a structured, analytically rigorous process to evaluate whether to adopt, delay, or reject third-party AI technologies — balancing data exposure risk, integration cost, operational disruption, and expected economic return.',
    solution: 'A two-phase research approach: economic modeling and Monte Carlo simulation to quantify AI-adoption ROI, followed by a weighted confidentiality risk-scoring framework and hedonic data-valuation model built to assess third-party vendor access and leak exposure.',
    impact: 'Delivered a structured, repeatable scoring framework — partnered directly with BMW\'s internal risk analyst team to reduce reliance on ad-hoc vendor evaluation.',
    techStack: ['Economic Modeling', 'Monte Carlo Simulation', 'Risk Scoring', 'SQL / PostgreSQL', 'Python'],
    liveUrl: 'https://bmw-dashboard.vercel.app/',
    githubUrl: 'https://github.com/hanklinder1',
    deckUrl: '/bmw-case-study.pdf',
    phases: [
      {
        label: 'Semester 1 · Fall 2025',
        title: 'Economic Modeling & Monte Carlo Simulation',
        description: 'Built economic models and Monte Carlo simulations to estimate the ROI of adopting third-party AI tools on the manufacturing floor — quantifying financial exposure and cost-benefit tradeoffs across hundreds of factory variables.',
      },
      {
        label: 'Semester 2 · Spring 2026',
        title: 'Risk Scoring & Data Valuation',
        description: 'Led the risk-scoring workstream: designed a weighted confidentiality risk-scoring framework to evaluate third-party AI vendor access, and developed a hedonic valuation model estimating the strategic value of BMW\'s proprietary manufacturing data — directly addressing exposure risk from third-party data leaks.',
      },
    ],
    featured: true,
  },
  {
    id: 'carteroo',
    title: 'Carteroo – Golf Cart Marketplace',
    summary: 'Founded and built Carteroo end-to-end — a live nationwide marketplace for buying and selling golf carts, formed as an LLC and shipped solo with Next.js, Supabase, and Stripe. Now monetized through Stripe-powered featured listings, with ongoing SEO-driven growth.',
    description:
      'Identified a structural gap in the golf cart resale market — no dedicated marketplace existed, leaving sellers fragmented across Craigslist and Facebook Marketplace with no structured pricing, no dealer tools, and no payment infrastructure. Formed an LLC and built the platform solo: Next.js frontend, Supabase for auth and data, and Stripe for payments, deployed on Vercel. Launched dealer and individual seller flows, added Stripe-powered featured-listing boosts as the core monetization mechanism, and now run ongoing SEO work to grow organic buyer and seller traffic.',
    problem: 'No dedicated marketplace existed for golf carts. Sellers were fragmented across general-purpose classifieds with no filtering, no pricing benchmarks, no dealer infrastructure, and no trust or payment mechanisms.',
    solution: 'Formed an LLC and built the full product solo — Next.js, Supabase, and Stripe — with tiered dealer accounts, individual seller listings, and Stripe-powered featured-listing boosts as the primary monetization path. Live at carteroo.com with real transacting sellers and dealers, supported by ongoing SEO work.',
    impact: 'Live marketplace at carteroo.com, from LLC formation through launch — with real listings, Stripe-processed transactions, and ongoing SEO work to grow organic traffic.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Vercel', 'SEO'],
    liveUrl: 'https://carteroo.com',
    featured: true,
  },
];
