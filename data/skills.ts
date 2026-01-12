export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Technical',
    skills: ['Python (Pandas/NumPy)', 'SQL', 'Data Visualization', 'Streamlit', 'APIs'],
  },
  {
    category: 'Economic/Analytical',
    skills: ['Cost-benefit analysis', 'Risk modeling', 'Causal reasoning', 'Macro/markets'],
  },
  {
    category: 'Product/Workflow',
    skills: ['GitHub', 'Jira/Agile', 'Excel modeling', 'Documentation', 'Stakeholder comms'],
  },
];
