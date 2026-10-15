export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Card copy for the home page and /projects index. */
  summary: string;
  /** One line under the name on the detail page. */
  status: string;
  link?: { href: string; label: string };
  stack: string[];
  /** Paragraphs for the detail page. */
  body: string[];
}

export const projects: Project[] = [
  {
    slug: "loopline",
    name: "The Loop",
    tagline:
      "A prediction machine that files a report on itself every six hours.",
    summary:
      "A clock-driven pipeline that fetches odds, prices games, audits its own output, and drafts articles — across MLB, CFL, NFL, and two trading desks. It never publishes and never wagers. That is the design.",
    status: "Private. Runs on a Mac mini, reports to one human.",
    stack: [
      "Python 3.11, stdlib-first",
      "clock.py daemon — 19 phases, one belt",
      "Append-only prediction ledger (CSV)",
      "Elo ratings, backtested 6,967 NFL games",
      "qwen3:8b on local Ollama for drafts",
      "Playwright scrape of the book of record",
      "Flask web UI + browser-based trading gates",
    ],
    body: [
      "Every six hours a daemon wakes up and walks nineteen stations: fetch schedules, injuries, and odds; price every game with an explicit probability; audit what it just wrote by re-deriving it from the raw snapshots; settle yesterday's bets with Brier scores; then draft the recap. Failures are data — a phase that crashes is recorded and the chain continues.",
      "The core idea is the Binary Decision Framework: every prediction is a binary question with an explicit probability, a market comparison, an edge, and a permanent grade. The ledger is append-only. A machine that files a report on itself every six hours has nowhere to hide, which is exactly the design intent.",
      "The models are deliberately transparent rather than fancy — Elo for NFL (K=32, home edge 55 points, walked over every game from 1999 through 2025), calibrated baselines elsewhere. The honest number: my model scores a Brier of 0.228 against the betting market's 0.213. The market is the better grader, said plainly. The edge I actually have is discipline, not clairvoyance.",
      "An 8-billion-parameter model running locally drafts the articles, fed only a block of verified facts with instructions to invent nothing. Its failure modes are documented like everything else: probability swaps, invented funding rates, fabricated records. A human edits every draft before anything ships.",
      "Hard rules, enforced in code and in habit: the loop informs wagers; it never places them. And it never auto-publishes. Anyone selling you a system that skips that step is selling a story.",
    ],
  },
  {
    slug: "saskpoly",
    name: "SaskPoly — The Prediction Desk",
    tagline: "Free picks, graded in public, losses included.",
    summary:
      "A live publication where every sports pick is written down before kickoff and graded after — wins and losses on the same terms. The flagship verticals are NFL pools: a survivor portfolio across three tickets, and a five-week spread pick'em entered in October 2026. The books sell on Amazon.",
    status: "Live at saskpoly.xyz.",
    link: { href: "https://saskpoly.xyz", label: "Visit the desk" },
    stack: [
      "Next.js 16 App Router + MDX articles",
      "Vercel, zero env keys on the site",
      "Published from a Mac via CLI, local-only git",
      "The Loop (above) feeds it drafts",
    ],
    body: [
      "A gambler wants to know who wins. The desk wants to know what the number was — and writes it down before the game starts, so that after the game there is a record instead of a story. That is the whole site.",
      "The flagship vertical is NFL survivor pools: a brief every Wednesday with the pick and its exact reasoning, a grading every Monday with the numbers, wins and losses graded on the same terms the pick was made. Losses go in the first paragraph. No excuses, no variance-denial.",
      "On October 15, 2026 the desk took on a second pool with ten minutes to spare: Mike's 5-Week Point Spread Pick'em — all fourteen NFL games against the number, every week from Week 6 through Week 10, a $27 entry, ties broken on the Monday-night total. The Week 6 card published before kickoff with the method in the open: vig-stripped moneylines compared against the desk's spread curve — the survivor engine's audit instrument redeployed, confessed in the article itself as a comparison of the market's two dialects, not a pick'em model. Nine favorites, five dogs, and one 5.2-point disagreement the desk flagged on its own pick and rode anyway, flag pinned to the card. The grades land Monday on the same terms as every other number on the desk.",
      "The desk is also where the writing lives. The voice is codified like code: numbers lead, narrative follows; short declarative sentences; coined defined terms like fade budget and soft chalk; no emojis, no exclamation marks, no hype. Honesty as a flex.",
      "It monetizes the old-fashioned way: the Smart Bet Field Guide book series sells on Amazon. The site itself stays free and fast — no accounts, no paywall, no trackers beyond a hit counter.",
    ],
  },
  {
    slug: "chilliboys",
    name: "Chilliboys Manufacturing",
    tagline: "A shop's website, safety system, meeting transcriber, and Facebook presence — built and run with AI, supervised by a human.",
    summary:
      "A bilingual website and a printable safety system for a metal shop in Mexico — daily signed briefing log, six-day safety rotation — now joined by an offline transcriber that files every safety-meeting voice note as bilingual PDF minutes, plus ongoing AI-drafted Facebook posts that keep the business visible. The agent types; the owner decides.",
    status: "Ongoing. Client-owned, not public.",
    stack: [
      "Single index.html — no build step, no dependencies",
      "ES/EN i18n object, hand-drawn inline SVG",
      "Printable safety package (PDF via headless Chrome)",
      "Safety Meeting Transcriber — offline Tkinter app, one .exe via PyInstaller",
      "faster-whisper on CPU (int8) + opus-mt EN↔ES; .txt and .pdf in both languages per note",
      "AI-drafted Facebook posts, human-approved",
      "AI-to-AI handoff doc for the next agent",
    ],
    body: [
      "Greg runs a metal shop in Mexico. Like every small business owner he has two chronic problems: the safety rules exist in regulations but not on paper where the crew can sign them, and the work is good but the business is invisible online. The engagement became two tracks — get the safety culture onto paper, and get the shop showing up consistently on Facebook.",
      "The safety system is deliberately boring, because boring works: a fifteen-minute briefing before every shift, one topic per day, signed by everyone on the floor. It ships as a bilingual printable package — a two-page daily briefing log, a six-day rotation covering fume extraction, arc flash and eye protection, electrical shock, fire and hot work, gas cylinders, and the post-weld wrap-up. Signed sheets get filed; they are evidence, not decoration. Every rule carries the same caveat: reviewed by the supervisor before it reaches the shop.",
      "The safety track grew a new artifact in October 2026: the Safety Meeting Transcriber. Shop safety talks happen in Spanish, on the floor, often as WhatsApp voice notes — and until now they evaporated. The transcriber is a single-file desktop app that runs entirely offline: drop a voice note in a folder and it detects the spoken language, transcribes it with Whisper on the CPU, translates it into the other language, and files four outputs per recording — Spanish and English, each as a plain .txt and a formatted PDF under the company logo, named by recording date so it sorts with the signed sheets. Nothing uploads anywhere; the only internet use is one-time model downloads, about 460 MB for the transcriber and 310 for the translator. It ships as a one-file Windows .exe a foreman can double-click, sized for the shop's Ryzen 5 and 16 GB of RAM. The known limits, printed here before anyone hits them: the small model is the ceiling on that machine, and the PDFs speak only Windows-1252, so an arrow prints as a question mark. Boring constraints, deliberately accepted.",
      "The website is one self-contained HTML file — no framework, no build step, bilingual, every icon hand-drawn SVG. The agent-built version took one shot; the durable part is what surrounds it. An AI-to-AI handoff document lets the next agent continue the work safely, and the ongoing assist drafts Facebook posts from what actually happened in the shop — the week's jobs, the safety topic on rotation, the standards Greg wants to be known for. Spanish first, English when it matters. Nothing posts without his eyes on it.",
      "The culture in one line, and it's Greg's line: nadie trabaja solo. Nobody works alone. The agent does the typing; the owner does the deciding.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
