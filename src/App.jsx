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
          <a className="text-link" href="mailto:godovets.valya@gmail.com?subject=CV%20PDF%20request">Request CV PDF</a>
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
          <span className="press-year">July, 2025 · Women in Games</span>
          <strong>Women in Games Ambassador</strong>
          <p>Became an Individual Ambassador for Women in Games in July 2025.</p>
          <a className="press-link" href="https://www.womeningames.org/a-warm-welcome-to-our-new-individual-ambassadors-of-july-2025/" target="_blank" rel="noopener noreferrer">Read announcement</a>
        </article>

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
          <strong>One of the best works on the course — “Paws and Cards”</strong>
          
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
  {id:'explorations',label:'Research & Creative Work',icon:'research'},
  {id:'mentoring',label:'Mentoring & Collaboration',icon:'mentoring'},
  {id:'about',label:'About',icon:'about'},
];
const extraNavigation = [{id:'awards',label:'Awards',icon:'awards'},{id:'press',label:'Press',icon:'press'}];
function Icon({name, size=22}) {
  const paths={
    cv:<><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h4M9 13h6M9 16h6M9 10h2"/></>,
    home:<><path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/></>,
    projects:<>
      <path d="M6 4h12a2 2 0 0 1 2 2v2h-4V6a2 2 0 0 1 2-2M6 4v14m0-14a2 2 0 0 0-2 2v2h2m10-2v12"/>
      <path d="M6 18H3v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2H6M9 9h4m-4 3h4m-4 3h2"/>
      <path d="m12 16 2 1.5V21l-2-1-2 1v-3.5Z" fill="currentColor" opacity=".15"/>
    </>,
    cases:<>
      <path d="M12 3c3 2 5 2 8 2v7c0 5-4 8-8 10-4-2-8-5-8-10V5c3 0 5 0 8-2Z"/>
      <path d="M12 6c2 1 4 1 5 1v5c0 3-2 5-5 7-3-2-5-4-5-7V7c1 0 3 0 5-1Z" fill="currentColor" opacity=".1" stroke="none"/>
      <path d="M12 7v10m-4-5h8m-4-5-2 3 2 2 2-2Zm0 10-2-3 2-2 2 2Z"/>
    </>,
    research:<>
      <path d="M12 6C9 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v15"/>
      <path d="M5 7c1-.2 3 0 4 1m-4 3c1-.2 3 0 4 1m-4 3h3m7-7c1-1 3-1 4-1m-4 5c1-1 3-1 4-1m-4 4h3"/>
      <path d="M2 17h2m16 0h2M10 4V2h4v2"/>
    </>,
    mentoring:<>
      <path d="M5 19C7 10 11 4 21 3c0 8-4 13-12 14L5 21m2-5 10-9"/>
      <path d="m10 12 1-5m2 2 2-4m-2 9 5-1M3 22h11"/>
      <path d="M9 15c2-5 5-8 10-10-1 5-4 8-10 10Z" fill="currentColor" opacity=".12" stroke="none"/>
    </>,
    about:<>
      <ellipse cx="12" cy="12" rx="8" ry="10"/>
      <ellipse cx="12" cy="12" rx="6.2" ry="8.2" opacity=".45"/>
      <path d="M9 17c1-1 2-1 3-2v-2c-1-.5-2-2-2-4a3 3 0 0 1 6 0l1 2-1 1h-1v2l-2 1v1l3 2"/>
      <path d="M8 19c1-3 3-3 4-4 1 1 4 1 5 4" fill="currentColor" opacity=".15" stroke="none"/>
    </>,
    awards:<><path d="M7 3h10v5a5 5 0 0 1-10 0ZM7 5H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4M12 13v6m-5 2h10"/></>,
    press:<><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 7h5v5H7Zm9 0h1m-1 4h1M7 16h10"/></>,
    arrow:<><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    back:<><path d="M20 12H4m6-6-6 6 6 6"/></>,
    linkedin:<><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="7.5" cy="8" r="1" fill="currentColor" stroke="none"/><path d="M7.5 11v6.5M11.5 17.5V11m0 2.5c0-3 5-3 5 0v4" strokeWidth="1.8"/></>,
    x:<><path d="M4 3h4l12 18h-4L4 3ZM20 3 4 21" strokeWidth="1.5"/></>,
    substack:<><path d="M5 3h14M5 7h14M5 11h14v11l-7-4-7 4Z" strokeWidth="1.6"/></>,
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
function CastleOrnaments({portrait=false}) {
  return <span className={`castle-ornaments${portrait?' portrait-ornaments':''}`} aria-hidden="true">
    {['tl','tr','br','bl'].map(corner=><svg className={`castle-corner castle-${corner}`} key={corner} viewBox="0 0 40 40" fill="none">
      <path d="M4 35V12a8 8 0 0 1 8-8h23M9 30V16a7 7 0 0 1 7-7h14"/>
      <path d="M4 22c8 0 9-8 18-18M9 22c7 0 8-6 13-13"/>
      <path className="corner-jewel" d="m10 10 4-4 4 4-4 4Z"/>
      <circle cx="4" cy="35" r="1.5"/><circle cx="35" cy="4" r="1.5"/>
    </svg>)}
    {!portrait&&<span className="castle-crest">✧</span>}
  </span>;
}
function PageTitle({eyebrow='Portfolio',title,children}) {
  return <header className="page-heading"><h1>{title}</h1></header>;
}
function Contact() {
  const links = [
    {label:'LinkedIn',icon:'linkedin',href:profile.socials[0].href},
    {label:'X',icon:'x',href:profile.socials[2].href},
    {label:'Email',icon:'mail',href:`mailto:${profile.email}`},
    {label:'Substack',icon:'substack',href:'https://valenandia.substack.com/?r=2l6vdl'},
  ];
  return <div className="contact-strip"><p>For collaboration, work or other projects — feel free to connect! Ty!</p><nav className="social-links" aria-label="Contact and social links">{links.map(link=><a key={link.label} className="social-icon-link" href={link.href} aria-label={link.label} target={link.icon==='mail'?undefined:'_blank'} rel={link.icon==='mail'?undefined:'noopener noreferrer'}><Icon name={link.icon} size={21}/><span className="social-tooltip" aria-hidden="true">{link.label}</span></a>)}</nav></div>;
}

function Home() {
 return <><section className="home-hero"><div className="portrait-wrap"><div className="photo-placeholder has-portrait"><img className="home-portrait" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Main_photo.jpg" alt="Valentina Godovets" fetchPriority="high"/><CastleOrnaments portrait/></div></div><div className="home-copy"><div className="bio original-about-copy">{React.Children.toArray(navModals.find(m=>m.id==='about').body.props.children).slice(0,3)}</div></div></section><section className="home-cv" aria-label="CV and detailed portfolio"><p className="cv-intro">You can check my CV here.</p><a className="cv-button" href="#/cv"><Icon name="cv" size={21}/> View CV</a><p className="portfolio-request">Detailed portfolio on Notion available upon request.</p></section><Contact/></>;
}
function CaseGrid(){return <><PageTitle eyebrow="Selected work" title="Featured Case Studies">Frameworks, mechanics, and spaces — a closer look at my design work.</PageTitle><div className="card-grid case-grid">{cases.map((c,i)=><a className="case-card" key={c.id} href={`#/case-studies/${c.id}`}><div className={`case-cover castle-frame ${c.color}`}><CastleOrnaments/><span className="cover-index">CASE / {String(i+1).padStart(2,'0')}</span><img className="framework-placeholder" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png" alt="" loading="lazy"/><span className="cover-arrow"><Icon name="arrow" size={18}/></span></div><div className="card-copy"><span className="eyebrow">{c.category}</span><h2>{c.title}</h2><p>{c.subtitle}</p></div></a>)}</div></>}
function CasePage({item}){return <article className="case-page"><a className="back-link" href="#/case-studies"><Icon name="back" size={16}/> Featured Case Studies</a><PageTitle title={`${item.title}: ${item.subtitle}`}/><div className={`case-banner castle-frame ${item.color}`}><CastleOrnaments/><img className="framework-placeholder" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking...%20(1).png" alt=""/></div><div className="pending-content"><p>Under construction</p></div><nav className="case-pagination" aria-label="Other case studies">{cases.indexOf(item)>0?<a className="text-link" href={`#/case-studies/${cases[cases.indexOf(item)-1].id}`}><Icon name="back" size={16}/> Previous case</a>:<span/>}{cases.indexOf(item)<cases.length-1&&<a className="text-link" href={`#/case-studies/${cases[cases.indexOf(item)+1].id}`}>Next case <Icon name="arrow" size={16}/></a>}</nav></article>}
function ProjectGrid({items,base}){return <div className="card-grid">{items.map(item=><a className="project-card" key={item.id} href={`#/${base}/${item.id}`}><div className="project-cover castle-frame"><CastleOrnaments/><img src={item.image} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none';}}/><span className="project-cover-fallback">{item.modalTitle}</span><span className="cover-arrow"><Icon name="arrow" size={18}/></span></div><div className="card-copy"><span className="eyebrow">{item.tag}</span><h2>{item.modalTitle}</h2>{item.status&&<p>{item.status}</p>}</div></a>)}</div>}
function ProjectPage({item,base}){return <article><a className="back-link" href={`#/${base}`}><Icon name="back" size={16}/>{base==='projects'?'Projects':'Research & Creative Work'}</a><PageTitle eyebrow={item.tag} title={item.modalTitle}>{item.status}</PageTitle>{item.body?<div className="pending-content">{item.body}</div>:<><div className="project-hero castle-frame"><CastleOrnaments/><img src={item.projectImage||item.image} alt={item.modalTitle}/></div><p className="project-description">{item.description}</p><div className="project-actions">{[{label:item.action,href:item.href},{label:item.secondaryAction,href:item.secondaryHref},...(item.extraActions||[])].filter(a=>a.href&&a.href!=='#').map(a=><a className="text-link" key={a.label} href={a.href} target="_blank" rel="noreferrer">{a.label} <Icon name="external" size={14}/></a>)}</div>{item.meta&&<dl className="project-meta">{item.meta.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}{item.contributions&&<section className="contributions"><h2>My contributions</h2><ul>{item.contributions.map(c=><li key={c}>{c}</li>)}</ul></section>}{item.awardImage&&<div className="project-award castle-frame"><CastleOrnaments/><img src={item.awardImage} alt={item.awardLabel}/></div>}</>}</article>}
function Article({title,text,image}){return <article className="article-card"><div className="article-image castle-frame"><CastleOrnaments/><img src={image} alt="" loading="lazy"/></div><div><span className="eyebrow">Article</span><h3>{title}</h3><p>{text}</p></div></article>}
function Explorations({tab}){const selected=['research','articles','game-jams','modding'].includes(tab)?tab:'research';return <><PageTitle eyebrow="Beyond the frameworks" title="Research & Creative Work"/><nav className="tabs" aria-label="Research sections">{[['research','Research'],['articles','Articles'],['game-jams','Game Jams'],['modding','Modding']].map(([id,label])=><a key={id} className={selected===id?'selected':''} href={`#/explorations/${id}`} aria-current={selected===id?'page':undefined}>{label}</a>)}</nav>{selected==='modding'?<div className="pending-content"><p>Under construction</p></div>:selected==='research'?<ProjectGrid items={windows.find(w=>w.id==='links').items} base="research"/>:selected==='game-jams'?<ProjectGrid items={windows.find(w=>w.id==='games').items} base="game-jams"/>:navModals.find(m=>m.id==='articles').body}</>}
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
function AboutDivider(){return <div className="about-flourish about-horizontal-divider" aria-hidden="true"><svg viewBox="0 0 320 40" fill="none"><g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M28 20h112m40-3h98l18 3-18 3h-98M46 13v14m-7-7H25m-5 0h-3m31-3h92m-92 6h92"/><path d="M160 22c-9-7-7-15 0-19 7 4 9 12 0 19Zm-2-2c-11-1-18-7-16-13 9-1 15 3 18 12m2 1c11-1 18-7 16-13-9-1-15 3-18 12M158 21c-10-4-18 0-18 6 6 4 14 2 20-5m2-1c10-4 18 0 18 6-6 4-14 2-20-5m0-6v20m0-2c-7 0-10-4-11-8m11 10c6-2 9-6 10-10"/></g></svg></div>}
function CastlePhotoEmblem(){return <svg className="castle-photo-emblem" viewBox="0 0 160 180" fill="none" aria-hidden="true"><g className="emblem-swords" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m35 25 13 6 64 94-8 6-64-94Z M30 20l5 5M94 128l23-16m-7 14 12 17m-4-2 8-5m-3 7 4 6M125 25l-13 6-64 94 8 6 64-94ZM130 20l-5 5M66 128l-23-16m7 14-12 17m4-2-8-5m3 7-4 6"/><path d="m42 32 64 94m12-94-64 94" opacity=".5"/></g><g className="emblem-rose" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M80 93c-10 14 8 27 0 43-3 7-3 13-1 20M80 119c-15-15-29-9-29-9s2 17 27 18m4 8c10-17 27-17 27-17s-2 18-29 24"/><path d="M74 67c-8-6-18-1-17 9-11 7-6 20 4 21 3 13 18 16 27 8 13 4 24-6 21-17 7-10 0-22-12-21-6-11-19-10-23 0Z"/><path d="M74 67c9-4 18 1 19 9m4-9c2 9-4 16-10 17m22 4c-9-4-17-2-21 5m0 12c-7-7-13-11-23-8m-8-21c9 1 15 7 15 15m4-17c-7 4-9 13-3 18 6 6 17 1 17-7 0-7-9-11-14-6-4 4 0 9 4 7"/><path d="m68 104-8 7 13-1m17-4 10 6-4-12"/></g><g stroke="currentColor" strokeWidth="1" opacity=".6"><path d="m80 16 3 8-3 8-3-8ZM23 84l3 5-3 5-3-5Zm114 0 3 5-3 5-3-5Z"/></g></svg>}
function AboutStory(){
 const photo=(label)=><div className="about-photo castle-frame"><CastleOrnaments/><Icon name="photo" size={30}/><span>{label}</span></div>;
 return <div className="about-story">
 <div className="about-story-row"><div className="about-photo castle-frame has-gallery-photo"><img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/photo_2026-10-26_18-26-00.jpg" alt="Valentina Godovets" loading="lazy"/><CastleOrnaments/></div><div>
 <p>I’ve been a <strong>game girl since I was 11</strong>, when my dad introduced me to <em>The Elder Scrolls III: Morrowind</em>. This franchise helped shape me into someone who loves games and is curious about what makes them tick.</p>
 <p>Through the franchise, <strong>I became a modder</strong>. First, I made <strong>cosmetic mods</strong>, then moved on to <strong>gameplay mods</strong>. This experience shaped me as a professional. I’ve created mods for different games and series — basically, wherever I could — to <strong>make the gameplay better or introduce mechanics</strong> that the original games didn’t offer.</p>
 </div></div>
 <div className="about-story-continuation"> <p>Over the years, I also became an MMO player, with <strong>10+ years</strong> spent exploring online worlds. I think I was a pretty good player and <strong>raid leader</strong>, too!</p>
 <p>My online activities eventually led me to participate in <strong>game jams with fellow modders</strong>, where we gained a lot of real-world experience. Through game jams, I found indie teams and worked with them to <strong>bring our games to completion</strong>.</p>
 <p>And that’s how I became a proud member of the gaming community! I love bringing all of this experience into my work.</p>
</div>
 <AboutDivider/><div className="about-work-copy">
 <p>I’m passionate about what I do, and I hope that comes across!</p>
 <p>My key strengths are being <strong>detail-oriented, thoughtful, and always eager to dig deep into the core of a feature</strong>. I love <strong>finding solutions</strong> — or, even better, <strong>creating them</strong> — to help make games that players genuinely enjoy.</p>
 <p>My favorite things to work on in games are:</p>
 <ul><li><strong>System design</strong></li><li><strong>Behavioral patterns</strong></li><li><strong>Magic and spell systems</strong></li></ul>
 <p>But! I’m happy to work on all kinds of systems and features, and I’m familiar with the <strong>full game production cycle</strong>.</p>
 </div>
 <AboutDivider/><div className="about-hobbies">
 <p>Outside of work, I really enjoy <strong>reading</strong>. You can check out my StoryGraph profile <a href="https://app.thestorygraph.com/profile/valenandia" target="_blank" rel="noopener noreferrer">here</a>.</p>
 <p>I also love putting together outfits from my own wardrobe. <strong>Fashion is my passion!</strong> I really enjoy organizing my clothes and hunting for cool vintage finds.</p>
 <p>And, of course, <strong>playing games!</strong> I keep a <a href="https://www.backloggery.com/valenandia" target="_blank" rel="noopener noreferrer">Backloggery</a> to track all the games I want to play, including titles that aren’t available digitally. And here’s my <a href="https://steamcommunity.com/id/valenandia/" target="_blank" rel="noopener noreferrer">Steam profile</a>!</p>
 </div><div className="about-photo-gallery">{['photo_2026-10-26_18-16-08 (3).jpg','photo_2026-10-26_18-16-08 (2).jpg','photo_2026-10-26_18-16-08.jpg'].map((name,i)=><div className="about-photo castle-frame has-gallery-photo" key={name}><img src={`https://raw.githubusercontent.com/valenandia/valen.github.io/main/${encodeURIComponent(name)}`} alt={`Valentina Godovets — personal photo ${i+1}`} loading="lazy"/><CastleOrnaments/></div>)}</div>
 <p className="about-bye">Bye!</p></div>;
}
function Education(){
 const entries=[
 {date:'Aug 2024 – Oct 2024',school:'Code Coven: Computer Games and Programming Skills',degree:'Additional education',note:'',text:'Participated in the Code Coven Sparks Accelerator, where I worked with Build a Rocket Boy to improve my game design skills, develop new game concepts, and gain industry insights.',skills:['Game Design','Everywhere']},
 {date:'Sep 2018 – Jun 2020',school:'Higher School of Economics: Digital Economy',degree:'Master’s degree',note:'',text:'Graduated from HSE University with a master’s degree in Digital Economy. The dissertation is dedicated to identifying promising digital technologies of economic agents using the example of blockchain.',skills:['Digital Economy','Statistics']},
 {date:'Sep 2017',school:'Wargaming: Game Design: Beyond the Game',degree:'Course',note:'',text:'Educational course focusing on the fundamentals of video game development and design.',skills:[]},
 {date:'2012 – 2016',school:'Art School',degree:'Art education',note:'',text:'Studied drawing and graphic arts.',skills:[]}
 ];
 const badges=React.Children.toArray(navModals.find(m=>m.id==='about').body.props.children).find(c=>c.props?.className==='community-grid');
 return <div className="education-page"><ol className="education-timeline">{entries.map(entry=><li className="education-milestone" key={entry.school}><span className="education-marker" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 21V7h4V3h3v4h2V3h3v4h4v14ZM4 11h16M9 21v-5a3 3 0 0 1 6 0v5M7 13v2m10-2v2"/></svg></span><article><p className="education-date">{entry.date}</p><h2>{entry.school}</h2><p className="education-degree">{entry.degree}</p>{entry.text&&<p className="education-description">{entry.text}</p>}</article></li>)}</ol><section className="education-community"><AboutDivider/><h2>Part of the Community</h2><div className="community-grid">{React.Children.map(badges?.props.children,card=>React.isValidElement(card)?<div className="community-card castle-frame">{card.props.children}<CastleOrnaments/></div>:null)}</div></section></div>;
}
function Recognition(){
 const groups=[{year:'2026',items:[]},{year:'2025',items:[]},{year:'2024',items:[]}];let year='2025';
 React.Children.toArray(navModals.find(m=>m.id==='press').body.props.children).forEach(child=>{if(child.type==='h3')year=String(child.props.children);else if(child.type==='article')groups.find(g=>g.year===year)?.items.push(child)});
 const awards=[{title:'Start a Game!',project:'Gerasim vs Besi',detail:'Finalist · Regions and Languages of Russia'},{title:'SINEUS',project:'Gerasim vs Besi',detail:'Finalist · Mythology in Art'},{title:'Astrum Entertainment',project:'Paws and Cards',detail:'Conceptualization Basics: 2nd'}];
 return <div className="recognition-timeline-page">{groups.map(group=><section key={group.year} className="recognition-year"><h2 className="recognition-year-heading">{group.year}</h2><ol className="education-timeline">{group.items.length?group.items.map((item,i)=><li className="education-milestone recognition-milestone" key={i}><span className="education-marker" aria-hidden="true"><Icon name={group.year==='2024'?'awards':'projects'} size={22}/></span><div><span className="recognition-kind">{group.year==='2024'?'Award & Press':React.Children.toArray(item.props.children).some(child=>child.type==='strong'&&String(child.props.children).includes('Women in Games Ambassador'))?'Ambassadorship':'Press'}</span>{item}{group.year==='2024'&&awards[i]&&<p className="recognition-award-detail">{awards[i].detail}</p>}</div></li>):<li className="education-milestone recognition-milestone"><span className="education-marker" aria-hidden="true"><Icon name="projects" size={22}/></span><p className="recognition-pending">Under construction</p></li>}</ol></section>)}</div>;
}
function About({tab}){
 const selected=['awards','press'].includes(tab)?'recognition':['about','education','recognition'].includes(tab)?tab:'about';
 return <><PageTitle title="About"/><nav className="tabs" aria-label="About sections">{[['about','About'],['education','Education'],['recognition','Recognition']].map(([id,label])=><a key={id} className={selected===id?'selected':''} href={`#/about/${id}`} aria-current={selected===id?'page':undefined}>{label}</a>)}</nav>{selected==='education'?<Education/>:selected==='recognition'?<Recognition/>:<AboutStory/>}</>;
}
function CursorSparkles(){
 const layer=useRef(null);
 useEffect(()=>{
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let previous=0,lastX=null,lastY=null;
  const emit=(x,y,burst=false)=>{
   if(motion.matches||!layer.current)return;
   if(layer.current.childElementCount>=32)layer.current.firstChild.remove();
   const night=document.documentElement.dataset.theme==='night';
   const star=document.createElement('span');star.className='cursor-sparkle';star.textContent='✦';
   star.style.left=`${x+(Math.random()-.5)*12}px`;star.style.top=`${y+(Math.random()-.5)*12}px`;
   star.style.fontSize=`${(burst?9:7)+Math.random()*6}px`;
   star.style.color=Math.random()>.5?(night?'#dfc6fa':'#aa83c4'):(night?'#e1e7f5':'#a9b1c2');
   star.style.setProperty('--spark-x',`${(Math.random()-.5)*(burst?85:26)}px`);
   star.style.setProperty('--spark-y',`${burst?(Math.random()-.5)*75:18}px`);
   star.style.setProperty('--spark-turn',`${(Math.random()-.5)*140}deg`);
   star.addEventListener('animationend',()=>star.remove(),{once:true});layer.current.appendChild(star);
  };
  const move=e=>{
   if(e.pointerType!=='mouse')return;
   const now=performance.now();if(now-previous<48||(lastX!==null&&Math.hypot(e.clientX-lastX,e.clientY-lastY)<9))return;
   previous=now;lastX=e.clientX;lastY=e.clientY;emit(e.clientX,e.clientY);
  };
  const touch=e=>{if(e.pointerType==='touch'||e.pointerType==='pen'){for(let i=0;i<7;i++)emit(e.clientX,e.clientY,true)}};
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerdown',touch,{passive:true});
  const container=layer.current;return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',touch);container?.replaceChildren()};
 },[]);
 return <div className="cursor-sparkles" ref={layer} aria-hidden="true"/>;
}
function currentRoute(){return window.location.hash.replace(/^#\/?/,'').split('/').filter(Boolean)}
export default function App(){
 const [route,setRoute]=useState(currentRoute);
 useEffect(()=>{
  let favicon=document.querySelector('link[rel="icon"]');
  if(!favicon){favicon=document.createElement('link');favicon.rel='icon';document.head.appendChild(favicon)}
  favicon.type='image/png';favicon.href='https://raw.githubusercontent.com/valenandia/valen.github.io/main/Frame%2045.png';
 },[]);
 const [theme,setTheme]=useState(()=>{try{const saved=localStorage.getItem('portfolio-theme');if(saved==='night'||saved==='day')return saved}catch{}return window.matchMedia('(prefers-color-scheme: dark)').matches?'night':'day'});
 useEffect(()=>{
  const system=window.matchMedia('(prefers-color-scheme: dark)');
  const sync=e=>setTheme(e.matches?'night':'day');
  system.addEventListener('change',sync);return()=>system.removeEventListener('change',sync);
 },[]);
 useEffect(()=>{
  const root=document.documentElement;root.dataset.theme=theme;root.style.colorScheme=theme==='night'?'dark':'light';
  try{localStorage.setItem('portfolio-theme',theme)}catch{}
  let meta=document.querySelector('meta[name="theme-color"]');if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta)}meta.content=theme==='night'?'#191620':'#ffffff';
  let scheme=document.querySelector('meta[name="color-scheme"]');if(!scheme){scheme=document.createElement('meta');scheme.name='color-scheme';document.head.appendChild(scheme)}scheme.content=theme==='night'?'dark':'light';
 },[theme]);
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
 else if(page==='cv')content=<><PageTitle title="CV"/>{navModals.find(m=>m.id==='resume').body}</>;
 else if(page==='about')content=<About tab={detail}/>;
 else if(page==='awards')content=<About tab="awards"/>;
 else if(page==='press')content=<About tab="press"/>;
 else content=<><PageTitle title="Page not found"/><a className="text-link" href="#/">Return home <Icon name="arrow"/></a></>;
 return <><style>{newStyles}</style><CursorSparkles/><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();mainRef.current?.focus()}}>Skip to content</a><div className="site-frame" data-theme={theme}><header className="site-header"><a href="#/" className="wordmark" aria-label="Valentina Godovets — Home"><img className="brand-image" src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Valentina%20Godovets.png" alt="Valentina Godovets"/><span className="brand-subtitle">{profile.subtitle}</span></a></header><div className="site-layout"><aside className="sidebar"><nav aria-label="Main navigation"><div className="main-nav">{navigation.map(n=><a href={`#/${n.id}`} key={n.id} className={`nav-link ${active===n.id?'active':''}`} aria-label={n.label} aria-current={active===n.id?'page':undefined}><span className="nav-icon"><span className="nav-glyph"><Icon name={n.icon}/></span></span><span className="nav-tooltip" role="tooltip">{n.label}</span></a>)}</div></nav><div className="sidebar-theme"><button className="theme-toggle" type="button" onClick={()=>setTheme(t=>t==='day'?'night':'day')} aria-label={theme==='day'?'Switch to night mode':'Switch to day mode'} aria-pressed={theme==='night'}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">{theme==='day'?<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/>:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>}</svg></button></div></aside><main id="main-content" ref={mainRef} tabIndex={-1} className={`main-content page-${page}`} key={page+'/'+(detail||'')}>{content}</main></div><footer className="site-footer"><span>© {new Date().getFullYear()} Valentina Godovets</span></footer></div></>;
}
const newStyles=`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700&display=swap');
:root{font-family:"Lora", Georgia, serif;color:#322c3b;background:#fff;font-synthesis:none;--ink:#322c3b;--muted:#78717f;--purple:#736081;--line:#ded8e2;--paper:#fff}*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}a,button{-webkit-tap-highlight-color:transparent}a:focus-visible,button:focus-visible{outline:2px solid #806a95;outline-offset:5px}svg{flex-shrink:0}img{display:block;max-width:100%}h1,h2,h3,p{margin:0}button{cursor:pointer}.site-frame{max-width:1600px;margin:auto;padding:0 48px}.site-header{height:145px;display:flex;align-items:center;justify-content:space-between;border:0;gap:25px}.wordmark{font-family:"Cinzel", Georgia, serif;font-size:clamp(27px,3.1vw,46px);letter-spacing:.025em;display:flex;align-items:center;gap:21px;white-space:nowrap}.wordmark-star{font-family:"Lora", Georgia, serif;font-size:30px;color:#95829e;transition:transform .6s}.wordmark:hover .wordmark-star{transform:rotate(90deg)}.header-note{font-size:10px;letter-spacing:.17em;color:var(--muted);white-space:nowrap}.site-layout{display:grid;grid-template-columns:244px minmax(0,1fr);gap:54px;min-height:calc(100vh - 207px)}.sidebar{border:0;padding:48px 28px 40px 0;display:flex;flex-direction:column;align-self:start;position:sticky;top:0;min-height:640px}.main-nav,.secondary-nav{display:flex;flex-direction:column;gap:13px}.nav-link{display:grid;grid-template-columns:40px 1fr 10px;align-items:center;gap:12px;font-size:12px;font-weight:500;line-height:1.5;color:#6c6473;transition:color .2s}.nav-icon{height:40px;width:40px;border:1px solid #d5ccd9;display:flex;align-items:center;justify-content:center;border-radius:9px;transition:background .2s,border-color .2s}.nav-marker{opacity:0;font-size:14px}.nav-link:hover,.nav-link.active{color:#493451}.nav-link:hover .nav-icon{background:#ece5f0;border-color:#ac97b7}.nav-link.active .nav-icon{background:#e6dce9;border-color:#ad96b7}.nav-link.active .nav-marker{opacity:1}.secondary-nav{border:0;margin-top:29px;padding-top:27px;gap:10px}.secondary-nav .nav-icon{height:33px;width:40px;border-color:transparent}.sidebar-home{font-size:11px;display:flex;align-items:center;gap:9px;margin:30px 0 0 13px;color:var(--muted)}.sidebar-home:hover{color:var(--purple)}.sidebar-signature{font-size:10px;line-height:1.8;color:#9c94a1;margin-top:48px;margin-left:13px}.main-content{padding:48px 0 70px;min-width:0;outline:none;animation:appear .28s ease}.home-hero{display:grid;grid-template-columns:minmax(210px,.92fr) minmax(260px,1.08fr);gap:clamp(30px,4.3vw,68px);align-items:center;padding:16px 0 55px;min-height:535px}.photo-placeholder{aspect-ratio:4/5;background:#e9e1ed;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid #ddd0e2;border-radius:110px 110px 3px 3px;color:#9a86a3}.photo-placeholder:before,.photo-placeholder:after{content:'';position:absolute;border:1px solid #d9cadd;border-radius:50%;width:175%;height:110%;top:42%;left:-35%;transform:rotate(-25deg)}.photo-placeholder:after{top:51%;left:-5%;transform:rotate(25deg)}.portrait-center{display:flex;flex-direction:column;gap:15px;align-items:center;position:relative;z-index:1;color:#887291}.portrait-center span{font-size:11px;letter-spacing:.04em}.portrait-caption{position:absolute;bottom:22px;font-size:8px;letter-spacing:.18em;color:#887291;z-index:1}.portrait-note{display:block;font-family:"Lora", Georgia, serif;font-style:italic;font-size:11px;line-height:1.6;margin-top:14px;color:#9b8fa1;text-align:center}.portrait-corner{display:none}.eyebrow{text-transform:uppercase;letter-spacing:.13em;font-size:9px;line-height:1.7;font-weight:600;color:#8a7696}.home-copy h1{font-family:"Cinzel", Georgia, serif;font-size:clamp(38px,3.9vw,57px);font-weight:400;letter-spacing:-.04em;line-height:1.15;margin:16px 0 22px}.title-dot{color:#9d80ac}.lead{font-size:18px;line-height:1.55;letter-spacing:-.025em;margin-bottom:22px}.bio{max-width:400px;color:#78717f;font-size:12px;line-height:1.95}.bio p+p{margin-top:13px}.text-link{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;line-height:1.5;border-bottom:1px solid #b5a1bf;padding-bottom:7px;color:#60466e}.text-link:hover{color:#34203f;border-color:#34203f}.hero-cta{margin-top:26px}.contact-strip{border:0;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:26px 0;margin-top:12px}.contact-strip>div:first-child{display:flex;align-items:center;gap:16px}.small-star{font-size:26px;color:#a98fb5}.contact-strip p{font-family:"Cinzel", Georgia, serif;font-size:23px}.social-links{display:flex;gap:27px}.social-links a{display:flex;gap:8px;align-items:center;font-size:10px;white-space:nowrap;color:#6b5d74}.social-links a:hover{color:#35203f}.site-footer{border:0;padding:22px 0;display:flex;justify-content:space-between;align-items:center;gap:15px;font-size:9px;color:#918797;letter-spacing:.025em}.site-footer a{color:#6c5b77}.page-heading{margin:2px 0 35px;max-width:800px}.page-heading h1{font-family:"Cinzel", Georgia, serif;font-weight:400;font-size:clamp(35px,3.4vw,49px);line-height:1.15;letter-spacing:-.025em;margin-top:13px}.page-intro{font-size:12px;color:var(--muted);line-height:1.8;margin-top:15px;max-width:540px}.card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px 22px}.case-card,.project-card{min-width:0;display:block}.case-cover{aspect-ratio:1.6;position:relative;overflow:hidden;border-radius:3px;transition:transform .25s,box-shadow .25s}.mauve{background:#e5dce9;color:#83668d}.sage{background:#e0e7df;color:#71856a}.rose{background:#efdddd;color:#ae777d}.lavender{background:#e2def0;color:#8b77a4}.sand{background:#ece4d8;color:#ab9474}.slate{background:#e0e4e9;color:#778597}.mint{background:#dce8e4;color:#6f9989}.case-art{height:100%;width:100%;display:block}.cover-index{position:absolute;top:15px;left:16px;font-size:8px;font-weight:500;letter-spacing:.12em;z-index:1}.cover-arrow{position:absolute;bottom:12px;right:14px;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;border:1px solid currentColor;opacity:.6;transition:transform .2s}.case-card:hover .case-cover,.project-card:hover .project-cover{transform:translateY(-3px);box-shadow:0 8px 20px #58416012}.case-card:hover .cover-arrow,.project-card:hover .cover-arrow{transform:rotate(-35deg);opacity:1}.card-copy{padding:17px 1px 0}.card-copy .eyebrow{font-size:8px;letter-spacing:.1em}.card-copy h2{font-size:14px;line-height:1.55;font-weight:550;letter-spacing:-.015em;margin-top:7px}.card-copy p{font-size:11px;line-height:1.7;color:#8c8193;margin-top:6px}.back-link{display:inline-flex;align-items:center;gap:9px;color:#8a7b94;font-size:10px;margin-bottom:30px}.back-link:hover{color:#493451}.case-banner{height:250px;border-radius:3px}.case-banner .case-art{width:min(100%,480px);margin:auto}.case-page .page-heading h1{max-width:800px}.pending-content{border:0;padding:35px 0;margin-top:35px;color:var(--muted);font-size:14px}.pending-content p{margin-top:10px}.case-pagination{display:flex;justify-content:space-between;gap:30px;margin-top:45px}.project-cover{aspect-ratio:1.45;background:#e8e1eb;position:relative;border-radius:3px;overflow:hidden;transition:transform .2s,box-shadow .2s;color:#6d5878}.project-cover img{position:relative;width:100%;height:100%;object-fit:cover;z-index:1}.project-cover-fallback{position:absolute;inset:0;display:grid;place-items:center;padding:25px;font-family:"Cinzel", Georgia, serif;font-size:25px;text-align:center}.project-cover .cover-arrow{z-index:2;background:#faf7fc;border-color:#d2c7d8;opacity:1;bottom:10px;right:10px}.project-hero{max-height:420px;overflow:hidden;background:#ebe5ee}.project-hero img{width:100%;height:100%;max-height:420px;object-fit:contain}.project-description{font-size:15px;line-height:1.9;margin:30px 0 24px;max-width:740px;color:#6e6376}.project-actions{display:flex;gap:25px;flex-wrap:wrap;margin:20px 0 35px}.project-meta{border:0;margin:30px 0}.project-meta>div{display:grid;grid-template-columns:130px 1fr;gap:20px;border:0;padding:15px 0;font-size:12px;line-height:1.7}.project-meta dt{color:var(--muted)}.project-meta dd{margin:0}.contributions h2{font-family:"Cinzel", Georgia, serif;font-size:30px;font-weight:400}.contributions ul{padding-left:18px;color:#776a80;font-size:13px;line-height:1.85}.contributions li{margin:12px 0}.project-award{margin-top:30px}.project-award img{max-height:260px;object-fit:contain}.tabs{display:flex;gap:30px;border:0;margin-bottom:32px}.tabs a{font-size:12px;color:var(--muted);padding:0 0 13px;position:relative}.tabs a.selected{color:#513a60}.tabs a.selected:after{content:'';position:absolute;height:2px;background:#8a7099;bottom:-1px;left:0;right:0}.articles-list{display:flex;flex-direction:column;gap:30px}.article-card{display:grid;grid-template-columns:180px 1fr;gap:26px;padding-bottom:30px;border:0}.article-image{aspect-ratio:1.4;background:#e8e2eb;overflow:hidden;border-radius:3px}.article-image img{height:100%;width:100%;object-fit:cover}.article-card h3{font-size:16px;font-weight:500;line-height:1.5;margin:5px 0 12px}.article-card p{font-size:12px;line-height:1.9;color:var(--muted)}.empty-section{min-height:350px}.recognition-list{border:0}.recognition-row{display:grid;grid-template-columns:60px 1fr 30px;gap:20px;align-items:center;border:0;padding:30px 0}.year{font-size:11px;color:#8e7c98}.recognition-row h2{font-size:19px;font-weight:500}.recognition-row p{font-size:13px;margin-top:8px}.recognition-detail{display:block;font-size:11px;color:#8a7c93;margin-top:8px;line-height:1.7}.recognition-row svg{color:#9f8aa9}.press-list>h3{font-family:"Cinzel", Georgia, serif;font-size:27px;font-weight:400;margin:30px 0 16px;color:#927e9d}.press-list>h3:first-child{margin-top:0}.press-card{padding:20px 0;border:0;display:flex;flex-direction:column;align-items:flex-start;gap:10px}.press-year{font-size:10px;color:#8a7c93}.press-card strong{font-size:15px;font-weight:500;line-height:1.7}.press-card p{font-size:12px;color:var(--muted)}.press-link{font-size:10px;border-bottom:1px solid #bfacc9;padding-bottom:5px;color:#70547e}.skip-link{position:fixed;top:-60px;left:20px;background:#fff;padding:10px;z-index:50;font-size:13px}.skip-link:focus{top:10px}.under-construction{font-size:14px;color:#8b7d94}@keyframes appear{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
@media(min-width:1450px){.home-hero{padding-top:35px;min-height:630px}.home-copy h1{font-size:64px}.bio{font-size:14px}.lead{font-size:22px}.home-hero .portrait-wrap{max-width:380px}.site-layout{gap:75px;grid-template-columns:255px minmax(0,1fr)}}
@media(max-width:1100px){.site-frame{padding:0 30px}.site-layout{grid-template-columns:200px minmax(0,1fr);gap:30px}.sidebar{padding-right:20px}.nav-link{font-size:11px;gap:9px;grid-template-columns:35px 1fr 8px}.nav-icon{width:35px;height:35px}.secondary-nav .nav-icon{width:35px}.home-hero{gap:30px;grid-template-columns:.85fr 1.15fr;min-height:485px}.home-copy h1{font-size:39px}.lead{font-size:16px}.bio{font-size:11px}.card-grid{gap:26px 16px}.card-copy h2{font-size:12px}.contact-strip{flex-wrap:wrap}.contact-strip p{font-size:22px}.cover-index{font-size:7px;left:10px;top:10px}}
@media(max-width:800px){.site-frame{padding:0 20px}.site-header{height:110px}.wordmark{font-size:30px;gap:12px}.wordmark-star{font-size:23px}.header-note{display:none}.site-layout{grid-template-columns:65px minmax(0,1fr);gap:24px}.sidebar{padding:30px 16px 30px 0;min-height:520px}.nav-link{display:flex;justify-content:center;position:relative}.nav-link>span:not(.nav-icon){display:none}.nav-icon{width:41px;height:41px;border-radius:8px}.nav-link:hover:after{content:attr(aria-label);position:absolute;left:50px;background:#fff;padding:8px;font-size:12px;z-index:5}.secondary-nav .nav-icon{width:41px;height:34px}.sidebar-home{margin:28px 0 0;justify-content:center;font-size:0;gap:0}.sidebar-home svg{width:19px;height:19px}.sidebar-signature{display:none}.main-content{padding-top:30px}.home-hero{display:flex;flex-direction:column;align-items:stretch;padding-top:0;gap:32px}.portrait-wrap{max-width:330px;width:90%;align-self:center}.home-copy{max-width:500px}.home-copy h1{font-size:46px}.bio{font-size:13px;max-width:none}.lead{font-size:20px}.card-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 18px}.card-copy h2{font-size:14px}.contact-strip{gap:20px}.social-links{gap:22px}.site-footer>span:nth-child(2){display:none}.article-card{grid-template-columns:1fr}.article-image{max-width:340px}.page-heading h1{font-size:36px}.project-meta>div{grid-template-columns:100px 1fr}.tabs{gap:20px}.tabs a{font-size:11px}}
@media(max-width:480px){.site-frame{padding:0 14px}.site-header{height:90px}.wordmark{font-size:25px;gap:10px}.wordmark-star{font-size:19px}.site-layout{grid-template-columns:45px minmax(0,1fr);gap:16px}.sidebar{padding-right:9px}.nav-icon,.secondary-nav .nav-icon{width:32px;height:34px;border-radius:6px}.nav-icon svg{width:18px;height:18px}.nav-link{justify-content:flex-start}.sidebar-home{justify-content:flex-start;padding-left:9px}.card-grid{grid-template-columns:1fr}.case-cover{aspect-ratio:1.8}.card-copy h2{font-size:15px}.portrait-wrap{width:100%}.portrait-note{font-size:10px}.home-copy h1{font-size:37px}.lead{font-size:18px}.bio{font-size:12px}.eyebrow{font-size:8px}.contact-strip>div:first-child{gap:9px}.contact-strip p{font-size:20px}.social-links{gap:20px}.social-links a{font-size:9px;gap:5px}.page-heading h1{font-size:32px}.case-banner{height:190px}.case-pagination .text-link{font-size:9px;gap:7px}.recognition-row{grid-template-columns:38px 1fr;gap:12px}.recognition-row svg{display:none}.recognition-row h2{font-size:17px}.project-meta>div{grid-template-columns:1fr;gap:6px}.tabs{gap:17px}.tabs a{font-size:10px}.site-footer{font-size:8px}.desktop-break{display:none}.main-content{padding-bottom:40px}.article-card h3{font-size:15px}.article-card p{font-size:12px}}
/* White portfolio shell and compact icon navigation. */
:root{color-scheme:light;background:#fff}body,.site-frame{background:#fff!important;color:#322c3b}
.site-header{height:170px;justify-content:center;text-align:center;padding:30px 0;gap:0}
.wordmark{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:14px;white-space:normal}
.brand-image{width:min(644px,87vw);height:auto;filter:brightness(0);max-height:120px;object-fit:contain}
.brand-subtitle{font-family:"Lora", Georgia, serif;font-size:11px;letter-spacing:.16em;line-height:1.5;color:#78717f;font-weight:400}
.site-layout{grid-template-columns:64px minmax(0,1fr);gap:54px;min-height:calc(100vh - 235px)}
.sidebar{padding:48px 0 30px;min-height:0;z-index:10}
.main-nav{gap:18px}.nav-link{display:flex;position:relative;width:44px;justify-content:center;gap:0}
.nav-icon{width:44px;height:44px;border-radius:9px}
.nav-link .nav-tooltip{display:block!important;position:absolute;left:calc(100% + 13px);top:50%;transform:translateY(-50%);background:#fff;color:#493451;box-shadow:0 4px 24px #322c3b16;padding:10px 14px;border-radius:5px;white-space:nowrap;opacity:0;visibility:hidden;pointer-events:none;font-size:12px;line-height:1.5;z-index:20;transition:opacity .15s}
.nav-link:hover .nav-tooltip,.nav-link:focus-visible .nav-tooltip{opacity:1;visibility:visible}
.nav-link:hover:after{content:none}.nav-link.active .nav-icon{background:#ece5f0}
.contact-strip{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:19px;margin-top:10px;padding:30px 0}
.contact-strip p{font-family:"Cinzel", Georgia, serif;font-size:28px;font-weight:400}
.social-links{justify-content:center;gap:30px}.social-links a{font-size:11px}
.site-footer{justify-content:center;text-align:center}.text-link,.press-link{border:0}.tabs a.selected:after{display:none}.tabs a.selected{font-weight:600}
.about-empty-section{min-height:120px}.about-section{margin-top:30px;margin-bottom:60px}.about-section-title{font-family:"Cinzel", Georgia, serif;font-size:36px;font-weight:400;line-height:1.3;margin-bottom:24px}.about-section .recognition-row{padding:22px 0}.about-section .press-list>h3{font-size:24px}
@media(min-width:1450px){.site-layout{grid-template-columns:64px minmax(0,1fr);gap:75px}.home-hero{grid-template-columns:minmax(280px,.92fr) minmax(300px,1.08fr)}}
@media(max-width:1100px){.site-layout{grid-template-columns:54px minmax(0,1fr);gap:35px}.nav-link,.nav-icon{width:42px;height:42px}.sidebar{padding-right:0}}
@media(max-width:800px){.site-header{height:145px}.brand-image{width:min(575px,90vw)}.brand-subtitle{font-size:9px}.site-layout{grid-template-columns:45px minmax(0,1fr);gap:24px}.sidebar{padding-top:30px;padding-right:0;min-height:0}.nav-link,.nav-icon{width:40px;height:40px}.nav-link>span.nav-tooltip{display:block!important}.home-hero{max-width:570px;margin:auto}.contact-strip{width:100%}.about-section-title{font-size:32px}}
@media(max-width:480px){.site-header{height:125px;padding:25px 0}.brand-image{width:100%;max-width:100%}.brand-subtitle{font-size:8px;letter-spacing:.1em}.site-layout{grid-template-columns:36px minmax(0,1fr);gap:16px}.nav-link,.nav-icon{width:34px;height:36px}.main-nav{gap:15px}.nav-link .nav-tooltip{font-size:11px;max-width:245px;white-space:normal;width:max-content;padding:9px 11px}.contact-strip p{font-size:25px}.social-links{gap:25px}.social-links a{font-size:10px}}

/* Original portfolio typography, violet/pink palette and framework artwork. */
:root{--text-font:"Lora", Georgia, serif;--main-font:"Cinzel", Georgia, serif;--decorative-font:"Cinzel", Georgia, serif;--pink:#ECC8F7;--deep-violet:#171544;--peach:#eec2b5;--ink:#181518}
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
.cover-index{color:#fff;font-family:"Lora", Georgia, serif;text-shadow:0 1px 4px #171544;font-size:10px}.case-cover .cover-arrow{color:#fff;background:#17154466;opacity:1}
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

body, .site-frame { font-family: "Lora", Georgia, serif; }
.original-about-copy, .original-about-copy p:first-child {
  font-family: "Lora", Georgia, serif;
  font-size: 17px;
  line-height: 1.9;
  color: #4c4254;
}
.original-about-copy strong { font-weight: 600; }
h1, h2, h3, .card-copy h2, .contact-strip p {
  font-family: "Cinzel", Georgia, serif;
  font-weight: 600;
}
.brand-subtitle, .eyebrow, .nav-link .nav-tooltip {
  font-family: "Cinzel", Georgia, serif;
}
.social-links a, .text-link, .tabs a, .site-footer {
  font-family: "Lora", Georgia, serif;
}
@media (max-width: 600px) {
  .original-about-copy, .original-about-copy p:first-child { font-size: 16px; line-height: 1.85; }
}
/* Castlecore: pale silver-lilac frames with engraved corners. */
:root { --frame-silver:#c9bbd0; --frame-deep:#897493; --frame-gold:#bba487; --frame-paper:#fdfbfe; }
.page-heading h1 { font-family:"Cinzel",Georgia,serif; font-size:clamp(23px,2.25vw,31px); font-weight:500; letter-spacing:.035em; line-height:1.5; }
.card-copy h2 { font-family:"Cinzel",Georgia,serif; font-size:17px; font-weight:500; line-height:1.6; letter-spacing:.01em; }
.brand-subtitle { font-family:"Lora",Georgia,serif; font-size:11px; letter-spacing:.14em; }
.eyebrow { font-family:"Lora",Georgia,serif; font-size:10px; letter-spacing:.07em; }
.nav-link .nav-tooltip { font-family:"Lora",Georgia,serif; font-size:12px; }
.contact-strip p { font-family:"Cinzel",Georgia,serif; font-size:24px; font-weight:400; letter-spacing:.025em; }
.case-card,.project-card {
  position:relative; display:block; min-width:0; padding:10px;
  background:linear-gradient(145deg,#fff 65%,#f8f4fa);
  border:1px solid var(--frame-silver); border-radius:15px 15px 7px 7px;
  box-shadow:inset 0 0 0 3px #fff,inset 0 0 0 4px #ede6f0,0 5px 17px #5c42660c;
  transition:transform .2s,border-color .2s,box-shadow .2s;
}
.case-card:hover,.project-card:hover { transform:translateY(-4px);border-color:#a58bb4;box-shadow:inset 0 0 0 3px #fff,inset 0 0 0 4px #e8ddee,0 10px 25px #63466f16; }
.case-card:hover .case-cover,.project-card:hover .project-cover { transform:none;box-shadow:none; }
.card-copy { padding:19px 12px 17px; }
.card-copy p { font-size:13px; line-height:1.8; }
.card-copy .eyebrow { font-size:9px; }
.castle-frame { position:relative; isolation:isolate; border:1px solid var(--frame-deep); overflow:hidden; border-radius:9px 9px 3px 3px; }
.castle-frame::after { content:'';position:absolute;inset:5px;border:1px solid #e1d7e6a6;border-radius:5px 5px 1px 1px;pointer-events:none;z-index:3; }
.castle-ornaments { position:absolute;inset:0;display:block;pointer-events:none;z-index:4;color:#e4d6b5; }
.castle-corner { position:absolute;width:35px;height:35px;stroke:currentColor;stroke-width:1;filter:drop-shadow(0 1px 1px #30243866); }
.castle-corner .corner-jewel { fill:#dbcbb5;stroke:#f5e7d2; }
.castle-tl { top:6px;left:6px; }
.castle-tr { top:6px;right:6px;transform:rotate(90deg); }
.castle-br { bottom:6px;right:6px;transform:rotate(180deg); }
.castle-bl { bottom:6px;left:6px;transform:rotate(270deg); }
.castle-crest { position:absolute;top:0;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:24px;line-height:1.2;text-shadow:0 1px 2px #30243888; }
.case-cover,.project-cover { border-radius:9px 9px 3px 3px; }
.cover-index { top:20px;left:22px;font-size:8px; }
.cover-arrow { bottom:17px;right:17px; }
.case-cover .framework-placeholder { filter:saturate(.82); }
.photo-placeholder {
  border:1px solid #ae97ba;border-radius:46% 46% 5px 5px;
  background:radial-gradient(ellipse at 50% 22%,#f7f1fa 0%,#e8dfef 70%);
  box-shadow:0 0 0 5px #fff,0 0 0 6px #d6c8de,0 0 0 10px #f8f4fb,0 0 0 11px #ddd2e3,0 12px 30px #735e7f15;
}
.photo-placeholder::before {
  content:'';position:absolute;inset:8px;width:auto;height:auto;top:8px;left:8px;
  border:1px solid #c8b5d3;border-radius:inherit;transform:none;
}
.photo-placeholder::after {
  content:'';position:absolute;inset:14px;width:auto;height:auto;top:14px;left:14px;
  border:1px solid #fff9;border-radius:inherit;transform:none;
}
.portrait-ornaments { color:#927c9e; }
.portrait-ornaments .castle-tl,.portrait-ornaments .castle-tr { display:none; }
.portrait-ornaments .castle-corner { filter:none;width:43px;height:43px; }
.portrait-ornaments .corner-jewel { fill:#ccb8d5;stroke:#aa90b8; }
.portrait-ornaments .castle-crest { top:13px;font-size:28px;color:#a48ab0;text-shadow:0 1px 0 #fff; }
.portrait-caption { bottom:34px; }
.article-image { border-radius:10px;padding:7px;background:#f8f3fb; }
.article-image img { border-radius:5px; }
.article-image .castle-ornaments { color:#9f88ad; }
.article-image .castle-corner { filter:none; }
.project-hero,.project-award { padding:13px;background:#faf7fc;border-radius:13px;margin-bottom:20px; }
.project-hero img,.project-award img { position:relative;z-index:1;background:white;margin:auto; }
.project-hero .castle-ornaments,.project-award .castle-ornaments { color:#a48aaa; }
.project-hero .castle-corner,.project-award .castle-corner { filter:none; }
.project-award { width:fit-content;max-width:100%; }
.case-banner { height:340px;padding:13px;background:linear-gradient(145deg,#f6f0f9,#e8dfef); }
.case-banner .framework-placeholder { border-radius:4px;background:transparent; }
.case-banner .castle-ornaments { color:#ac93ad; }
.case-banner .castle-corner { filter:none;width:44px;height:44px; }
.award-card { border:1px solid #d3c3db;padding:20px;border-radius:13px 13px 5px 5px;background:linear-gradient(150deg,#fff,#f9f5fb);box-shadow:inset 0 0 0 4px #fff,inset 0 0 0 5px #eee6f2; }
.award-card h2 { font-family:"Cinzel",Georgia,serif;font-size:17px; }
@media(max-width:800px) {
  .page-heading h1 { font-size:27px; }
  .card-copy h2 { font-size:16px; }
  .card-copy { padding:17px 9px 13px; }
  .contact-strip p { font-size:21px; }
}
@media(max-width:480px) {
  .page-heading h1 { font-size:23px; }
  .card-copy h2 { font-size:17px; }
  .photo-placeholder { box-shadow:0 0 0 4px #fff,0 0 0 5px #d6c8de,0 0 0 8px #f8f4fb,0 0 0 9px #ddd2e3; }
  .home-hero { gap:30px; }
  .contact-strip p { font-size:20px; }
  .case-banner { height:220px; }
}

/* Simple pastel buttons with illustrated castlecore symbols. */
.nav-glyph { display:flex;align-items:center;justify-content:center; }
.nav-glyph>svg { width:25px;height:25px;stroke-width:1.25; }
@media(max-width:480px) { .nav-glyph>svg { width:21px;height:21px; } }

/* Icon-only social links, matching the pale navigation buttons. */
.social-links { display:flex;align-items:center;justify-content:center;gap:16px;padding-bottom:24px; }
.social-links a.social-icon-link {
  position:relative;display:flex;align-items:center;justify-content:center;flex:0 0 42px;
  width:42px;height:42px;padding:0;gap:0;border:1px solid #d8c8e3;border-radius:12px;
  color:#745584;background:radial-gradient(circle at 18% 10%,#fff9,transparent 65%),linear-gradient(145deg,#f2e8f8,#dacce8);
  box-shadow:inset 0 1px 0 #fff,0 4px 12px #80618d18;transition:transform .2s,background .2s,border-color .2s;
}
.social-links a.social-icon-link:hover,.social-links a.social-icon-link:focus-visible {
  color:#61406f;border-color:#c9a8d5;background:radial-gradient(circle at 18% 8%,#fff9,transparent 65%),linear-gradient(145deg,#f1deef,#e2cceb);
  transform:translateY(-2px);
}
.social-tooltip {
  position:absolute;left:50%;top:calc(100% + 8px);transform:translateX(-50%);pointer-events:none;
  color:#715c7d;font-family:"Lora",Georgia,serif;font-size:11px;font-weight:400;line-height:1.5;
  white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .15s;
}
.social-icon-link:hover .social-tooltip,.social-icon-link:focus-visible .social-tooltip { opacity:1;visibility:visible; }
@media(max-width:480px) {
  .social-links { gap:12px; }
  .social-links a.social-icon-link { width:40px;height:40px;flex-basis:40px; }
}

@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.cv-links{display:flex;flex-wrap:wrap;gap:18px 26px;margin-top:25px}.portfolio-request{font-family:"Lora",Georgia,serif;font-size:13px;line-height:1.8;color:#78717f;margin-top:17px}.portfolio-request a:hover{color:#60466e}.resume-list{display:grid;gap:24px}.resume-experience-note{line-height:1.8;margin:24px 0}

.home-cv{display:flex;flex-direction:column;align-items:center;text-align:center;padding:14px 16px 30px;margin:0 auto;max-width:700px}.cv-intro{font-family:"Lora",Georgia,serif;font-size:16px;line-height:1.8;color:#62576b}.cv-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;margin-top:17px;min-height:42px;padding:10px 22px;border:1px solid #d8c8e3;border-radius:12px;color:#745584;background:radial-gradient(circle at 18% 10%,#fff9,transparent 65%),linear-gradient(145deg,#f2e8f8,#dacce8);box-shadow:inset 0 1px 0 #fff,0 4px 12px #80618d18;font-family:"Lora",Georgia,serif;font-size:15px;letter-spacing:0;transition:transform .2s,background .2s,border-color .2s}.cv-button:hover,.cv-button:focus-visible{color:#61406f;border-color:#c9a8d5;background:radial-gradient(circle at 18% 8%,#fff9,transparent 65%),linear-gradient(145deg,#f1deef,#e2cceb);transform:translateY(-2px)}.home-cv .portfolio-request{margin-top:20px;max-width:440px;line-height:1.9}.home-cv .portfolio-request a{border-bottom:1px dotted #c9bbd0;padding-bottom:3px}
.home-cv .portfolio-request{font-size:16px;max-width:520px;color:#62576b}

.cursor-sparkles{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden}.cursor-sparkle{position:absolute;display:block;line-height:1;font-family:Georgia,serif;pointer-events:none;animation:cursor-twinkle 750ms ease-out forwards;will-change:transform,opacity;text-shadow:0 0 5px #dfcee760}@keyframes cursor-twinkle{0%{opacity:0;transform:translate(-50%,-50%) scale(.35)}18%{opacity:.85;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(calc(-50% + var(--spark-x)),18px) rotate(var(--spark-turn)) scale(.1)}}@media(prefers-reduced-motion:reduce){.cursor-sparkles{display:none}}@media print{.cursor-sparkles{display:none}}

.photo-placeholder.has-portrait{background:#eee6f2}.has-portrait .home-portrait{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}.photo-placeholder.has-portrait:before,.photo-placeholder.has-portrait:after{display:none}.has-portrait .castle-ornaments{z-index:2}

.about-story{max-width:1040px;margin:0 auto;font-family:"Lora",Georgia,serif;font-size:16px;line-height:1.95;color:#625a6a}.about-story p+p{margin-top:20px}.about-story-row{display:grid;grid-template-columns:minmax(200px,.7fr) minmax(0,1.3fr);gap:clamp(24px,4vw,48px);align-items:center}.about-story-reverse{grid-template-columns:minmax(0,1.3fr) minmax(200px,.7fr)}.about-photo{position:relative;aspect-ratio:4/5;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:linear-gradient(145deg,#f8f3fa,#e9e0ef);border:1px solid #c9bbd0;border-radius:15px 15px 7px 7px;color:#a08bad;box-shadow:inset 0 0 0 5px #fdfbfe,inset 0 0 0 6px #e2d7e8}.about-photo>span:not(.castle-ornaments){font-size:12px}.about-work-copy{max-width:740px;margin:44px auto}.about-story ul{margin:14px 0 20px;padding-left:24px}.about-story li{padding-left:4px}.about-story li::marker{color:#a78bb7}.about-story a{color:#765487;text-decoration:underline;text-decoration-color:#c9b5d4;text-underline-offset:4px}.about-story a:hover{color:#493451}@media(max-width:700px){.about-story-row,.about-story-reverse{grid-template-columns:minmax(0,1fr);gap:24px}.about-photo{width:min(100%,280px);justify-self:center}.about-story-reverse .about-photo{grid-row:1}.about-work-copy{margin:30px auto}.about-story{font-size:16px;line-height:1.85}}

.about-flourish{display:flex;justify-content:center;margin:36px auto;color:#af98be}.about-flourish svg{width:220px;max-width:75%;height:32px;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.about-work-copy{margin:0 auto}.about-hobbies{max-width:740px;margin:0 auto}.about-photo-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin:36px auto 0}.about-photo-gallery .about-photo{width:100%;aspect-ratio:4/5}@media(max-width:600px){.about-photo-gallery{gap:12px}.about-photo-gallery .about-photo{min-height:130px}.about-photo-gallery .about-photo>span:not(.castle-ornaments){font-size:10px;text-align:center;padding:0 8px}.about-flourish{margin:28px auto}}@media(max-width:380px){.about-photo-gallery{grid-template-columns:1fr}.about-photo-gallery .about-photo{max-width:260px}}
.about-story strong{font-weight:600;color:#45384f}

.about-photo{background:radial-gradient(ellipse at 50% 38%,#fffafc 0%,#f1eaf5 55%,#e3dbe9 100%);gap:8px;overflow:hidden}.castle-photo-emblem{width:60%;max-width:170px;height:auto;flex-shrink:0;color:#9b87ab;filter:drop-shadow(0 1px 0 #fff)}.emblem-swords{color:#a2a5b4}.emblem-rose{color:#aa8da9}.about-photo>span:not(.castle-ornaments){color:#9985a5;font-family:"Cinzel",Georgia,serif;letter-spacing:.07em;font-size:10px}.about-photo-gallery .castle-photo-emblem{width:65%}@media(max-width:600px){.about-photo-gallery .castle-photo-emblem{width:75%}.about-photo-gallery .about-photo{gap:0}.about-photo-gallery .about-photo>span:not(.castle-ornaments){font-size:8px;letter-spacing:.02em}}

.about-sword-divider{display:flex;align-items:center;gap:20px;margin:28px auto}.about-sword-divider .castle-photo-emblem{width:90px;max-width:90px;height:100px;stroke:none;flex-shrink:0}.flourish-line{height:1px;width:110px;max-width:20%;background:linear-gradient(90deg,transparent,#c9bbd0)}.flourish-line:last-child{transform:rotate(180deg)}.about-photo{background:linear-gradient(145deg,#f8f3fa,#e9e0ef);gap:16px}.about-photo>span:not(.castle-ornaments){font-family:"Lora",Georgia,serif;font-size:12px;letter-spacing:0;color:#a08bad}.about-photo-gallery .about-photo{gap:16px}@media(max-width:600px){.about-photo-gallery .about-photo>span:not(.castle-ornaments){font-size:10px}.about-sword-divider{gap:12px}.about-sword-divider .castle-photo-emblem{width:76px;height:85px}}

.about-horizontal-divider{margin:30px auto;line-height:0}.about-horizontal-divider svg{width:300px;max-width:85%;height:40px;stroke:none;color:#b2a0bc}.about-horizontal-divider svg g{stroke:currentColor}@media(max-width:600px){.about-horizontal-divider{margin:24px auto}.about-horizontal-divider svg{width:250px;height:34px}}

.about-photo.has-gallery-photo{padding:6px}.has-gallery-photo>img{width:100%;height:100%;object-fit:cover;object-position:center;border-radius:9px 9px 3px 3px;min-height:0}.has-gallery-photo .castle-ornaments{z-index:2;pointer-events:none}

.about-bye{text-align:center;font-family:"Cinzel",Georgia,serif;font-size:25px;color:#80678e;margin-top:30px!important;letter-spacing:.04em}

.about-work-copy,.about-hobbies{max-width:none;width:100%;margin-inline:0}.about-photo-gallery{max-width:780px;width:100%;gap:20px}.about-story .about-photo{border-color:#b6bac5;box-shadow:inset 0 0 0 5px #fafbfc,inset 0 0 0 6px #d8dbe2;background:#eef0f4}.about-story .about-photo::after{border-color:#d8dce4b3}.about-story .about-photo .castle-ornaments{color:#d7dce6}.about-story .about-photo .corner-jewel{fill:#c3cad7;stroke:#edf0f6}.about-story .about-photo .castle-crest{display:none}@media(max-width:600px){.about-photo-gallery{gap:12px;max-width:600px}}@media(max-width:380px){.about-photo-gallery{max-width:260px}}

.about-story-row,.about-work-copy,.about-hobbies{width:100%;max-width:740px;margin-inline:auto}.about-story-row{grid-template-columns:minmax(180px,.8fr) minmax(0,1.2fr);gap:30px}@media(max-width:700px){.about-story-row{grid-template-columns:minmax(0,1fr);gap:24px}}

.education-page{max-width:820px;margin:0 auto;font-family:"Lora",Georgia,serif}.education-timeline{list-style:none;margin:0;padding:0 0 0 52px;position:relative}.education-timeline:before{content:'';position:absolute;left:17px;top:18px;bottom:22px;width:1px;background:linear-gradient(#d4cadb,#aeb6c6 85%,transparent)}.education-milestone{position:relative;padding:0 0 45px 18px}.education-milestone:last-child{padding-bottom:8px}.education-marker{position:absolute;left:-52px;top:0;width:36px;height:38px;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#faf6fd,#e7e1ee);border:1px solid #c6bfce;border-radius:10px;color:#8e7d9e;box-shadow:inset 0 1px 0 white}.education-marker svg{width:23px;height:23px;stroke:currentColor;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}.education-date{font-size:12px;letter-spacing:.04em;color:#8e7d9e;margin-bottom:10px}.education-milestone h2{font-family:"Cinzel",Georgia,serif;font-size:20px;line-height:1.5;font-weight:500;color:#4d4059}.education-degree{font-size:16px;line-height:1.8;margin-top:10px;color:#62566c}.education-note{font-size:13px;color:#8a8192;margin-top:6px}.education-description,.education-dissertation{font-size:15px;line-height:1.9;color:#706777;margin-top:18px}.education-dissertation strong{font-weight:600;color:#584a63}.education-skills{display:flex;flex-wrap:wrap;gap:9px;list-style:none;padding:0;margin:18px 0 0}.education-skills li{font-size:11px;line-height:1.5;border:1px solid #e0d8e7;border-radius:7px;padding:6px 10px;color:#80698e;background:#faf7fc}.education-community h2{text-align:center;font-family:"Cinzel",Georgia,serif;font-size:21px;font-weight:500;margin:20px 0 28px}.education-community .community-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.education-community .community-card{display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid #d6d1dc;border-radius:12px;min-height:110px}.education-community .community-card img{max-height:110px;width:100%;object-fit:contain}@media(max-width:600px){.education-timeline{padding-left:38px}.education-marker{left:-38px;width:30px;height:34px}.education-timeline:before{left:14px}.education-milestone{padding-left:12px}.education-milestone h2{font-size:17px}.education-degree{font-size:15px}.education-community .community-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}}

.education-milestone h2,.education-community h2{font-weight:700;color:#50355f}.education-degree{color:#685174;font-weight:500}

.recognition-timeline-page{max-width:820px;margin:0 auto}.recognition-year+.recognition-year{margin-top:34px}.recognition-year-heading{font-family:"Cinzel",Georgia,serif;font-size:24px;font-weight:700;color:#50355f;margin-bottom:23px}.recognition-kind{display:block;font-family:"Lora",Georgia,serif;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#8e7d9e;margin-bottom:12px}.recognition-milestone .press-card{padding:0;background:none;border:0;box-shadow:none;display:flex;flex-direction:column;align-items:flex-start;gap:12px}.recognition-milestone .press-card strong{font-family:"Cinzel",Georgia,serif;font-size:18px;line-height:1.6;font-weight:600;color:#50355f}.recognition-milestone .press-year{font-size:12px;color:#8a8192}.recognition-milestone .press-link{font-family:"Lora",Georgia,serif;font-size:13px;color:#765487;text-decoration:underline;text-underline-offset:4px}.recognition-award-detail,.recognition-milestone .press-card p{font-family:"Lora",Georgia,serif;font-size:14px;line-height:1.8;color:#706777}.recognition-award-detail{margin-top:13px}.recognition-pending{font-family:"Lora",Georgia,serif;color:#8a8192;padding-top:7px;font-size:14px}

.about-story-continuation{max-width:740px;width:100%;margin:24px auto 0}.about-story-row .about-photo{align-self:center;aspect-ratio:4/5;height:auto}.education-community .community-card{position:relative;border:1px solid #b6bac5;padding:8px;border-radius:9px 9px 3px 3px;box-shadow:inset 0 0 0 3px #fafbfc,inset 0 0 0 4px #d8dbe2;min-height:130px}.education-community .community-card::after{border-color:#d8dce4b3}.education-community .castle-ornaments{color:#d7dce6}.education-community .corner-jewel{fill:#c3cad7;stroke:#edf0f6}.education-community .castle-crest{display:none}.education-community .castle-corner{width:25px;height:25px}.education-community .community-card img{padding:8px;max-height:120px}

/* Quiet ambient light along the page edges. */
body{background:#fff;isolation:isolate}body::before{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse 28% 65% at 0% 24%,rgba(214,191,235,.23),transparent 78%),radial-gradient(ellipse 25% 68% at 100% 72%,rgba(192,201,221,.23),transparent 78%),radial-gradient(ellipse 38% 28% at 85% 0%,rgba(227,213,240,.13),transparent 80%)}@media(max-width:600px){body::before{background:radial-gradient(ellipse 28% 70% at 0% 30%,rgba(214,191,235,.16),transparent 80%),radial-gradient(ellipse 28% 70% at 100% 70%,rgba(192,201,221,.17),transparent 80%)}}@media print{body::before{display:none}}

.education-community .community-grid{align-items:center}.education-community .community-card{padding:0;min-height:0;height:auto;display:block;background:transparent;box-shadow:none}.education-community .community-card img{display:block;width:100%;height:auto;max-height:none;padding:0;object-fit:initial}.education-community .community-card::after{inset:4px}

body::before{z-index:0;background:radial-gradient(ellipse 32% 75% at -5% 25%,rgba(202,170,229,.42),transparent 82%),radial-gradient(ellipse 30% 80% at 105% 70%,rgba(174,187,213,.38),transparent 82%),radial-gradient(ellipse 48% 30% at 75% -10%,rgba(218,198,235,.24),transparent 85%)}#root{position:relative;z-index:1;background:transparent}@media(max-width:600px){body::before{background:radial-gradient(ellipse 35% 80% at -8% 30%,rgba(202,170,229,.28),transparent 82%),radial-gradient(ellipse 35% 80% at 108% 70%,rgba(174,187,213,.27),transparent 82%)}}

.site-header{position:relative}.theme-toggle{position:absolute;right:0;top:24px;display:inline-flex;align-items:center;gap:8px;border:1px solid #d8c8e3;border-radius:12px;background:linear-gradient(145deg,#f2e8f8,#dacce8);color:#745584;padding:9px 12px;font-family:"Lora",Georgia,serif;font-size:12px;z-index:2}.theme-toggle:hover{border-color:#ad8dbe}
html[data-theme="night"]{color-scheme:dark;background:#191620;--ink:#eee8f3;--muted:#b9aec4;--purple:#c9afd9;--line:#494052;--paper:#211c2a;--frame-silver:#61576e;--frame-deep:#95859f;--frame-gold:#bdb5cc;--frame-paper:#27212f}
html[data-theme="night"] body{background:#191620;color:#e5ddeb}html[data-theme="night"] body::before{background:radial-gradient(ellipse 34% 80% at -5% 25%,#79539842,transparent 82%),radial-gradient(ellipse 32% 80% at 105% 70%,#7a8aa838,transparent 82%)}
html[data-theme="night"] .brand-image{filter:brightness(0) invert(1);opacity:.94}
html[data-theme="night"] :is(.bio,.about-story,.education-description,.education-dissertation,.recognition-award-detail,.recognition-milestone .press-card p,.project-description,.project-meta,.contributions,.article-card p,.card-copy p,.cv-intro,.home-cv .portfolio-request,.resume-experience-note){color:#c8bed2}
html[data-theme="night"] :is(h1,h2,h3,.about-story strong,.education-milestone h2,.education-community h2,.recognition-year-heading,.recognition-milestone .press-card strong,.education-dissertation strong){color:#eee3f7}
html[data-theme="night"] :is(.brand-subtitle,.site-footer,.education-date,.education-note,.education-degree,.recognition-kind,.press-year,.eyebrow,.recognition-pending){color:#bba8cc}
html[data-theme="night"] :is(.nav-icon,.social-links a.social-icon-link,.cv-button,.theme-toggle,.education-marker){background:linear-gradient(145deg,#3c304a,#302638);border-color:#655271;color:#d1b5e3;box-shadow:inset 0 1px 0 #ffffff12,0 4px 12px #0002}
html[data-theme="night"] :is(.nav-link:hover .nav-icon,.nav-link.active .nav-icon,.social-links a.social-icon-link:hover,.cv-button:hover,.theme-toggle:hover){background:linear-gradient(145deg,#51405f,#3b2e47);border-color:#9d7bb2;color:#f0dafa}
html[data-theme="night"] :is(.case-card,.project-card,.award-card){background:linear-gradient(145deg,#28222f,#211c28);border-color:#61536d;box-shadow:inset 0 0 0 3px #28222f,inset 0 0 0 4px #44374e}
html[data-theme="night"] :is(.nav-tooltip,.social-tooltip){background:#352a40;color:#eee1f5;border-color:#665573}
html[data-theme="night"] :is(.text-link,.about-story a,.press-link,.about-bye){color:#d2b2e5}
html[data-theme="night"] .tabs a{color:#b8a2c9}html[data-theme="night"] .tabs a.selected{color:#f1dffa;background:#9c72ba30}
html[data-theme="night"] .about-story .about-photo{background:#27222f;border-color:#777180;box-shadow:inset 0 0 0 5px #27222f,inset 0 0 0 6px #655e70}
html[data-theme="night"] .education-community .community-card{background:transparent;box-shadow:none;border-color:#777180}
html[data-theme="night"] .about-flourish svg{color:#b9a2c9}
@media(max-width:600px){.theme-toggle{top:8px;padding:7px 9px;gap:5px;font-size:10px}.theme-toggle svg{width:15px;height:15px}}@media print{.theme-toggle{display:none}}

/* Theme surfaces and typography across detail pages. */
html[data-theme="night"] :is(.pending-content,.empty-section,.project-meta dt,.project-meta dd,.contributions li,.lead,.article-card,.resume-list,.press-card,.recognition-detail,.year,.back-link,.card-copy,.project-actions){color:#c8bed2}
html[data-theme="night"] :is(.article-card h3,.resume-list strong,.award-card h2,.project-meta dt,.contributions h2){color:#eee3f7}
html[data-theme="night"] :is(.case-cover,.case-banner,.project-cover,.project-hero,.article-image,.project-award){background-color:#302737;border-color:#756381}
html[data-theme="night"] :is(.case-cover,.case-banner){background-image:linear-gradient(140deg,#3a2d46,#25202e)}
html[data-theme="night"] :is(.cover-arrow,.award-icon){background:#44334f;color:#dcc3ec;border-color:#766080}
html[data-theme="night"] :is(.cover-index,.project-cover-fallback){color:#d7c4e5}
html[data-theme="night"] :is(.chip,.chips .chip,.education-skills li){background:#362b41!important;color:#d6bfE6!important;border-color:#5e4d6d!important}
html[data-theme="night"] :is(.project-meta>div,.recognition-row,.case-pagination,.article-card,.award-card,.press-card){border-color:#51445d}
html[data-theme="night"] .resume-list .press-card{background:#28222f;border:1px solid #51445d;border-radius:12px;padding:20px}
html[data-theme="night"] .castle-frame::after{border-color:#c2b5cf66}
html[data-theme="night"] .castle-ornaments{color:#c7c7d8}html[data-theme="night"] .corner-jewel{fill:#a4a6bc;stroke:#e0dfea}
html[data-theme="night"] .education-timeline:before{background:linear-gradient(#756481,#9295ae 85%,transparent)}
html[data-theme="night"] :is(.social-tooltip,.nav-tooltip){box-shadow:0 5px 18px #0004}
html[data-theme="night"] .project-actions a:hover,html[data-theme="night"] .about-story a:hover{color:#f1ddff}
html[data-theme="night"] .skip-link{background:#34263f;color:#f1ddff}
html[data-theme="night"] ::selection{background:#8864a2;color:#fff}

.theme-toggle{width:38px;height:38px;padding:0;justify-content:center;gap:0}@media(max-width:600px){.theme-toggle{width:32px;height:32px;padding:0}}

@keyframes cursor-twinkle{0%{opacity:0;transform:translate(-50%,-50%) scale(.35)}18%{opacity:.9;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(calc(-50% + var(--spark-x)),var(--spark-y,18px)) rotate(var(--spark-turn)) scale(.1)}}html[data-theme="night"] .cursor-sparkle{text-shadow:0 0 7px #d7bcfa80}

/* Explicit page surfaces prevent inherited host styles from mixing themes. */
html[data-theme="day"],html[data-theme="day"] body{background:#fff!important;color:#322c3b!important;color-scheme:light}
html[data-theme="night"],html[data-theme="night"] body{background:#191620!important;color:#e5ddeb!important;color-scheme:dark}
html[data-theme] #root{background:transparent!important;min-height:100vh}
html[data-theme="day"] .brand-image{filter:brightness(0)!important;opacity:1!important}
html[data-theme="night"] .brand-image{filter:brightness(0) invert(1)!important;opacity:1!important}
html[data-theme="night"] .original-about-copy,html[data-theme="night"] .original-about-copy p,html[data-theme="night"] .original-about-copy p:first-child{color:#d3c8dd!important}
html[data-theme="night"] .original-about-copy strong{color:#f0e4fa!important}
html[data-theme="day"] .original-about-copy,html[data-theme="day"] .original-about-copy p{color:#625a6a!important}
html[data-theme="day"] .original-about-copy strong{color:#45384f!important}
.sidebar-theme{margin-top:48px;display:flex;justify-content:flex-start}.sidebar-theme .theme-toggle{position:static;top:auto;right:auto;width:44px;height:44px;border-radius:12px;flex-shrink:0}.sidebar-theme .theme-toggle svg{width:21px;height:21px}
@media(max-width:800px){.sidebar-theme{margin-top:40px}.sidebar-theme .theme-toggle{width:40px;height:40px}}@media(max-width:480px){.sidebar-theme{margin-top:36px}.sidebar-theme .theme-toggle{width:34px;height:36px;border-radius:9px}.sidebar-theme .theme-toggle svg{width:19px;height:19px}}


.site-frame[data-theme="night"]{color-scheme:dark;background:#191620;--ink:#eee8f3;--muted:#b9aec4;--purple:#c9afd9;--line:#494052;--paper:#211c2a;--frame-silver:#61576e;--frame-deep:#95859f;--frame-gold:#bdb5cc;--frame-paper:#27212f}

 .site-frame[data-theme="night"]{background:#191620;color:#e5ddeb}
 .site-frame[data-theme="night"]::before{background:radial-gradient(ellipse 34% 80% at -5% 25%,#79539842,transparent 82%),radial-gradient(ellipse 32% 80% at 105% 70%,#7a8aa838,transparent 82%)}

.site-frame[data-theme="night"] .brand-image{filter:brightness(0) invert(1);opacity:.94}

.site-frame[data-theme="night"] :is(.bio,.about-story,.education-description,.education-dissertation,.recognition-award-detail,.recognition-milestone .press-card p,.project-description,.project-meta,.contributions,.article-card p,.card-copy p,.cv-intro,.home-cv .portfolio-request,.resume-experience-note){color:#c8bed2}

.site-frame[data-theme="night"] :is(h1,h2,h3,.about-story strong,.education-milestone h2,.education-community h2,.recognition-year-heading,.recognition-milestone .press-card strong,.education-dissertation strong){color:#eee3f7}

.site-frame[data-theme="night"] :is(.brand-subtitle,.site-footer,.education-date,.education-note,.education-degree,.recognition-kind,.press-year,.eyebrow,.recognition-pending){color:#bba8cc}

.site-frame[data-theme="night"] :is(.nav-icon,.social-links a.social-icon-link,.cv-button,.theme-toggle,.education-marker){background:linear-gradient(145deg,#3c304a,#302638);border-color:#655271;color:#d1b5e3;box-shadow:inset 0 1px 0 #ffffff12,0 4px 12px #0002}

.site-frame[data-theme="night"] :is(.nav-link:hover .nav-icon,.nav-link.active .nav-icon,.social-links a.social-icon-link:hover,.cv-button:hover,.theme-toggle:hover){background:linear-gradient(145deg,#51405f,#3b2e47);border-color:#9d7bb2;color:#f0dafa}

.site-frame[data-theme="night"] :is(.case-card,.project-card,.award-card){background:linear-gradient(145deg,#28222f,#211c28);border-color:#61536d;box-shadow:inset 0 0 0 3px #28222f,inset 0 0 0 4px #44374e}

.site-frame[data-theme="night"] :is(.nav-tooltip,.social-tooltip){background:#352a40;color:#eee1f5;border-color:#665573}

.site-frame[data-theme="night"] :is(.text-link,.about-story a,.press-link,.about-bye){color:#d2b2e5}

.site-frame[data-theme="night"] .tabs a{color:#b8a2c9}
.site-frame[data-theme="night"] .tabs a.selected{color:#f1dffa;background:#9c72ba30}

.site-frame[data-theme="night"] .about-story .about-photo{background:#27222f;border-color:#777180;box-shadow:inset 0 0 0 5px #27222f,inset 0 0 0 6px #655e70}

.site-frame[data-theme="night"] .education-community .community-card{background:transparent;box-shadow:none;border-color:#777180}

.site-frame[data-theme="night"] .about-flourish svg{color:#b9a2c9}


/* Theme surfaces and typography across detail pages. */
.site-frame[data-theme="night"] :is(.pending-content,.empty-section,.project-meta dt,.project-meta dd,.contributions li,.lead,.article-card,.resume-list,.press-card,.recognition-detail,.year,.back-link,.card-copy,.project-actions){color:#c8bed2}

.site-frame[data-theme="night"] :is(.article-card h3,.resume-list strong,.award-card h2,.project-meta dt,.contributions h2){color:#eee3f7}

.site-frame[data-theme="night"] :is(.case-cover,.case-banner,.project-cover,.project-hero,.article-image,.project-award){background-color:#302737;border-color:#756381}

.site-frame[data-theme="night"] :is(.case-cover,.case-banner){background-image:linear-gradient(140deg,#3a2d46,#25202e)}

.site-frame[data-theme="night"] :is(.cover-arrow,.award-icon){background:#44334f;color:#dcc3ec;border-color:#766080}

.site-frame[data-theme="night"] :is(.cover-index,.project-cover-fallback){color:#d7c4e5}

.site-frame[data-theme="night"] :is(.chip,.chips .chip,.education-skills li){background:#362b41!important;color:#d6bfE6!important;border-color:#5e4d6d!important}

.site-frame[data-theme="night"] :is(.project-meta>div,.recognition-row,.case-pagination,.article-card,.award-card,.press-card){border-color:#51445d}

.site-frame[data-theme="night"] .resume-list .press-card{background:#28222f;border:1px solid #51445d;border-radius:12px;padding:20px}

.site-frame[data-theme="night"] .castle-frame::after{border-color:#c2b5cf66}

.site-frame[data-theme="night"] .castle-ornaments{color:#c7c7d8}
.site-frame[data-theme="night"] .corner-jewel{fill:#a4a6bc;stroke:#e0dfea}

.site-frame[data-theme="night"] .education-timeline:before{background:linear-gradient(#756481,#9295ae 85%,transparent)}

.site-frame[data-theme="night"] :is(.social-tooltip,.nav-tooltip){box-shadow:0 5px 18px #0004}

.site-frame[data-theme="night"] .project-actions a:hover,.site-frame[data-theme="night"] .about-story a:hover{color:#f1ddff}

.site-frame[data-theme="night"] .skip-link{background:#34263f;color:#f1ddff}

.site-frame[data-theme="night"] ::selection{background:#8864a2;color:#fff}
.site-frame[data-theme="night"] .cursor-sparkle{text-shadow:0 0 7px #d7bcfa80}


/* Explicit page surfaces prevent inherited host styles from mixing themes. */
.site-frame[data-theme="day"], .site-frame[data-theme="day"]{background:#fff!important;color:#322c3b!important;color-scheme:light}

.site-frame[data-theme="night"], .site-frame[data-theme="night"]{background:#191620!important;color:#e5ddeb!important;color-scheme:dark}

.site-frame[data-theme="day"] .brand-image{filter:brightness(0)!important;opacity:1!important}

.site-frame[data-theme="night"] .brand-image{filter:brightness(0) invert(1)!important;opacity:1!important}

.site-frame[data-theme="night"] .original-about-copy,.site-frame[data-theme="night"] .original-about-copy p,.site-frame[data-theme="night"] .original-about-copy p:first-child{color:#d3c8dd!important}

.site-frame[data-theme="night"] .original-about-copy strong{color:#f0e4fa!important}

.site-frame[data-theme="day"] .original-about-copy,.site-frame[data-theme="day"] .original-about-copy p{color:#625a6a!important}

.site-frame[data-theme="day"] .original-about-copy strong{color:#45384f!important}
.site-frame[data-theme="night"]{background:#191620!important;color:#e5ddeb!important;min-height:100vh}.site-frame[data-theme="day"]{background:#fff!important;color:#322c3b!important;min-height:100vh}
.site-frame[data-theme="night"] .brand-image{filter:brightness(0) invert(1)!important}.site-frame[data-theme="day"] .brand-image{filter:brightness(0)!important}
`;
