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

        <div className="community-section">
          <h3>As a member of community</h3>
          <div className="community-grid">
            <div className="community-card">
              <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-06%20150254.png" alt="Community membership badge" />
            </div>
            <div className="community-card">
              <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-06-30%20212941.png" alt="Community membership badge" />
            </div>
            <div className="community-card">
              <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202025-08-28%20220716.png" alt="Community membership badge" />
            </div>
            <div className="community-card">
              <img src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/images.jpeg" alt="Community membership badge" />
            </div>
          </div>
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
        <TimelineItem
          title="Game Designer & Level Designer — NDA Project"
          date="Apr 2025 – Present"
          text="Designed and interconnected core and meta systems, balanced mechanics, created UX documentation, and worked on player customization features."
          chips={["SYSTEM DESIGN", "LEVEL DESIGN", "ENVIRONMENTAL PUZZLES", "UNREAL ENGINE"]}
        />
        <TimelineItem
          title="Game Designer — Eriars"
          date="Dec 2024 – Present"
          text="Prototyped core gameplay systems, designed magic combat and movement mechanics, and collaborated with narrative and art teams."
          chips={["COMBAT DESIGN", "ENCOUNTER DESIGN", "GAME AI", "UNREAL ENGINE", "ARTICY"]}
        />
        <div className="resume-actions">
          <a className="modal-link no-dot" href="#">DOWNLOAD PDF</a>
        </div>
      </>
    ),
  },
  {
    id: "contact",
    label: "CONTACT",
    title: "Get in Touch",
    accent: "green",
    body: (
      <div className="contact-panel">
        <p>I’m open to collaborations, creative projects, game design work, and professional opportunities.</p>

        <div className="contact-actions">
          <a className="contact-button" href="https://t.me/valenandia" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a className="contact-button" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="contact-button" href="https://www.linkedin.com/in/valenandia/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <form className="contact-form" action={`mailto:${profile.email}`} method="POST" encType="text/plain">
          <label>
            Your name
            <input name="name" type="text" placeholder="Name" />
          </label>
          <label>
            Your email
            <input name="email" type="email" placeholder="email@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message..." />
          </label>
          <button type="submit" className="contact-button contact-submit">Send message</button>
        </form>
      </div>
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
        image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Screenshot%202026-05-26%20191956.png",
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
        contributionsIntro: "Game Designer",
        contributions: [
          "Contributed to location customization and screen map design to enhance user experience.",
          "Optimized and balanced mini-games to ensure engaging gameplay.",
          "Led feature completion efforts during the pre-release phase to meet project timelines.",
          "Collaborated effectively with the team, offering support and expertise across all aspects of the project.",
        ],
        action: "VIEW PROJECT",
        href: "https://eriars.com/en/store-simulator-en/",
        secondaryAction: "GDD EXAMPLE",
        secondaryHref: "#",
      },
      {
        id: "project-2",
        icon: "🎮",
        label: "PROJECT TWO",
        modalTitle: "Project Two",
        tag: "PROJECT",
        description: "Add a short case study here: goal, constraints, design decisions, and outcome.",
        chips: ["GAME DESIGN", "SYSTEMS"],
        action: "VIEW PROJECT",
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
          ["Role", "Game Generalist"],
          ["Involvement", "2010s — 2019"],
          ["Platforms", "Nexus Mods"],
          ["Engine", "OpenMW"],
        ],
        contributionsIntro: "Game Generalist, Level Designer, Narrative Designer",
        contributions: [
          "Developed engaging quests and character narratives to enhance player immersion across Tamriel’s mainland regions.",
          "Utilized Morrowind’s Construction Set to construct detailed exterior landscapes, cities, and interior spaces, ensuring lore consistency and visual quality.",
          "Conducted thorough testing of quests to verify functionality, balance, and a seamless player experience.",
        ],
        awardImage: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/azbsetn.png",
        awardLabel: "Community Project Award",
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
        label: "WISHLIST ITEM",
        modalTitle: "Wishlist Item",
        tag: "WISHLIST",
        description: "A game, book, tool, or reference that matters to your design taste. Explain why you recommend it.",
        chips: ["GAME", "STEAM"],
        action: "VIEW ON STEAM",
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
        label: "Combat Prototype",
        modalTitle: "Combat Prototype",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under the construction</p>,
      },
      {
        id: "encounter-2",
        icon: "👑",
        label: "Boss Fight Encounter",
        modalTitle: "Boss Fight Encounter",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under the construction</p>,
      },
      {
        id: "encounter-3",
        icon: "🌊",
        label: "Wave-Based Encounter",
        modalTitle: "Wave-Based Encounter",
        tag: "ENCOUNTER",
        body: <p className="under-construction">Under the construction</p>,
      },
    ],
  },
  {
    id: "work",
    title: "WORK",
    accent: "violet",
    items: [
      { id: "work-1", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking....png", label: "Blood & HP Exchange Mechanics: A Combat Framework", modalTitle: "Blood & HP Exchange Mechanics: A Combat Framework", tag: "WORK", body: <p className="under-construction">Under the construction</p> },
      { id: "work-2", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking....png", label: "Environment Puzzle Framework", modalTitle: "Environment Puzzle Framework", tag: "WORK", body: <p className="under-construction">Under the construction</p> },
      { id: "work-3", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking....png", label: "Combat Design Framework", modalTitle: "Combat Design Framework", tag: "WORK", body: <p className="under-construction">Under the construction</p> },
      { id: "work-4", icon: "💼", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/thinking....png", label: "Pitch Doc: The Tale of Mind", modalTitle: "Pitch Doc: The Tale of Mind", tag: "WORK", body: <p className="under-construction">Under the construction</p> },
    ],
  },
  {
    id: "games",
    title: "GAME JAMS",
    accent: "red",
    items: [
      { id: "game-1", icon: "🕹", label: "GAME ONE", modalTitle: "Game One", tag: "GAME", description: "Describe this game: genre, story, play time, and where to download it.", chips: ["FREE", "ITCH.IO", "2024"], action: "PLAY FREE" },
      { id: "game-2", icon: "🕹", label: "GAME TWO", modalTitle: "Game Two", tag: "GAME", description: "Add a second free game here.", chips: ["FREE", "ITCH.IO"], action: "PLAY FREE" },
      { id: "game-3", icon: "🕹", label: "GAME THREE", modalTitle: "Game Three", tag: "GAME", description: "Add a third free game here.", chips: ["FREE", "ITCH.IO"], action: "PLAY FREE" },
      { id: "game-4", icon: "🕹", label: "GAME FOUR", modalTitle: "Game Four", tag: "GAME", description: "Add a fourth free game here.", chips: ["FREE", "ITCH.IO"], action: "PLAY FREE" },
    ],
  },
  {
    id: "links",
    title: "ANALYSES",
    accent: "green",
    items: [
      { id: "deconstruct-1", icon: "🔍", image: "https://raw.githubusercontent.com/valenandia/valen.github.io/main/Untitled%20design%20(1).png", label: "OCARINA OF TIME", modalTitle: "The Legend of Zelda: Ocarina of Time", tag: "ANALYSES", body: <p className="under-construction">Under the construction</p> },
      { id: "deconstruct-2", icon: "🔍", label: "ANALYSIS 2", modalTitle: "Analysis Two", tag: "ANALYSES", description: "Another deconstruction slot for a game, feature, level, or design pattern.", chips: ["ANALYSIS"], action: "VIEW FULL" },
    ],
  },
];

const initialPositions = {
  projects: { x: 120, y: 54 },
  wishlist: { x: 548, y: 64 },
  encounters: { x: 820, y: 58 },
  work: { x: 80, y: 330 },
  games: { x: 575, y: 330 },
  links: { x: 890, y: 348 },
};

function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="clock">{time}</div>;
}

function Chips({ items = [] }) {
  return <div className="chips">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>;
}

function TimelineItem({ title, date, text, chips = [] }) {
  return (
    <div className="timeline-item">
      <p><strong className="timeline-title">{title}</strong></p>
      <span>{date}</span>
      <p>{text}</p>
      {chips.length > 0 && <Chips items={chips} />}
    </div>
  );
}

function Article({ title, text, image, href = "#" }) {
  return (
    <article className="article-row">
      <h3>{title}</h3>
      <div className="article-cover">
        {image ? <img src={image} alt={title} /> : <span>Image coming soon</span>}
      </div>
      <p>{text}</p>
      <a className="modal-link small" href={href}>READ</a>
    </article>
  );
}

function Header({ onOpen }) {
  return (
    <header className="topbar">
      <div className="socials">
        {profile.socials.map((social) => (
          <a className="menu-button" href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label}</a>
        ))}
      </div>

      <div className="brand">
        <strong>{profile.name}</strong>
        <span>{profile.subtitle}</span>
      </div>

      <div className="nav-actions">
        {navModals.map((item) => (
          <button className={`menu-button nav-button ${item.id === "about" ? "about-nav" : ""} ${item.id === "press" ? "yellow" : ""}`} onClick={() => onOpen(item)} key={item.id}>{item.label}</button>
        ))}
        <div className="sep" />
        <Clock />
      </div>
    </header>
  );
}

function DesktopWindow({ win, active, onFocus, onOpen }) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState(initialPositions[win.id] || { x: 24, y: 24 });
  const [drag, setDrag] = useState(null);

  useEffect(() => {
    if (!drag) return;

    const handleMove = (event) => {
      if (event.cancelable) event.preventDefault();
      const clientX = event.touches?.[0]?.clientX ?? event.clientX;
      const clientY = event.touches?.[0]?.clientY ?? event.clientY;
      const maxX = Math.max(0, drag.containerWidth - drag.width);
      const maxY = Math.max(0, drag.containerHeight - drag.height);
      setPosition({
        x: Math.min(Math.max(0, clientX - drag.containerLeft - drag.offsetX), maxX),
        y: Math.min(Math.max(0, clientY - drag.containerTop - drag.offsetY), maxY),
      });
    };

    const stopDrag = () => setDrag(null);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [drag]);

  const startDrag = (event) => {
    onFocus(win.id);
    const clientX = event.touches?.[0]?.clientX ?? event.clientX;
    const clientY = event.touches?.[0]?.clientY ?? event.clientY;
    const rect = event.currentTarget.closest(".window").getBoundingClientRect();
    const desktopRect = event.currentTarget.closest(".desktop").getBoundingClientRect();
    setDrag({
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
      width: rect.width,
      height: rect.height,
      containerLeft: desktopRect.left,
      containerTop: desktopRect.top,
      containerWidth: desktopRect.width,
      containerHeight: desktopRect.height,
    });
  };

  useEffect(() => {
    const clampPosition = () => {
      const node = windowRef.current;
      const desktop = node?.closest(".desktop");
      if (!node || !desktop) return;
      const desktopRect = desktop.getBoundingClientRect();
      const rect = node.getBoundingClientRect();
      setPosition((current) => ({
        x: Math.min(Math.max(0, current.x), Math.max(0, desktopRect.width - rect.width)),
        y: Math.min(Math.max(0, current.y), Math.max(0, desktopRect.height - rect.height)),
      }));
    };

    clampPosition();
    window.addEventListener("resize", clampPosition);
    return () => window.removeEventListener("resize", clampPosition);
  }, []);

  return (
    <section
      ref={windowRef}
      className={`window window-${win.id} ${active ? "active" : ""} ${win.large ? "large" : ""}`}
      style={{ left: position.x, top: position.y, zIndex: active ? 20 : 1 }}
      onMouseDown={() => onFocus(win.id)}
    >
      <div className={`window-header ${win.accent}`} onMouseDown={startDrag} onTouchStart={startDrag}>
        <WindowDots accent={win.accent} />
        <span>{win.title}</span>
      </div>
      <div className="window-body">
        {win.items.map((item) => (
          <button className="item-card" onClick={() => onOpen({ ...item, accent: win.accent, folderTitle: win.title })} key={item.id}>
            <span className="item-icon">{item.image ? <img src={item.image} alt={item.label} /> : item.icon}</span>
            <span className="item-label">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function WindowDots({ accent }) {
  return (
    <div className="dots" aria-hidden="true">
      <span />
      <span />
      <span className={accent} />
    </div>
  );
}

function Modal({ modal, onClose }) {
  useEffect(() => {
    if (!modal) return;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modal, onClose]);

  if (!modal) return null;

  const isCustomBody = Boolean(modal.body);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <dialog className={`modal-window ${modal.id ? `modal-${modal.id}` : ""}`} open onMouseDown={(event) => event.stopPropagation()}>
        <div className={`modal-header ${modal.accent || "purple"}`}>
          <WindowDots accent={modal.accent || "purple"} />
          <span className="modal-tag">{modal.folderTitle || modal.label || modal.tag}</span>
          <strong>{modal.title || modal.modalTitle}</strong>
          <button onClick={onClose} aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">
          {isCustomBody ? (
            modal.body
          ) : (
            <>
              {!modal.meta && (
                <div className="modal-hero project-hero">
                  {modal.image ? <img src={modal.image} alt={modal.modalTitle} /> : modal.icon}
                </div>
              )}
              <div className="project-intro-card">
                {modal.status && <p className="project-status">{modal.status}</p>}
                <p><strong>{modal.modalTitle}</strong> — {modal.description}</p>
                {modal.href && (
                  <div className="project-actions">
                    <a className="modal-link no-dot project-link" href={modal.href} target="_blank" rel="noreferrer">{modal.action}</a>
                    {modal.secondaryAction && (
                      <a className="modal-link no-dot project-link secondary" href={modal.secondaryHref || "#"} target="_blank" rel="noreferrer">{modal.secondaryAction}</a>
                    )}
                  </div>
                )}
              </div>
              {modal.projectImage && (
                <div className="project-preview-card">
                  <img src={modal.projectImage} alt={`${modal.modalTitle} project preview`} />
                </div>
              )}
              {modal.meta && (
                <div className="project-meta">
                  {modal.meta.map(([key, value]) => (
                    <div className="project-meta-row" key={key}>
                      <span>{key}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              )}
              {modal.contributions && (
                <div className="project-contributions">
                  <h3>Contributions</h3>
                  {modal.contributionsIntro && <p className="project-contributions-intro">{modal.contributionsIntro}</p>}
                  <ul>
                    {modal.contributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
              {modal.awardImage && (
                <div className="project-award-card">
                  <h3>{modal.awardLabel || "Award"}</h3>
                  <img src={modal.awardImage} alt={modal.awardLabel || `${modal.modalTitle} award`} />
                </div>
              )}
              {!modal.href && (
                <a className="modal-link" href="#">{modal.action}</a>
              )}
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default function App() {
  const [activeWindow, setActiveWindow] = useState("wishlist");
  const [modal, setModal] = useState(null);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="app-shell">
      <style>{styles}</style>
      <Header onOpen={setModal} />
      <section className="desktop" aria-label="Portfolio desktop">
        {windows.map((win) => (
          <DesktopWindow
            win={win}
            active={activeWindow === win.id}
            onFocus={setActiveWindow}
            onOpen={setModal}
            key={win.id}
          />
        ))}
      </section>
      <footer>@valenandia {currentYear}</footer>
      <Modal modal={modal} onClose={() => setModal(null)} />
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Cormorant+Garamond:wght@500;600;700;800&family=Share+Tech+Mono&display=swap');

@font-face {
  font-family: "KelmscotDecorative";
  src: url("/fonts/KELMSCOT.TTF?v=2") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --green: #50854D;
  --pink: #ECC8F7;
  --ink: #0D0C0D;
  --yellow: #FFE600;
  --modal-accent: #51495E;
  --modal-accent-soft: rgba(81, 73, 94, 0.14);
  --modal-accent-border: rgba(81, 73, 94, 0.28);

  --bg: #0D0C0D;
  --bg-soft: #171517;
  --panel: #F7F0F5;
  --panel-2: #F2E8F1;
  --panel-border: rgba(13, 12, 13, 0.14);
  --text: #181518;
  --muted: rgba(24, 21, 24, 0.68);

  --shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.34);
  --shadow-md: 0 10px 24px rgba(0, 0, 0, 0.18);
  --shadow-sm: 0 6px 14px rgba(0, 0, 0, 0.1);

  --radius-xl: 22px;
  --radius-lg: 18px;
  --radius-md: 14px;
  --radius-sm: 10px;
  --text-font: "Times New Roman", Times, serif;
  --main-font: "Eagle Lake", Georgia, serif;
  --decorative-font: "KelmscotDecorative", "Cormorant Garamond", Georgia, serif;
}

* { box-sizing: border-box; }

html, body, #root { min-height: 100%; }

body {
  margin: 0;
  color: var(--text);
  font-family: var(--text-font);
  background: #0D0C0D;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }

.app-shell {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(circle at 14% 18%, rgba(80, 133, 77, 0.30), transparent 34%),
    radial-gradient(circle at 82% 16%, rgba(81, 73, 94, 0.42), transparent 32%),
    radial-gradient(circle at 48% 78%, rgba(236, 200, 247, 0.12), transparent 38%),
    radial-gradient(circle at 88% 84%, rgba(80, 133, 77, 0.16), transparent 30%),
    linear-gradient(135deg, #0D0C0D 0%, #17121A 34%, #1D1725 62%, #0E1610 100%);
}

.app-shell::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at center, transparent 34%, rgba(13, 12, 13, 0.38) 100%),
    linear-gradient(120deg, rgba(80, 133, 77, 0.08), transparent 36%, rgba(81, 73, 94, 0.12)),
    linear-gradient(rgba(13, 12, 13, 0.04), rgba(13, 12, 13, 0.20));
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.topbar {
  height: 64px;
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  padding: 10px 18px;
  background: linear-gradient(180deg, rgba(15, 14, 15, 0.62) 0%, rgba(15, 14, 15, 0.36) 100%);
  backdrop-filter: blur(18px) saturate(1.18);
  -webkit-backdrop-filter: blur(18px) saturate(1.18);
  border-bottom: 1px solid rgba(236, 200, 247, 0.10);
}

.socials,
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.nav-actions { justify-content: flex-end; }

.brand {
  display: grid;
  justify-items: center;
  line-height: 1.02;
  white-space: nowrap;
}

.brand strong {
  font-family: var(--decorative-font);
  font-size: 29px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #F7F0F5;
}

.brand span {
  margin-top: 2px;
  font-family: var(--decorative-font);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.055em;
  text-transform: uppercase;
  color: rgba(236, 200, 247, 0.76);
}

.menu-button,
.clock {
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(236, 200, 247, 0.24);
  background: linear-gradient(180deg, rgba(247, 240, 245, 0.16), rgba(236, 200, 247, 0.07));
  color: #F7F0F5;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 14px rgba(0,0,0,0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: 0.18s ease;
}

.menu-button {
  font-family: var(--decorative-font);
  letter-spacing: 0.025em;
}

.nav-button.about-nav {
  font-size: 15px;
  padding-inline: 18px;
}

.menu-button:hover {
  background: linear-gradient(180deg, rgba(80, 133, 77, 0.28), rgba(236, 200, 247, 0.10));
  border-color: rgba(80, 133, 77, 0.46);
  transform: translateY(-1px);
}

.menu-button.yellow {
  background: linear-gradient(180deg, rgba(247, 240, 245, 0.18), rgba(236, 200, 247, 0.08));
}

.clock {
  font-family: "Share Tech Mono", monospace;
  color: var(--pink);
  background: linear-gradient(180deg, rgba(236, 200, 247, 0.14), rgba(80, 133, 77, 0.07));
}

.sep {
  width: 1px;
  height: 18px;
  background: rgba(236, 200, 247, 0.22);
}

.desktop {
  position: fixed;
  top: 64px;
  bottom: 24px;
  left: 50%;
  width: min(1240px, 100vw);
  transform: translateX(-50%);
  overflow: hidden;
}

.window {
  position: absolute;
  z-index: 1;
  min-width: 210px;
  max-width: min(95vw, 640px);
  background: linear-gradient(145deg, rgba(247, 240, 245, 0.56), rgba(236, 200, 247, 0.22));
  border: 1px solid rgba(247, 240, 245, 0.24);
  border-radius: 18px;
  box-shadow:
    0 20px 46px rgba(0, 0, 0, 0.24),
    0 0 0 1px rgba(255,255,255,0.06),
    inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(20px) saturate(1.18);
  -webkit-backdrop-filter: blur(20px) saturate(1.18);
  overflow: hidden;
}

.window::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 14px;
  pointer-events: none;
}

.window::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 8%, rgba(255,255,255,0.22), transparent 30%),
    radial-gradient(circle at 92% 10%, rgba(236,200,247,0.12), transparent 34%);
  pointer-events: none;
  opacity: 0.8;
}

.window.active {
  border-color: rgba(236, 200, 247, 0.42);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.34),
    0 0 42px rgba(236, 200, 247, 0.10),
    0 0 0 1px rgba(80, 133, 77, 0.20),
    inset 0 1px 0 rgba(255,255,255,0.30);
}

.window-header,
.modal-header {
  height: 38px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-inline: 12px;
  user-select: none;
  border-bottom: 1px solid rgba(247, 240, 245, 0.12);
  background:
    linear-gradient(90deg, rgba(236, 200, 247, 0.10), transparent 28%, transparent 72%, rgba(80, 133, 77, 0.12)),
    rgba(13, 12, 13, 0.56);
  backdrop-filter: blur(16px) saturate(1.12);
  -webkit-backdrop-filter: blur(16px) saturate(1.12);
}

.window-header { cursor: grab; }
.window-header:active { cursor: grabbing; }

.window.active .window-header {
  background:
    linear-gradient(90deg, rgba(255,230,0,0.05), transparent 18%, transparent 82%, rgba(236,200,247,0.18)),
    rgba(13, 12, 13, 0.68);
  border-bottom-color: rgba(236, 200, 247, 0.22);
}

.modal-header {
  background:
    linear-gradient(90deg, rgba(236, 200, 247, 0.12), transparent 24%, transparent 76%, rgba(80, 133, 77, 0.14)),
    rgba(13, 12, 13, 0.62);
  border-bottom-color: rgba(247, 240, 245, 0.16);
  backdrop-filter: blur(18px) saturate(1.14);
  -webkit-backdrop-filter: blur(18px) saturate(1.14);
}

.window-header > span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100% - 92px);
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--decorative-font);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #F7F0F5;
  white-space: nowrap;
  text-transform: none;
}

.window.active .window-header > span { color: var(--pink); }

.dots {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 5px;
}

.dots span {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  border: 1px solid rgba(247, 240, 245, 0.38);
  background: rgba(247, 240, 245, 0.12);
}

.dots span:first-child { background: var(--pink); }

.dots span.purple,
.dots span.violet,
.dots span.gold,
.dots span.green,
.dots span.red {
  background: rgba(80, 133, 77, 0.64);
}

.window.active .dots span:first-child { background: var(--yellow); }

.window-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px;
  background:
    radial-gradient(circle at 12px 12px, rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(145deg, rgba(247, 240, 245, 0.34), rgba(236, 200, 247, 0.16));
  background-size: 18px 18px, auto;
}

.item-card {
  width: 102px;
  min-height: 136px;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(247, 240, 245, 0.20);
  background: rgba(255, 255, 255, 0.30);
  box-shadow:
    0 10px 20px rgba(0,0,0,0.10),
    inset 0 1px 0 rgba(255,255,255,0.20);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
  cursor: pointer;
  transition: 0.18s ease;
}

.item-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.42);
  box-shadow:
    0 18px 34px rgba(0,0,0,0.18),
    0 0 24px rgba(236,200,247,0.14);
  border-color: rgba(236, 200, 247, 0.36);
}

.item-card:active { transform: translateY(-1px); }

.item-icon {
  width: 102px;
  height: 96px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 42%, rgba(236, 200, 247, 0.34), transparent 58%),
    radial-gradient(circle at 30% 18%, rgba(255,255,255,0.42), transparent 28%),
    linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(80,133,77,0.10) 100%);
  font-size: 36px;
  opacity: 0.95;
  overflow: hidden;
}

.item-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.item-label {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 8px 8px 10px;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  background: rgba(255, 255, 255, 0.20);
  color: var(--text);
}

.window.large {
  min-width: 260px;
}

.window:has(.window-header span) {
  min-width: 230px;
}

.window-links {
  width: min(360px, calc(100vw - 24px));
  min-width: min(360px, calc(100vw - 24px));
}

.window-encounters {
  width: min(390px, calc(100vw - 24px));
  min-width: min(390px, calc(100vw - 24px));
  max-width: min(390px, calc(100vw - 24px));
}

.window-encounters .window-body {
  gap: 12px;
  padding: 14px;
  justify-content: center;
  flex-wrap: nowrap;
}

.window-encounters .item-card {
  width: 112px;
  min-width: 112px;
  max-width: 112px;
  min-height: 152px;
  flex: 0 0 112px;
}

.window-encounters .item-icon {
  width: 112px;
  min-width: 112px;
  height: 96px;
}

.window-encounters .item-label {
  min-height: 56px;
  padding: 8px 8px 10px;
  font-size: 11px;
  line-height: 1.18;
  white-space: normal;
  overflow-wrap: anywhere;
}

.window-work {
  width: min(652px, calc(100vw - 24px));
  min-width: min(652px, calc(100vw - 24px));
}

.window-work .window-body {
  gap: 12px;
  padding: 14px;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: hidden;
}

.window-work .item-card {
  width: 145px;
  min-width: 145px;
  min-height: 222px;
}

.window-work .item-icon {
  width: 145px;
  height: 145px;
}

.window-work .item-label {
  min-height: 76px;
  padding: 8px 9px 10px;
  font-size: 11px;
  line-height: 1.18;
  letter-spacing: 0;
}

.window-links .window-header > span {
  max-width: calc(100% - 104px);
}

.window-links .window-body {
  justify-content: center;
}

.window.large .window-body {
  padding: 18px;
}

.window.large .item-card {
  width: 220px;
  min-height: 258px;
}

.window.large .item-icon {
  width: 220px;
  height: 208px;
  font-size: 68px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: grid;
  place-items: center;
  padding: 18px;
  background:
    radial-gradient(circle at 18% 18%, rgba(80, 133, 77, 0.12), transparent 30%),
    radial-gradient(circle at 82% 20%, rgba(236, 200, 247, 0.12), transparent 28%),
    rgba(13, 12, 13, 0.52);
  backdrop-filter: blur(10px) saturate(1.12);
  -webkit-backdrop-filter: blur(10px) saturate(1.12);
}

.modal-window {
  width: min(760px, 96vw);
  max-height: 90vh;
  overflow: auto;
  padding: 0;
  border: 1px solid rgba(247,240,245,0.26);
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(247, 240, 245, 0.62), rgba(236, 200, 247, 0.30));
  color: var(--text);
  backdrop-filter: blur(24px) saturate(1.18);
  -webkit-backdrop-filter: blur(24px) saturate(1.18);
  box-shadow:
    0 26px 68px rgba(0, 0, 0, 0.46),
    0 0 48px rgba(236,200,247,0.12),
    0 0 0 1px rgba(255,255,255,0.07),
    inset 0 1px 0 rgba(255,255,255,0.30);
  animation: popIn .16s ease;
}

@keyframes popIn {
  from { transform: scale(0.98) translateY(6px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

.modal-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.modal-tag {
  position: relative;
  z-index: 1;
  font-family: var(--decorative-font);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: rgba(247, 240, 245, 0.68);
}

.modal-header strong {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--main-font);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: #F7F0F5;
  white-space: nowrap;
}

.modal-header button {
  position: relative;
  z-index: 1;
  margin-left: auto;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: rgba(247,240,245,0.14);
  color: #F7F0F5;
  font-size: 18px;
  cursor: pointer;
  transition: 0.18s ease;
}

.modal-header button:hover { background: rgba(247,240,245,0.24); }

.modal-body {
  padding: 28px 32px 34px;
  font-family: var(--text-font);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.65;
  background:
    radial-gradient(circle at 16px 16px, rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(145deg, rgba(247, 240, 245, 0.40), rgba(236, 200, 247, 0.18));
  background-size: 20px 20px, auto;
  color: #181518;
}

.modal-body p + p { margin-top: 10px; }

.modal-body h3 {
  margin: 14px 0 6px;
  font-family: var(--main-font);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--modal-accent);
}

.modal-body strong {
  color: var(--text);
  font-family: var(--text-font);
  font-weight: 600;
}

.modal-hero {
  height: 204px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 18px;
  background:
    radial-gradient(circle at 50% 50%, rgba(236, 200, 247, 0.48), transparent 52%),
    linear-gradient(180deg, rgba(80, 133, 77, 0.10) 0%, rgba(255,255,255,0.42) 100%);
  font-size: 72px;
  overflow: hidden;
}

.modal-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-hero {
  height: 260px;
}

.project-preview-card {
  margin-top: 14px;
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(236,200,247,0.14)),
    rgba(255,255,255,0.26);
  box-shadow:
    0 12px 26px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.project-preview-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.14);
}

.project-intro-card {
  display: grid;
  gap: 10px;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(247, 240, 245, 0.20);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.42), rgba(236,200,247,0.16)),
    rgba(255,255,255,0.28);
  box-shadow:
    0 12px 28px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.30);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.project-intro-card p {
  margin: 0;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
}

.project-link {
  width: fit-content;
  margin-top: 0;
}

.project-link.secondary {
  background: var(--modal-accent-soft);
  color: var(--modal-accent);
  box-shadow: none;
  border: 1px solid var(--modal-accent-border);
}

.project-status {
  width: fit-content;
  margin: 0 0 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--modal-accent-soft);
  color: var(--modal-accent);
  font-family: var(--main-font);
  font-size: 13px;
  font-weight: 400;
}

.project-meta {
  display: grid;
  gap: 8px;
  margin-top: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(81,73,94,0.10)),
    rgba(255,255,255,0.26);
  border: 1px solid rgba(247,240,245,0.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.26);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.project-meta-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
  align-items: baseline;
}

