export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    title: 'Software Engineering Term Project',
    description:
      'Collaborated in a 4-person team to produce 150+ pages of full SDLC documentation for a proposed client-facing application. Completed SRS, PMP, architectural design, and test plan documentation. Led estimation and task breakdown using Scrum principles.',
    tech: ['SDLC', 'UML', 'Scrum', 'Documentation'],
    icon: 'fa-solid fa-file-alt',
  },
  {
    title: 'Geospatial Claim Visualization Tool',
    description:
      'Independently designed and implemented a Java-based mapping system to visualize and track 800+ real-time region claims. Integrated Discord bot (JDA) used by 50+ users for on-demand map images and automated alerts. Implemented automated diffing of region data to detect changes.',
    tech: ['Java', 'JDA', 'JSON', 'Discord Bot'],
    icon: 'fa-solid fa-map',
  },
];
