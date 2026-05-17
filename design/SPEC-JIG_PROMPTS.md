# Jimenez Intelligence Group — Prompts de diseño

**Marca:** Jimenez Intelligence Group (JIG)
**Industria:** Investigación privada, OSINT, evidencia legal
**Ubicación:** Clewiston, Florida, USA
**Director:** Luis Jiménez Camacho (Licencia Class C, Florida)
**Tagline:** *"La verdad no se adivina. Se investiga."*
**Estilo:** Editorial-dossier. Revista de investigación seria encuadernada como expediente legal.

---

## Paleta definitiva

| Token | Hex | Uso |
|---|---|---|
| Background | `#FFFFFF` | Fondo principal |
| Warm white | `#F5F3F0` | Superficies suaves |
| Paper | `#F2EFE8` | Secciones tipo documento |
| **Tinta — primario** | **`#1A2942`** | CTAs, links, línea de 3px, único acento |
| Tinta hover | `#243557` | Hover |
| Tinta pressed | `#0F1B2E` | Active |
| Acero | `#7A8B9A` | Eyebrows, metadata, soporte |
| Texto primario | `#1C1B19` | Headings y body |
| Texto muted | `#6B6761` | Secundario |
| Borde | `#E0DDD8` | Divisores |

**Sin oro. Sin rojo. Sin gradientes. Sin glow. Sin sombras pesadas.**

---

## 1. Prompt para la foto del fundador

