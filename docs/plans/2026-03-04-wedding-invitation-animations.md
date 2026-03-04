# Wedding Invitation Animations Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add scroll-triggered fade/slide-in animations via Framer Motion, a full-screen hero section, and a Blush & Ivory color palette to the existing wedding invitation site.

**Architecture:** Framer Motion `whileInView` wraps each section component. A new `Hero` component replaces the old inline header. Colors are defined as CSS custom properties in `index.css` using Tailwind v4's `@theme` directive. No new routing or state management needed.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript, Framer Motion

---

## Shared Animation Preset (reference in all tasks below)

```tsx
// Use this config for all scroll-triggered animations:
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};
```

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json` (via npm install)

**Step 1: Install the package**

```bash
cd D:/private/song-hoa-wedding
npm install framer-motion
```

Expected: `framer-motion` added to `dependencies` in `package.json`.

**Step 2: Verify**

```bash
npm list framer-motion
```

Expected: `framer-motion@x.x.x` printed.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion for scroll animations"
```

---

### Task 2: Add Google Font + Update HTML title

**Files:**
- Modify: `index.html`

**Step 1: Update index.html**

Replace the entire `<head>` block with:

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Song & Hoa — Wedding</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Playfair Display font and update page title"
```

---

### Task 3: Update index.css — Blush & Ivory palette + clean typography

**Files:**
- Modify: `src/index.css`

**Step 1: Replace entire index.css with:**

```css
@import 'tailwindcss';

@theme {
  --color-ivory: #fdf6f0;
  --color-blush: #e8b4b8;
  --color-rose-blush: #c9737a;
  --color-warm-brown: #5a3e36;
  --color-divider: #d4a0a4;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Lato', system-ui, sans-serif;
}

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #fdf6f0;
  color: #5a3e36;
  font-family: 'Lato', system-ui, sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
}

/* Remove Vite defaults */
a { text-decoration: inherit; }
button { cursor: pointer; }
```

**Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: apply blush & ivory color palette and typography"
```

---

### Task 4: Create Hero component

**Files:**
- Create: `src/components/Hero.tsx`

**Step 1: Create Hero.tsx**

```tsx
import { motion } from 'framer-motion';
import coupleHero from '../assets/couple5.jpg';

function Hero() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Background image */}
      <img
        src={coupleHero}
        alt='Song & Hoa'
        className='absolute inset-0 h-full w-full object-cover object-center'
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/35' />

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6'>
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-sm uppercase tracking-[0.3em] mb-6 text-white/80 font-light'
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Wedding Invitation
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className='text-5xl md:text-7xl font-bold leading-tight'
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Song <span className='italic font-normal'>&amp;</span> Hoa
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className='my-6 text-white/60 tracking-widest text-lg'
        >
          ── ✦ ♥ ✦ ──
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          className='text-xl tracking-widest'
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          14 · 12 · 2025
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='mt-3 text-sm text-white/70 uppercase tracking-[0.2em] font-light'
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Nhà hàng ABC · TP.HCM
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50'
      >
        <span className='text-xs uppercase tracking-widest'>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className='text-lg'
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
```

**Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add full-screen Hero component with entrance animations"
```

---

### Task 5: Update App.tsx — integrate Hero, new layout

**Files:**
- Modify: `src/App.tsx`

**Step 1: Create a reusable Section wrapper in App.tsx**

Replace entire `App.tsx` with:

```tsx
import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import PhotoAlbum from './components/Album';
import Countdown from './components/CountDown';
import WeddingMap from './components/GoogleMap';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSV';
import Timeline from './components/Timeline';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeUp}
      className='text-center text-2xl font-bold mb-6'
      style={{ fontFamily: "'Playfair Display', serif", color: '#c9737a' }}
    >
      {children}
    </motion.h2>
  );
}