.project-meta-row span {
  color: var(--muted);
  font-family: var(--main-font);
  font-size: 13px;
}

.project-meta-row strong {
  font-family: var(--text-font);
  font-size: 16px;
  font-weight: 400;
}

.project-contributions {
  margin-top: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(236,200,247,0.14)),
    rgba(255,255,255,0.26);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.project-contributions h3 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.project-contributions-intro {
  width: fit-content;
  margin: 8px auto 14px;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid var(--modal-accent-border);
  background: rgba(81, 73, 94, 0.14);
  font-family: var(--main-font);
  font-size: 13px;
  color: var(--modal-accent);
  text-align: center;
}

.project-contributions ul {
  margin: 10px 0 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  counter-reset: contribution;
}

.project-contributions li {
  position: relative;
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 8px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(81, 73, 94, 0.18);
  background: rgba(255, 255, 255, 0.28);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
}

.project-contributions li::before {
  counter-increment: contribution;
  content: counter(contribution) ".";
  width: auto;
  height: auto;
  display: block;
  padding-top: 1px;
  border-radius: 0;
  background: transparent;
  border: 0;
  color: rgba(81, 73, 94, 0.72);
  font-family: var(--main-font);
  font-size: 13px;
  line-height: 1.45;
  box-shadow: none;
}

