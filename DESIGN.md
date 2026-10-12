---
name: Brian Rodriguez
description: A personal site drawn as a Clean Architecture diagram, one green taken through four depths.
colors:
  layer-0: "#ffffff"
  layer-1: "#cfe3d6"
  layer-2: "#1b5a41"
  layer-3: "#0c2f23"
  accent: "#1b5a41"
  paper: "#f7f9f6"
  tint: "#e9f1eb"
  ink: "#0f1f18"
  muted: "#4a5c53"
  on-dark: "#ffffff"
  rule-on-dark: "rgba(255, 255, 255, 0.55)"
typography:
  display:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, calc(1.4rem + 4.6vw), 4.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  page-title:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, calc(1.4rem + 2.6vw), 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label-lg:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  code: "4px"
  tag: "5px"
  md: "6px"
  ring-core: "10px"
  ring: "14px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  gutter: "1.5rem"
  lg: "3rem"
  section: "4.5rem"
  section-compact: "3.25rem"
  label-col: "14rem"
  wrap: "68rem"
  wrap-reading: "46rem"
components:
  button-primary:
    backgroundColor: "{colors.layer-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "0 1.3rem"
    height: "2.9rem"
  button-primary-hover:
    backgroundColor: "{colors.layer-2}"
    textColor: "{colors.on-dark}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 1.3rem"
    height: "2.9rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  button-small:
    backgroundColor: "{colors.layer-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "0 1rem"
    height: "2.75rem"
  chip:
    backgroundColor: "{colors.layer-0}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.4rem 0.7rem"
  chip-hover:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
  chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  chip-static:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.4rem 0.7rem"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.tag}"
    padding: "0.15rem 0.45rem"
  tech-tag-hit:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.layer-3}"
  nav-link:
    textColor: "{colors.muted}"
    padding: "0.6rem 0"
  nav-link-current:
    textColor: "{colors.ink}"
  code-block:
    backgroundColor: "{colors.layer-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "1rem 1.1rem"
  callout:
    backgroundColor: "{colors.layer-1}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
---

# Design System: Brian Rodriguez

## Overview

**Creative North Star: "The Layer Diagram"**

The site is a Clean Architecture diagram of a person. Identity sits at the core and each section of the home page is one layer further out: profile, skills, experience, then open source and writing. The structure is the argument, so the system has very few moving parts: four grounds that deepen as the layers move outward, one rule weight, one figure (nested rounded squares), and two typefaces that split cleanly between prose and facts.

The mood is sober and technical without wearing a costume. It is a light page on a paper ground whose depth comes from full-width bands of green, not from a dark canvas, glow, or terminal styling. Density is moderate: generous vertical room between layers (4.5rem), tight ruled rows inside them. Everything a reader needs is typeset; there is no decorative imagery and no icon set beyond the four-ring glyph.

The blog index and the article belong to the outermost layer. They open with its ground as a page header and then hand over to paper for reading at a narrower measure.

**Key Characteristics:**
- One green, four depths, each depth bound to one architecture layer.
- Flat surfaces: depth is tonal, never cast.
- A single rule weight (1.5px) separates rows; there are no cards.
- Sans for sentences, mono for facts (technology names, dates, periods, labels).
- Nested rounded squares are the only drawn figure, at hero size and at 32px.
- Light scheme only (`color-scheme: light`); the home page also prints as an ink-on-paper CV.

## Colors

One green hue (OKLCH hue about 157 to 167) taken from white to near-black, plus a green-tinted paper and ink. There is no second hue anywhere in the interface.

### Primary
- **Mid Layer Green** (`layer-2`, aliased as `accent`): the ground of the Experience layer and the third ring. As `accent` it is the only coloured text on light grounds: the mono role line under the name, links inside article prose, and list markers. It is also the hover state of the primary button.
- **Outer Layer Green** (`layer-3`): the near-black ground of the outermost layer (open source, blog teaser), the blog and article page header, the primary button, code blocks, and text selection on light grounds.

