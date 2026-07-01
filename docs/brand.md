# Brand Guide — sunnydatko.com

## Core Brand Statement
"Building beautiful systems for humans."
Sub-line: "Connecting product strategy, design systems, and frontend architecture to create intuitive user experiences."

## Brand Essence
- Pillars: Technical, Human, Wellness
- Attributes: Precision, Calm, Confidence, Detail-oriented, Collaborative

## Color System
| Role | Value | Notes |
|---|---|---|
| Background (dark) | `#141211` | `body` bg, `#151313` = grey.900 |
| Paper / surface | `#1C1A18` | Slightly lifted dark |
| Cream (lightest) | `#F5F1EC` | grey.100 — primary text on dark, light-mode paper |
| Warm charcoal scale | `#F5F1EC` → `#151313` | grey.100 → grey.900, see `theme.ts` |
| Primary accent | `#A78AB2` (light) / `#7A5C87` (main, light mode) / `#533B5E` (dark) | Plum / aubergine |
| Secondary accent | `#98A287` (light) / `#6E7563` (main, light mode) / `#4C5245` (dark) | Sage / olive |
| Brand mark star | `#C9A961` | Gold — used ONLY for the 8-point star SVG icon |
| Error / highlight | `#C8682A` | Burnt orange |

## Typography
| Role | Family | Notes |
|---|---|---|
| Display / headings | DM Serif Display | Loaded as `ital@0;1` (weight 400 only) |
| Body / UI | Inter | Weights 400, 500, 600, 700 |
| Brand wordmark | Inter, weight 500, letterSpacing 0.22em, uppercase | `BrandMark.tsx` |
| Overline / labels | Inter, weight 600(ish), letterSpacing 0.28em, uppercase | Used on Hero, Experience, Work, Contact section labels |

## Imagery
- Dark, cinematic, atmospheric photography (lavender field on Hero, botanical/UI backgrounds on Work case studies)
- Photos positioned to keep text on a dark area (gradient overlays used)
- Case-study cards: photo occupies 44% of card width on desktop (`Work.tsx`)

## Layout Philosophy
- Section max widths vary per section (not a single fixed system):
  - Hero content: 620px
  - About: 970px (title), 770px (paragraph)
  - Experience: 880px
  - Work: 1080px
  - Contact: 760px
- Photo-forward case-study cards

## Motion
- Purposeful and subtle — nothing gratuitous
- Reveal-on-scroll: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)` + `translateY(28px)` (`.reveal` / `.is-visible`)
- Ambient auras: 26s / 32s / 38s alternating drift — barely perceptible
- `prefers-reduced-motion` respected — all animations disabled (`App.css`)

## Iconography
- Bootstrap Icons (primary, loaded via CDN in `index.html`) + a handful of MUI icons
- Thin stroke weight, minimal fill

## Content Voice
- Direct, confident, active voice
- Specific details over vague claims
- Examples: "Staff Frontend Engineer", "Building beautiful systems for humans."

## Signature Brand Elements
1. **8-point gold star** (`#C9A961`, strokeWidth 1.25) — brand mark, loader, `BrandMark.tsx`, preloader in `index.html`
2. **Frosted glass cards** — `rgba(245,241,236,0.035)` bg + `rgba(245,241,236,0.08)` border + `blur(10px)` backdrop (`.glass` in `App.css`)
3. **Plum ambient auras** — fixed radial gradients behind everything, slow drift animation
4. **Film grain noise overlay** — SVG fractalNoise at 4% opacity, `mix-blend-mode: overlay`
5. **Cursor glow** — plum radial gradient follows mouse on desktop
6. **Section divider** — thin gradient lines (82% width) + `✦` glyph in plum with drop-shadow glow (`SectionDivider.tsx`)
7. **Reveal on scroll** — `.reveal` / `.is-visible` CSS class pattern

## Key Implementation Files
- Colors & typography theme: `src/helpers/theme.ts`
- Global CSS / ambient layers: `src/App.css`
- Brand mark component: `src/components/BrandMark.tsx`
- Section divider: `src/components/SectionDivider.tsx`
- Ambient background effects: `src/components/Ambient.tsx`
- Fonts & icon CDN loaded in: `index.html` (Google Fonts + Bootstrap Icons)
