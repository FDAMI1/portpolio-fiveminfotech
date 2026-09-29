# Data Management Guide - FIVEM INFOTECH

## Overview
All content for your portfolio website is now centralized in **`data.js`**. You can update any content without touching the HTML file.

## File Structure
- `index.html` - Website structure and styling (no content data here)
- `data.js` - All content, copy, and configuration (UPDATE THIS)
- `DATA_GUIDE.md` - This guide
- `styles.css` - Prebuilt Tailwind CSS (generated, don't edit by hand)
- `tailwind.config.js` - Tailwind config used to build `styles.css`
- `robots.txt` / `sitemap.xml` - Search engine files (update `lastmod` in sitemap after big changes)

## How to Update Content

### 1. Services Section
Edit the `services` array in `data.js`:
```javascript
services: [
  { 
    icon: 'code-2',                    // Lucide icon name
    title: 'Your Service Name',        // Display title
    desc: 'Service description here'   // Short description
  },
  // Add more services...
]
```

### 2. Portfolio Projects
Edit the `portfolio` array:
```javascript
portfolio: [
  { 
    name: 'Project Name',
    logo: '/img/project-name.webp',    // Optional: see "Adding Logos" below
    url: 'https://project-url.com',    // Live demo URL
    industry: 'Industry Category',
    type: 'E-commerce',                // Type: Website, E-commerce, CRM, ERP, Platform, APP
    pdf: '/portfolio/project.pdf'      // Optional: PDF link
  },
  // Add more projects...
]
```

### 3. Systems (Solutions Built)
Edit the `systems` array:
```javascript
systems: [
  {
    icon: 'trending-up',
    title: 'System Name',
    problem: 'The problem it solves',
    solution: 'How it solves it'
  },
  // Add more systems...
]
```

### 4. Team Members
Edit the `team` array:
```javascript
team: [
  {
    name: 'Full Name',
    designation: 'Job Title',
    experience: 5  // Years of experience
  },
  // Add more team members...
]
```

### 5. Testimonials
Edit the `testimonials` array:
```javascript
testimonials: [
  {
    name: 'Client Name',
    role: 'Position, Company',
    text: 'Their testimonial quote here'
  },
  // Add more testimonials...
]
```

### 6. Process Steps
Edit the `processSteps` array:
```javascript
processSteps: [
  {
    num: '01',      // Order number
    title: 'Step Title',
    desc: 'Step description'
  },
  // Add more steps...
]
```

### 7. Why Choose Us
Edit the `whyUs` array:
```javascript
whyUs: [
  {
    icon: 'shield',
    title: 'Reason Title',
    desc: 'Why you should choose us'
  },
  // Add more reasons...
]
```

### 8. Stats & Hero Content
Edit hero, about, and stats sections:
```javascript
stats: [
  { label: 'Projects Delivered', value: 50 },
  { label: 'Industries Served', value: 8 },
  // Update values as needed
]

hero: {
  headline: 'Main headline here',
  subheadline: 'Tagline here',
  // ...
}
```

### 9. Configuration & UI
Edit the `config` object for colors, fonts, and main headlines:
```javascript
config: {
  hero_headline: 'Your headline',
  background_color: '#0a0a0f',
  primary_action_color: '#0ea5e9',
  // All configuration options...
}
```

## Adding Logos
Keep the site fast: logos display at 120px, so resize to max 240px and save as `.webp`
with a lowercase, hyphenated filename (no spaces), e.g. `/img/my-client.webp`.

## Changing Styles (Tailwind)
`styles.css` is prebuilt. Content edits in `data.js` need nothing extra, but if you add
**new Tailwind classes** to `index.html`, rebuild once:
```bash
npx tailwindcss@3.4.17 -o styles.css --minify
```

## Icon Reference
Use any **Lucide icon name**. Common ones:
- `code-2`, `database`, `users`, `shopping-cart`, `package`, `heart-pulse`
- `trending-up`, `shopping-bag`, `truck`, `map-pin`, `file-text`, `monitor`
- `shield`, `clock`, `lock`, `microscope`, `layers`, `heart`
- `graduation-cap`, `user-check`, `stethoscope`, `credit-card`

Full list: https://lucide.dev/

## Type Color Mapping
Portfolio types automatically get colors:
- `E-commerce` → Violet
- `Website` → Sky blue
- `Platform` → Emerald
- `CRM` → Amber
- `ERP`, `APP`, etc. → Default styles

## Portfolio Type Options
- Website
- E-commerce
- CRM
- ERP
- Platform
- APP
- Logistic CRM
- etc.

## Tips
✅ Save `data.js`, refresh the website - changes appear instantly
✅ Don't modify `index.html` - keep structure separate from content
✅ Check Lucide.dev for icon names
✅ Use HTTPS URLs for external links
✅ Keep descriptions short and impactful
✅ Update stats when milestones are reached

## Troubleshooting
**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Ensure `data.js` script loads before other scripts

**Icon not appearing?**
- Check icon name spelling
- Visit lucide.dev to confirm icon exists
- Use `code-2` instead of `code` (most consistent)