### Neutral
- **Core White** (`layer-0`): the ground of the Profile layer and the core ring, and the fill of skill chips.
- **Pale Layer Green** (`layer-1`): the ground of the Skills layer and the second ring; also the fill of article blockquotes.
- **Paper** (`paper`): the page ground behind the hero, the footer, and article bodies.
- **Tint** (`tint`): a quiet fill for inline code in prose and for the hover state of filter chips.
- **Ink** (`ink`): body text on every light ground, rules on light grounds, ghost button outline, pressed chip fill.
- **Muted** (`muted`): secondary text on light grounds only (nav links at rest, the diagram caption, definition labels, post dates).
- **On Dark** (`on-dark`): all text on `layer-2` and `layer-3`. Secondary text on dark grounds is this colour at reduced opacity (0.85 to 0.88), not a separate grey.
- **Rule On Dark** (`rule-on-dark`): row rules on the two dark grounds.

### Named Rules
**The Depth Is The Layer Rule.** A ground is not a mood choice. `layer-0` through `layer-3` appear as section grounds in order, from the core outward, and a surface takes the ground of the layer it belongs to. Blog and article headers use `layer-3` because writing lives in the outermost layer.

**The One Hue Rule.** Every colour is the same green at a different depth. Emphasis comes from depth and weight, never from a second hue. Content images inside an article (a logo, a screenshot) are content and are exempt.

**The Two Text Colours Per Ground Rule.** Light grounds carry `ink` and `muted`; dark grounds carry `on-dark` at full or slightly reduced opacity. `muted` is never placed on `layer-2` or `layer-3`, and `accent` text is never placed on `layer-1`'s darker neighbours.

## Typography

**Display Font:** Onest (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Onest (same stack)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Menlo, Consolas, monospace)

**Character:** One geometric sans carries the whole voice, from the name at display size down to body copy, with tight negative tracking as it grows. JetBrains Mono is reserved for things that are literally data: technology names, dates and periods, the role line, diagram labels, package names, code. Loaded weights are Onest 400, 500, 600 and JetBrains Mono 400, 500.

### Hierarchy
- **Display** (600, fluid 2.6rem to 4.6rem, line-height 1, tracking -0.035em): the name in the home hero. One per site.
- **Page title** (600, fluid 2rem to 3rem, line-height 1.08, tracking -0.03em): the h1 of the blog index and of an article, on the `layer-3` header.
- **Headline** (600, 2rem, line-height 1.15, tracking -0.02em): layer headings on the home page, always preceded by the ring glyph.
- **Title large** (600, 1.6rem, line-height 1.2): post titles in the blog index and h2 inside article prose.
- **Title** (600, 1.4rem, line-height 1.2, tracking -0.01em): role names in Experience and post titles in the home teaser. Smaller row headings step down to 1rem to 1.15rem at weight 600.
- **Lead** (400, 1.3rem, line-height 1.45, max 30ch): the single sentence under the name. The profile paragraph uses a quieter 1.1rem.
- **Body** (400, 1.0625rem, line-height 1.6): all running text. Prose and bullet lists are capped at 62ch.
- **Label** (JetBrains Mono 400, 0.8rem to 0.95rem, sentence case, no added tracking): 0.95rem for the role line and job periods, 0.85rem for chips and dates, 0.8rem for diagram labels and definition terms.

### Named Rules
**The Mono Means Data Rule.** JetBrains Mono marks a fact a reader could check: a technology, a date, a period, a package name, code. It is never used for sentences or for headings.

**The Sentence Case Rule.** Labels are set in sentence case at natural tracking. The build contains no uppercase or letter-spaced text.

**The Three Weights Rule.** 400 for reading, 500 for links, actions and definition values, 600 for headings. Nothing heavier is loaded.

## Layout

A single centred column, 68rem wide with 1.5rem gutters. The home page is a stack of full-bleed bands, each holding that column; bands meet edge to edge with no gap, so the change of ground is the section break. Each band has 4.5rem of vertical padding (3.25rem below the breakpoint).

Inside a band, content is ruled rows rather than boxes. Skills and Experience share one two-column row grid: a fixed 14rem label column (category, or period in mono) and a fluid content column, 1rem apart, with a 1.5px rule above every row. Profile facts sit in three equal columns under one rule; packages sit in two equal columns with a 3rem column gap. Long text is held to 62ch even when the column is wider.

