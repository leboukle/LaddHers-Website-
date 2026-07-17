# LaddHers Website v1.0

Editorial-hospitality marketing site for LaddHers, built with Next.js App Router and Tailwind CSS.

## Getting started

Requires Node.js 18.18+ (LTS 20 recommended). Install from https://nodejs.org if `node -v` fails.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.js         Root layout — fonts, metadata, Header/Footer
  globals.css        Design tokens, hover/zoom/divider utilities
  page.js            Home
  about/page.js       About
  experiences/page.js Experiences
  contact/
    page.js            Contact
    ContactForm.js      Client-only contact form (page-specific)
components/
  Header.js, Footer.js
  Wordmark.js          "Ladd" + "Hers" text wordmark
  Button.js, Section.js
  ImagePlaceholder.js   Styled-div stand-in for photography
  ExperienceCard.js
  Perspectives.js       Editorial stat composition (homepage)
  CTASection.js         Reusable "Join the Circle" banner
  JoinCircleForm.js     Full lead-capture form (homepage)
  PartnerLogoWall.js    Grayscale placeholder logo grid
public/images/
  hero/                             Full-bleed hero backgrounds
  architecture/                     Arches, courtyards, library/reading-room interiors
  experiences/                      Dinner tables, salons, roundtable settings
  partners/                         Partner/sponsor logos, neutral background
  events/cocktails-connections/     Recap photos, that gathering
  events/women-and-wealth/          Recap photos, that gathering
  events/financial-wellness/        Recap photos, that gathering
```

Adding a page later (e.g. Media, Donate): create `app/media/page.js`, then add it to `NAV_LINKS` in `components/Header.js` and `components/Footer.js`.

## Replacing placeholders

- **Images** — `components/ImagePlaceholder.js` renders designed gradient placeholders (with a photography-direction comment at the top of the file) until real photos exist. Drop a file into the matching `public/images/` subfolder, then pass it as `src="/images/.../file.jpg"` on that `<ImagePlaceholder>` usage — it renders the real photo instead of the placeholder automatically, no other changes needed.
- **Stats** — `components/Perspectives.js` holds the homepage's "Perspectives" figures, hardcoded with their sources cited inline. Re-verify against those sources periodically; they update year to year.
- **Forms** — `components/JoinCircleForm.js` submits to `app/api/join/route.js`, which appends each submission as a row in the "Submissions" worksheet of a Google Sheet via a service account (credentials in `.env.local`: `GOOGLE_SHEETS_SPREADSHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`). `app/contact/ContactForm.js` still has a `handleSubmit` `TODO` — no backend connected there yet.

## Deploying to Vercel

1. Push this repository to GitHub (see below).
2. Go to https://vercel.com/new, import the GitHub repo.
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy — Vercel builds with `next build` and serves automatically.

No database, auth, payments, or external APIs are required for this version.

## Git setup

This folder is not yet a git repository. From the project root:

```bash
git init
git add .
git commit -m "Initial commit: LaddHers website v1.0"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
