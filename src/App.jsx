import React, { useEffect, useMemo, useState } from "react";

const profile = {
  name: "VALENTINA GODOVETS",
  subtitle: "Game Designer · Level Designer · Systems Designer",
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
        />
        <TimelineItem
          title="Game Designer — Eriars"
          date="Dec 2024 – Present"
          text="Prototyped core gameplay systems, designed magic combat and movement mechanics, and collaborated with narrative and art teams."
        />
        <Chips items={["COMBAT DESIGN", "LEVEL DESIGN", "ENCOUNTER DESIGN", "UNREAL ENGINE", "ARTICY", "NOTION", "GITHUB"]} />
        <a className="modal-link no-dot" href="#">DOWNLOAD PDF</a>
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
        <p>For collaborations, commissions, hiring, or just to say hi:</p>

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
          <a className="contact-button" href="https://www.backloggery.com/valenandia" target="_blank" rel="noreferrer">
            Backloggery
          </a>
          <a className="contact-button" href="https://x.com/valenandia" target="_blank" rel="noreferrer">
            X / TW
          </a>
        </div>
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
        label: "PROJECT THREE",
        modalTitle: "Project Three",
        tag: "PROJECT",
        description: "Use this slot for a polished portfolio piece with screenshots, links, and your contribution.",
        chips: ["LEVEL DESIGN", "2024"],
        action: "VIEW PROJECT",
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
        icon: "🤝",
        label: "ENCOUNTER 1",
        modalTitle: "Encounter One",
        tag: "ENCOUNTER",
        description: "A person, place, or moment that shaped your work and changed how you think about design.",
        chips: ["COLLABORATION", "2024"],
        action: "THEIR SITE",
      },
      {
        id: "encounter-2",
        icon: "🤝",
        label: "ENCOUNTER 2",
        modalTitle: "Encounter Two",
        tag: "ENCOUNTER",
        description: "Describe a collaboration, event, conference, jam, or creative meeting.",
        chips: ["COLLABORATION"],
        action: "THEIR SITE",
      },
      {
        id: "encounter-3",
        icon: "🤝",
        label: "ENCOUNTER 3",
        modalTitle: "Encounter Three",
        tag: "ENCOUNTER",
        description: "Another meaningful creative connection or experience.",
        chips: ["COLLABORATION"],
        action: "THEIR SITE",
      },
    ],
  },
  {
    id: "work",
    title: "WORK EXAMPLES",
    accent: "violet",
    items: [
      { id: "work-1", icon: "💼", label: "WORK ONE", modalTitle: "Work Example One", tag: "WORK", description: "Describe the brief, what you created, tools used, and the outcome.", chips: ["CLIENT WORK", "2024"], action: "VIEW FULL" },
      { id: "work-2", icon: "💼", label: "WORK TWO", modalTitle: "Work Example Two", tag: "WORK", description: "Add a second work sample here.", chips: ["CLIENT WORK"], action: "VIEW FULL" },
      { id: "work-3", icon: "💼", label: "WORK THREE", modalTitle: "Work Example Three", tag: "WORK", description: "Add a third work sample here.", chips: ["CLIENT WORK"], action: "VIEW FULL" },
      { id: "work-4", icon: "💼", label: "WORK FOUR", modalTitle: "Work Example Four", tag: "WORK", description: "Add a fourth work sample here.", chips: ["CLIENT WORK"], action: "VIEW FULL" },
      { id: "work-5", icon: "💼", label: "WORK FIVE", modalTitle: "Work Example Five", tag: "WORK", description: "Add a fifth work sample here.", chips: ["CLIENT WORK"], action: "VIEW FULL" },
      { id: "work-6", icon: "💼", label: "WORK SIX", modalTitle: "Work Example Six", tag: "WORK", description: "Add a sixth work sample here.", chips: ["CLIENT WORK"], action: "VIEW FULL" },
    ],
  },
  {
    id: "games",
    title: "FREE GAMES",
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
    title: "LINKS / WEB RING",
    accent: "green",
    items: [
      { id: "link-1", icon: "🔗", label: "FRIEND SITE 1", modalTitle: "Friend Site 1", tag: "LINK", description: "Who is this? Why are they in your web ring?", chips: ["ARTIST", "GAME DEV"], action: "VISIT SITE" },
      { id: "link-2", icon: "🔗", label: "FRIEND SITE 2", modalTitle: "Friend Site 2", tag: "LINK", description: "Add a friend, collaborator, or reference website.", chips: ["ARTIST"], action: "VISIT SITE" },
      { id: "link-3", icon: "🔗", label: "FRIEND SITE 3", modalTitle: "Friend Site 3", tag: "LINK", description: "Add another friend, collaborator, or reference website.", chips: ["ARTIST"], action: "VISIT SITE" },
    ],
  },
];