The hero is two columns (1.05fr and 1fr, 3rem gap): text on the left, the ring diagram on the right, right-aligned and capped at 30rem square. Reading surfaces (blog index, article) narrow the column to 46rem for both the header and the body.

There is one breakpoint, 51.25em (820px). Below it every multi-column grid becomes a single column, the label column stacks above its content with a 0.5rem gap, the diagram centres and shrinks to 22rem, the role line breaks into two lines, and the top navigation wraps to its own full-width row that scrolls horizontally if needed.

Spacing rhythm as built: 0.5rem between chips, 1rem between a label and its content, 1.5rem for gutters and row padding, 3rem for major gaps, 4.5rem between layers.

## Elevation & Depth

The system is flat. No surface casts a shadow, and nothing blurs or glows. Depth is tonal and literal: a deeper green means a layer further from the core, both in the stacked bands and in the nested diagram.

The only `box-shadow` in the build is an inset 1.5px line that draws the underline of the current navigation item; it is a rule, not elevation.

State is shown by fill inversion and by opacity. A pressed chip and a matching technology tag invert to a solid fill; roles and packages that the active filter does not match step back in opacity while the matching ones stay at full strength.

### Named Rules
**The Tonal Depth Rule.** If something needs to feel nearer or further, change its ground to the next layer colour. Do not add a cast shadow.

## Shapes

Corners are slightly softened squares. Controls and blocks use a 6px radius (buttons, code blocks, blockquotes); small mono tags use 5px (chips, technology tags) and inline code 4px. The diagram rings are larger because the figure is larger: 14px on the three outer rings, 10px on the core. Nothing is fully round and there are no pills.

Lines are a single weight, 1.5px, used for row rules, control outlines, the nav underline, the bullet dash in experience lists, and the stroke of the ring glyph at rest (the active ring thickens to 3.2). Rules are `ink` on light grounds and `rule-on-dark` on dark grounds. Link underlines are the one thinner line (1px, offset 0.2em).

The recurring silhouette is the nested rounded square: four concentric squares in the hero, the same four as a 32px outline glyph beside every layer heading with that layer's ring emphasised, and square list markers in article prose.

### Named Rules
**The One Figure Rule.** The interface draws exactly one shape, the nested rounded square. New markers or diagrams are built from it rather than from a second icon vocabulary.

**The Rows Not Cards Rule.** Repeated items are separated by a 1.5px rule above each row and sit directly on the layer ground. The build contains no bordered or filled card containers.

## Components

### Buttons
Solid, compact, and squared; they read as controls, not as banners.
- **Shape:** softly squared (6px radius), 2.9rem tall, 1.5px outline in the same colour as the fill, weight 500, no icon.
- **Primary:** `layer-3` fill with `on-dark` text, 0 1.3rem padding. Used for the single contact action ("Escribirme").
- **Ghost:** transparent with `ink` text and `ink` outline, used for the secondary profile links beside the primary.
- **Small:** 2.75rem tall, 0 1rem padding, 0.9rem text; the top-bar copy of the primary.
- **Hover / Focus:** primary shifts to `layer-2`; ghost inverts to `ink` fill with `on-dark` text. Active nudges down 1px. Focus is a 2px `currentColor` outline offset 3px, shared by every focusable element. Colour transitions run 0.18s ease and only when motion is not reduced.

### Chips
Mono tags on the Skills layer that double as the site's filter.
- **Style:** `layer-0` fill, `ink` text, 1.5px `ink` outline, 5px radius, 0.4rem 0.7rem padding, mono 0.85rem.
- **State:** a skill that some role or package lists is a toggle button: hover fills with `tint`, pressed inverts to `ink` fill with `on-dark` text (`aria-pressed`). A skill nothing lists is static: no fill and a fainter outline, and it is not interactive. Only one filter is active at a time; pressing the active chip clears it.

### Technology tags
The small mono tags under each role and package.
- **Style:** outline only on the dark grounds (1.5px white at reduced opacity), `on-dark` text, 5px radius, 0.15rem 0.45rem padding, mono at tag size.
- **State:** when its technology is the active filter, the tag inverts to an `on-dark` fill with `layer-3` text.