.project-award-card {
  margin-top: 14px;
  padding: 16px 18px 18px;
  border-radius: 18px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(236,200,247,0.14)),
    rgba(255,255,255,0.26);
  box-shadow:
    0 12px 26px rgba(0,0,0,0.06),
    inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.project-award-card h3 {
  color: var(--modal-accent);
  text-align: center;
  margin-top: 0;
}

.project-award-card img {
  width: min(420px, 100%);
  display: block;
  margin: 14px auto 0;
  padding: 14px;
  border-radius: 16px;
  object-fit: contain;
  background:
    radial-gradient(circle at 50% 50%, rgba(236, 200, 247, 0.10), transparent 58%),
    linear-gradient(145deg, rgba(31, 27, 37, 0.96), rgba(13, 12, 13, 0.94));
  box-shadow:
    0 12px 26px rgba(0,0,0,0.26),
    inset 0 1px 0 rgba(255,255,255,0.12);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.chip {
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(81, 73, 94, 0.32);
  border: 1px solid rgba(81, 73, 94, 0.56);
  color: #14101a;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
}

.chip:nth-child(2n) {
  background: rgba(81, 73, 94, 0.32);
  border-color: rgba(81, 73, 94, 0.56);
}

.modal-link {
  font-family: var(--main-font);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--modal-accent);
  color: #F7F0F5;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.015em;
  box-shadow: 0 10px 20px rgba(81, 73, 94, 0.24);
}