const initialPositions = {
  projects: { x: 32, y: 28 },
  wishlist: { x: 520, y: 32 },
  encounters: { x: 940, y: 38 },
  work: { x: 72, y: 300 },
  games: { x: 560, y: 360 },
  links: { x: 980, y: 330 },
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

function TimelineItem({ title, date, text }) {
  return (
    <div className="timeline-item">
      <p><strong>{title}</strong></p>
      <span>{date}</span>
      <p>{text}</p>
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
          <button className={`menu-button ${item.id === "press" ? "yellow" : ""}`} onClick={() => onOpen(item)} key={item.id}>{item.label}</button>
        ))}
        <div className="sep" />
        <Clock />
      </div>
    </header>
  );
}

function DesktopWindow({ win, active, onFocus, onOpen }) {
  const [position, setPosition] = useState(initialPositions[win.id] || { x: 24, y: 24 });
  const [drag, setDrag] = useState(null);

  useEffect(() => {
    if (!drag) return;

    const handleMove = (event) => {
      const clientX = event.touches?.[0]?.clientX ?? event.clientX;
      const clientY = event.touches?.[0]?.clientY ?? event.clientY;
      const maxX = Math.max(0, window.innerWidth - drag.width - 8);
      const maxY = Math.max(0, window.innerHeight - drag.height - 40);
      setPosition({
        x: Math.min(Math.max(0, clientX - drag.offsetX), maxX),
        y: Math.min(Math.max(0, clientY - drag.offsetY), maxY),
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
    setDrag({
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  return (
    <section
      className={`window ${active ? "active" : ""} ${win.large ? "large" : ""}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={() => onFocus(win.id)}
    >
      <div className={`window-header ${win.accent}`} onMouseDown={startDrag} onTouchStart={startDrag}>
        <WindowDots accent={win.accent} />
        <span>{win.title}</span>
      </div>
      <div className="window-body">
        {win.items.map((item) => (
          <button className="item-card" onClick={() => onOpen({ ...item, accent: win.accent })} key={item.id}>
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
      <dialog className="modal-window" open onMouseDown={(event) => event.stopPropagation()}>
        <div className={`modal-header ${modal.accent || "purple"}`}>
          <WindowDots accent={modal.accent || "purple"} />
          <span className="modal-tag">{modal.label || modal.tag}</span>
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
                  <ul>
                    {modal.contributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
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
  const [activeWindow, setActiveWindow] = useState("projects");
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
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700;800&family=Fraunces:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');

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
  --decorative-font: "KelmscotDecorative", "Cormorant Garamond", Georgia, serif;
}

* { box-sizing: border-box; }

html, body, #root { min-height: 100%; }

body {
  margin: 0;
  color: var(--text);
  font-family: "Spectral", Georgia, serif;
  background: #0D0C0D;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }

.app-shell {
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 16% 16%, rgba(80, 133, 77, 0.18), transparent 32%),
    radial-gradient(circle at 82% 18%, rgba(236, 200, 247, 0.13), transparent 30%),
    radial-gradient(circle at 54% 84%, rgba(236, 200, 247, 0.10), transparent 34%),
    radial-gradient(circle at 86% 82%, rgba(80, 133, 77, 0.10), transparent 28%),
    #0D0C0D;
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
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.025em;
  color: #F7F0F5;
}

.brand span {
  margin-top: 2px;
  font-family: "Fraunces", Georgia, serif;
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
  font-family: "Fraunces", Georgia, serif;
  letter-spacing: 0.025em;
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
  inset: 64px 0 24px 0;
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
  display: grid;
  place-items: center;
  padding: 8px 8px 10px;
  font-family: "Fraunces", Georgia, serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.18;
  text-align: center;
  background: rgba(255, 255, 255, 0.20);
  color: var(--text);
}

.window.large {
  min-width: 260px;
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
  font-family: "Fraunces", Georgia, serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: rgba(247, 240, 245, 0.68);
}

.modal-header strong {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--decorative-font);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.025em;
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
  font-size: 16px;
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
  font-family: var(--decorative-font);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--green);
}

.modal-body strong {
  color: var(--text);
  font-family: "Spectral", Georgia, serif;
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
  background: rgba(80, 133, 77, 0.12);
  color: var(--green);
  box-shadow: none;
  border: 1px solid rgba(80, 133, 77, 0.22);
}

.project-status {
  width: fit-content;
  margin: 0 0 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(80, 133, 77, 0.10);
  color: var(--green);
  font-family: "Fraunces", Georgia, serif;
  font-size: 12px;
  font-weight: 600;
}

.project-meta {
  display: grid;
  gap: 8px;
  margin-top: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.36), rgba(80,133,77,0.08)),
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
  font-size: 13px;
}

.project-meta-row strong {
  font-size: 15px;
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

.project-contributions ul {
  margin: 8px 0 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.project-contributions li {
  padding-left: 0;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.chip {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(80, 133, 77, 0.10);
  border: 1px solid rgba(80, 133, 77, 0.18);
  color: var(--text);
  font-family: "Fraunces", Georgia, serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.chip:nth-child(2n) {
  background: rgba(236, 200, 247, 0.28);
  border-color: rgba(236, 200, 247, 0.34);
}

.modal-link {
  font-family: "Fraunces", Georgia, serif;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--green);
  color: #F7F0F5;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.015em;
  box-shadow: 0 10px 20px rgba(80, 133, 77, 0.22);
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
  margin-bottom: 14px;
  padding-left: 16px;
  border-left: 2px solid rgba(80, 133, 77, 0.28);
}

.timeline-item span,
.article-row span {
  display: inline-block;
  margin: 3px 0 6px;
  color: var(--muted);
  font-family: "Spectral", Georgia, serif;
  font-size: 13px;
  font-weight: 500;
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
  background: var(--green);
  opacity: 0.75;
}

.press-card strong {
  font-family: "Spectral", Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.35;
}

.press-card p {
  margin: 0;
  color: var(--muted);
  font-family: "Spectral", Georgia, serif;
  font-size: 16px;
}

.press-year {
  font-family: "Spectral", Georgia, serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--muted);
}

.press-link {
  width: fit-content;
  margin-top: 4px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(80, 133, 77, 0.12);
  border: 1px solid rgba(80, 133, 77, 0.22);
  color: var(--green);
  font-family: "Fraunces", Georgia, serif;
  font-size: 12px;
  font-weight: 600;
  transition: 0.18s ease;
}

.press-link:hover {
  background: rgba(80, 133, 77, 0.18);
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
  font-family: var(--decorative-font);
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
  font-family: "Fraunces", Georgia, serif;
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
}

.community-section {
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid rgba(13, 12, 13, 0.08);
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.community-card {
  min-height: 82px;
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 18px;
  border: 1px solid rgba(247, 240, 245, 0.18);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.32), rgba(236,200,247,0.14)),
    rgba(255,255,255,0.22);
  box-shadow:
    0 10px 22px rgba(0,0,0,0.06),
    inset 0 1px 0 rgba(255,255,255,0.24);
  backdrop-filter: blur(12px) saturate(1.08);
  -webkit-backdrop-filter: blur(12px) saturate(1.08);
  overflow: hidden;
}

.community-card img {
  max-width: 100%;
  max-height: 64px;
  object-fit: contain;
  display: block;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(13, 12, 13, 0.12);
  background: rgba(255, 255, 255, 0.62);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.56),
    0 4px 10px rgba(0,0,0,0.06);
}

.contact-panel {
  display: grid;
  gap: 16px;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 0;
  background: var(--green);
  color: #F7F0F5;
  font-family: "Fraunces", Georgia, serif;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(80, 133, 77, 0.22);
  transition: 0.18s ease;
}

.contact-button:hover {
  background: #5f965b;
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(80, 133, 77, 0.28);
}

.contact-email {
  color: var(--green);
  font-weight: 600;
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
  font-family: "Fraunces", Georgia, serif;
  font-size: 11px;
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

  footer {
    position: static;
    padding: 12px 0 18px;
  }
}

@media (max-width: 520px) {
  .community-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .article-row h3 { font-size: 22px; }
  .article-cover { width: 100%; }
  .brand strong { font-size: 22px; }
  .brand span { font-size: 10px; }
  .menu-button,
  .clock { font-size: 11px; padding-inline: 12px; }
  .window-header > span,
  .modal-header strong { font-size: 22px; }
  .modal-body { padding: 20px; font-size: 15px; }
  .modal-header strong { max-width: 56%; overflow: hidden; text-overflow: ellipsis; }
}
`;
