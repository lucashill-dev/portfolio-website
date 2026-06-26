export interface SkillCategory {
  icon: string;
  title: string;
  skills: { icon: string; name: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Programming Languages',
    skills: [
      { icon: 'fab fa-java', name: 'Java' },
      { icon: 'fa-solid fa-hashtag', name: 'C#' },
      { icon: 'fa-solid fa-code', name: 'C++' },
      { icon: 'fab fa-python', name: 'Python' },
    ],
  },
  {
    icon: 'fa-solid fa-tools',
    title: 'Tools & Platforms',
    skills: [
      { icon: 'fab fa-git-alt', name: 'Git' },
      { icon: 'fa-solid fa-cube', name: 'Maven' },
      { icon: 'fa-solid fa-terminal', name: 'Linux' },
      { icon: 'fa-solid fa-code', name: 'VSCode' },
      { icon: 'fa-solid fa-cube', name: 'JetBrains IDEs' },
    ],
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Libraries & APIs',
    skills: [
      { icon: 'fa-solid fa-robot', name: 'JDA (Discord API)' },
      { icon: 'fa-solid fa-spider', name: 'Jsoup' },
    ],
  },
  {
    icon: 'fa-solid fa-diagram-project',
    title: 'Methodologies',
    skills: [
      { icon: 'fa-solid fa-users', name: 'Agile' },
      { icon: 'fa-solid fa-tasks', name: 'Scrum' },
      { icon: 'fa-solid fa-list-check', name: 'SDLC' },
      { icon: 'fa-solid fa-sitemap', name: 'UML' },
    ],
  },
];
