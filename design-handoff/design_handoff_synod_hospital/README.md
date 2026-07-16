# Handoff: Synod Hospital, Durtlang — Website (Direction A)

## Overview
A full redesign of the Synod Hospital, Durtlang website — a church-owned (Presbyterian Church of Mizoram) multispeciality secondary hospital in Durtlang, Mizoram. The site is an informational/donor-facing site with six pages: **Home, Services, General Information, College of Nursing, About Us, Contact Us**. Content is a faithful reproduction of the original site; the visual language is a warm, editorial "book-plate" treatment (Direction A).

## About the Design Files
The file in this bundle (`Synod Hospital - Direction A.dc.html`) is a **design reference created in HTML** — a working prototype showing the intended look, content, and behavior. It is **not production code to copy directly**.

Your task is to **recreate this design in a Next.js codebase** using its established patterns (React components, the App Router or Pages Router as the project prefers, CSS Modules / Tailwind / styled-components — whatever the project already uses). Treat the HTML as the source of truth for layout, copy, tokens, and interactions; re-express it idiomatically in React/Next.

The prototype is a single-file component that swaps "pages" via client state. In Next.js you should instead implement **six real routes** (`/`, `/services`, `/general-information`, `/college-of-nursing`, `/about-us`, `/contact-us`) with a shared layout (header + footer). The header nav and in-page anchors map directly to these routes.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are all specified below and in the HTML. Recreate the UI faithfully. The one exception is the home hero image, which uses a drag-and-drop placeholder in the prototype — in production this is a normal `<img>` (see Assets).

## Design System
The design is built on the **Classical** design system — an editorial, book-like system: Cormorant Garamond headings over Lora body, a soft near-white ground, hairline rules, and color applied as **stroke, not fill** (outlined buttons, bordered cards, matted "plate" images). All tokens below come from it. If your codebase already has a design system, map these tokens onto it; otherwise adopt the tokens verbatim.

## Global Layout & Chrome

