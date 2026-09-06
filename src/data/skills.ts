export interface SkillRow {
  label: string;
  value: string;
  /** Languages is the row people scan for, so it gets full-strength text. */
  primary?: boolean;
}

export const skills: SkillRow[] = [
  { label: 'Languages', value: 'Java, C#, C++, Python', primary: true },
  { label: 'Tools', value: 'Git, Maven, Linux, JetBrains IDEs, VS Code' },
  { label: 'Libraries', value: 'JDA, Jsoup, JUnit' },
  { label: 'Practice', value: 'Scrum, SDLC documentation, UML' },
];
