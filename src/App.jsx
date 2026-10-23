import React, { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  name: "VALENTINA GODOVETS",
  subtitle: "Game Designer · Level Designer",
  email: "godovets.valya@gmail.com",
  socials: [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/valenandia/" },
    { label: "BACKLOGGERY", href: "https://www.backloggery.com/valenandia" },
    { label: "X / TW", href: "https://x.com/valenandia" },
  ],
};

const navModals = [
  {
    id: "about",
    label: "ABOUT",
    title: "Valentina Godovets",
    accent: "purple",
    body: (
      <>
        <p>Hi! My name is <strong>Valentina</strong>, and I’m a <strong>game designer</strong> focused on <strong>gameplay systems</strong>, <strong>level design</strong>, <strong>combat design</strong>, exploration, encounters, and <strong>player experience</strong>.</p>
        <p>I enjoy building mechanics that create readable goals, <strong>strong gameplay loops</strong>, and memorable player moments.</p>
        <p>Currently, I’m also expanding my expertise in <strong>AI systems in games</strong> and how they can support gameplay architecture and emergent interactions.</p>

        <div className="community-grid">
          <div className="community-card" style={{background:"#fbf9f9"}}>
            <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-06%20150254.png" alt="Community membership badge" />
          </div>
          <div className="community-card" style={{background:"#fbf9f9"}}>
            <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-30%20212941.png" alt="Community membership badge" />
          </div>
          <div className="community-card" style={{background:"#1c306b"}}>
            <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-08-28%20220716.png" alt="Community membership badge" />
          </div>
          <div className="community-card" style={{background:"#4321aa"}}>
            <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/images.jpeg" alt="Community membership badge" />
          </div>
        </div>

        <div className="resume-contact-divider" />

        <div className="contact-panel resume-contact-panel">
          <h3>Contact</h3>
          <p>I’m open to collaborations, creative projects, game design work, and professional opportunities.</p>
          <div className="contact-actions">
            <a className="contact-button" href="https://t.me/valenandia" target="_blank" rel="noreferrer">Telegram</a>
            <a className="contact-button" href={`mailto:${profile.email}`}>Email</a>
            <a className="contact-button" href="https://www.linkedin.com/in/valenandia/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <form className="contact-form" action={`mailto:${profile.email}`} method="POST" encType="text/plain">
            <label>Your name<input name="name" type="text" placeholder="Name" /></label>
            <label>Your email<input name="email" type="email" placeholder="email@example.com" /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Write your message..." /></label>
            <button type="submit" className="contact-button contact-submit">Send message</button>
          </form>
        </div>
      </>
    ),
  },
  {
    id: "resume",
    label: "RESUME",
    title: "CV / Resume",
    accent: "purple",
    body: (
      <>
        <div className="resume-list">
          <article className="press-card">
            <span className="press-year">June 2025 – Present</span>
            <strong>Middle Game Designer — NDA</strong>
            <p>NDA</p>
          </article>

          <article className="press-card">
            <span className="press-year">Apr 2025 – Present</span>
            <strong>Game Designer &amp; Level Designer — Drakaura Games</strong>
            <p>Designed and interconnected core and meta systems, balanced mechanics, created UX documentation, and worked on player customization features.</p>
            <div className="chips" style={{marginTop:"8px"}}>
              {["SYSTEM DESIGN","LEVEL DESIGN","ENVIRONMENTAL PUZZLES","UNREAL ENGINE"].map(c=><span className="chip" key={c}>{c}</span>)}
            </div>
          </article>

          <article className="press-card">
            <span className="press-year">Dec 2024 – Present</span>
            <strong>Game Designer — Eriars</strong>
            <p>Prototyped core gameplay systems, designed magic combat and movement mechanics, and collaborated with narrative and art teams.</p>
            <div className="chips" style={{marginTop:"8px"}}>
              {["COMBAT DESIGN","ENCOUNTER DESIGN","GAME AI","UNREAL ENGINE","ARTICY"].map(c=><span className="chip" key={c}>{c}</span>)}
            </div>
          </article>
        </div>

        <p className="resume-experience-note">Nearly 10+ years of experience creating mods for various games and platforms, covering content, cosmetics and NSFW+</p>

        <div className="resume-actions">
          <a className="modal-link no-dot" href="#">DOWNLOAD PDF</a>
        </div>
      </>
    ),
  },
  {
    id: "articles",
    label: "ARTICLES",
    title: "Writing",
    accent: "purple",
    body: (
      <div className="articles-list">
        <Article
          title="The Work of the Algorithm A* in 3D Games on Unreal Engine 5"
          text="For my work, I came across the idea of implementing the A* Algorithm and a pathfinding system in 3D generated worlds based on Voronoi maps. Here is my implementation to make all the systems work."
          image="https://raw.githubusercontent.com/valenandia/valen.github.io/main/istockphoto-1224500457-2048x2048.jpg"
        />
        <Article
          title="Let’s Make MAGIC! — How Magic Is Incorporated in Gameplay in ‘The Sims 2: Making Magic’"
          text="I have been a big fan of The Sims for many years of gaming. I didn’t know much about The Sims 2, because I started playing from the 3d games in the series, but I really wanted to see what the second part offered to players. In this article, I researched the most interesting mechanics: magic, and how it helped the gameplay come through."
          image="https://raw.githubusercontent.com/valenandia/valen.github.io/main/hq720.jpg"
        />
        <Article
          title="90s Waifu — What Hypercasual Mechanics Adult Games Use?"
          text="A few years ago, when I browsed the internet for some references, I found a website full of adult games and was intrigued by that. So I went deeper and found out that a lot of these games use the same hypercasual mechanics, and it worked. Of course, it was because of naked ladies, but I wrote an article about what old games use and what we can incorporate into other projects."
          image="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202026-05-26%20185513.png"
        />
        <Article
          title="Exploring the Mechanics and Level Design of Journey"
          text="For this article, I wanted to show how indie games — for example, the one discussed here — can demonstrate interesting level design using diegetic ways to create a world. It was a fun experience, and I wanted to share my interpretation of that."
          image="https://raw.githubusercontent.com/valenandia/valen.github.io/main/1_hotJOMYOkumqOVsl9Th2jw.jpg"
        />
      </div>
    ),
  },
  {
    id: "press",
    label: "PRESS",
    title: "Press",
    accent: "gold",
    body: (
      <div className="press-list">
        <h3>2025</h3>

        <article className="press-card">
          <span className="press-year">May, 2025 · Cyber.Sports.ru</span>
          <strong>Featured in the article about the game “The Tale of Mind”</strong>
          <a className="press-link" href="https://cyber.sports.ru/games/blogs/3321384.html" target="_blank" rel="noreferrer">Read Press</a>
        </article>

        <article className="press-card">
          <span className="press-year">March, 2025 · Prototype.Indie</span>
          <strong>Featured at the pitch-session — “The Tale of Mind”</strong>
          <a className="press-link" href="https://vk.com/video-212496568_456245939?to=L3ZpZGVvLTIxMjQ5NjU2OF80NTYyNDU5Mzk/" target="_blank" rel="noreferrer">Watch Press</a>
        </article>

        <h3>2024</h3>

        <article className="press-card">
          <span className="press-year">December, 2024 · Russia, Moscow</span>
          <strong>Finalist of hackathon “Start a Game!” — “Gerasim vs Besi”</strong>
          <a className="press-link" href="https://startgame.rsv.ru/" target="_blank" rel="noreferrer">Contest Page</a>
        </article>

        <article className="press-card">
          <span className="press-year">October, 2024 · Russia, Vologda</span>
          <strong>Finalist of hackathon “Sineus” — “Gerasim vs Besi”</strong>
          <a className="press-link" href="https://drive.google.com/drive/folders/134ZJqQUbmhEh2ZzI4UrpnsukokoDOdwK" target="_blank" rel="noreferrer">View Press</a>
        </article>

        <article className="press-card">
          <span className="press-year">August, 2024 · Astrum Entertainment</span>
          <strong>One of the best work on the course — “Paws and Cards”</strong>
          <p>Conceptualization Basics: 2nd</p>
          <a className="press-link" href="https://drive.google.com/drive/folders/134ZJqQUbmhEh2ZzI4UrpnsukokoDOdwK" target="_blank" rel="noreferrer">View Press</a>
        </article>
      </div>
    ),
  },
];