function Divider() {
  return (
    <motion.div
      {...fadeUp}
      className='text-center text-sm tracking-widest my-2'
      style={{ color: '#d4a0a4' }}
    >
      ── ✦ ──
    </motion.div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: '#fdf6f0', color: '#5a3e36' }}>
      {/* Hero */}
      <Hero />

      <div className='max-w-xl mx-auto px-6 py-12 space-y-16'>
        {/* Countdown */}
        <section>
          <SectionTitle>Đếm ngược đến ngày cưới</SectionTitle>
          <Countdown target='2025-12-14T10:00:00' />
        </section>

        <Divider />

        {/* Love Story */}
        <section>
          <SectionTitle>Câu chuyện tình yêu</SectionTitle>
          <LoveStory />
        </section>

        <Divider />

        {/* Wedding details */}
        <motion.section {...fadeUp} className='text-center space-y-3'>
          <SectionTitle>Thông tin hôn lễ</SectionTitle>
          <p className='text-base'>
            <span className='font-semibold' style={{ color: '#c9737a' }}>⏰ Thời gian:</span>{' '}
            10:00 · 14/12/2025
          </p>
          <p className='text-base'>
            <span className='font-semibold' style={{ color: '#c9737a' }}>📍 Địa điểm:</span>{' '}
            Nhà hàng ABC – TP.HCM
          </p>
        </motion.section>

        <Divider />

        {/* Album */}
        <section>
          <SectionTitle>Album ảnh</SectionTitle>
          <PhotoAlbum />
        </section>

        <Divider />

        {/* Timeline */}
        <section>
          <SectionTitle>Chương trình</SectionTitle>
          <Timeline />
        </section>

        <Divider />

        {/* Map */}
        <section>
          <SectionTitle>Địa điểm</SectionTitle>
          <WeddingMap />
        </section>

        <Divider />

        {/* RSVP */}
        <section>
          <SectionTitle>Xác nhận tham dự</SectionTitle>
          <RSVP />
        </section>

        {/* Footer */}
        <motion.p
          {...fadeUp}
          className='text-center text-xs pb-8'
          style={{ color: '#d4a0a4' }}
        >
          ♥ Song &amp; Hoa · Save the Date · 14.12.2025
        </motion.p>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: update App layout with Hero, section titles, and dividers"