### Rows
The container pattern for everything repeated.
- **Corner Style:** none; rows are unboxed.
- **Background:** the ground of the layer they sit on.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** a 1.5px rule above each row, `ink` on light grounds, `rule-on-dark` on dark.
- **Internal Padding:** 1rem block for skill rows, 1.5rem for packages and post teasers, 2rem for roles.

### Navigation
- **Top bar:** site name at weight 600 on the left, section links at 0.95rem in `muted`, then the small primary button. It sits on `paper`, is not sticky, and has no border.
- **States:** hover turns a link `ink` and underlines it; the current page is `ink`, weight 500, with a 1.5px `ink` line along its bottom edge.
- **Mobile:** below 51.25em the links move to their own row, spread across the width.
- **Footer:** on `paper`, a large contact line (fluid 1.5rem to 2.4rem, weight 600) containing the email address as a link, with the two profile links beneath.

### Ring diagram (signature)
Four absolutely positioned rounded squares nested at 0%, 13%, 26% and 37% insets, filled `layer-3`, `layer-2`, `layer-1`, `layer-0` from outside in. Each outer ring carries a mono 0.8rem label in its top-left corner and links to its section; the core names the person. Hover scales a ring by 1.015 over 0.35s on `cubic-bezier(0.2, 0.8, 0.2, 1)` when motion is allowed. A one-line caption sits beneath in `muted`. The diagram is removed in print.

### Ring glyph (signature)
A 32px inline SVG of four concentric rounded squares, stroked in `currentColor` at 1.5 and 45% opacity, with the ring for the current layer at stroke 3.2 and full opacity. It precedes every layer heading and the blog index title, and is decorative (`aria-hidden`).

### Technology filter (signature)
Pressing a skill chip dims the roles and packages that did not use that technology, inverts the matching tag in the ones that did, and writes a one-line mono status under the Experience heading ("Kotlin: 1 de 3 roles.") with a text button to clear it. The page then scrolls to the first match, smoothly unless motion is reduced. Dimming fades over 0.35s on the shared ease-out curve. Without JavaScript the chips are plain static tags and the hint and status lines stay hidden.

### Article prose
- **Flow:** 1rem between blocks, 3rem above an h2, 2rem above an h3.
- **Links:** `accent`, weight 500, underlined.
- **Lists:** square or decimal markers in `accent`.
- **Inline code:** `tint` fill, 4px radius, 0.86em mono.
- **Code block:** `layer-3` ground, `on-dark` text, 6px radius, horizontal scroll.
- **Blockquote:** `layer-1` fill, 6px radius, 1.1rem text, no side stripe.

### Print
The home page prints as a CV: all grounds are dropped, text and rules become black, the top bar, footer, actions, diagram and glyphs are hidden, a plain-text contact line appears under the name, roles and packages avoid page breaks, and package links print their URLs.

## Do's and Don'ts

### Do:
- **Do** give a new section the ground of the layer it belongs to, and keep the grounds in order from `layer-0` outward.
- **Do** separate repeated items with a 1.5px rule above each row, on the layer ground.
- **Do** set technology names, dates, periods and package names in JetBrains Mono, in sentence case.
- **Do** use `on-dark` text and `rule-on-dark` rules on `layer-2` and `layer-3`, and `ink` with `muted` on the light grounds.
- **Do** show selection by inverting fill and text (pressed chip, matching tag), and keep the 2px `currentColor` focus outline on every interactive element.
- **Do** keep one primary button per view, in `layer-3`, for the contact action.
- **Do** hold running text to 62ch and reading pages to a 46rem column.
- **Do** gate every transition behind `prefers-reduced-motion: no-preference`, as the build does.
- **Do** check that anything added to the home page still prints as plain ink on paper.

### Don't:
- **Don't** introduce a second hue for emphasis, status or links; use a different depth of the green or a heavier weight.
- **Don't** add cast shadows, glows, blurs or gradients; depth is a change of ground.
- **Don't** wrap rows in bordered or filled cards.
- **Don't** set sentences or headings in the mono face.
- **Don't** put `muted` text on the dark grounds; lower the opacity of `on-dark` slightly instead.
- **Don't** add a second icon vocabulary; the nested rounded square is the only drawn figure.
- **Don't** switch the page to a dark canvas with a bright accent; the site is light, and only the two outer layers are dark.