.modal-link::after {
  content: "•";
  color: var(--yellow);
  font-size: 16px;
  line-height: 1;
}

.modal-link.no-dot::after {
  content: none;
}

.modal-link.small {
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 11px;
}

.article-row .modal-link.small {
  display: flex;
  width: min(180px, 100%);
  justify-content: center;
  margin: 16px auto 0;
  padding: 10px 22px;
  font-size: 13px;
}

.article-row .modal-link.small::after {
  content: none;
}

.timeline-item {
  margin-bottom: 18px;
  padding-left: 16px;
  border-left: 2px solid var(--modal-accent-border);
}

.timeline-item .chips {
  margin-top: 10px;
}

.timeline-title {
  font-family: var(--main-font) !important;
  font-size: 18px;
  font-weight: 600 !important;
  color: #17121d;
  letter-spacing: 0.005em;
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 18px;
}

.resume-actions .modal-link {
  margin-top: 0;
}

.timeline-item span,
.article-row span {
  display: inline-block;
  margin: 3px 0 6px;
  color: var(--muted);
  font-family: var(--main-font);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}

.press-list {
  display: grid;
  gap: 12px;
  font-size: 16px;
}

.press-list h3 {
  margin-top: 4px;
  margin-bottom: 2px;
}

.press-card {
  position: relative;
  display: grid;
  gap: 7px;
  padding: 16px 18px;
  border-radius: 20px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(236,200,247,0.14)),
    rgba(255,255,255,0.24);
  box-shadow:
    0 12px 26px rgba(0,0,0,0.06),
    inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
  overflow: hidden;
}