const windows = [
  {
    id: "projects",
    title: "PROJECTS",
    accent: "purple",
    items: [
      {
        id: "project-1",
        icon: "🎮",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202026-05-28%20150131.png",
        label: "STORE SIMULATOR",
        modalTitle: "Store Simulator",
        tag: "PROJECT",
        status: "In production, 2026",
        description: "Store Simulator is a management simulator developed on Unreal Engine 5. My work focuses on game design, location customization, mini-game balance, and feature completion during production.",
        meta: [
          ["Genre", "Management Simulator"],
          ["Role", "Game Designer"],
          ["Involvement", "October 2023 — Present"],
          ["Platforms", "TBA"],
          ["Engine", "Unreal Engine 5"],
        ],
        contributions: [
          "Assisted in the creation and documentation of game design documents, including documents about features, customization, and game balance.",
          "Contributed to the creation of mechanics prototypes and screen UI mockups.",
          "Assisted in the implementation of game content using engines such as Unreal Engine and Unity.",
          "Collaborated with artists, programmers, and other team members to create game features.",
          "Participated in gameplay testing sessions and provided feedback.",
          "Took on additional tasks and responsibilities as needed to support the overall development.",
        ],
        action: "VIEW PROJECT",
        href: "https://eriars.com/en/store-simulator-en/",
        secondaryAction: "GDD EXAMPLE",
        secondaryHref: "#",
      },
      {
        id: "project-2",
        icon: "🎮",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(3).png",
        label: "UNANNOUNCED",
        modalTitle: "Unannounced Project",
        tag: "PROJECT",
        body: <p className="under-construction">Under construction</p>,
      },
      {
        id: "project-3",
        icon: "🎮",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/images%20(1).jpg",
        projectImage: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/screenshot120.png",
        label: "TAMRIEL REBUILT",
        modalTitle: "Tamriel Rebuilt",
        tag: "PROJECT",
        status: "Somewhere in 2010s — 2019",
        description: "Tamriel Rebuilt is a large-scale TES III mod project for Morrowind and OpenMW. My work combined game generalist tasks, level design, quest work, narrative design, and testing across Tamriel’s mainland regions.",
        meta: [
          ["Genre", "TES III: Mod"],
          ["Role", "Game Generalist, Level Designer, Narrative Designer"],
          ["Involvement", "2010s — 2019"],
          ["Platforms", "Nexus Mods"],
          ["Engine", "OpenMW"],
        ],
        contributions: [
          "Developed engaging quests and character narratives to enhance player immersion across Tamriel’s mainland regions.",
          "Utilized Morrowind’s Construction Set to construct detailed exterior landscapes, cities, and interior spaces, ensuring lore consistency and visual quality.",
          "Conducted thorough testing of quests to verify functionality, balance, and a seamless player experience.",
        ],
        awardImage: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/azbsetn.png",
        awardLabel: "Community Project Award",
        awardPlacement: "top",
        awardSize: "large",
        action: "VIEW PROJECT",
        href: "https://www.nexusmods.com/morrowind/mods/42145",
        secondaryAction: "OFFICIAL SITE",
        secondaryHref: "https://www.tamriel-rebuilt.org/",
      },
    ],
  },
  {
    id: "wishlist",
    title: "WISHLIST",
    accent: "violet",
    large: true,
    items: [
      {
        id: "wishlist-1",
        icon: "⭐",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/logo1.png",
        label: "TRACES OF NYPHS",
        modalTitle: "Traces of Nyphs",
        tag: "WISHLIST",
        body: <p className="under-construction">Under construction</p>,
      },
    ],
  },
  {
    id: "encounters",
    title: "ENCOUNTERS",
    accent: "gold",
    items: [
      {
        id: "encounter-1",
        icon: "⚔️",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(2).png",
        label: "COMBAT PROTOTYPE",
        modalTitle: "Combat Prototype",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under construction</p>,
      },
      {
        id: "encounter-2",
        icon: "👑",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(2).png",
        label: "BOSS FIGHT ENCOUNTER",
        modalTitle: "Boss Fight Encounter",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under construction</p>,
      },
      {
        id: "encounter-3",
        icon: "🌊",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(2).png",
        label: "WAVE-BASED ENCOUNTER",
        modalTitle: "Wave-Based Encounter",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under construction</p>,
      },
    ],
  },
  {
    id: "work",
    title: "WORK EXAMPLES",
    accent: "violet",
    items: [
      { id: "work-1", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png", label: "BLOOD & HP FRAMEWORK", modalTitle: "Blood & HP Framework", tag: "WORK", body: <p className="under-construction">Under construction</p> },
      { id: "work-2", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png", label: "ENVIRONMENT PUZZLE FRAMEWORK", modalTitle: "Environment Puzzle Framework", tag: "WORK", body: <p className="under-construction">Under construction</p> },
      { id: "work-3", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png", label: "COMBAT DESIGN FRAMEWORK", modalTitle: "Combat Design Framework", tag: "WORK", body: <p className="under-construction">Under construction</p> },
      { id: "work-4", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png", label: "PITCH DOC: THE TALE OF MIND", modalTitle: "Pitch Doc: The Tale of Mind", tag: "WORK", body: <p className="under-construction">Under construction</p> },
    ],
  },
  {
    id: "games",
    title: "GAME JAMS",
    accent: "red",
    items: [
      {
        id: "game-1",
        icon: "🕹",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Untitled%20design89.png",
        label: "THE MINOTAUR'S LABYRINTH",
        modalTitle: "The Minotaur's Labyrinth",
        tag: "GAME JAM",
        status: "July, 2023",
        description: "The Minotaur's Labyrinth is a puzzle maze game created during a game jam. I worked as a game generalist and contributed to level design, custom tile assets, brainstorming, and in-engine assembly.",
        meta: [
          ["Genre", "Puzzle, Maze"],
          ["Role", "Game Generalist"],
          ["Involvement", "July 2024"],
          ["Platforms", "Itch.io"],
          ["Engine", "Unity"],
        ],
        contributions: [
          "Developed comprehensive level designs and layouts.",
          "Created and optimized custom tile assets for levels.",
          "Participated in strategic brainstorming and asset curation.",
          "Integrated and assembled all elements within the game engine.",
        ],
        href: "https://owlrazum.itch.io/maze",
        action: "ITCH.IO",
        secondaryAction: "GDD",
        secondaryHref: "https://docs.google.com/document/d/1HkyJHvpvJ54A559XAo-mI5n2L9os1gfZq6uJ7IaByYg/edit?usp=sharing",
        awardImage: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/BcvkIk.png",
        awardLabel: "Community Award",
        awardPlacement: "top",
      },
      {
        id: "game-2",
        icon: "🕹",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Untitled%20design777.png",
        topImages: [
          "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-06%20150006.png",
          "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-06%20172547.png",
        ],
        label: "GERAVIM VS DEMONS",
        modalTitle: "Geravim vs Demons",
        tag: "GAME JAM",
        status: "October, 2024",
        description: "Geravim vs Demons is a rogue-lite game jam project built around class mechanics, weapon balance, skill sets, and myth-inspired combat design.",
        meta: [
          ["Genre", "Rogue-lite"],
          ["Role", "Game Designer, Jammer, Generalist"],
          ["Involvement", "October 2024"],
          ["Platforms", "Itch.io"],
          ["Engine", "Unreal Engine 5"],
          ["Awards & Recognition", "Finalist in the ‘Regions and Languages of Russia’ category at the ‘Start a Game’ contest; finalist in the ‘Mythology in Art’ category, with the additional theme ‘O is Not Just a Letter’ / History of Vologda, at the ‘SINEUS’ contest."],
        ],
        contributions: [
          "Developed balance for weapons, skill sets, and class mechanics.",
          "Conducted asset sourcing.",
          "Engaged in strategic brainstorming sessions.",
          "Managed music direction, including asset selection and creation.",
        ],
        href: "https://mikhaile.itch.io/gerasimvsbesi",
        action: "ITCH.IO",
        secondaryAction: "CONCEPT DOC",
        secondaryHref: "https://docs.google.com/document/d/1oPbnDe0Q8RlAx0XEw5MaR6Xi4B6Fk9rtXqiKR9v1Kg0/edit?tab=t.0#heading=h.1fs3h2986tyf",
        extraActions: [
          { label: "PITCH DOC RU", href: "https://docs.google.com/presentation/d/1Bi2XfUUYwEkIC_r1DoHzfHXQJ_QyrjKyO1kpRlRgXVk/edit?slide=id.p#slide=id.p" },
        ],
      },
      {
        id: "game-3",
        icon: "🕹",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202026-05-28%20153217.png",
        label: "TAP A PAW!",
        modalTitle: "Tap a Paw!",
        tag: "GAME JAM",
        status: "2024",
        description: "Tap a Paw: Match-3 is a solo developer match-3 mobile game featuring cute paw mechanics and casual gameplay.",
        meta: [
          ["Role", "Game Designer, Solo Developer"],
          ["Platforms", "Itch.io, Yandex.Games"],
          ["Engine", "Godot"],
        ],
        contributions: [
          "Sourced and curated a variety of assets to enhance the visual and functional elements of the game.",
          "Integrated all game materials into the engine, ensuring a seamless transition from design to implementation.",
          "Utilized ChatGPT to assist in coding, improving efficiency and functionality of game mechanics.",
        ],
        action: "ITCH.IO",
        href: "https://valenandia.itch.io/tapapaw",
        secondaryAction: "WATCH VIDEO",
        secondaryHref: "https://drive.google.com/file/d/1tEBiLoD-LjCUgI_lVaLRp1E9Z2VFTIg3/view?usp=sharing",
      },
      {
        id: "game-4",
        icon: "🕹",
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(9).png",
        label: "UNANNOUNCED",
        modalTitle: "Unannounced Jam",
        tag: "GAME JAM",
        body: <p className="under-construction">Under construction</p>,
      },
    ],
  },
  {
    id: "links",
    title: "ANALYSES",
    accent: "green",
    items: [
      { id: "deconstruct-1", icon: "🔍", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Untitled%20design-.png", label: "OCARINA OF TIME", modalTitle: "The Legend of Zelda: Ocarina of Time", tag: "ANALYSES", body: <p className="under-construction">Under construction</p> },
      { id: "deconstruct-2", icon: "🔍", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Untitled%20desig6n.png", label: "HOTLINE MIAMI", modalTitle: "Hotline Miami", tag: "ANALYSES", body: <p className="under-construction">Under construction</p> },
    ],
  },
];

const cases = [
  {id:'combat-design', title:'Combat Design Framework', subtitle:'JRPG Boss Design & Hitbox/Hit Zone Systems', category:'Combat design', symbol:'combat', color:'mauve'},
  {id:'environment-puzzles', title:'Environment Puzzle Framework', subtitle:'Open-World Adventure Puzzle Design', category:'Puzzle design', symbol:'puzzle', color:'sage'},
  {id:'blood-hp', title:'Blood & HP Exchange Mechanics', subtitle:'Health Resource Exchange System', category:'Systems design', symbol:'blood', color:'rose'},
  {id:'magic-performance', title:'Magic Performance Combat System', subtitle:'Outfit-Based Builds & Elemental Abilities', category:'Combat design', symbol:'magic', color:'lavender'},
  {id:'gameplay-progression', title:'Gameplay Loop & Progression Design', subtitle:'Investigation Action-Adventure', category:'Gameplay design', symbol:'loop', color:'sand'},
  {id:'dungeon-design', title:'Dungeon Level Design & Gameplay Metrics', subtitle:'PvE & PvP Dungeon Spaces', category:'Level design', symbol:'dungeon', color:'slate'},
  {id:'npc-ai', title:'NPC AI Framework (Behavior Trees + GOAP)', subtitle:'Fairy Town', category:'AI design', symbol:'ai', color:'mint'},
];
const navigation = [
  {id:'projects',label:'Projects',icon:'projects'},
  {id:'case-studies',label:'Featured Case Studies',icon:'cases'},
  {id:'explorations',label:'Research, Articles & Game Jams',icon:'research'},
  {id:'mentoring',label:'Mentoring & Collaboration',icon:'mentoring'},
  {id:'about',label:'About',icon:'about'},
];
const extraNavigation = [{id:'awards',label:'Awards',icon:'awards'},{id:'press',label:'Press',icon:'press'}];
function Icon({name, size=22}) {
  const paths={
    home:<><path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/></>,
    projects:<><path d="M3 7h7l2-3h9v16H3Z"/><path d="M3 9h18"/></>,
    cases:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    research:<><path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-3-1-7-2-10 1Zm0 0v15"/><path d="M5 8h4m-4 4h4m6-4h4m-4 4h4"/></>,
    mentoring:<><path d="m2 8 10-5 10 5-10 5Z"/><path d="M6 10v6c4 3 8 3 12 0v-6M22 8v8"/></>,
    about:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/><path d="M10 17h4"/></>,
    awards:<><path d="M7 3h10v5a5 5 0 0 1-10 0ZM7 5H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4M12 13v6m-5 2h10"/></>,
    press:<><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 7h5v5H7Zm9 0h1m-1 4h1M7 16h10"/></>,
    arrow:<><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    back:<><path d="M20 12H4m6-6-6 6 6 6"/></>,
    external:<><path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/></>,
    mail:<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m2 6 10 7L22 6"/></>,
    photo:<><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="m3 17 5-5 4 4 4-7 5 8"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.cases}</svg>;
}
function CaseArt({type}) {
  return <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" className="case-art">
    <path d="M0 150H320M40 0v180M280 0v180" stroke="currentColor" opacity=".12"/>
    {type==='combat'&&<><circle cx="160" cy="90" r="52" stroke="currentColor" opacity=".35"/><rect x="122" y="43" width="76" height="94" stroke="currentColor" strokeDasharray="4 5"/><path d="m122 123 75-73m-80 66 12 12m57-90 22 22m-10-13 12-12M139 68l43 43" stroke="currentColor" strokeWidth="2"/><circle cx="160" cy="90" r="8" fill="currentColor" opacity=".4"/></>}
    {type==='puzzle'&&<><path d="M95 138V42h59v30h70v66h-69v-35h-31v35Z" stroke="currentColor" strokeWidth="2"/><path d="M80 102h60V88h52v35" stroke="currentColor" strokeDasharray="4 5"/><circle cx="80" cy="102" r="5" fill="currentColor"/><path d="m185 123 7 7 7-7" stroke="currentColor" strokeWidth="2"/></>}
    {type==='blood'&&<><path d="M125 39s-32 40-32 60a32 32 0 0 0 64 0c0-20-32-60-32-60Z" stroke="currentColor" strokeWidth="2"/><path d="M181 66h60m-8-7 8 7-8 7m8 43h-60m8-7-8 7 8 7" stroke="currentColor" strokeWidth="2"/><path d="M105 105c0 10 8 16 16 16" stroke="currentColor"/><path d="M191 91h30m-15-15v30" stroke="currentColor" strokeWidth="2"/></>}
    {type==='magic'&&<><path d="m160 26 14 45 47 3-38 28 12 46-35-29-35 29 12-46-38-28 47-3Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="160" cy="91" r="58" stroke="currentColor" opacity=".35"/><path d="m84 40 4 10 10 4-10 4-4 10-4-10-10-4 10-4Zm154 76 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="currentColor" opacity=".6"/></>}
    {type==='loop'&&<><circle cx="160" cy="90" r="50" stroke="currentColor" strokeDasharray="3 5"/><path d="M112 73a50 50 0 0 1 87-18m-3-15 4 16-16 2M208 107a50 50 0 0 1-87 18m3 15-4-16 16-2" stroke="currentColor" strokeWidth="2"/><circle cx="160" cy="90" r="17" stroke="currentColor"/><path d="m172 102 13 13" stroke="currentColor" strokeWidth="3"/></>}
    {type==='dungeon'&&<><path d="M92 42h42v32h52V42h42v96h-42v-32h-52v32H92Z" stroke="currentColor" strokeWidth="2"/><path d="M113 121V59m0 31h94V59m0 31v32" stroke="currentColor" strokeDasharray="3 5"/><circle cx="113" cy="121" r="5" fill="currentColor"/><path d="m201 116 6-5 6 5v9h-12Z" fill="currentColor"/></>}
    {type==='ai'&&<><path d="M160 53v30m-60 0h120m-120 0v34m60-34v34m60-34v34" stroke="currentColor" strokeWidth="1.5"/><rect x="138" y="29" width="44" height="26" rx="5" stroke="currentColor"/><rect x="79" y="117" width="42" height="28" rx="5" stroke="currentColor"/><rect x="139" y="117" width="42" height="28" rx="5" stroke="currentColor"/><rect x="199" y="117" width="42" height="28" rx="5" stroke="currentColor"/><circle cx="160" cy="83" r="6" fill="currentColor"/></>}
  </svg>;
}
function PageTitle({eyebrow='Portfolio',title,children}) {
  return <header className="page-heading"><h1>{title}</h1></header>;
}
function Contact() {
  return <div className="contact-strip"><p>Feel free to contact me.</p><div className="social-links"><a href={profile.socials[0].href} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={13}/></a><a href={profile.socials[2].href} target="_blank" rel="noreferrer">X <Icon name="external" size={13}/></a><a href={`mailto:${profile.email}`}>Email <Icon name="mail" size={15}/></a></div></div>;
}
function Home() {
 return <><section className="home-hero"><div className="portrait-wrap"><div className="photo-placeholder" role="img" aria-label="Reserved for Valentina’s portrait"><span className="portrait-corner tl"/><span className="portrait-corner tr"/><span className="portrait-corner bl"/><span className="portrait-corner br"/><div className="portrait-center"><Icon name="photo" size={32}/><span>Portrait coming soon</span></div><span className="portrait-caption">VALENTINA / GAME DESIGNER</span></div></div><div className="home-copy"><div className="bio original-about-copy">{React.Children.toArray(navModals.find(m=>m.id==='about').body.props.children).slice(0,3)}</div></div></section><Contact/></>;
}
function CaseGrid(){return <><PageTitle eyebrow="Selected work" title="Featured Case Studies">Frameworks, mechanics, and spaces — a closer look at my design work.</PageTitle><div className="card-grid case-grid">{cases.map((c,i)=><a className="case-card" key={c.id} href={`#/case-studies/${c.id}`}><div className={`case-cover ${c.color}`}><span className="cover-index">CASE / {String(i+1).padStart(2,'0')}</span><img className="framework-placeholder" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png" alt="" loading="lazy"/><span className="cover-arrow"><Icon name="arrow" size={18}/></span></div><div className="card-copy"><span className="eyebrow">{c.category}</span><h2>{c.title}</h2><p>{c.subtitle}</p></div></a>)}</div></>}
function CasePage({item}){return <article className="case-page"><a className="back-link" href="#/case-studies"><Icon name="back" size={16}/> Featured Case Studies</a><PageTitle title={`${item.title}: ${item.subtitle}`}/><div className={`case-banner ${item.color}`}><img className="framework-placeholder" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png" alt=""/></div><div className="pending-content"><p>Under construction</p></div><nav className="case-pagination" aria-label="Other case studies">{cases.indexOf(item)>0?<a className="text-link" href={`#/case-studies/${cases[cases.indexOf(item)-1].id}`}><Icon name="back" size={16}/> Previous case</a>:<span/>}{cases.indexOf(item)<cases.length-1&&<a className="text-link" href={`#/case-studies/${cases[cases.indexOf(item)+1].id}`}>Next case <Icon name="arrow" size={16}/></a>}</nav></article>}
function ProjectGrid({items,base}){return <div className="card-grid">{items.map(item=><a className="project-card" key={item.id} href={`#/${base}/${item.id}`}><div className="project-cover"><img src={item.image} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none';}}/><span className="project-cover-fallback">{item.modalTitle}</span><span className="cover-arrow"><Icon name="arrow" size={18}/></span></div><div className="card-copy"><span className="eyebrow">{item.tag}</span><h2>{item.modalTitle}</h2>{item.status&&<p>{item.status}</p>}</div></a>)}</div>}
function ProjectPage({item,base}){return <article><a className="back-link" href={`#/${base}`}><Icon name="back" size={16}/>{base==='projects'?'Projects':'Research, Articles & Game Jams'}</a><PageTitle eyebrow={item.tag} title={item.modalTitle}>{item.status}</PageTitle>{item.body?<div className="pending-content">{item.body}</div>:<><div className="project-hero"><img src={item.projectImage||item.image} alt={item.modalTitle}/></div><p className="project-description">{item.description}</p><div className="project-actions">{[{label:item.action,href:item.href},{label:item.secondaryAction,href:item.secondaryHref},...(item.extraActions||[])].filter(a=>a.href&&a.href!=='#').map(a=><a className="text-link" key={a.label} href={a.href} target="_blank" rel="noreferrer">{a.label} <Icon name="external" size={14}/></a>)}</div>{item.meta&&<dl className="project-meta">{item.meta.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}{item.contributions&&<section className="contributions"><h2>My contributions</h2><ul>{item.contributions.map(c=><li key={c}>{c}</li>)}</ul></section>}{item.awardImage&&<div className="project-award"><img src={item.awardImage} alt={item.awardLabel}/></div>}</>}</article>}
function Article({title,text,image}){return <article className="article-card"><div className="article-image"><img src={image} alt="" loading="lazy"/></div><div><span className="eyebrow">Article</span><h3>{title}</h3><p>{text}</p></div></article>}
function Explorations({tab}){const selected=['research','articles','game-jams'].includes(tab)?tab:'research';return <><PageTitle eyebrow="Beyond the frameworks" title="Research, Articles & Game Jams"/><nav className="tabs" aria-label="Research sections">{[['research','Research'],['articles','Articles'],['game-jams','Game Jams']].map(([id,label])=><a key={id} className={selected===id?'selected':''} href={`#/explorations/${id}`} aria-current={selected===id?'page':undefined}>{label}</a>)}</nav>{selected==='research'?<ProjectGrid items={windows.find(w=>w.id==='links').items} base="research"/>:selected==='game-jams'?<ProjectGrid items={windows.find(w=>w.id==='games').items} base="game-jams"/>:navModals.find(m=>m.id==='articles').body}</>}
function Awards(){return <div className="card-grid awards-grid">{[
['2024','Start a Game!','Gerasim vs Besi','Finalist · Regions and Languages of Russia'],
['2024','SINEUS','Gerasim vs Besi','Finalist · Mythology in Art'],
['2024','Astrum Entertainment','Paws and Cards','One of the best works · Conceptualization Basics: 2nd'],
].map(([year,title,project,detail])=><article className="award-card" key={title}><div className="award-icon"><Icon name="awards" size={34}/></div><span className="year">{year}</span><h2>{title}</h2><p>{project}</p><span className="recognition-detail">{detail}</span></article>)}</div>}
function Press(){
 const groups=[{year:'2026',items:[]},{year:'2025',items:[]},{year:'2024',items:[]}];
 let year='2025';
 React.Children.toArray(navModals.find(m=>m.id==='press').body.props.children).forEach(child=>{if(child.type==='h3')year=String(child.props.children);else if(child.type==='article')groups.find(g=>g.year===year)?.items.push(child)});
 return <div className="press-years">{groups.map(group=><section className="press-year-section" key={group.year}><h2>{group.year}</h2>{group.items.length?<div className="card-grid press-grid">{group.items}</div>:<div className="pending-content"><p>Under construction</p></div>}</section>)}</div>;
}
function About({tab}){
 const selected=['about','awards','press'].includes(tab)?tab:'about';
 return <><PageTitle title="About"/><nav className="tabs" aria-label="About sections">{[['about','About'],['awards','Awards'],['press','Press']].map(([id,label])=><a key={id} className={selected===id?'selected':''} href={`#/about/${id}`} aria-current={selected===id?'page':undefined}>{label}</a>)}</nav>{selected==='awards'?<Awards/>:selected==='press'?<Press/>:<div className="about-empty-section"/>}</>;
}
function currentRoute(){return window.location.hash.replace(/^#\/?/,'').split('/').filter(Boolean)}
export default function App(){
 const [route,setRoute]=useState(currentRoute);
 const mainRef=useRef(null);
 useEffect(()=>{const handler=()=>{setRoute(currentRoute());window.scrollTo(0,0)};window.addEventListener('hashchange',handler);return()=>window.removeEventListener('hashchange',handler)},[]);
 const [page='home',detail]=route;
 const active=['game-jams','research'].includes(page)?'explorations':['awards','press'].includes(page)?'about':page;
 const item=cases.find(c=>c.id===detail);
 const project=windows.find(w=>w.id===({projects:'projects','game-jams':'games',research:'links'}[page]))?.items.find(i=>i.id===detail);
 const pageName=page==='case-studies'?(item?.title||'Featured Case Studies'):navigation.concat(extraNavigation).find(n=>n.id===active)?.label||'Home';
 useEffect(()=>{document.title=`${pageName} — Valentina Godovets`;if(mainRef.current)mainRef.current.focus({preventScroll:true})},[page,detail]);
 let content;
 if(page==='home')content=<Home/>;
 else if(page==='case-studies')content=detail?(item?<CasePage item={item}/>:<><PageTitle title="Case not found"/><a href="#/case-studies">Back to case studies</a></>):<CaseGrid/>;
 else if(project)content=<ProjectPage item={project} base={page}/>;
 else if(page==='projects')content=<><PageTitle eyebrow="Selected work" title="Projects">Games and worlds I’ve helped bring to life.</PageTitle><ProjectGrid items={windows.find(w=>w.id==='projects').items} base="projects"/></>;
 else if(page==='explorations')content=<Explorations tab={detail}/>;
 else if(page==='research'||page==='game-jams')content=<Explorations tab={page}/>;
 else if(page==='mentoring')content=<><PageTitle eyebrow="Working together" title="Mentoring & Collaboration"/><div className="empty-section"/><Contact/></>;
 else if(page==='about')content=<About tab={detail}/>;
 else if(page==='awards')content=<About tab="awards"/>;
 else if(page==='press')content=<About tab="press"/>;
 else content=<><PageTitle title="Page not found"/><a className="text-link" href="#/">Return home <Icon name="arrow"/></a></>;
 return <><style>{newStyles}</style><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();mainRef.current?.focus()}}>Skip to content</a><div className="site-frame"><header className="site-header"><a href="#/" className="wordmark" aria-label="Valentina Godovets — Home"><img className="brand-image" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Valentina%20Godovets.png" alt="Valentina Godovets"/><span className="brand-subtitle">{profile.subtitle}</span></a></header><div className="site-layout"><aside className="sidebar"><nav aria-label="Main navigation"><div className="main-nav">{navigation.map(n=><a href={`#/${n.id}`} key={n.id} className={`nav-link ${active===n.id?'active':''}`} aria-label={n.label} aria-current={active===n.id?'page':undefined}><span className="nav-icon"><Icon name={n.icon}/></span><span className="nav-tooltip" role="tooltip">{n.label}</span></a>)}</div></nav></aside><main id="main-content" ref={mainRef} tabIndex={-1} className={`main-content page-${page}`} key={page+'/'+(detail||'')}>{content}</main></div><footer className="site-footer"><span>© {new Date().getFullYear()} Valentina Godovets</span></footer></div></>;
}
const newStyles=`
@import url('https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Cormorant+Garamond:wght@500;600;700;800&family=Share+Tech+Mono&display=swap');
:root{font-family:"Times New Roman",Times,serif;color:#322c3b;background:#fff;font-synthesis:none;--ink:#322c3b;--muted:#78717f;--purple:#736081;--line:#ded8e2;--paper:#fff}*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}a,button{-webkit-tap-highlight-color:transparent}a:focus-visible,button:focus-visible{outline:2px solid #806a95;outline-offset:5px}svg{flex-shrink:0}img{display:block;max-width:100%}h1,h2,h3,p{margin:0}button{cursor:pointer}.site-frame{max-width:1600px;margin:auto;padding:0 48px}.site-header{height:145px;display:flex;align-items:center;justify-content:space-between;border:0;gap:25px}.wordmark{font-family:"Eagle Lake",Georgia,serif;font-size:clamp(27px,3.1vw,46px);letter-spacing:.025em;display:flex;align-items:center;gap:21px;white-space:nowrap}.wordmark-star{font-family:Georgia,serif;font-size:30px;color:#95829e;transition:transform .6s}.wordmark:hover .wordmark-star{transform:rotate(90deg)}.header-note{font-size:10px;letter-spacing:.17em;color:var(--muted);white-space:nowrap}.site-layout{display:grid;grid-template-columns:244px minmax(0,1fr);gap:54px;min-height:calc(100vh - 207px)}.sidebar{border:0;padding:48px 28px 40px 0;display:flex;flex-direction:column;align-self:start;position:sticky;top:0;min-height:640px}.main-nav,.secondary-nav{display:flex;flex-direction:column;gap:13px}.nav-link{display:grid;grid-template-columns:40px 1fr 10px;align-items:center;gap:12px;font-size:12px;font-weight:500;line-height:1.5;color:#6c6473;transition:color .2s}.nav-icon{height:40px;width:40px;border:1px solid #d5ccd9;display:flex;align-items:center;justify-content:center;border-radius:9px;transition:background .2s,border-color .2s}.nav-marker{opacity:0;font-size:14px}.nav-link:hover,.nav-link.active{color:#493451}.nav-link:hover .nav-icon{background:#ece5f0;border-color:#ac97b7}.nav-link.active .nav-icon{background:#e6dce9;border-color:#ad96b7}.nav-link.active .nav-marker{opacity:1}.secondary-nav{border:0;margin-top:29px;padding-top:27px;gap:10px}.secondary-nav .nav-icon{height:33px;width:40px;border-color:transparent}.sidebar-home{font-size:11px;display:flex;align-items:center;gap:9px;margin:30px 0 0 13px;color:var(--muted)}.sidebar-home:hover{color:var(--purple)}.sidebar-signature{font-size:10px;line-height:1.8;color:#9c94a1;margin-top:48px;margin-left:13px}.main-content{padding:48px 0 70px;min-width:0;outline:none;animation:appear .28s ease}.home-hero{display:grid;grid-template-columns:minmax(210px,.92fr) minmax(260px,1.08fr);gap:clamp(30px,4.3vw,68px);align-items:center;padding:16px 0 55px;min-height:535px}.photo-placeholder{aspect-ratio:4/5;background:#e9e1ed;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid #ddd0e2;border-radius:110px 110px 3px 3px;color:#9a86a3}.photo-placeholder:before,.photo-placeholder:after{content:'';position:absolute;border:1px solid #d9cadd;border-radius:50%;width:175%;height:110%;top:42%;left:-35%;transform:rotate(-25deg)}.photo-placeholder:after{top:51%;left:-5%;transform:rotate(25deg)}.portrait-center{display:flex;flex-direction:column;gap:15px;align-items:center;position:relative;z-index:1;color:#887291}.portrait-center span{font-size:11px;letter-spacing:.04em}.portrait-caption{position:absolute;bottom:22px;font-size:8px;letter-spacing:.18em;color:#887291;z-index:1}.portrait-note{display:block;font-family:Georgia,serif;font-style:italic;font-size:11px;line-height:1.6;margin-top:14px;color:#9b8fa1;text-align:center}.portrait-corner{display:none}.eyebrow{text-transform:uppercase;letter-spacing:.13em;font-size:9px;line-height:1.7;font-weight:600;color:#8a7696}.home-copy h1{font-family:"Eagle Lake",Georgia,serif;font-size:clamp(38px,3.9vw,57px);font-weight:400;letter-spacing:-.04em;line-height:1.15;margin:16px 0 22px}.title-dot{color:#9d80ac}.lead{font-size:18px;line-height:1.55;letter-spacing:-.025em;margin-bottom:22px}.bio{max-width:400px;color:#78717f;font-size:12px;line-height:1.95}.bio p+p{margin-top:13px}.text-link{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;line-height:1.5;border-bottom:1px solid #b5a1bf;padding-bottom:7px;color:#60466e}.text-link:hover{color:#34203f;border-color:#34203f}.hero-cta{margin-top:26px}.contact-strip{border:0;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:26px 0;margin-top:12px}.contact-strip>div:first-child{display:flex;align-items:center;gap:16px}.small-star{font-size:26px;color:#a98fb5}.contact-strip p{font-family:"Eagle Lake",Georgia,serif;font-size:23px}.social-links{display:flex;gap:27px}.social-links a{display:flex;gap:8px;align-items:center;font-size:10px;white-space:nowrap;color:#6b5d74}.social-links a:hover{color:#35203f}.site-footer{border:0;padding:22px 0;display:flex;justify-content:space-between;align-items:center;gap:15px;font-size:9px;color:#918797;letter-spacing:.025em}.site-footer a{color:#6c5b77}.page-heading{margin:2px 0 35px;max-width:800px}.page-heading h1{font-family:"Eagle Lake",Georgia,serif;font-weight:400;font-size:clamp(35px,3.4vw,49px);line-height:1.15;letter-spacing:-.025em;margin-top:13px}.page-intro{font-size:12px;color:var(--muted);line-height:1.8;margin-top:15px;max-width:540px}.card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px 22px}.case-card,.project-card{min-width:0;display:block}.case-cover{aspect-ratio:1.6;position:relative;overflow:hidden;border-radius:3px;transition:transform .25s,box-shadow .25s}.mauve{background:#e5dce9;color:#83668d}.sage{background:#e0e7df;color:#71856a}.rose{background:#efdddd;color:#ae777d}.lavender{background:#e2def0;color:#8b77a4}.sand{background:#ece4d8;color:#ab9474}.slate{background:#e0e4e9;color:#778597}.mint{background:#dce8e4;color:#6f9989}.case-art{height:100%;width:100%;display:block}.cover-index{position:absolute;top:15px;left:16px;font-size:8px;font-weight:500;letter-spacing:.12em;z-index:1}.cover-arrow{position:absolute;bottom:12px;right:14px;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;border:1px solid currentColor;opacity:.6;transition:transform .2s}.case-card:hover .case-cover,.project-card:hover .project-cover{transform:translateY(-3px);box-shadow:0 8px 20px #58416012}.case-card:hover .cover-arrow,.project-card:hover .cover-arrow{transform:rotate(-35deg);opacity:1}.card-copy{padding:17px 1px 0}.card-copy .eyebrow{font-size:8px;letter-spacing:.1em}.card-copy h2{font-size:14px;line-height:1.55;font-weight:550;letter-spacing:-.015em;margin-top:7px}.card-copy p{font-size:11px;line-height:1.7;color:#8c8193;margin-top:6px}.back-link{display:inline-flex;align-items:center;gap:9px;color:#8a7b94;font-size:10px;margin-bottom:30px}.back-link:hover{color:#493451}.case-banner{height:250px;border-radius:3px}.case-banner .case-art{width:min(100%,480px);margin:auto}.case-page .page-heading h1{max-width:800px}.pending-content{border:0;padding:35px 0;margin-top:35px;color:var(--muted);font-size:14px}.pending-content p{margin-top:10px}.case-pagination{display:flex;justify-content:space-between;gap:30px;margin-top:45px}.project-cover{aspect-ratio:1.45;background:#e8e1eb;position:relative;border-radius:3px;overflow:hidden;transition:transform .2s,box-shadow .2s;color:#6d5878}.project-cover img{position:relative;width:100%;height:100%;object-fit:cover;z-index:1}.project-cover-fallback{position:absolute;inset:0;display:grid;place-items:center;padding:25px;font-family:"Eagle Lake",Georgia,serif;font-size:25px;text-align:center}.project-cover .cover-arrow{z-index:2;background:#faf7fc;border-color:#d2c7d8;opacity:1;bottom:10px;right:10px}.project-hero{max-height:420px;overflow:hidden;background:#ebe5ee}.project-hero img{width:100%;height:100%;max-height:420px;object-fit:contain}.project-description{font-size:15px;line-height:1.9;margin:30px 0 24px;max-width:740px;color:#6e6376}.project-actions{display:flex;gap:25px;flex-wrap:wrap;margin:20px 0 35px}.project-meta{border:0;margin:30px 0}.project-meta>div{display:grid;grid-template-columns:130px 1fr;gap:20px;border:0;padding:15px 0;font-size:12px;line-height:1.7}.project-meta dt{color:var(--muted)}.project-meta dd{margin:0}.contributions h2{font-family:"Eagle Lake",Georgia,serif;font-size:30px;font-weight:400}.contributions ul{padding-left:18px;color:#776a80;font-size:13px;line-height:1.85}.contributions li{margin:12px 0}.project-award{margin-top:30px}.project-award img{max-height:260px;object-fit:contain}.tabs{display:flex;gap:30px;border:0;margin-bottom:32px}.tabs a{font-size:12px;color:var(--muted);padding:0 0 13px;position:relative}.tabs a.selected{color:#513a60}.tabs a.selected:after{content:'';position:absolute;height:2px;background:#8a7099;bottom:-1px;left:0;right:0}.articles-list{display:flex;flex-direction:column;gap:30px}.article-card{display:grid;grid-template-columns:180px 1fr;gap:26px;padding-bottom:30px;border:0}.article-image{aspect-ratio:1.4;background:#e8e2eb;overflow:hidden;border-radius:3px}.article-image img{height:100%;width:100%;object-fit:cover}.article-card h3{font-size:16px;font-weight:500;line-height:1.5;margin:5px 0 12px}.article-card p{font-size:12px;line-height:1.9;color:var(--muted)}.empty-section{min-height:350px}.recognition-list{border:0}.recognition-row{display:grid;grid-template-columns:60px 1fr 30px;gap:20px;align-items:center;border:0;padding:30px 0}.year{font-size:11px;color:#8e7c98}.recognition-row h2{font-size:19px;font-weight:500}.recognition-row p{font-size:13px;margin-top:8px}.recognition-detail{display:block;font-size:11px;color:#8a7c93;margin-top:8px;line-height:1.7}.recognition-row svg{color:#9f8aa9}.press-list>h3{font-family:"Eagle Lake",Georgia,serif;font-size:27px;font-weight:400;margin:30px 0 16px;color:#927e9d}.press-list>h3:first-child{margin-top:0}.press-card{padding:20px 0;border:0;display:flex;flex-direction:column;align-items:flex-start;gap:10px}.press-year{font-size:10px;color:#8a7c93}.press-card strong{font-size:15px;font-weight:500;line-height:1.7}.press-card p{font-size:12px;color:var(--muted)}.press-link{font-size:10px;border-bottom:1px solid #bfacc9;padding-bottom:5px;color:#70547e}.skip-link{position:fixed;top:-60px;left:20px;background:#fff;padding:10px;z-index:50;font-size:13px}.skip-link:focus{top:10px}.under-construction{font-size:14px;color:#8b7d94}@keyframes appear{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
@media(min-width:1450px){.home-hero{padding-top:35px;min-height:630px}.home-copy h1{font-size:64px}.bio{font-size:14px}.lead{font-size:22px}.home-hero .portrait-wrap{max-width:380px}.site-layout{gap:75px;grid-template-columns:255px minmax(0,1fr)}}
@media(max-width:1100px){.site-frame{padding:0 30px}.site-layout{grid-template-columns:200px minmax(0,1fr);gap:30px}.sidebar{padding-right:20px}.nav-link{font-size:11px;gap:9px;grid-template-columns:35px 1fr 8px}.nav-icon{width:35px;height:35px}.secondary-nav .nav-icon{width:35px}.home-hero{gap:30px;grid-template-columns:.85fr 1.15fr;min-height:485px}.home-copy h1{font-size:39px}.lead{font-size:16px}.bio{font-size:11px}.card-grid{gap:26px 16px}.card-copy h2{font-size:12px}.contact-strip{flex-wrap:wrap}.contact-strip p{font-size:22px}.cover-index{font-size:7px;left:10px;top:10px}}
@media(max-width:800px){.site-frame{padding:0 20px}.site-header{height:110px}.wordmark{font-size:30px;gap:12px}.wordmark-star{font-size:23px}.header-note{display:none}.site-layout{grid-template-columns:65px minmax(0,1fr);gap:24px}.sidebar{padding:30px 16px 30px 0;min-height:520px}.nav-link{display:flex;justify-content:center;position:relative}.nav-link>span:not(.nav-icon){display:none}.nav-icon{width:41px;height:41px;border-radius:8px}.nav-link:hover:after{content:attr(aria-label);position:absolute;left:50px;background:#fff;padding:8px;font-size:12px;z-index:5}.secondary-nav .nav-icon{width:41px;height:34px}.sidebar-home{margin:28px 0 0;justify-content:center;font-size:0;gap:0}.sidebar-home svg{width:19px;height:19px}.sidebar-signature{display:none}.main-content{padding-top:30px}.home-hero{display:flex;flex-direction:column;align-items:stretch;padding-top:0;gap:32px}.portrait-wrap{max-width:330px;width:90%;align-self:center}.home-copy{max-width:500px}.home-copy h1{font-size:46px}.bio{font-size:13px;max-width:none}.lead{font-size:20px}.card-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 18px}.card-copy h2{font-size:14px}.contact-strip{gap:20px}.social-links{gap:22px}.site-footer>span:nth-child(2){display:none}.article-card{grid-template-columns:1fr}.article-image{max-width:340px}.page-heading h1{font-size:36px}.project-meta>div{grid-template-columns:100px 1fr}.tabs{gap:20px}.tabs a{font-size:11px}}
@media(max-width:480px){.site-frame{padding:0 14px}.site-header{height:90px}.wordmark{font-size:25px;gap:10px}.wordmark-star{font-size:19px}.site-layout{grid-template-columns:45px minmax(0,1fr);gap:16px}.sidebar{padding-right:9px}.nav-icon,.secondary-nav .nav-icon{width:32px;height:34px;border-radius:6px}.nav-icon svg{width:18px;height:18px}.nav-link{justify-content:flex-start}.sidebar-home{justify-content:flex-start;padding-left:9px}.card-grid{grid-template-columns:1fr}.case-cover{aspect-ratio:1.8}.card-copy h2{font-size:15px}.portrait-wrap{width:100%}.portrait-note{font-size:10px}.home-copy h1{font-size:37px}.lead{font-size:18px}.bio{font-size:12px}.eyebrow{font-size:8px}.contact-strip>div:first-child{gap:9px}.contact-strip p{font-size:20px}.social-links{gap:20px}.social-links a{font-size:9px;gap:5px}.page-heading h1{font-size:32px}.case-banner{height:190px}.case-pagination .text-link{font-size:9px;gap:7px}.recognition-row{grid-template-columns:38px 1fr;gap:12px}.recognition-row svg{display:none}.recognition-row h2{font-size:17px}.project-meta>div{grid-template-columns:1fr;gap:6px}.tabs{gap:17px}.tabs a{font-size:10px}.site-footer{font-size:8px}.desktop-break{display:none}.main-content{padding-bottom:40px}.article-card h3{font-size:15px}.article-card p{font-size:12px}}
/* White portfolio shell and compact icon navigation. */
:root{color-scheme:light;background:#fff}body,.site-frame{background:#fff!important;color:#322c3b}
.site-header{height:170px;justify-content:center;text-align:center;padding:30px 0;gap:0}
.wordmark{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:14px;white-space:normal}
.brand-image{width:min(500px,70vw);height:auto;filter:brightness(0);max-height:92px;object-fit:contain}
.brand-subtitle{font-family:"Times New Roman",Times,serif;font-size:11px;letter-spacing:.16em;line-height:1.5;color:#78717f;font-weight:400}
.site-layout{grid-template-columns:64px minmax(0,1fr);gap:54px;min-height:calc(100vh - 235px)}
.sidebar{padding:48px 0 30px;min-height:0;z-index:10}
.main-nav{gap:18px}.nav-link{display:flex;position:relative;width:44px;justify-content:center;gap:0}
.nav-icon{width:44px;height:44px;border-radius:9px}
.nav-link .nav-tooltip{display:block!important;position:absolute;left:calc(100% + 13px);top:50%;transform:translateY(-50%);background:#fff;color:#493451;box-shadow:0 4px 24px #322c3b16;padding:10px 14px;border-radius:5px;white-space:nowrap;opacity:0;visibility:hidden;pointer-events:none;font-size:12px;line-height:1.5;z-index:20;transition:opacity .15s}
.nav-link:hover .nav-tooltip,.nav-link:focus-visible .nav-tooltip{opacity:1;visibility:visible}
.nav-link:hover:after{content:none}.nav-link.active .nav-icon{background:#ece5f0}
.contact-strip{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:19px;margin-top:10px;padding:30px 0}
.contact-strip p{font-family:"Eagle Lake",Georgia,serif;font-size:28px;font-weight:400}
.social-links{justify-content:center;gap:30px}.social-links a{font-size:11px}
.site-footer{justify-content:center;text-align:center}.text-link,.press-link{border:0}.tabs a.selected:after{display:none}.tabs a.selected{font-weight:600}
.about-empty-section{min-height:120px}.about-section{margin-top:30px;margin-bottom:60px}.about-section-title{font-family:"Eagle Lake",Georgia,serif;font-size:36px;font-weight:400;line-height:1.3;margin-bottom:24px}.about-section .recognition-row{padding:22px 0}.about-section .press-list>h3{font-size:24px}
@media(min-width:1450px){.site-layout{grid-template-columns:64px minmax(0,1fr);gap:75px}.home-hero{grid-template-columns:minmax(280px,.92fr) minmax(300px,1.08fr)}}
@media(max-width:1100px){.site-layout{grid-template-columns:54px minmax(0,1fr);gap:35px}.nav-link,.nav-icon{width:42px;height:42px}.sidebar{padding-right:0}}
@media(max-width:800px){.site-header{height:145px}.brand-image{width:min(450px,75vw)}.brand-subtitle{font-size:9px}.site-layout{grid-template-columns:45px minmax(0,1fr);gap:24px}.sidebar{padding-top:30px;padding-right:0;min-height:0}.nav-link,.nav-icon{width:40px;height:40px}.nav-link>span.nav-tooltip{display:block!important}.home-hero{max-width:570px;margin:auto}.contact-strip{width:100%}.about-section-title{font-size:32px}}
@media(max-width:480px){.site-header{height:125px;padding:25px 0}.brand-image{width:85vw}.brand-subtitle{font-size:8px;letter-spacing:.1em}.site-layout{grid-template-columns:36px minmax(0,1fr);gap:16px}.nav-link,.nav-icon{width:34px;height:36px}.main-nav{gap:15px}.nav-link .nav-tooltip{font-size:11px;max-width:245px;white-space:normal;width:max-content;padding:9px 11px}.contact-strip p{font-size:25px}.social-links{gap:25px}.social-links a{font-size:10px}}

/* Original portfolio typography, violet/pink palette and framework artwork. */
:root{--text-font:"Times New Roman",Times,serif;--main-font:"Eagle Lake",Georgia,serif;--decorative-font:"Cormorant Garamond",Georgia,serif;--pink:#ECC8F7;--deep-violet:#171544;--peach:#eec2b5;--ink:#181518}
body,.site-frame{font-family:var(--text-font);color:var(--ink)}
h1,h2,h3,.text-link,.tabs a,.nav-tooltip,.contact-strip p{font-family:var(--main-font);font-weight:400}
.brand-subtitle{font-family:var(--decorative-font);font-size:15px;color:#67506d;letter-spacing:.055em;text-transform:uppercase}
.home-copy h1{font-size:clamp(30px,3.4vw,48px);line-height:1.5;letter-spacing:0}
.page-heading h1{font-size:clamp(27px,3vw,40px);line-height:1.55;letter-spacing:0;margin-top:0}
.bio{font-size:16px;line-height:1.8;max-width:510px;color:#625869}.lead{font-size:21px;line-height:1.6;letter-spacing:0}
.eyebrow{font-family:var(--decorative-font);font-size:12px;font-weight:600;letter-spacing:.04em;color:#786083}
.nav-icon{color:#f7f0f5;border-color:#c4a2d4;border-radius:12px;background:radial-gradient(circle at 20% 10%,#ecc8f766,transparent 62%),linear-gradient(145deg,#75628c,#171544);box-shadow:inset 0 1px 0 #fff7,0 5px 14px #17154424}
.nav-icon svg{stroke-width:1.5;filter:drop-shadow(0 1px 2px #17154460)}
.nav-link:hover .nav-icon,.nav-link.active .nav-icon{background:radial-gradient(circle at 18% 8%,#eec2b580,transparent 65%),linear-gradient(145deg,#a184b3,#30234d);border-color:#eec2b5;box-shadow:inset 0 1px 0 #fff8,0 5px 16px #76538032}
.nav-link .nav-tooltip{font-family:var(--decorative-font);font-size:17px;color:#43324f;background:#f7f0f5;box-shadow:0 6px 22px #17154420}
.case-cover,.case-banner{background:#171544}.framework-placeholder{width:100%;height:100%;object-fit:cover;display:block}.case-banner{height:300px}.case-banner .framework-placeholder{object-fit:contain;background:#fff}
.cover-index{color:#fff;font-family:"Share Tech Mono",monospace;text-shadow:0 1px 4px #171544;font-size:10px}.case-cover .cover-arrow{color:#fff;background:#17154466;opacity:1}
.card-copy h2{font-family:var(--main-font);font-size:15px;font-weight:400;line-height:1.7;letter-spacing:0}.card-copy p{font-size:15px;line-height:1.6;color:#75637e}.card-copy .eyebrow{font-size:12px}
.contact-strip p{font-size:27px;line-height:1.65}.social-links a{font-family:var(--main-font);font-size:13px}.text-link{font-size:13px}.tabs{gap:30px;flex-wrap:wrap}.tabs a{font-size:14px;color:#806788}.tabs a.selected{font-weight:400;color:#171544;background:#ecc8f733;border-radius:7px;padding:9px 14px;margin-top:-9px}.tabs a:not(.selected){padding-left:2px;padding-right:2px}
.award-card{padding:14px 0}.award-icon{height:90px;display:flex;align-items:center;color:#806189}.award-card h2{font-size:18px;line-height:1.7;margin:10px 0}.award-card p{font-size:16px;line-height:1.6}.award-card .year{font-family:var(--decorative-font);font-size:16px;color:#8c7295}.recognition-detail{font-size:14px;line-height:1.7}
.press-year-section{margin-bottom:45px}.press-year-section>h2{font-family:var(--decorative-font);font-weight:500;color:#7f648a;font-size:32px;margin:0 0 22px}.press-grid{align-items:start}.press-card{padding:0;gap:14px}.press-year{font-family:var(--decorative-font);font-size:15px;line-height:1.6}.press-card strong{font-family:var(--main-font);font-size:14px;line-height:1.8;font-weight:400}.press-card p{font-size:15px}.press-link{font-family:var(--main-font);font-size:12px;color:#5a3c70}.pending-content,.under-construction{font-family:var(--main-font);font-size:17px;line-height:1.8;color:#75637e}
.article-card h3{font-size:16px;line-height:1.8}.article-card p{font-size:16px;line-height:1.8}.project-description{font-size:18px}.project-meta>div{font-size:16px}.contributions li{font-size:16px}.site-footer{font-family:var(--text-font);font-size:12px}
@media(min-width:1450px){.home-copy h1{font-size:50px}.bio{font-size:17px}.lead{font-size:23px}}
@media(max-width:800px){.home-copy h1{font-size:37px}.page-heading h1{font-size:32px}.bio{font-size:16px}.card-copy h2{font-size:14px}.brand-subtitle{font-size:13px}.contact-strip p{font-size:24px}}
@media(max-width:480px){.home-copy h1{font-size:30px}.page-heading h1{font-size:25px}.lead{font-size:20px}.brand-subtitle{font-size:11px}.card-copy h2{font-size:15px}.card-copy p{font-size:15px}.contact-strip p{font-size:21px}.social-links{gap:20px}.social-links a{font-size:11px}.tabs{gap:17px}.tabs a{font-size:12px}.tabs a.selected{padding-left:10px;padding-right:10px}.nav-link .nav-tooltip{font-size:15px}.press-grid{grid-template-columns:1fr}.press-card strong{font-size:15px}.article-card p{font-size:16px}}

.original-about-copy{font-size:18px;line-height:1.9;color:#4c4254}.original-about-copy p:first-child{font-size:22px;line-height:1.7;color:#30263a}.original-about-copy strong{font-weight:700}.original-about-copy p+p{margin-top:22px}@media(max-width:480px){.original-about-copy{font-size:17px}.original-about-copy p:first-child{font-size:20px}}
/* More balanced typography and a compact, connected home composition. */
.site-frame{padding-inline:72px}
.page-heading h1{font-size:clamp(24px,2.4vw,32px);line-height:1.55}
.card-copy h2{font-size:18px;line-height:1.65}
.nav-icon{color:#745584;border-color:#d8c8e3;background:radial-gradient(circle at 18% 10%,#fff9,transparent 65%),linear-gradient(145deg,#f2e8f8,#daccE8);box-shadow:inset 0 1px 0 #fff,0 4px 12px #80618d18}
.nav-icon svg{stroke-width:1.5;filter:none}
.nav-link:hover .nav-icon,.nav-link.active .nav-icon{color:#61406f;border-color:#c9a8d5;background:radial-gradient(circle at 18% 8%,#fff9,transparent 65%),linear-gradient(145deg,#f1deef,#e2cceb);box-shadow:inset 0 1px 0 #fffc,0 4px 14px #9974aa24}
.home-hero{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(24px,3vw,44px);width:100%;max-width:1040px;min-height:0;align-items:center;margin:0 auto;padding:16px 0 40px}
.home-hero .portrait-wrap{width:100%;max-width:380px;justify-self:end;align-self:center}
.home-copy{width:100%;min-width:0;max-width:560px}
.original-about-copy,.original-about-copy p:first-child{font-family:var(--text-font);font-size:18px;line-height:1.9;color:#4c4254}
.original-about-copy{max-width:none}.original-about-copy strong{font-family:inherit;font-weight:700}
.original-about-copy p+p{margin-top:22px}
@media(min-width:1450px){.home-hero{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);padding-top:25px;min-height:0}}
@media(max-width:1100px){.site-frame{padding-inline:48px}.card-copy h2{font-size:17px}}
@media(max-width:800px){.site-frame{padding-inline:32px}.page-heading h1{font-size:28px}.home-hero{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:24px;max-width:680px;padding-top:0}.home-copy{max-width:none}.original-about-copy,.original-about-copy p:first-child{font-size:17px;line-height:1.8}.card-copy h2{font-size:17px}}
@media(max-width:600px){.site-frame{padding-inline:24px}.home-hero{grid-template-columns:minmax(0,1fr);max-width:430px;gap:24px}.home-hero .portrait-wrap{width:min(100%,270px);max-width:270px;justify-self:center}.home-copy{max-width:none}.original-about-copy,.original-about-copy p:first-child{font-size:17px;line-height:1.8}.original-about-copy p+p{margin-top:18px}}
@media(max-width:480px){.site-frame{padding-inline:24px}.site-layout{gap:18px}.page-heading h1{font-size:24px}.card-copy h2{font-size:17px}.home-hero{gap:22px}.nav-link .nav-tooltip{max-width:220px}}

@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
