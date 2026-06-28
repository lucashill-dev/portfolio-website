export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Programming Languages',
    skills: ['Java', 'C#', 'C++', 'Python'],
  },
  {
    icon: 'fa-solid fa-tools',
    title: 'Tools & Platforms',
    skills: ['Git', 'Maven', 'Linux', 'VSCode', 'JetBrains IDEs'],
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Libraries & APIs',
    skills: ['JDA (Discord API)', 'Jsoup'],
  },
  {
    icon: 'fa-solid fa-diagram-project',
    title: 'Methodologies',
    skills: ['Agile', 'Scrum', 'SDLC', 'UML'],
  },
];
