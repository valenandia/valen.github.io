<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta
    name="description"
    content="Valentina Godovets — game designer and level designer. Projects, case studies, research and game jams."
  >

  <meta name="theme-color" content="#ffffff">

  <title>Valentina Godovets — Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Cormorant+Garamond:wght@500;600;700&display=swap"
    rel="stylesheet"
  >

  <style>
    /* ========================================
       BASIC SETTINGS
    ======================================== */

    :root {
      color-scheme: light;

      --background: #ffffff;
      --text: #322c3b;
      --muted: #786b80;
      --purple: #745584;

      --body-font: "Times New Roman", Times, serif;
      --title-font: "Eagle Lake", Georgia, serif;
      --detail-font: "Cormorant Garamond", Georgia, serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--background);
      color: var(--text);
      font-family: var(--body-font);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      max-width: 100%;
    }

    h1,
    h2,
    h3,
    p {
      margin: 0;
    }

    a:focus-visible {
      outline: 2px solid var(--purple);
      outline-offset: 5px;
    }

    .icon {
      width: 22px;
      height: 22px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex-shrink: 0;
    }

    .svg-library {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
    }

    /* ========================================
       PAGE LAYOUT
    ======================================== */

    .site-frame {
      max-width: 1600px;
      margin: auto;
      padding: 0 72px;
    }

    .site-header {
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .wordmark {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    .brand-image {
      width: min(500px, 70vw);
      max-height: 92px;
      object-fit: contain;
      filter: brightness(0);
    }

    .brand-subtitle {
      font-family: var(--detail-font);
      font-size: 15px;
      letter-spacing: .055em;
      text-transform: uppercase;
      color: #67506d;
    }

    .site-layout {
      display: grid;
      grid-template-columns: 64px minmax(0, 1fr);
      gap: 54px;
      min-height: calc(100vh - 235px);
    }

    .main-content {
      min-width: 0;
      padding: 48px 0 70px;
    }

    .main-content:focus {
      outline: none;
    }

    .page-heading {
      margin-bottom: 35px;
    }

    .page-heading h1 {
      font-family: var(--title-font);
      font-size: clamp(24px, 2.4vw, 32px);
      font-weight: 400;
      line-height: 1.55;
      overflow-wrap: anywhere;
    }

    /* ========================================
       LEFT NAVIGATION
    ======================================== */

    .sidebar {
      position: sticky;
      top: 0;
      align-self: start;
      padding-top: 48px;
      z-index: 10;
    }

    .main-nav {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .nav-link {
      position: relative;
      display: flex;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
    }

    .nav-icon {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;

      color: #745584;
      border: 1px solid #d8c8e3;
      border-radius: 12px;

      background:
        radial-gradient(
          circle at 18% 10%,
          #ffffff99,
          transparent 65%
        ),
        linear-gradient(
          145deg,
          #f2e8f8,
          #dacce8
        );

      box-shadow:
        inset 0 1px 0 #ffffff,
        0 4px 12px #80618d18;
    }

    .nav-link:hover .nav-icon,
    .nav-link[aria-current="page"] .nav-icon {
      color: #61406f;
      border-color: #c9a8d5;

      background:
        radial-gradient(
          circle at 18% 8%,
          #ffffff99,
          transparent 65%
        ),
        linear-gradient(
          145deg,
          #f1deef,
          #e2cceb
        );
    }

    .nav-tooltip {
      position: absolute;
      top: 50%;
      left: calc(100% + 13px);
      transform: translateY(-50%);

      width: max-content;
      max-width: 260px;

      padding: 10px 14px;
      border-radius: 5px;

      background: #f7f0f5;
      color: #43324f;
      box-shadow: 0 6px 22px #17154420;

      font-family: var(--detail-font);
      font-size: 17px;
      line-height: 1.5;

      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .nav-link:hover .nav-tooltip,
    .nav-link:focus-visible .nav-tooltip {
      opacity: 1;
      visibility: visible;
    }

    /* ========================================
       HOME
    ======================================== */

    .home-hero {
      display: grid;
      grid-template-columns:
        minmax(0, .85fr)
        minmax(0, 1.15fr);

      align-items: center;
      gap: clamp(24px, 3vw, 44px);

      max-width: 1040px;
      margin: auto;
      padding: 16px 0 40px;
    }

    .portrait-wrap {
      width: 100%;
      max-width: 380px;
      justify-self: end;
    }

    .photo-placeholder {
      position: relative;
      aspect-ratio: 4 / 5;

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
      border: 1px solid #ddd0e2;
      border-radius: 110px 110px 3px 3px;

      background: #e9e1ed;
      color: #887291;
    }

    .photo-placeholder::before,
    .photo-placeholder::after {
      content: "";

      position: absolute;
      width: 175%;
      height: 110%;
      top: 42%;
      left: -35%;

      border: 1px solid #d9cadd;
      border-radius: 50%;

      transform: rotate(-25deg);
    }

    .photo-placeholder::after {
      top: 51%;
      left: -5%;
      transform: rotate(25deg);
    }

    .portrait-center {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .portrait-center .icon {
      width: 32px;
      height: 32px;
    }

    .portrait-center span {
      font-size: 12px;
    }

    .portrait-caption {
      position: absolute;
      bottom: 22px;

      font-size: 9px;
      letter-spacing: .15em;
    }

    .home-copy {
      min-width: 0;
      max-width: 560px;
    }

    .bio p {
      font-family: var(--body-font);
      font-size: 18px;
      line-height: 1.9;
      color: #4c4254;
    }

    .bio p + p {
      margin-top: 22px;
    }

    .bio strong {
      font-weight: 700;
    }

    /* ========================================
       CONTACTS
    ======================================== */

    .contact-strip {
      padding: 30px 0;
      margin-top: 10px;
      text-align: center;
    }

    .contact-strip > p {
      font-family: var(--title-font);
      font-size: 27px;
      font-weight: 400;
      line-height: 1.65;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 19px;
    }

    .social-links a {
      display: flex;
      align-items: center;
      gap: 8px;

      font-family: var(--title-font);
      font-size: 13px;
      line-height: 1.5;

      color: #6b5d74;
    }

    .social-links .icon {
      width: 14px;
      height: 14px;
    }

    /* ========================================
       PROJECT AND CASE CARDS
    ======================================== */

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 32px 22px;
    }

    .portfolio-card {
      display: block;
      min-width: 0;
    }

    .card-cover {
      position: relative;
      aspect-ratio: 1.6;

      overflow: hidden;
      border-radius: 3px;

      background: #e8e1eb;
    }

    .card-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .2s;
    }

    .portfolio-card:hover .card-cover img {
      transform: scale(1.025);
    }

    .card-copy {
      padding-top: 17px;
    }

    .eyebrow {
      color: #786083;

      font-family: var(--detail-font);
      font-size: 12px;
      font-weight: 600;
      line-height: 1.7;

      letter-spacing: .04em;
      text-transform: uppercase;
    }

    .card-copy h2 {
      margin-top: 7px;

      font-family: var(--title-font);
      font-size: 18px;
      font-weight: 400;
      line-height: 1.65;

      overflow-wrap: anywhere;
    }

    .card-copy p {
      margin-top: 6px;
      color: #75637e;
      font-size: 15px;
      line-height: 1.6;
    }

    /* ========================================
       TABS
    ======================================== */

    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-bottom: 32px;
    }

    .tabs a {
      padding: 9px 2px;
      color: #806788;

      font-family: var(--title-font);
      font-size: 14px;
      line-height: 1.5;
    }

    .tabs a[aria-current="page"] {
      padding-inline: 14px;
      border-radius: 7px;

      color: #171544;
      background: #ecc8f733;
    }

    .empty-section {
      min-height: 180px;
    }

    .under-construction {
      margin: 30px 0;
      color: #75637e;

      font-family: var(--title-font);
      font-size: 17px;
      line-height: 1.8;
    }

    /* ========================================
       CASE AND PROJECT PAGES
    ======================================== */

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 9px;

      margin-bottom: 30px;
      color: #8a7b94;

      font-size: 14px;
    }

    .back-link .icon {
      width: 16px;
      height: 16px;
    }

    .case-banner {
      height: 300px;
    }

    .case-banner img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .case-pagination {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      margin-top: 45px;
    }

    .text-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;

      color: #60466e;

      font-family: var(--title-font);
      font-size: 13px;
      line-height: 1.7;
    }

    .project-hero img {
      width: 100%;
      max-height: 420px;
      object-fit: contain;
    }

    .project-description {
      max-width: 760px;
      margin: 30px 0 24px;

      font-size: 18px;
      line-height: 1.9;
      color: #6e6376;
    }

    .project-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      margin: 20px 0 35px;
    }

    .project-meta {
      margin: 30px 0;
    }

    .project-meta > div {
      display: grid;
      grid-template-columns: 130px 1fr;
      gap: 20px;

      padding: 12px 0;

      font-size: 16px;
      line-height: 1.7;
    }

    .project-meta dt {
      color: var(--muted);
    }

    .project-meta dd {
      margin: 0;
    }

    .contributions h2 {
      font-family: var(--title-font);
      font-size: 24px;
      font-weight: 400;
      line-height: 1.6;
    }

    .contributions li {
      margin: 12px 0;

      font-size: 16px;
      line-height: 1.85;
      color: #776a80;
    }

    .project-award {
      margin-top: 30px;
    }

    .project-award img {
      max-height: 260px;
      object-fit: contain;
    }

    /* ========================================
       ARTICLES
    ======================================== */

    .articles-list {
      display: grid;
      gap: 30px;
    }

    .article-card {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 26px;
      padding-bottom: 30px;
    }

    .article-card img {
      width: 100%;
      aspect-ratio: 1.4;
      object-fit: cover;
    }

    .article-card h2 {
      margin: 5px 0 12px;

      font-family: var(--title-font);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.8;
    }

    .article-card p {
      color: var(--muted);
      font-size: 16px;
      line-height: 1.8;
    }

    /* ========================================
       AWARDS AND PRESS
    ======================================== */

    .award-card {
      padding: 14px 0;
    }

    .award-icon {
      height: 90px;

      display: flex;
      align-items: center;

      color: #806189;
    }

    .award-icon .icon {
      width: 34px;
      height: 34px;
    }

    .award-card h2 {
      margin: 10px 0;

      font-family: var(--title-font);
      font-size: 18px;
      font-weight: 400;
      line-height: 1.7;
    }

    .award-card p {
      font-size: 16px;
      line-height: 1.6;
    }

    .award-card small {
      display: block;
      margin-top: 8px;

      color: var(--muted);
      font-size: 14px;
      line-height: 1.7;
    }

    .year {
      color: #8c7295;

      font-family: var(--detail-font);
      font-size: 16px;
      line-height: 1.6;
    }

    .press-year-section {
      margin-bottom: 45px;
    }

    .press-year-section > h2 {
      margin-bottom: 22px;
      color: #7f648a;

      font-family: var(--detail-font);
      font-size: 32px;
      font-weight: 500;
      line-height: 1.5;
    }

    .press-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }

    .press-card h3 {
      font-family: var(--title-font);
      font-size: 14px;
      font-weight: 400;
      line-height: 1.8;
    }

    .press-card p {
      color: var(--muted);
      font-size: 15px;
    }

    /* ========================================
       FOOTER AND ACCESSIBILITY
    ======================================== */

    .site-footer {
      padding: 22px 0;
      text-align: center;

      color: #918797;
      font-size: 12px;
    }

    .skip-link {
      position: fixed;
      top: -60px;
      left: 20px;

      z-index: 100;
      padding: 10px;
      background: #ffffff;
    }

    .skip-link:focus {
      top: 10px;
    }

    /* ========================================
       RESPONSIVE LAYOUT
    ======================================== */

    @media (min-width: 1450px) {
      .site-layout {
        gap: 75px;
      }

      .home-hero {
        padding-top: 25px;
      }
    }

    @media (max-width: 1100px) {
      .site-frame {
        padding-inline: 48px;
      }

      .site-layout {
        grid-template-columns: 54px minmax(0, 1fr);
        gap: 35px;
      }

      .nav-link {
        width: 42px;
        height: 42px;
      }

      .card-copy h2 {
        font-size: 17px;
      }
    }

    @media (max-width: 800px) {
      .site-frame {
        padding-inline: 32px;
      }

      .site-header {
        height: 145px;
      }

      .brand-image {
        width: min(450px, 75vw);
      }

      .brand-subtitle {
        font-size: 13px;
      }

      .site-layout {
        grid-template-columns: 45px minmax(0, 1fr);
        gap: 24px;
      }

      .sidebar {
        padding-top: 30px;
      }

      .nav-link {
        width: 40px;
        height: 40px;
      }

      .main-content {
        padding-top: 30px;
      }

      .page-heading h1 {
        font-size: 28px;
      }

      .home-hero {
        gap: 24px;
        padding-top: 0;
      }

      .bio p {
        font-size: 17px;
        line-height: 1.8;
      }

      .card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px 18px;
      }

      .article-card {
        grid-template-columns: 1fr;
      }

      .article-card img {
        max-width: 340px;
      }

      .contact-strip > p {
        font-size: 24px;
      }
    }

    @media (max-width: 600px) {
      .site-frame {
        padding-inline: 24px;
      }

      .home-hero {
        grid-template-columns: minmax(0, 1fr);
        max-width: 430px;
        gap: 24px;
      }

      .portrait-wrap {
        width: min(100%, 270px);
        justify-self: center;
      }

      .bio p + p {
        margin-top: 18px;
      }
    }

    @media (max-width: 480px) {
      .site-header {
        height: 125px;
      }

      .brand-image {
        width: 85vw;
      }

      .brand-subtitle {
        font-size: 11px;
      }

      .site-layout {
        grid-template-columns: 36px minmax(0, 1fr);
        gap: 18px;
      }

      .main-content {
        padding-bottom: 40px;
      }

      .main-nav {
        gap: 15px;
      }

      .nav-link {
        width: 34px;
        height: 36px;
      }

      .nav-icon .icon {
        width: 18px;
        height: 18px;
      }

      .nav-tooltip {
        max-width: 220px;
        font-size: 15px;
      }

      .page-heading h1 {
        font-size: 24px;
      }

      .card-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .card-copy h2 {
        font-size: 17px;
      }

      .tabs {
        gap: 17px;
      }

      .tabs a {
        font-size: 12px;
      }

      .contact-strip > p {
        font-size: 21px;
      }

      .social-links {
        gap: 20px;
      }

      .social-links a {
        font-size: 11px;
      }

      .case-banner {
        height: 190px;
      }

      .case-pagination .text-link {
        font-size: 11px;
      }

      .project-meta > div {
        grid-template-columns: 1fr;
        gap: 6px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        transition: none !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>

<body>
  <!-- Reusable navigation icons -->
  <svg
    class="svg-library"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <symbol id="icon-projects" viewBox="0 0 24 24">
      <path d="M3 7h7l2-3h9v16H3Z M3 9h18"/>
    </symbol>

    <symbol id="icon-cases" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </symbol>

    <symbol id="icon-research" viewBox="0 0 24 24">
      <path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-3-1-7-2-10 1Zm0 0v15 M5 8h4m-4 4h4m6-4h4m-4 4h4"/>
    </symbol>

    <symbol id="icon-mentoring" viewBox="0 0 24 24">
      <path d="m2 8 10-5 10 5-10 5Z M6 10v6c4 3 8 3 12 0v-6M22 8v8"/>
    </symbol>

    <symbol id="icon-about" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 11v6m0-10v.1M10 17h4"/>
    </symbol>

    <symbol id="icon-photo" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8" cy="8" r="2"/>
      <path d="m3 17 5-5 4 4 4-7 5 8"/>
    </symbol>

    <symbol id="icon-external" viewBox="0 0 24 24">
      <path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/>
    </symbol>

    <symbol id="icon-mail" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="m2 6 10 7L22 6"/>
    </symbol>

    <symbol id="icon-back" viewBox="0 0 24 24">
      <path d="M20 12H4m6-6-6 6 6 6"/>
    </symbol>

    <symbol id="icon-awards" viewBox="0 0 24 24">
      <path d="M7 3h10v5a5 5 0 0 1-10 0ZM7 5H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4M12 13v6m-5 2h10"/>
    </symbol>
  </svg>

  <a class="skip-link" href="#main-content">
    Skip to content
  </a>

  <div class="site-frame">
    <header class="site-header">
      <a
        class="wordmark"
        href="#/"
        aria-label="Valentina Godovets — Home"
      >
        <img
          class="brand-image"
          src="https://raw.githubusercontent.com/valenandia/valen.github.io/main/Valentina%20Godovets.png"
          alt="Valentina Godovets"
        >

        <span class="brand-subtitle">
          Game Designer · Level Designer
        </span>
      </a>
    </header>

    <div class="site-layout">
      <aside class="sidebar">
        <nav
          class="main-nav"
          aria-label="Main navigation"
          id="main-navigation"
        ></nav>
      </aside>

      <main
        class="main-content"
        id="main-content"
        tabindex="-1"
      ></main>
    </div>

    <footer class="site-footer">
      © <span id="year"></span> Valentina Godovets
    </footer>
  </div>

  <!-- HOME PAGE -->
  <template id="home-template">
    <section class="home-hero">
      <div class="portrait-wrap">
        <!-- Replace this placeholder with your portrait when ready. -->
        <div
          class="photo-placeholder"
          role="img"
          aria-label="Reserved for Valentina’s portrait"
        >
          <div class="portrait-center">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-photo"></use>
            </svg>

            <span>Portrait coming soon</span>
          </div>

          <span class="portrait-caption">
            VALENTINA / GAME DESIGNER
          </span>
        </div>
      </div>

      <div class="home-copy bio">
        <p>
          Hi! My name is <strong>Valentina</strong>, and I’m a
          <strong>game designer</strong> focused on
          <strong>gameplay systems</strong>,
          <strong>level design</strong>,
          <strong>combat design</strong>, exploration, encounters, and
          <strong>player experience</strong>.
        </p>

        <p>
          I enjoy building mechanics that create readable goals,
          <strong>strong gameplay loops</strong>, and memorable player moments.
        </p>

        <p>
          Currently, I’m also expanding my expertise in
          <strong>AI systems in games</strong> and how they can support
          gameplay architecture and emergent interactions.
        </p>
      </div>
    </section>
  </template>

  <script>
    /* ========================================
       IMAGE SETTINGS
    ======================================== */

    const ASSET_ROOT =
      "https://raw.githubusercontent.com/valenandia/valen.github.io/main/";

    const FRAMEWORK_IMAGE =
      ASSET_ROOT + "thinking...%20(1).png";

    /* ========================================
       PORTFOLIO CONTENT

       Edit these entries to update cards,
       descriptions, links and project pages.
    ======================================== */

    const content = {
      projects: [
        {
          id: "project-1",
          image:
            ASSET_ROOT + "Screenshot%202026-05-28%20150131.png",

          modalTitle: "Store Simulator",
          tag: "PROJECT",
          status: "In production, 2026",

          description:
            "Store Simulator is a management simulator developed on Unreal Engine 5. My work focuses on game design, location customization, mini-game balance, and feature completion during production.",

          meta: [
            ["Genre", "Management Simulator"],
            ["Role", "Game Designer"],
            ["Involvement", "October 2023 — Present"],
            ["Platforms", "TBA"],
            ["Engine", "Unreal Engine 5"]
          ],

          contributions: [
            "Assisted in the creation and documentation of game design documents, including documents about features, customization, and game balance.",
            "Contributed to the creation of mechanics prototypes and screen UI mockups.",
            "Assisted in the implementation of game content using engines such as Unreal Engine and Unity.",
            "Collaborated with artists, programmers, and other team members to create game features.",
            "Participated in gameplay testing sessions and provided feedback.",
            "Took on additional tasks and responsibilities as needed to support the overall development."
          ],

          action: "VIEW PROJECT",
          href: "https://eriars.com/en/store-simulator-en/",

          secondaryAction: "GDD EXAMPLE",
          secondaryHref: "#",

          construction: false
        },

        {
          id: "project-2",
          image: ASSET_ROOT + "thinking...%20(3).png",

          modalTitle: "Unannounced Project",
          tag: "PROJECT",

          construction: true
        },

        {
          id: "project-3",
          image: ASSET_ROOT + "images%20(1).jpg",
          projectImage: ASSET_ROOT + "screenshot120.png",

          modalTitle: "Tamriel Rebuilt",
          tag: "PROJECT",
          status: "Somewhere in 2010s — 2019",

          description:
            "Tamriel Rebuilt is a large-scale TES III mod project for Morrowind and OpenMW. My work combined game generalist tasks, level design, quest work, narrative design, and testing across Tamriel’s mainland regions.",

          meta: [
            ["Genre", "TES III: Mod"],
            [
              "Role",
              "Game Generalist, Level Designer, Narrative Designer"
            ],
            ["Involvement", "2010s — 2019"],
            ["Platforms", "Nexus Mods"],
            ["Engine", "OpenMW"]
          ],

          contributions: [
            "Developed engaging quests and character narratives to enhance player immersion across Tamriel’s mainland regions.",
            "Utilized Morrowind’s Construction Set to construct detailed exterior landscapes, cities, and interior spaces, ensuring lore consistency and visual quality.",
            "Conducted thorough testing of quests to verify functionality, balance, and a seamless player experience."
          ],

          awardImage: ASSET_ROOT + "azbsetn.png",
          awardLabel: "Community Project Award",

          action: "VIEW PROJECT",
          href: "https://www.nexusmods.com/morrowind/mods/42145",

          secondaryAction: "OFFICIAL SITE",
          secondaryHref: "https://www.tamriel-rebuilt.org/",

          construction: false
        }
      ],

      cases: [
        {
          id: "combat-design",
          title: "Combat Design Framework",
          subtitle: "JRPG Boss Design & Hitbox/Hit Zone Systems",
          category: "Combat design"
        },

        {
          id: "environment-puzzles",
          title: "Environment Puzzle Framework",
          subtitle: "Open-World Adventure Puzzle Design",
          category: "Puzzle design"
        },

        {
          id: "blood-hp",
          title: "Blood & HP Exchange Mechanics",
          subtitle: "Health Resource Exchange System",
          category: "Systems design"
        },

        {
          id: "magic-performance",
          title: "Magic Performance Combat System",
          subtitle: "Outfit-Based Builds & Elemental Abilities",
          category: "Combat design"
        },

        {
          id: "gameplay-progression",
          title: "Gameplay Loop & Progression Design",
          subtitle: "Investigation Action-Adventure",
          category: "Gameplay design"
        },

        {
          id: "dungeon-design",
          title: "Dungeon Level Design & Gameplay Metrics",
          subtitle: "PvE & PvP Dungeon Spaces",
          category: "Level design"
        },

        {
          id: "npc-ai",
          title: "NPC AI Framework (Behavior Trees + GOAP)",
          subtitle: "Fairy Town",
          category: "AI design"
        }
      ],

      research: [
        {
          id: "deconstruct-1",
          image: ASSET_ROOT + "Untitled%20design-.png",

          modalTitle: "The Legend of Zelda: Ocarina of Time",
          tag: "ANALYSES",

          construction: true
        },

        {
          id: "deconstruct-2",
          image: ASSET_ROOT + "Untitled%20desig6n.png",

          modalTitle: "Hotline Miami",
          tag: "ANALYSES",

          construction: true
        }
      ],

      articles: [
        {
          title:
            "The Work of the Algorithm A* in 3D Games on Unreal Engine 5",

          text:
            "For my work, I came across the idea of implementing the A* Algorithm and a pathfinding system in 3D generated worlds based on Voronoi maps. Here is my implementation to make all the systems work.",

          image:
            ASSET_ROOT + "istockphoto-1224500457-2048x2048.jpg"
        },

        {
          title:
            "Let’s Make MAGIC! — How Magic Is Incorporated in Gameplay in ‘The Sims 2: Making Magic’",

          text:
            "I have been a big fan of The Sims for many years of gaming. I didn’t know much about The Sims 2, because I started playing from the 3d games in the series, but I really wanted to see what the second part offered to players. In this article, I researched the most interesting mechanics: magic, and how it helped the gameplay come through.",

          image: ASSET_ROOT + "hq720.jpg"
        },

        {
          title:
            "90s Waifu — What Hypercasual Mechanics Adult Games Use?",

          text:
            "A few years ago, when I browsed the internet for some references, I found a website full of adult games and was intrigued by that. So I went deeper and found out that a lot of these games use the same hypercasual mechanics, and it worked. Of course, it was because of naked ladies, but I wrote an article about what old games use and what we can incorporate into other projects.",

          image:
            ASSET_ROOT + "Screenshot%202026-05-26%20185513.png"
        },

        {
          title:
            "Exploring the Mechanics and Level Design of Journey",

          text:
            "For this article, I wanted to show how indie games — for example, the one discussed here — can demonstrate interesting level design using diegetic ways to create a world. It was a fun experience, and I wanted to share my interpretation of that.",

          image:
            ASSET_ROOT + "1_hotJOMYOkumqOVsl9Th2jw.jpg"
        }
      ],

      games: [
        {
          id: "game-1",
          image: ASSET_ROOT + "Untitled%20design89.png",

          modalTitle: "The Minotaur's Labyrinth",
          tag: "GAME JAM",
          status: "July, 2023",

          description:
            "The Minotaur's Labyrinth is a puzzle maze game created during a game jam. I worked as a game generalist and contributed to level design, custom tile assets, brainstorming, and in-engine assembly.",

          meta: [
            ["Genre", "Puzzle, Maze"],
            ["Role", "Game Generalist"],
            ["Involvement", "July 2024"],
            ["Platforms", "Itch.io"],
            ["Engine", "Unity"]
          ],

          contributions: [
            "Developed comprehensive level designs and layouts.",
            "Created and optimized custom tile assets for levels.",
            "Participated in strategic brainstorming and asset curation.",
            "Integrated and assembled all elements within the game engine."
          ],

          action: "ITCH.IO",
          href: "https://owlrazum.itch.io/maze",

          secondaryAction: "GDD",
          secondaryHref:
            "https://docs.google.com/document/d/1HkyJHvpvJ54A559XAo-mI5n2L9os1gfZq6uJ7IaByYg/edit?usp=sharing",

          awardImage: ASSET_ROOT + "BcvkIk.png",
          awardLabel: "Community Award",

          construction: false
        },

        {
          id: "game-2",
          image: ASSET_ROOT + "Untitled%20design777.png",

          modalTitle: "Geravim vs Demons",
          tag: "GAME JAM",
          status: "October, 2024",

          description:
            "Geravim vs Demons is a rogue-lite game jam project built around class mechanics, weapon balance, skill sets, and myth-inspired combat design.",

          meta: [
            ["Genre", "Rogue-lite"],
            ["Role", "Game Designer, Jammer, Generalist"],
            ["Involvement", "October 2024"],
            ["Platforms", "Itch.io"],
            ["Engine", "Unreal Engine 5"],
            [
              "Awards & Recognition",
              "Finalist in the ‘Regions and Languages of Russia’ category at the ‘Start a Game’ contest; finalist in the ‘Mythology in Art’ category, with the additional theme ‘O is Not Just a Letter’ / History of Vologda, at the ‘SINEUS’ contest."
            ]
          ],

          contributions: [
            "Developed balance for weapons, skill sets, and class mechanics.",
            "Conducted asset sourcing.",
            "Engaged in strategic brainstorming sessions.",
            "Managed music direction, including asset selection and creation."
          ],

          action: "ITCH.IO",
          href: "https://mikhaile.itch.io/gerasimvsbesi",

          secondaryAction: "CONCEPT DOC",
          secondaryHref:
            "https://docs.google.com/document/d/1oPbnDe0Q8RlAx0XEw5MaR6Xi4B6Fk9rtXqiKR9v1Kg0/edit?tab=t.0#heading=h.1fs3h2986tyf",

          extraActions: [
            {
              label: "PITCH DOC RU",
              href:
                "https://docs.google.com/presentation/d/1Bi2XfUUYwEkIC_r1DoHzfHXQJ_QyrjKyO1kpRlRgXVk/edit?slide=id.p#slide=id.p"
            }
          ],

          construction: false
        },

        {
          id: "game-3",
          image:
            ASSET_ROOT + "Screenshot%202026-05-28%20153217.png",

          modalTitle: "Tap a Paw!",
          tag: "GAME JAM",
          status: "2024",

          description:
            "Tap a Paw: Match-3 is a solo developer match-3 mobile game featuring cute paw mechanics and casual gameplay.",

          meta: [
            ["Role", "Game Designer, Solo Developer"],
            ["Platforms", "Itch.io, Yandex.Games"],
            ["Engine", "Godot"]
          ],

          contributions: [
            "Sourced and curated a variety of assets to enhance the visual and functional elements of the game.",
            "Integrated all game materials into the engine, ensuring a seamless transition from design to implementation.",
            "Utilized ChatGPT to assist in coding, improving efficiency and functionality of game mechanics."
          ],

          action: "ITCH.IO",
          href: "https://valenandia.itch.io/tapapaw",

          secondaryAction: "WATCH VIDEO",
          secondaryHref:
            "https://drive.google.com/file/d/1tEBiLoD-LjCUgI_lVaLRp1E9Z2VFTIg3/view?usp=sharing",

          construction: false
        },

        {
          id: "game-4",
          image: ASSET_ROOT + "thinking...%20(9).png",

          modalTitle: "Unannounced Jam",
          tag: "GAME JAM",

          construction: true
        }
      ],

      press: {
        "2026": [],

        "2025": [
          {
            date: "May, 2025 · Cyber.Sports.ru",
            title:
              "Featured in the article about the game “The Tale of Mind”",

            href:
              "https://cyber.sports.ru/games/blogs/3321384.html",

            action: "Read Press"
          },

          {
            date: "March, 2025 · Prototype.Indie",
            title:
              "Featured at the pitch-session — “The Tale of Mind”",

            href:
              "https://vk.com/video-212496568_456245939?to=L3ZpZGVvLTIxMjQ5NjU2OF80NTYyNDU5Mzk/",

            action: "Watch Press"
          }
        ],

        "2024": [
          {
            date: "December, 2024 · Russia, Moscow",
            title:
              "Finalist of hackathon “Start a Game!” — “Gerasim vs Besi”",

            href: "https://startgame.rsv.ru/",
            action: "Contest Page"
          },

          {
            date: "October, 2024 · Russia, Vologda",
            title:
              "Finalist of hackathon “Sineus” — “Gerasim vs Besi”",

            href:
              "https://drive.google.com/drive/folders/134ZJqQUbmhEh2ZzI4UrpnsukokoDOdwK",

            action: "View Press"
          },

          {
            date: "August, 2024 · Astrum Entertainment",
            title:
              "One of the best work on the course — “Paws and Cards”",

            note: "Conceptualization Basics: 2nd",

            href:
              "https://drive.google.com/drive/folders/134ZJqQUbmhEh2ZzI4UrpnsukokoDOdwK",

            action: "View Press"
          }
        ]
      }
    };

    /* ========================================
       NAVIGATION SETTINGS
    ======================================== */

    const navigation = [
      {
        id: "projects",
        label: "Projects",
        icon: "projects"
      },

      {
        id: "case-studies",
        label: "Featured Case Studies",
        icon: "cases"
      },

      {
        id: "explorations",
        label: "Research, Articles & Game Jams",
        icon: "research"
      },

      {
        id: "mentoring",
        label: "Mentoring & Collaboration",
        icon: "mentoring"
      },

      {
        id: "about",
        label: "About",
        icon: "about"
      }
    ];

    const main = document.getElementById("main-content");

    /* ========================================
       REUSABLE HELPERS
    ======================================== */

    function escapeHTML(value = "") {
      return String(value).replace(
        /[&<>"']/g,
        character => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        })[character]
      );
    }

    function icon(name) {
      return `
        <svg class="icon" aria-hidden="true">
          <use href="#icon-${name}"></use>
        </svg>
      `;
    }

    function externalLink(label, href) {
      if (!href || href === "#") {
        return "";
      }

      return `
        <a
          class="text-link"
          href="${escapeHTML(href)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHTML(label)}
          ${icon("external")}
        </a>
      `;
    }

    function heading(title) {
      return `
        <header class="page-heading">
          <h1>${escapeHTML(title)}</h1>
        </header>
      `;
    }

    function construction() {
      return `
        <p class="under-construction">
          Under construction
        </p>
      `;
    }

    function contact() {
      return `
        <section class="contact-strip" aria-label="Contact">
          <p>Feel free to contact me.</p>

          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/valenandia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              ${icon("external")}
            </a>

            <a
              href="https://x.com/valenandia"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
              ${icon("external")}
            </a>

            <a href="mailto:godovets.valya@gmail.com">
              Email
              ${icon("mail")}
            </a>
          </div>
        </section>
      `;
    }

    function tabs(base, entries, selected, label) {
      return `
        <nav class="tabs" aria-label="${escapeHTML(label)}">
          ${entries.map(([id, title]) => `
            <a
              href="#/${base}/${id}"
              ${id === selected ? 'aria-current="page"' : ""}
            >
              ${escapeHTML(title)}
            </a>
          `).join("")}
        </nav>
      `;
    }

    /* ========================================
       CARD GRIDS
    ======================================== */

    function cards(items, base, caseStudies = false) {
      return `
        <div class="card-grid">
          ${items.map(item => `
            <a
              class="portfolio-card"
              href="#/${base}/${item.id}"
            >
              <div class="card-cover">
                <img
                  src="${escapeHTML(
                    caseStudies ? FRAMEWORK_IMAGE : item.image
                  )}"
                  alt=""
                  loading="lazy"
                >
              </div>

              <div class="card-copy">
                <span class="eyebrow">
                  ${escapeHTML(
                    caseStudies ? item.category : item.tag
                  )}
                </span>

                <h2>
                  ${escapeHTML(
                    caseStudies ? item.title : item.modalTitle
                  )}
                </h2>

                ${
                  item.subtitle || item.status
                    ? `<p>${escapeHTML(item.subtitle || item.status)}</p>`
                    : ""
                }
              </div>
            </a>
          `).join("")}
        </div>
      `;
    }

    /* ========================================
       INDIVIDUAL CASE PAGE
    ======================================== */

    function casePage(item) {
      const index = content.cases.indexOf(item);
      const previous = content.cases[index - 1];
      const next = content.cases[index + 1];

      return `
        <a class="back-link" href="#/case-studies">
          ${icon("back")}
          Featured Case Studies
        </a>

        ${heading(item.title + ": " + item.subtitle)}

        <div class="case-banner">
          <img src="${FRAMEWORK_IMAGE}" alt="">
        </div>

        ${construction()}

        <nav
          class="case-pagination"
          aria-label="Other case studies"
        >
          ${
            previous
              ? `
                <a
                  class="text-link"
                  href="#/case-studies/${previous.id}"
                >
                  ← Previous case
                </a>
              `
              : "<span></span>"
          }

          ${
            next
              ? `
                <a
                  class="text-link"
                  href="#/case-studies/${next.id}"
                >
                  Next case →
                </a>
              `
              : ""
          }
        </nav>
      `;
    }

    /* ========================================
       INDIVIDUAL PROJECT PAGE
    ======================================== */

    function projectPage(item, base) {
      const back = base === "projects"
        ? "#/projects"
        : `#/explorations/${
            base === "research" ? "research" : "game-jams"
          }`;

      const backLabel = base === "projects"
        ? "Projects"
        : "Research, Articles & Game Jams";

      const intro = `
        <a class="back-link" href="${back}">
          ${icon("back")}
          ${backLabel}
        </a>

        ${heading(item.modalTitle)}
      `;

      if (item.construction) {
        return intro + construction();
      }

      const actions = [
        {
          label: item.action,
          href: item.href
        },

        {
          label: item.secondaryAction,
          href: item.secondaryHref
        },

        ...(item.extraActions || [])
      ];

      return intro + `
        <div class="project-hero">
          <img
            src="${escapeHTML(item.projectImage || item.image)}"
            alt="${escapeHTML(item.modalTitle)}"
          >
        </div>

        <p class="project-description">
          ${escapeHTML(item.description)}
        </p>

        <div class="project-actions">
          ${actions.map(action =>
            externalLink(action.label, action.href)
          ).join("")}
        </div>

        ${
          item.meta
            ? `
              <dl class="project-meta">
                ${item.meta.map(([label, value]) => `
                  <div>
                    <dt>${escapeHTML(label)}</dt>
                    <dd>${escapeHTML(value)}</dd>
                  </div>
                `).join("")}
              </dl>
            `
            : ""
        }

        ${
          item.contributions
            ? `
              <section class="contributions">
                <h2>My contributions</h2>

                <ul>
                  ${item.contributions.map(text => `
                    <li>${escapeHTML(text)}</li>
                  `).join("")}
                </ul>
              </section>
            `
            : ""
        }

        ${
          item.awardImage
            ? `
              <div class="project-award">
                <img
                  src="${escapeHTML(item.awardImage)}"
                  alt="${escapeHTML(item.awardLabel || "Award")}"
                >
              </div>
            `
            : ""
        }
      `;
    }

    /* ========================================
       ARTICLES
    ======================================== */

    function articles() {
      return `
        <div class="articles-list">
          ${content.articles.map(article => `
            <article class="article-card">
              <img
                src="${escapeHTML(article.image)}"
                alt=""
                loading="lazy"
              >

              <div>
                <span class="eyebrow">Article</span>

                <h2>${escapeHTML(article.title)}</h2>

                <p>${escapeHTML(article.text)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      `;
    }

    /* ========================================
       RESEARCH / ARTICLES / GAME JAMS
    ======================================== */

    function explorations(selected = "research") {
      const allowed = ["research", "articles", "game-jams"];

      if (!allowed.includes(selected)) {
        selected = "research";
      }

      const navigationTabs = tabs(
        "explorations",
        [
          ["research", "Research"],
          ["articles", "Articles"],
          ["game-jams", "Game Jams"]
        ],
        selected,
        "Research sections"
      );

      let sectionContent;

      if (selected === "articles") {
        sectionContent = articles();
      } else if (selected === "game-jams") {
        sectionContent = cards(content.games, "game-jams");
      } else {
        sectionContent = cards(content.research, "research");
      }

      return (
        heading("Research, Articles & Game Jams") +
        navigationTabs +
        sectionContent
      );
    }

    /* ========================================
       AWARDS
    ======================================== */

    function awards() {
      const entries = [
        [
          "Start a Game!",
          "Gerasim vs Besi",
          "Finalist · Regions and Languages of Russia"
        ],

        [
          "SINEUS",
          "Gerasim vs Besi",
          "Finalist · Mythology in Art"
        ],

        [
          "Astrum Entertainment",
          "Paws and Cards",
          "One of the best works · Conceptualization Basics: 2nd"
        ]
      ];

      return `
        <div class="card-grid">
          ${entries.map(([title, project, detail]) => `
            <article class="award-card">
              <div class="award-icon">
                ${icon("awards")}
              </div>

              <span class="year">2024</span>

              <h2>${escapeHTML(title)}</h2>
              <p>${escapeHTML(project)}</p>
              <small>${escapeHTML(detail)}</small>
            </article>
          `).join("")}
        </div>
      `;
    }

    /* ========================================
       PRESS BY YEAR
    ======================================== */

    function press() {
      return ["2026", "2025", "2024"].map(year => `
        <section class="press-year-section">
          <h2>${year}</h2>

          ${
            content.press[year].length
              ? `
                <div class="card-grid">
                  ${content.press[year].map(item => `
                    <article class="press-card">
                      <span class="year">
                        ${escapeHTML(item.date)}
                      </span>

                      <h3>${escapeHTML(item.title)}</h3>

                      ${
                        item.note
                          ? `<p>${escapeHTML(item.note)}</p>`
                          : ""
                      }

                      ${externalLink(item.action, item.href)}
                    </article>
                  `).join("")}
                </div>
              `
              : construction()
          }
        </section>
      `).join("");
    }

    /* ========================================
       ABOUT / AWARDS / PRESS
    ======================================== */

    function about(selected = "about") {
      const allowed = ["about", "awards", "press"];

      if (!allowed.includes(selected)) {
        selected = "about";
      }

      const navigationTabs = tabs(
        "about",
        [
          ["about", "About"],
          ["awards", "Awards"],
          ["press", "Press"]
        ],
        selected,
        "About sections"
      );

      let sectionContent;

      if (selected === "awards") {
        sectionContent = awards();
      } else if (selected === "press") {
        sectionContent = press();
      } else {
        sectionContent = '<div class="empty-section"></div>';
      }

      return heading("About") + navigationTabs + sectionContent;
    }

    /* ========================================
       PAGE ROUTING
    ======================================== */

    function render() {
      const route = location.hash
        .replace(/^#\/?/, "")
        .split("/")
        .filter(Boolean);

      const [page = "home", detail] = route;

      const active = ["research", "game-jams"].includes(page)
        ? "explorations"
        : ["awards", "press"].includes(page)
          ? "about"
          : page;

      const caseStudy = content.cases.find(
        item => item.id === detail
      );

      const collection = page === "projects"
        ? content.projects
        : page === "game-jams"
          ? content.games
          : page === "research"
            ? content.research
            : [];

      const project = collection.find(
        item => item.id === detail
      );

      let html;

      let title = navigation.find(
        item => item.id === active
      )?.label || "Home";

      if (page === "home") {
        html =
          document.getElementById("home-template").innerHTML +
          contact();

      } else if (
        page === "case-studies" &&
        detail &&
        caseStudy
      ) {
        html = casePage(caseStudy);
        title = caseStudy.title;

      } else if (
        page === "case-studies" &&
        !detail
      ) {
        html =
          heading("Featured Case Studies") +
          cards(content.cases, "case-studies", true);

      } else if (project) {
        html = projectPage(project, page);
        title = project.modalTitle;

      } else if (
        page === "projects" &&
        !detail
      ) {
        html =
          heading("Projects") +
          cards(content.projects, "projects");

      } else if (page === "explorations") {
        html = explorations(detail);

      } else if (
        ["research", "game-jams"].includes(page) &&
        !detail
      ) {
        html = explorations(page);

      } else if (page === "mentoring") {
        html =
          heading("Mentoring & Collaboration") +
          '<div class="empty-section"></div>' +
          contact();

      } else if (page === "about") {
        html = about(detail);

      } else if (
        ["awards", "press"].includes(page)
      ) {
        html = about(page);

      } else {
        title = "Page not found";

        html =
          heading(title) +
          '<a class="text-link" href="#/">Return home</a>';
      }

      document.getElementById("main-navigation").innerHTML =
        navigation.map(item => `
          <a
            class="nav-link"
            href="#/${item.id}"
            aria-label="${item.label}"
            ${
              active === item.id
                ? 'aria-current="page"'
                : ""
            }
          >
            <span class="nav-icon">
              ${icon(item.icon)}
            </span>

            <span class="nav-tooltip" role="tooltip">
              ${item.label}
            </span>
          </a>
        `).join("");

      main.innerHTML = html;

      document.title =
        title + " — Valentina Godovets";

      document.getElementById("year").textContent =
        new Date().getFullYear();

      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }

    /* ========================================
       START
    ======================================== */

    document
      .querySelector(".skip-link")
      .addEventListener("click", event => {
        event.preventDefault();
        main.focus();
      });

    window.addEventListener("hashchange", render);

    render();
  </script>
</body>
</html>
