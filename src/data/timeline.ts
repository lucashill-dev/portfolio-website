export interface TimelineItem {
  icon: string;
  date: string;
  title: string;
  role: string;
  bullets: string[];
}

export const education: TimelineItem[] = [
  {
    icon: 'fa-solid fa-university',
    date: '2024 - Present',
    title: 'University of Michigan - Flint',
    role: 'Bachelor of Science, Double Major in Computer Science and Software Engineering',
    bullets: [
      "Cumulative GPA: 3.95/4.0; Dean's List",
      'Relevant Coursework: Data Structures, Software Engineering, Discrete Structures, Operating Systems, Software Construction',
      'Expected graduation: December 2027',
    ],
  },
  {
    icon: 'fa-solid fa-school',
    date: 'Sep 2022 - Jun 2023',
    title: 'Genesee Career Institute',
    role: 'Game Programming',
    bullets: [
      'Cumulative GPA: 4.0/4.0',
      'Studied game design principles, logic structures, game theory, and development methodologies',
      'Developed and edited games in C# with focus on level design and interactive elements',
    ],
  },
];

export const work: TimelineItem[] = [
  {
    icon: 'fa-solid fa-building',
    date: 'Aug 2024 - Present',
    title: 'UM-Flint Recreation Center',
    role: 'Member Services Assistant → Assistant Facilities Supervisor (Dec 2024)',
    bullets: [
      'Contributed to hiring process for professional staff by reviewing applications and conducting structured interviews',
      'Oversaw day-to-day operations including opening/closing procedures and monitoring student staff',
      'Diagnosed and resolved facility issues in real-time using systems-oriented approach',
      'Gained hands-on experience with evaluation, collaboration, and decision-making in formal selection settings',
    ],
  },
];