.press-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 12px;
  width: 3px;
  border-radius: 999px;
  background: var(--modal-accent);
  opacity: 0.75;
}

.press-card strong {
  font-family: var(--text-font);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.35;
}

.press-card p {
  margin: 0;
  color: var(--muted);
  font-family: var(--text-font);
  font-size: 17px;
}

.press-year {
  font-family: var(--main-font);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--muted);
}

.press-link {
  width: fit-content;
  margin-top: 4px;
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--modal-accent-soft);
  border: 1px solid var(--modal-accent-border);
  color: var(--modal-accent);
  font-family: var(--main-font);
  font-size: 15px;
  font-weight: 400;
  transition: 0.18s ease;
}

.press-link:hover {
  background: rgba(81, 73, 94, 0.20);
  transform: translateY(-1px);
}

.articles-list {
  display: grid;
  gap: 14px;
}

.article-row {
  margin-bottom: 0;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background: rgba(255,255,255,0.24);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
}

.article-row h3 {
  margin: 0 auto;
  color: var(--text);
  font-family: var(--main-font);
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.18;
  text-align: center;
  max-width: 34ch;
}

.article-cover {
  width: min(320px, 100%);
  aspect-ratio: 16 / 9;
  margin: 14px auto;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(13, 12, 13, 0.08);
  background:
    radial-gradient(circle at 50% 50%, rgba(236, 200, 247, 0.36), transparent 58%),
    linear-gradient(180deg, rgba(255,255,255,0.72), rgba(80,133,77,0.10));
  color: var(--muted);
  font-family: var(--main-font);
  font-size: 12px;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.article-row p {
  margin: 0 auto;
  max-width: 62ch;
  text-align: center;
  font-family: var(--text-font);
  font-size: 17px;
}

.community-section {
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid rgba(13, 12, 13, 0.08);
}

.community-section h3 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 14px;
}