> **Editorial portrait of Luis Jiménez Camacho, Latino man in his late 40s / early 50s, seated three-quarter body, direct eye contact with camera. Calm, authoritative expression — not smiling, not severe, the look of someone giving sworn testimony. Hands resting on a closed dark leather folio on his lap, or one hand on the arm of a simple wooden chair. No phone, no laptop, no office props.**
>
> **Wardrobe:** charcoal or dark navy two-piece wool suit, crisp white shirt, deep ink-blue tie in a muted navy tone (#1A2942 family), no pocket square, no lapel pin. Simple wristwatch with brown or black leather strap. Wedding band acceptable, nothing else.
>
> **Background:** warm off-white seamless paper or limewashed plaster wall in the #F5F3F0–#F2EFE8 range. Almost imperceptible texture, like the endpaper of a hardback book. Subtle vignette darkening at the corners. Absolutely no bookshelves, framed diplomas, flags, or office context — the background is neutral and quiet.
>
> **Lighting:** single soft key light from upper-left at 45°, creating a gentle Rembrandt triangle on the right cheek. Soft fill from camera-right at -2 stops. Subtle rim light behind to separate the subject from the background. Late-afternoon north-window quality. Shadows present but never crushed.
>
> **Color grading:** warm and restrained. Skin tones natural with a slight desaturation overall. Suit reads true charcoal, never crushed black. Whites sit at paper-warm #F5F3F0, never blue-white or clinical. Overall palette: charcoal, warm white, natural skin, a single deep ink-blue accent in the tie. No teal-orange grading, no fashion saturation.
>
> **Camera / optics:** medium-format aesthetic, 85mm equivalent, f/2.8–f/4 — shallow but not extreme depth of field. Tack-sharp focus on the eyes. Eyes positioned at the upper third of the frame. Generous negative space above the head for headline overlay.
>
> **Crop:** chest-up to mid-thigh. Frame him slightly offset to the left third so the right side of the frame holds clean negative space for typography.
>
> **Reference aesthetic:** Annie Leibovitz courtroom portraits, Dan Winters editorial work for The New York Times Magazine, mid-century legal-firm partner photography. Print-magazine cover authority. NOT Forbes corporate, NOT LinkedIn headshot, NOT glamour, NOT "founder smiling at camera."

---

## 2. Prompt para la web — estilo JIG

> **Build a website for Jimenez Intelligence Group (JIG), a private investigation, OSINT, and legal-evidence firm based in Clewiston, Florida. The aesthetic is editorial-dossier: print-first sensibility translated to web. Think of an investigative magazine bound inside a legal case file. The site is in Spanish.**
>
> **North-star references:** print editions of The Atlantic, Harper's, and The Economist; mid-century American law-firm letterheads; Pinkerton-era investigative bureau visual language without retro pastiche.
>
> **Anti-references** (do not resemble any of these): SaaS landing pages, agency portfolio sites, tech startup hero patterns, bento grids, glassmorphism, neumorphism, "modern minimal" Webflow templates, Linear/Vercel marketing aesthetics.
>
> ### Color system
> - Background `#FFFFFF`
> - Warm surface `#F5F3F0` (paper feel, used in alternating sections)
> - Dossier surface `#F2EFE8` (used sparingly for document-style sections)
> - **Ink blue `#1A2942`** — the only accent color. CTAs, links, the 3px signature rule, key emphasis. Hover `#243557`. Pressed `#0F1B2E`.
> - Steel `#7A8B9A` — secondary metadata, eyebrows, supporting marks
> - Text primary `#1C1B19` (never pure black)
> - Text muted `#6B6761`
> - Border `#E0DDD8`
> - **No gold. No red. No gradients. No glow effects. No drop shadows by default.**
>
> ### Typography
> - **Display:** Playfair Display, used large and confidently. Bold for major headlines, SemiBold for section headings. Italic exclusively reserved for the tagline.
> - **UI / labels:** Montserrat SemiBold, uppercase, letter-spacing 0.08–0.12em. Used for nav, button text, eyebrows.
> - **Body:** Inter Regular/Medium, 17–19px, line-height 1.65–1.75.
> - **Forensic mono:** JetBrains Mono Regular, small sizes only. Used for case numbers, license IDs, dates, coordinates, location stamps.
> - **Scale:** H1 56–80px Playfair Bold, H2 36–44px Playfair SemiBold, H3 22–26px Montserrat uppercase OR Playfair italic.
> - **Measure:** cap body text at 65–70 characters per line. Never edge-to-edge text.
>
> ### Layout
> - 12-column grid, but compositions are deliberately asymmetric — editorial, not symmetric card walls.
> - Use a "manuscript layout" pattern in long-form sections: narrow body column on one side + wide marginalia column on the other holding case metadata, dates, location stamps in mono.
> - Generous whitespace. Vertical rhythm on a 6pt scale (use 48, 64, 96, 128 most).
> - Max content width 1200px; max reading width 680–720px.
>
> ### Signature gestures (use with discipline — once per section, not decorative)
> 1. **The 3px ink-blue rule:** a solid horizontal line, 48px wide, sitting 24px above every major section heading. This replaces icons, badges, and ornament. It is the firm's visual signature.
> 2. **The mono metadata strip:** e.g. `CLEWISTON, FL · LIC. CLASS C #XXXXXX · EST. [YEAR]` — appears in header, footer, and occasionally inline as forensic detail.
> 3. **Numbered section eyebrows:** `ÁREA 01 — CONTRAINTELIGENCIA CORPORATIVA` in Montserrat uppercase steel above each major heading.
>
> ### Components
>
> **Navigation header.** Sticky. White background. 1px bottom border `#E0DDD8`. Left: wordmark "JIMENEZ INTELLIGENCE GROUP" in Playfair SemiBold, or compact "JIG" monogram. Right: nav links in Montserrat uppercase 12px with generous spacing. One single ink-blue CTA: "Consulta confidencial" — sharp corners (max 2px radius), ink-blue fill, white text.
>
> **Hero.** Two-column asymmetric: 55% editorial portrait of the founder on one side, 45% text column on the other. Eyebrow in Montserrat uppercase steel: `INVESTIGACIÓN PRIVADA · OSINT · EVIDENCIA LEGAL`. Headline in Playfair Display Bold, 64–80px, max 3 lines. Tagline beneath in Playfair Italic: *"La verdad no se adivina. Se investiga."* Short Inter paragraph (3 lines max). Two CTAs: primary ink-blue solid "Iniciar consulta" + secondary ghost button with 1px ink-blue border "Áreas de práctica". Mono detail strip below CTAs.
>
> **Service cards.** 3-column grid on desktop, single column mobile. White background, 1px `#E0DDD8` border, sharp corners (0–2px max). Each card opens with a 3px ink-blue top accent line, 48px wide. Mono eyebrow `ÁREA 01`. Playfair SemiBold 22px title. Inter 15px body, 3–4 lines. Bottom link `VER DETALLE →` in Montserrat uppercase ink-blue. Hover state introduces a subtle `0 4px 16px rgba(0,0,0,0.08)` shadow at 150ms — no movement, no scale.
>
> **Trust bar.** Horizontal strip on warm white `#F5F3F0`. 1px top and bottom borders. Three or four cells separated by vertical 1px dividers. Each cell: mono label on top (`LICENCIA`, `JURISDICCIÓN`, `CASOS RESUELTOS`, `EST.`), Playfair number/value below. No icons. No badges. Typography alone carries authority.
>
> **Case intake form.** Reads like a legal intake document, not a marketing contact form. Section header `FORMULARIO DE INTAKE — CONFIDENCIAL` in mono uppercase. Fields stacked with generous vertical space. Labels above inputs in Montserrat uppercase 11px. Inputs: 1px `#E0DDD8` border, white fill, sharp corners, focus state turns border ink-blue with zero glow. Field groups separated by the 3px ink-blue rule and numbered headings (`01 · DATOS DEL CONSULTANTE`, `02 · NATURALEZA DEL CASO`, `03 · DOCUMENTACIÓN DISPONIBLE`). Submit button full-width on mobile, ink-blue solid, `ENVIAR CONSULTA CONFIDENCIAL` in Montserrat uppercase. Mono confidentiality notice below.
>
> **Footer.** Warm white `#F2EFE8` background to maintain paper feel throughout the site. Three columns: contact block, sitemap, legal links. Wordmark + italic Playfair tagline on the left. At the very bottom, mono compliance strip: `© 2026 JIMENEZ INTELLIGENCE GROUP · LIC. CLASS C #XXXXXX · CLEWISTON, FL · TODOS LOS DERECHOS RESERVADOS`.
>
> ### Photography rules
> Only one hero image: the editorial founder portrait. No stock photography anywhere. If supporting visuals are needed, use abstract document scans, redacted-text textures, or detail shots of legal materials (a fountain pen on paper, the corner of a leather folio, an envelope seal) — all shot in the same warm-light palette.
>
> ### Motion
> Minimal. Page transitions: 200ms fade. Hover states: 150ms color shift only. No parallax, no scroll-jacking, no floating elements, no reveal-on-scroll animations. The site should feel like turning pages, never like a product demo.
>
> ### The grayscale test
> Print any page to grayscale. It should still feel authoritative and clear. If it looks like a SaaS landing page without color, the design has failed.
