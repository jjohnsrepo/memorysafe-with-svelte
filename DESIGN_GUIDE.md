# MemorySafe — Design Guide

The files in this directory are the boilerplate code from a vercel project. The goal is to take this framework and merge it with my previous raw html css and js webiste to create a modern website for my company "MemorySafe". This document contains the design guide you should follow. Do not generate any images. If an image would be appropirate, leave the space white so I know where to put an image.

---

## 1. Brand & Purpose

- **Product:** MemorySafe — a service that digitizes personal media (home videos, photos, tapes).
- **Positioning:** The friendly, independent alternative to "big box" digitization chains.
- **Voice:** Warm, plainspoken, confident. Leans on the word **"Unbeatable."** Emphasizes turnaround, service, and price.
- **Feel:** Nostalgic, analog, handmade — like a scrapbook or a typed letter. Not corporate, not sleek-tech.

---

## 2. Visual Identity

### 2.1 Color palette

| Role | Value | Notes |
|---|---|---|
| Page background | `blanchedalmond` (`#FFEBCD`) | Warm cream, sets the nostalgic tone |
| Nav / accent surface | `rgb(255, 222, 171)` (`#FFDEAB`) | Slightly deeper cream for the top bar |
| Text | Default browser black | High contrast on cream |
| Button fill | `blanchedalmond` | Button blends into the page — pill outline does the work |

Keep the palette tight — no blues, no grays. Any additional accent should stay in the warm cream/tan/brown family.

### 2.2 Typography

- **Family:** `Courier` (monospace) across the entire site, including the button. This is load-bearing — it carries the "typewriter / analog" feel. Substitute with `Courier New, ui-monospace, monospace` fallback stack.
- **Scale (desktop):**
  - Hero headline: `4.5rem`, with `<strong>best</strong>` bolded inline
  - Hero bullet list: `2rem`, with the word `Unbeatable` bolded in each
  - Right-column tagline: `2.5rem`, centered
  - Button: `2rem`
  - Nav logo wordmark: default `<h1>` size
- **Emphasis pattern:** bold single words inside otherwise regular sentences (`**best**`, `**Unbeatable**`). Do not italicize.

### 2.3 Imagery

- **Logo:** `drawing.svg` — a hand-drawn style mark, displayed at ~100px wide next to the wordmark.
- **Hero media:** `memorysafe.gif` — an animated GIF in the right column. Max-height ~70% of its container. Keep it animated; do not replace with a static image.
- Prefer hand-drawn, snapshot, or home-movie aesthetics over stock photography.

---

## 3. Layout

### 3.1 Overall structure

Single-page landing, two regions:

1. **Nav bar** (top, full width)
2. **Main hero** (two-column, below nav, at least `100vh` tall)

A commented-out contact form exists in source; treat it as a future section, not part of v1.

### 3.2 Nav

- Flex row, `justify-content: space-between`.
- Background `#FFDEAB`.
- **Left:** logo image + `<h1>MemorySafe</h1>` in a horizontal flex container.
- **Right:** horizontal `<ul>` with three items, `gap: 15px`, no bullets:
  - About me
  - Download today!
  - Contribute
- Items are currently plain text; in the framework build they should be links/buttons with hover affordance.

### 3.3 Main hero

- Flex row, two columns, gap `5px`.
- Outer margins: `margin-left: 20%`, `margin-right: 8%` (asymmetric — intentional, keeps the content pushed right of center).
- `min-height: 100vh`.

**Left column (`.main_left`):**
- Headline paragraph: *"The **best** alternative to big box digitization"* at `4.5rem`.
- Unordered list (no bullets, column flex, `gap: 15px`, `2rem`):
  - **Unbeatable** turnaround times
  - **Unbeatable** customer service
  - **Unbeatable** price

**Right column (`.main_right`):**
- Centered tagline: *"Bring your memories to life"* at `2.5rem`.
- The GIF below the tagline.
- A pill-shaped CTA button below the GIF, centered, `margin-top: 15%`:
  - Label: `Contact now! ↓`
  - `border-radius: 999px`, Courier `2rem`, background `blanchedalmond` (matches page), pointer cursor on hover.

### 3.4 Spacing rules

- Use percentage-based outer margins so the layout breathes on wide screens.
- Internal gaps are small and fixed (`5–15px`).
- Top margin of `1%` on both hero columns; no heavy padding elsewhere.

---

## 4. Interaction

- **Button hover:** cursor becomes pointer. (No color change currently — the implementer may add a subtle darken on hover, staying in the cream family.)
- **Nav items:** add pointer cursor and an underline-on-hover in the framework build.
- No animations beyond the GIF.
- No modals, no carousels, no parallax. Keep it still and readable.

---

## 5. Responsive behavior (to be added)

The current CSS is desktop-only. For the framework build, add:

- **≤ 900px:** collapse `.main` to a single column (`flex-direction: column`), remove the `20%/8%` side margins (use `5%` symmetric), drop headline to `~2.75rem`, bullets to `~1.25rem`.
- **≤ 600px:** nav wraps or stacks; logo shrinks to ~64px; CTA button full-width-ish with `margin-top: 2rem` instead of `15%`.
- Keep Courier at all breakpoints.

---

## 6. Accessibility

- Add meaningful `alt` text to the logo (`"MemorySafe logo"`) and GIF (describe the content, not just `"gif"`).
- Nav `<ul>` items should be real `<a>` links with hrefs.
- Ensure button is a real `<button>` with an accessible name; the trailing `↓` arrow is decorative — wrap in `aria-hidden` span or rely on the word "Contact now!" for the accessible label.
- Verify contrast of Courier black on `#FFEBCD` / `#FFDEAB` (passes WCAG AA for body text at these sizes).

---

## 7. Component breakdown (suggested)

For a component-based framework:

- `<SiteNav>` — logo + wordmark + nav links
- `<Hero>` — wraps the two columns
  - `<HeroPitch>` — left column headline + unbeatable list
  - `<HeroMedia>` — right column tagline + GIF + CTA
- `<PillButton>` — reusable, Courier, pill-shaped, cream fill
- `<ContactSection>` (future, currently commented out in source)

---

## 8. Do / Don't

**Do**
- Keep Courier everywhere.
- Keep the cream-on-cream palette.
- Keep the "Unbeatable × 3" list exactly as written.
- Keep the hand-drawn logo and the animated GIF.

**Don't**
- Don't switch to a sans-serif like Inter/Helvetica — it kills the identity.
- Don't introduce dark mode, gradients, or drop shadows.
- Don't replace the GIF with a static hero image or video player.
- Don't center the main content — the asymmetric left margin is part of the look.

---

## 9. Assets to carry over

- `drawing.svg` — logo
- `memorysafe.gif` — hero animation

Both live at the project root in the current build; place them in the framework's public/static directory.