.community-card {
  height: 108px;
  display: grid;
  place-items: center;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid rgba(81, 73, 94, 0.16);
  background:
    linear-gradient(145deg, rgba(255,255,255,0.46), rgba(236,200,247,0.16)),
    rgba(255,255,255,0.32);
  box-shadow:
    0 12px 24px rgba(0,0,0,0.07),
    inset 0 1px 0 rgba(255,255,255,0.34);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
  overflow: hidden;
}

.community-card img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 84px;
  object-fit: contain;
  display: block;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.under-construction {
  min-height: 220px;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: var(--main-font);
  font-size: 24px;
  color: var(--modal-accent);
  text-align: center;
}

.contact-panel {
  display: grid;
  gap: 16px;
}

.contact-panel p {
  margin: 0 auto;
  max-width: 58ch;
  font-family: var(--text-font);
  font-size: 17px;
  line-height: 1.65;
  text-align: center;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.contact-form {
  display: grid;
  gap: 12px;
  width: min(520px, 100%);
  margin: 8px auto 0;
}

.contact-form label {
  display: grid;
  gap: 6px;
  font-family: var(--main-font);
  font-size: 13px;
  color: var(--modal-accent);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--modal-accent-border);
  background: rgba(255, 255, 255, 0.38);
  color: var(--text);
  font-family: var(--text-font);
  font-size: 16px;
  outline: none;
  resize: vertical;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgba(81, 73, 94, 0.52);
  background: rgba(255, 255, 255, 0.52);
}

