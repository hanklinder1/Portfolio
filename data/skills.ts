export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Financial Analysis',
    skills: [
      'Credit Risk Assessment',
      'Financial Statement Analysis',
      'Quantitative Modeling',
      'Monte Carlo Simulation',
      'Risk-Adjusted Decision Frameworks',
    ],
  },
  {
    category: 'Analytical Tools',
    skills: [
      'Python (Pandas, NumPy)',
      'SQL',
      'Excel (Advanced Modeling)',
      'Tableau',
      'Data Visualization',
    ],
  },
  {
    category: 'Business & Strategy',
    skills: [
      'Economic Modeling',
      'Cost-Benefit Analysis',
      'Stakeholder Communication',
      'Executive Reporting',
      'Documentation & Process Design',
    ],
  },
  {
    category: 'Languages',
    skills: [
      'Spanish (Fluent)',
      'Business Spanish Formalities',
      'English (Native)',
    ],
  },
];
