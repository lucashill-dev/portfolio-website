export type Artifact =
  | { kind: 'transcript'; lines: string[]; caption: string }
  /** Real screenshots of the bot running in Discord. Cropped, not redrawn:
      the Discord chrome is the point, since it shows the thing actually works. */
  | {
      kind: 'shot';
      images: { src: string; alt: string; width: number; height: number }[];
      caption: string;
    }
  | { kind: 'documents'; docs: { code: string; name: string; pages: string }[]; caption: string };

export interface Project {
  /** Editorial headline. Says what the thing does, not what it is called. */
  headline: string;
  /** One or two sentences under the headline, at 19px. */
  dek: string;
  /** The paragraph beside the facts table. Detail a reader opts into. */
  note: string;
  /** One figure, or two when the second shows something the first cannot. */
  artifacts: Artifact[];
  facts: { key: string; value: string }[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    headline: 'Twenty-four hundred claims, rechecked every minute',
    dek: 'A Discord bot that renders the live claim map for the Stoneworks Minecraft server. It re-parses the map API every minute, posts a diff to any channel following a nation, a claim, or an area, and answers lookups on demand.',
    note: 'Thirteen slash commands cover lookups, wealth and land leaderboards, player markets with teleport coordinates, and ban history. Version 2.0 rewrote the monitor cycle around an in-memory diff with a single parse, and renders each change crop once per cycle instead of once per follower.',
    artifacts: [
      {
        kind: 'shot',
        images: [
          {
            src: '/images/bot/claim-change.jpg',
            alt: 'A Claim Change Summary posted by The Map bot in Discord: 0 added, 0 removed, 1 modified, with Sealandia growing from 114 to 121 chunks, above a rendered map crop, with the modified claim called out underneath.',
            width: 690,
            height: 1215,
          },
        ],
        caption:
          'A claim-change post, in the channel that follows it. The monitor diffs the map every minute and posts only what moved.',
      },
      {
        kind: 'shot',
        images: [
          {
            src: '/images/bot/nation-embed.jpg',
            alt: 'The bot answering /nation Bardonia in Discord: 36 lands, 768 members, 10,822 chunks, upkeep of $81,165 derived from the chunk count, and a runway estimate, above a rendered map of the nation.',
            width: 630,
            height: 1125,
          },
        ],
        caption:
          'Thirty-six lands aggregated into one answer. Upkeep is derived from the chunk count, then checked against the capital\u2019s balance to estimate how many cycles the nation can pay for.',
      },
      {
        kind: 'shot',
        images: [
          {
            src: '/images/bot/nation-lands.png',
            alt: 'The follow-up message: a table of the nation\u2019s lands ranked by balance, with owner, balance and chunk count for each.',
            width: 1165,
            height: 322,
          },
        ],
        caption: 'The second message the same command sends: every land ranked by balance.',
      },
    ],
    facts: [
      { key: 'Team', value: 'Solo; ideas and testing from the community' },
      { key: 'Stack', value: 'Java 17, JDA, Maven' },
      { key: 'Reach', value: '60+ servers, 14,000+ members' },
      { key: 'Size', value: '54 source files, 17 test classes' },
      { key: 'Shipped', value: 'v1 Jul 2025, v2.0 Aug 2026' },
      { key: 'Source', value: 'Private; happy to walk through it' },
    ],
  },
  {
    headline: 'An operating system, one command at a time',
    dek: 'A Java 17 model of a kernel: a process table, a round-robin scheduler, demand-paged virtual memory backed by a swap directory, and a file system that persists to disk. Every command typed into the shell is scheduled as kernel work.',
    note: 'I owned the persistent file system and the automated test suite, and kept the CLI honest when the scheduler changed underneath it.',
    artifacts: [
      {
        kind: 'transcript',
        lines: [
          'os> memtest basic',
          'Memory test (basic) for PID 6',
          '------------------------------------------------',
          'Read Back:',
          'Virtual memory demo data across multiple pages!',
          '',
          'memstat',
          'Total Frames: 8',
          'Used Frames: 3',
          'Free Frames: 5',
          'Page Faults: 36',
          '',
          'pages 6',
          'PID 6 Page Table',
          'PAGE   PRESENT   FRAME   BACKING STORE',
          '------------------------------------------------',
          '0      YES       1       /swap/6/page_0',
          '1      YES       2       /swap/6/page_1',
          '2      YES       3       /swap/6/page_2',
          '',
          'frames',
          'FRAME  STATE  PID  PAGE  DATA',
          '------------------------------------------------',
          '0      FREE   -    -',
          '1      USED   6    0     Virtual memory d',
          '2      USED   6    1     emo data across',
          '3      USED   6    2     multiple pages!',
          '4      FREE   -    -',
          '5      FREE   -    -',
          '6      FREE   -    -',
          '7      FREE   -    -',
          'os>',
        ],
        caption:
          'One string paged across three frames. Each resident page is backed by its own file under /swap, and the frame table shows where the bytes actually landed.',
      },
    ],
    facts: [
      { key: 'Team', value: '3 people' },
      { key: 'Role', value: 'File system, test suite' },
      { key: 'Stack', value: 'Java 17, Maven, JUnit' },
      { key: 'Commits', value: '32 of 81' },
      { key: 'When', value: 'Spring 2025' },
    ],
    links: [
      { label: 'Source', href: 'https://github.com/aharalam/csc377-semester-project' },
      {
        label: 'Final report',
        href: 'https://drive.google.com/file/d/1qYBaMzfFERVilP9U0zHu3r6XS1s6o72Q/view?usp=sharing',
      },
    ],
  },
  {
    headline: 'One hundred fifty pages before a line of code',
    dek: "Four of us took a real client's idea through stakeholder analysis, use cases, risk assessment, architecture, and a test plan. The client halted implementation, so the documents are the deliverable.",
    note: 'I led estimation and task breakdown, defining sprint objectives, timelines, and testing protocols against the requirements we had gathered.',
    artifacts: [
      {
        kind: 'documents',
        docs: [
          { code: 'SRS', name: 'Requirements', pages: '57' },
          { code: 'PMP', name: 'Project plan', pages: '35' },
          { code: 'SDD', name: 'Design', pages: '32' },
          { code: 'STP', name: 'Test plan', pages: '28' },
        ],
        caption:
          'The document set: 152 pages across four deliverables. Contents are under NDA with the client.',
      },
    ],
    facts: [
      { key: 'Team', value: '4 people' },
      { key: 'Role', value: 'Estimation, task breakdown' },
      { key: 'Method', value: 'Scrum, UML' },
      { key: 'When', value: 'Jan to Apr 2025' },
      { key: 'Status', value: 'Under NDA' },
    ],
  },
];
