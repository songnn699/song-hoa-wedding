# Wedding Invitation — Animation Design
**Date:** 2026-03-04
**Project:** song-hoa-wedding (React + Vite + Tailwind)

## Overview
Enhance the existing wedding invitation site with scroll-triggered linear animations using Framer Motion and redesign the hero section to full-screen. Apply a Blush & Ivory color palette throughout.

## Decisions Made
- **Animation library:** Framer Motion (`whileInView` API)
- **Animation style:** Scroll-triggered fade/slide in (once per element on first view)
- **Hero:** Full-screen with `couple5.jpg` background
- **Color palette:** Blush & Ivory

## Color Palette
| Token | Value | Usage |
|---|---|---|
| Background | `#fdf6f0` | Page background |
| Primary text | `#5a3e36` | Body copy |
| Blush accent | `#e8b4b8` | Cards, borders |
| Heading rose | `#c9737a` | Section headings, countdown |
| Divider | `#d4a0a4` | Ornamental lines |

## Sections & Animations

### Hero (new)
- Full-screen (`h-screen`) with `couple5.jpg` as `object-cover` background
- Overlay: `bg-black/30` for text readability
- Couple names in `Playfair Display` or serif fallback, large white text
- Animate: `opacity: 0 → 1`, `y: 40 → 0` on mount, 0.3s delay for date line
- Ornamental divider: `───✦ ♥ ✦───`
- Scroll-down indicator (animated pulse arrow)

### Countdown
- Each box: `opacity: 0, y: 30` → `1, 0` with 0.1s stagger per item

### LoveStory
- Odd stories: slide from left (`x: -60 → 0`)
- Even stories: slide from right (`x: 60 → 0`)
- All with `opacity: 0 → 1`

### PhotoAlbum
- Each image: `scale: 0.8, opacity: 0` → `1, 1` with 0.1s stagger

### Timeline
- Each row: `x: -40 → 0, opacity: 0 → 1` with 0.08s stagger

### GoogleMap
- `opacity: 0 → 1` fade in as section enters viewport

### RSVP
- `y: 40 → 0, opacity: 0 → 1` slide up

## Global Animation Config
```js
// All whileInView animations use:
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

## Implementation Plan
1. Install `framer-motion`
2. Update `index.css` / Tailwind config with blush/ivory palette
3. Add Google Font `Playfair Display` to `index.html`
4. Create `Hero.tsx` component
5. Update `App.tsx` — add Hero, remove old header, apply new bg color
6. Update `CountDown.tsx` — add staggered motion
7. Update `LoveStory.tsx` — add alternating slide animations
8. Update `Album.tsx` — add scale stagger
9. Update `Timeline.tsx` — add slide stagger
10. Update `GoogleMap.tsx` — add fade in
11. Update `RSV.tsx` — add slide up
