export interface RecordEntry {
  date: string;
  title: string;
  /** The short qualifier after the title, in muted grey. */
  subtitle: string;
  /** Shown when the row is opened. First entry starts open. */
  detail: string[];
  bullets?: string[];
  open?: boolean;
}

export const record: RecordEntry[] = [
  {
    date: '2024 to Dec 2027',
    title: 'University of Michigan-Flint',
    subtitle: 'BS, Computer Science and Software Engineering',
    detail: ['GPA 3.95, Dean’s List. Double major, expected December 2027.'],
    bullets: [
      'Coursework: Data Structures, Software Engineering, Discrete Structures, Operating Systems, Software Construction.',
    ],
    open: true,
  },
  {
    date: 'Aug 2024 to now',
    title: 'UM-Flint Recreation Center',
    subtitle: 'Facilities Operations Coordinator',
    detail: [
      'Two promotions in two years. Started at the front counter as a Member Services Assistant in August 2024, moved to Assistant Facilities Supervisor in December 2024, and to Facilities Operations Coordinator in July 2026.',
    ],
    bullets: [
      'Sit on hiring panels for professional staff: reviewing applications and running structured interviews.',
      'Run day-to-day operations, including opening and closing procedures and supervising student staff.',
      'Diagnose and resolve facility problems in real time.',
    ],
  },
  {
    date: 'Sep 2022 to Jun 2023',
    title: 'Genesee Career Institute',
    subtitle: 'Game programming',
    detail: ['GPA 4.0.'],
    bullets: [
      'Studied game design principles, logic structures, game theory, and development methodologies.',
      'Built and edited games in C#, focused on level design and interactive elements.',
    ],
  },
];
