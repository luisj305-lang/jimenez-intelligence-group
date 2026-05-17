# Jimenez Intelligence Group — Brand Brief for Claude Design

## What this is

This is a new brand being split off from **Cyber Quest Investigadores Privados**.
The parent project already has a working website with a full design system (tokens, styles, HTML).
That site was called **Jiménez Investigaciones** — this new brand is its evolution: **Jimenez Intelligence Group (JIG)**.

---

## Brand identity

| Field | Value |
|---|---|
| **Full name** | Jimenez Intelligence Group |
| **Short name / acronym** | JIG |
| **Industry** | Private investigation, OSINT, legal evidence |
| **Location** | Clewiston, Florida, USA |
| **Lead investigator** | Luis Jiménez Camacho (licensed PI, Florida Class C) |
| **Tagline** | "La verdad no se adivina. Se investiga." |
| **Brand voice** | Serious, institutional, timeless — law firm meets investigative bureau. NOT a tech startup. |

---

## Why the split

Cyber Quest is being divided into two separate brands:

- **Marca A — THE AGENCY** → Jimenez Intelligence Group (this brief)
  - Audience: clients in crisis, corporations, legal teams
  - Tone: confidential, professional, evidence-based
  - Properties: website, Google Business, LinkedIn, new YouTube channel, Facebook agency page

- **Marca B — THE CONTENT** → separate brand (name TBD)
  - The existing @cyberquestoficial YouTube channel (5.37K subs, 559 videos) moves here
  - Tone: narrative, educational, entertainment
  - Content: religion, poems, investigations for general audience

**Core rule: the two brands NEVER mix.** Different audience, different tone, different visual identity, different channels.

---

## Design system

### Colors — White background

| Token | Hex | Use |
|---|---|---|
| Background | `#FFFFFF` | Main background |
| Warm white | `#F5F3F0` | Subtle surface / paper feel |
| Paper | `#F2EFE8` | Document / dossier sections |
| Primary accent — Oxblood | `#8B1A2B` | CTAs, links, accent lines |
| Oxblood hover | `#A5243A` | Hover state |
| Oxblood pressed | `#6B1320` | Active/pressed state |
| Secondary — Steel | `#7A8B9A` | Supporting elements, icons |
| Trust — Gold | `#B8975A` | Minimal use: seals, badges only |
| Text primary | `#1C1B19` | Headings and body on white |
| Text muted | `#6B6761` | Secondary text |
| Border | `#E0DDD8` | Dividers, card edges |

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / headings | Playfair Display | Bold / SemiBold | Italic for tagline |
| UI / labels | Montserrat | SemiBold | Uppercase, wide tracking |
| Body | Inter | Regular / Medium | — |
| Mono / data | JetBrains Mono | Regular | Case labels, license numbers |

### Spacing & shape

- **Scale:** 6pt base (6, 12, 18, 24, 36, 48, 64, 96, 128, 192px)
- **Border radius:** 0–3px max — sharp, institutional. No rounded cards.
- **Accent lines:** 3px oxblood horizontal rule before section headings
- **Border width:** 1px default, 2px strong, 3px accent

### Aesthetic direction

- Investigative / documentary — think dossier files and legal briefs
- Warm whites and paper tones, not cold clinical white
- Gold used only for trust markers (license badge, seals)
- No gradients, no shadows heavier than `0 4px 16px rgba(0,0,0,0.08)` on white
- Serif display font gives authority; sans-serif body keeps readability

---

## Pages / structure (existing site)

- `index.html` — Hero with founder photo + trust bar + services overview
- `servicios.html` — Service areas (OSINT, surveillance, legal evidence, etc.)
- `contacto.html` — Case intake form (Formspree)
- `privacidad.html` — Privacy policy
- `terminos.html` — Terms of service

---

## What to design / generate

Use this brief to generate UI components and layouts for the **Jimenez Intelligence Group** website rebrand.

Priority components:
1. Navigation header (white bg, oxblood CTA button)
2. Hero section (founder photo + headline + tagline + two CTAs)
3. Service cards (sharp corners, accent line top border in oxblood)
4. Trust bar (license badge, gold accent, stats)
5. Contact / case intake form
6. Footer

Keep everything consistent with the investigative-institutional aesthetic described above.