### Root wrapper
- Background `--paper` (#f3f2f2), text `--ink` (#201f1d), body font Lora, `min-height: 100vh`.
- Content max-width **1120px**, centered, horizontal padding **24px**.

### Header (sticky top bar, shared across all pages)
- Flex row, space-between, vertically centered. Sticky to top, `z-index` above content, background `--paper`, bottom hairline `1px solid --divider`. Horizontal padding 24px, vertical ~14–18px.
- **Brand (left):** flex row, gap 12px, links to Home.
  - Emblem `<img>` — **88×88px**, `object-fit: contain` (this was recently doubled from 44px; keep 88px).
  - Two stacked lines, `line-height: 1.05`:
    - "Synod Hospital" — Cormorant Garamond, weight 600, 19px, letter-spacing .01em.
    - "DURTLANG" — Cormorant Garamond, 12px, letter-spacing .26em, uppercase, color `--gold` (#7d5411).
- **Nav (right):** six links — Home, Services, General Information, College of Nursing, About Us, Contact Us.
  - Each: Cormorant Garamond, weight 600, 15px, letter-spacing .01em. Active link color `--gold` (#7d5411) with a 2px accent (`--rule` #b68235) underline bar (`margin-top: 5px`); inactive color `--ink`.
  - **Responsive:** at ≤860px the nav collapses behind a hamburger button (three 22×2px `--ink` bars, 4px vertical gap). Toggling shows the nav as a stacked dropdown/drawer. Desktop shows the inline row and hides the hamburger.

### Footer (shared)
- Top border `1px solid --divider`, `margin-top: 20px`. Contains hospital name/contact summary and copyright (see the HTML footer block for exact copy).

## Pages / Views

> Exact body copy for every page lives in the HTML file — reproduce it verbatim. Below is the structure and styling per page.

### 1. Home (`/`)
- **Hero:** two-column grid, `align-items: center`, gap `clamp(28px, 4vw, 56px)`. Columns `1fr 1.08fr` (image column slightly wider) on desktop; single column on mobile (≤860px).
  - **Left column:**
    - Kicker: "Established 1928 · Presbyterian Church of Mizoram" — Cormorant Garamond, 13px, letter-spacing .24em, uppercase, color `--gold`, margin-bottom 18px.
    - H1: "Synod Hospital, Durtlang" (line break before Durtlang) — Cormorant Garamond, weight 600, `clamp(42px, 7vw, 86px)`, line-height 0.98, letter-spacing -0.02em.
    - Two lead paragraphs, 18px, line-height 1.7, max-width 52ch (first `--ink`, second `--muted`).
    - "Learn More →" outlined button → About page (see Button spec).
  - **Right column (image plate):** min-height 480px desktop / 300px mobile. Image sits in a plate: `6px solid --surface` border + `1px solid --divider` outline. **Cursor `zoom-in`; clicking opens a full-screen lightbox** (see Interactions).
- Additional home sections (welcome text, quick links, timings) follow — reproduce from HTML.

### 2. Services (`/services`)
- The largest page. A left in-page nav / anchor list of departments alongside stacked department sections. Departments (exact labels):
  - Anesthesiology & Critical Care, Blood Bank, ENT, Eye, General & Laparoscopic Surgery, General Medicine, HIV (Grace Home) / Substance Abuse (K-Ward) / Palliative Care, Obstetrics & Gynaecology, Orthopaedics, Paediatrics, Radiodiagnosis & Imaging.
- Each department: a section with heading, body copy, and a matted plate photo. In Next.js, the department anchor list should smooth-scroll to `id`-anchored sections (anchor `scroll-margin-top: 90px` to clear the sticky header).

### 3. General Information (`/general-information`)
- Patient/visitor info: room types & tariffs, visiting hours, admission info, Dr. Fraser's clinic, etc. Includes matted photos (private room, Dr Fraser's). Reproduce copy and any tables/lists from HTML.

### 4. College of Nursing (`/college-of-nursing`)
- Admissions/programme information — the longest text page. Reproduce all sections (about, courses, eligibility, history/timeline, etc.) verbatim.

### 5. About Us (`/about-us`)
- Hospital history and mission. Two-column intro row: matted facade photo (`6px solid --surface` border + `1px solid --divider` outline) beside body copy. Includes a historical timeline (year + text entries) and a portrait of Dr Peter Fraser.

### 6. Contact Us (`/contact-us`)
- Contact details + a **Google Maps embed** (replaces the original contact form). The map is matted like a plate:
  - Wrapper `6px solid --surface` border + `1px solid --divider` outline, responsive aspect box (`padding-bottom: 78%`), iframe absolutely filling it.
  - Embed src (keep exactly):
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3028166101444!2d92.7310205!3d23.7722288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374deb1b210503d7%3A0x494329e0d07f4050!2sSynod%20Hospital%20Durtlang!5e0!3m2!1sen!2sin!4v1784142142251!5m2!1sen!2sin`
  - Section heading "Find Us" with a 2px × 56px `--rule` accent bar above it.

## Components

### Outlined button (primary action, e.g. "Learn More →")
- `display: inline-flex; align-items: center; gap: 9px`.
- Cormorant Garamond, weight 600, 16px, letter-spacing .02em, color `--gold` (#7d5411).
- Border `1px solid --rule` (#b68235), border-radius 4px, padding `13px 26px`, transparent background.
- **Hover:** background `color-mix(in srgb, var(--rule) 12%, transparent)` (a faint accent tint). Never a solid fill.

### Image plate (all content photos)
- Border `6px solid --surface` (#eae9e9), outline `1px solid --divider`. Image `object-fit: cover`. This "matted plate" wrapper is used everywhere a photo appears.

### Section heading pattern
- A short accent rule (2px tall × 56px wide, `--rule`) above the heading, margin-bottom 14px. Heading: Cormorant Garamond, weight 600, `clamp(22px, 2.6vw, 30px)`.

### Kicker / eyebrow
- Cormorant Garamond, small (12–13px), letter-spacing .24–.26em, uppercase, color `--gold`.

## Interactions & Behavior
- **Navigation:** header links switch pages (→ Next.js routes). Active route highlighted in `--gold` with underline bar.
- **Mobile menu:** hamburger toggles nav visibility at ≤860px (state-driven; use a `useMediaQuery`-style hook or CSS + a toggle).
- **Home hero lightbox:** clicking the hero image opens a fixed full-screen overlay:
  - Overlay `position: fixed; inset: 0; z-index: 9999`, background `rgba(24,22,19,0.92)`, flex-centered, padding `clamp(20px, 5vw, 64px)`, cursor `zoom-out`.
  - Image inside: `max-width/max-height: 100%`, `object-fit: contain`, `8px solid --paper` border, shadow `0 24px 80px rgba(0,0,0,0.5)`.
  - Close "×" button top-right (Cormorant Garamond, 34px, color `--paper`). Clicking the overlay or the × closes it. (Recommend also closing on Escape in production.)
- **Anchor scrolling (Services):** smooth-scroll to department sections; anchors carry `scroll-margin-top: 90px`.
- **Hover states:** outlined buttons and nav links get accent tints; keyboard focus should be a 2px `--color-accent` outline with 2px offset (`:focus-visible`) — do not leave default focus rings.

## State Management
Minimal. In the prototype: current page, mobile-menu open flag, `isMobile` (matchMedia ≤860px), and `lightbox` (holds the current image URL or null). In Next.js:
- Route = current page (no page state needed).
- `mobileMenuOpen` boolean (local to header).
- `lightboxOpen` boolean for the home hero (local to that section).
- `isMobile` via a media-query hook, or handle responsiveness purely in CSS.

## Design Tokens

### Colors
| Token | Hex | Use |
| --- | --- | --- |
| `--paper` / bg | `#f3f2f2` | Page background |
| `--surface` | `#eae9e9` | Plate mats, tinted fills |
| `--ink` / text | `#201f1d` | Body text |
| `--gold` (accent-700) | `#7d5411` | Text-weight accent (kickers, active nav, buttons) |
| `--rule` (accent) | `#b68235` | Borders, underlines, accent bars |
| `--muted` | `color-mix(in srgb, #201f1d 56%, transparent)` | Secondary text |
| `--divider` | `color-mix(in srgb, #201f1d 16%, transparent)` | Hairlines |

Accent ramp (for hover/pressed): 100 `#fff3e4`, 200 `#ffe3bf`, 300 `#facb8d`, 400 `#e1ad66`, 500 `#c28d41`, 600 `#a06f24`, 700 `#7d5411`, 800 `#5a3b0a`, 900 `#3a270d`.
Neutral ramp: 100 `#f8f4f4`, 200 `#eae7e7`, 300 `#d7d3d3`, 400 `#bab6b6`, 500 `#9b9797`, 600 `#7d7979`, 700 `#605d5d`, 800 `#444141`, 900 `#2d2b2b`.

> Note on accent usage: the accent (#b68235) meets ≥3:1 contrast on the paper ground — fine for borders, icons, and large text, **but not for body-size text**. For paragraph-size accent text use the deep step `--color-accent-700` (#7d5411), as the design does.

### Typography
- **Headings:** "Cormorant Garamond", weights 400 & 600 (interface headings cap at 600; large display can go 400). Load via Google Fonts.
- **Body:** "Lora", weights 400 & 600.
- Google Fonts import: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Lora:wght@400;600&display=swap` (use `next/font/google` in Next.js).
- Key sizes: H1 hero `clamp(42px,7vw,86px)`/lh 0.98; section headings `clamp(22px,2.6vw,30px)`; body 16–18px/lh 1.7–1.8; kickers 12–13px uppercase tracked; nav/brand 15–19px.
- Numbers set tabular (`font-feature-settings: "tnum"`) in figures, tables, and timeline years; running prose keeps default figures.

### Spacing
Density-1.15 scale: 4.6 / 9.2 / 13.8 / 18.4 / 27.6 / 36.8px. Section vertical padding uses `clamp()` (e.g. hero `clamp(40px,7vw,96px)`, page heads `clamp(36px,6vw,72px)`). Content max-width 1120px, gutters 24px.

### Radius & elevation
- Radius: sm 2px, md 4px (default), lg 7px.
- Shadows: whisper-light only (`--shadow-sm/md/lg`). Avoid heavy drop shadows. Lightbox is the one intentional strong shadow.

### Responsive breakpoint
- Single breakpoint at **860px** (mobile ≤860px). Grids collapse to one column; nav collapses to hamburger; plate/hero min-heights reduce.

## Assets
All images are in the site dump under `uploads/site-dump-handoff/SYNOD-WEBSITE-html/` (copied into `assets/` in this bundle — see below). Key files:
- Emblem/logo: `home-page_files/synod-hospital-durtlang-mizoram.png`
- Facade: `About-Us-page_files/synod-hospital-durtlang-casualty-facade-6c76952d.jpg`
- Dr Peter Fraser portrait: `About-Us-page_files/Dr-Peter-Fraser-Synod-Hospital-Durtlang-fa8fd048.jpg`
- Private room: `General-Information-page_files/synod-hospital-Private-room-7ae6e91e.jpg`
- Dr Fraser's clinic: `General-Information-page_files/synod-hospital-Dr-Frasers-b137b308.jpg`
- Department photos (Services): ICU, Blood donation, ENT, Eye, Surgery (Burr-hole), Medicine, Grace Home staff, Gynae (Laparoscopy), Ortho (Fracture), Paediatrics (ventilator), Lab — all under `Services-page_files/`.

**Home hero image:** the prototype uses a drag-and-drop placeholder (`image-slot.js`) because no aerial campus photo was provided. In production, replace with a normal `<img>` once the client supplies an aerial/campus photo; wire the lightbox to that image's `src`.

**Icons:** the design system specifies Lucide icons (https://lucide.dev). Use `lucide-react` in Next.js.

## Files
- `Synod Hospital - Direction A.dc.html` — the full design reference (all six pages, exact copy, all styles). Open in a browser to see it live. **This is the source of truth for all body copy.**
- `screenshots/` — desktop renders of all six pages (`desktop-1-home` … `desktop-6-contact-us`) for quick visual reference. Note: the Contact page map is a live Google Maps iframe and appears blank in the static capture — it renders normally in a browser.
- `assets/` — the site's images.
- (Design system reference) The Classical system's `styles.css` tokens are summarized above; you don't need the original stylesheet to implement, but token names/values are all here.

## Implementation checklist for Next.js
1. Set up `next/font/google` for Cormorant Garamond (400,600) and Lora (400,600).
2. Define the color/spacing/radius tokens as CSS variables (globals) or Tailwind theme extend.
3. Build a shared `Layout` (sticky header with responsive nav + footer).
4. Create six routes; move each page's copy from the HTML into the corresponding page/component.
5. Build reusable primitives: `OutlinedButton`, `Plate` (matted image), `SectionHeading` (with accent bar), `Kicker`.
6. Implement the home hero lightbox (client component) and the Services anchor-scroll nav.
7. Add the Contact page map embed (exact iframe src above).
8. Verify the 860px breakpoint behavior and `:focus-visible` accent rings.