.contact-submit {
  width: fit-content;
  min-width: 170px;
  margin: 4px auto 0;
  cursor: pointer;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 0;
  background: var(--modal-accent);
  color: #F7F0F5;
  font-family: var(--main-font);
  font-size: 17px;
  font-weight: 400;
  box-shadow: 0 10px 20px rgba(81, 73, 94, 0.24);
  transition: 0.18s ease;
}

.contact-button:hover {
  background: #62586f;
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(81, 73, 94, 0.30);
}

.contact-email {
  color: var(--modal-accent);
  font-weight: 400;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--decorative-font);
  font-size: 15px;
  color: rgba(247, 240, 245, 0.54);
  background: transparent;
}

@media (max-width: 920px) {
  .topbar {
    position: sticky;
    height: auto;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-block: 12px;
  }

  .socials,
  .nav-actions {
    flex-wrap: wrap;
    justify-content: center;
  }

  .desktop {
    position: static;
    display: grid;
    gap: 18px;
    padding: 18px;
    overflow: visible;
  }

  .app-shell {
    overflow: visible;
    padding-bottom: 24px;
  }

  .window,
  .window.large {
    position: static;
    width: 100%;
    max-width: 100%;
  }

  .window-header { cursor: default; }

  .window-body {
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .window-work .window-body {
    overflow-x: visible;
    flex-wrap: wrap;
  }

  footer {
    position: static;
    padding: 12px 0 18px;
  }
}

@media (max-width: 520px) {
  .community-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .community-card { height: 96px; }
  .nav-button.about-nav { font-size: 13px; }
  .article-row h3 { font-size: 22px; }
  .article-cover { width: 100%; }
  .brand strong { font-size: 22px; }
  .brand span { font-size: 10px; }
  .menu-button,
  .clock { font-size: 11px; padding-inline: 12px; }
  .window-header > span,
  .modal-header strong { font-size: 20px; }
  .modal-about .modal-header strong { font-size: 20px; }
  .modal-body { padding: 20px; font-size: 16px; }
  .modal-header strong { max-width: 56%; overflow: hidden; text-overflow: ellipsis; }
}
`;