```

---

### Task 6: Animate CountDown.tsx — staggered slide-up

**Files:**
- Modify: `src/components/CountDown.tsx`

**Step 1: Replace CountDown.tsx**

```tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date(target).getTime();
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const items = [
    { label: 'Ngày', value: time.d },
    { label: 'Giờ', value: time.h },
    { label: 'Phút', value: time.m },
    { label: 'Giây', value: time.s },
  ];

  return (
    <div className='grid grid-cols-4 gap-3 text-center my-6'>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
          className='rounded-xl p-3'
          style={{ backgroundColor: '#fce8ea' }}
        >
          <div
            className='text-2xl font-bold'
            style={{ color: '#c9737a', fontFamily: "'Playfair Display', serif" }}
          >
            {String(item.value).padStart(2, '0')}
          </div>
          <div className='text-xs mt-1' style={{ color: '#a07070' }}>
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Countdown;
```

**Step 2: Commit**

```bash
git add src/components/CountDown.tsx
git commit -m "feat: animate countdown with staggered slide-up"
```

---

### Task 7: Animate LoveStory.tsx — alternating slide left/right

**Files:**
- Modify: `src/components/LoveStory.tsx`

**Step 1: Replace LoveStory.tsx**

```tsx
import { motion } from 'framer-motion';
import { STORIES_BLOG } from '../constants/blogContent';

function LoveStory() {
  return (
    <div className='space-y-16'>
      {STORIES_BLOG.map((story, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={index}
            className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className='w-full md:w-1/2'
            >
              <img
                src={story.image}
                alt={story.title}
                className='w-full rounded-2xl shadow-lg object-cover aspect-square'
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className='md:w-1/2'
            >
              <p className='text-sm mb-1' style={{ color: '#e8b4b8' }}>
                {story.date}
              </p>
              <h2
                className='text-2xl font-bold mb-3'
                style={{ fontFamily: "'Playfair Display', serif", color: '#5a3e36' }}
              >
                {story.title}
              </h2>
              <p className='leading-relaxed' style={{ color: '#7a5c52' }}>
                {story.content}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default LoveStory;
```

**Step 2: Commit**

```bash
git add src/components/LoveStory.tsx
git commit -m "feat: animate love story with alternating slide left/right"
```

---

### Task 8: Animate Album.tsx — staggered scale-up

**Files:**
- Modify: `src/components/Album.tsx`

**Step 1: Replace Album.tsx**

```tsx
import { motion } from 'framer-motion';
import img1 from '../assets/couple1.jpg';
import img2 from '../assets/couple2.jpg';
import img3 from '../assets/couple3.jpg';
import img4 from '../assets/couple4.jpg';

function PhotoAlbum() {
  const images = [img1, img2, img3, img4];

  return (
    <div className='grid grid-cols-2 gap-3 my-8'>
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
          whileHover={{ scale: 1.04 }}
        >
          <img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            className='aspect-square rounded-2xl object-cover shadow w-full'
          />
        </motion.div>
      ))}
    </div>
  );
}

export default PhotoAlbum;
```

**Step 2: Commit**

```bash
git add src/components/Album.tsx
git commit -m "feat: animate photo album with staggered scale-up"
```

---

### Task 9: Animate Timeline.tsx — staggered slide from left

**Files:**
- Modify: `src/components/Timeline.tsx`

**Step 1: Replace Timeline.tsx**

```tsx
import { motion } from 'framer-motion';

const timeline = [
  { time: '10:00', text: 'Chào đón khách' },
  { time: '10:30', text: 'Khai tiệc cưới' },
  { time: '11:00', text: 'Ảnh & games' },
];

function Timeline() {
  return (
    <div className='space-y-4'>
      {timeline.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
          className='flex items-center gap-4 p-3 rounded-xl'
          style={{ backgroundColor: '#fce8ea' }}
        >
          <div
            className='w-16 font-bold text-right shrink-0'
            style={{ color: '#c9737a', fontFamily: "'Playfair Display', serif" }}
          >
            {e.time}
          </div>
          <div
            className='w-px h-6 rounded-full shrink-0'
            style={{ backgroundColor: '#d4a0a4' }}
          />
          <div style={{ color: '#5a3e36' }}>{e.text}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
```

**Step 2: Commit**

```bash
git add src/components/Timeline.tsx
git commit -m "feat: animate timeline with staggered slide-from-left"
```

---

### Task 10: Animate GoogleMap.tsx — fade in

**Files:**
- Modify: `src/components/GoogleMap.tsx`

**Step 1: Replace GoogleMap.tsx**

```tsx
import { motion } from 'framer-motion';

function WeddingMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='mt-4 rounded-2xl overflow-hidden shadow-lg'
      style={{ border: '2px solid #e8b4b8' }}
    >
      <iframe
        title='Wedding location'
        src='https://www.google.com/maps?q=10.776889,106.700806&z=15&output=embed'
        className='w-full h-64 border-0'
        loading='lazy'
      />
    </motion.div>
  );
}

export default WeddingMap;
```

**Step 2: Commit**

```bash
git add src/components/GoogleMap.tsx
git commit -m "feat: animate map section with fade-in"
```

---

### Task 11: Animate RSV.tsx — slide up

**Files:**
- Modify: `src/components/RSV.tsx`

**Step 1: Replace RSV.tsx**

```tsx
import { motion } from 'framer-motion';

function RSVP() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='space-y-4 p-6 rounded-2xl shadow-lg'
      style={{ backgroundColor: '#fff7f4', border: '1px solid #e8b4b8' }}
    >
      <input
        className='w-full px-4 py-2 rounded-lg outline-none text-sm'
        style={{
          border: '1px solid #e8b4b8',
          backgroundColor: '#fff',
          color: '#5a3e36',
        }}
        placeholder='Tên bạn'
      />
      <select
        className='w-full px-4 py-2 rounded-lg text-sm'
        style={{
          border: '1px solid #e8b4b8',
          backgroundColor: '#fff',
          color: '#5a3e36',
        }}
      >
        <option>Đến</option>
        <option>Xin lỗi, bận rồi</option>
      </select>
      <motion.button
        type='submit'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='w-full py-3 rounded-full font-semibold text-white text-sm uppercase tracking-widest'
        style={{ backgroundColor: '#c9737a' }}
      >
        Gửi phản hồi
      </motion.button>
    </motion.form>
  );
}

export default RSVP;
```

**Step 2: Commit**

```bash
git add src/components/RSV.tsx
git commit -m "feat: animate RSVP form with slide-up"
```

---

### Task 12: Clean up App.css and verify dev server

**Files:**
- Modify: `src/App.css`

**Step 1: Clear unused App.css defaults**

Replace `src/App.css` with:

```css
/* App-specific overrides */
```

**Step 2: Run dev server and verify in browser**

```bash
npm run dev
```

Open `http://localhost:5173` and verify:
- Hero section is full-screen with couple5.jpg background
- Scrolling triggers animations on each section
- Colors match blush/ivory palette
- Font is Playfair Display

**Step 3: Commit**

```bash
git add src/App.css
git commit -m "chore: clear App.css defaults"
```

---

### Task 13: Build and deploy

**Step 1: Build**

```bash
npm run build
```

Expected: no TypeScript errors, `dist/` folder created.

**Step 2: Commit and deploy (if ready)**

```bash
npm run deploy
```

Expected: site deployed to `https://songnn699.github.io/song-hoa-wedding`.
