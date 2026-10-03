# SecureCover — Health & Motor Insurance Website

A Next.js (App Router) + TypeScript + Tailwind CSS website for an
India-focused insurance advisor. Insurance products are stored as **Markdown
files**, so you can add or edit plans over time without touching code. Customer
enquiries from the contact form are stored in **SQLite**.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage — hero with your photo in a tilted banner, newly introduced, most purchased, most discussed, why choose me |
| `/health-insurances` | All health insurance products |
| `/motor-insurances` | All motor insurance products |
| `/insurances/[slug]` | Insurance detail page |
| `/contact` | Contact me (form + direct details) |
| `/faqs` | Accordion FAQs |
| `/legal/terms`, `/legal/privacy`, `/legal/disclaimer`, `/legal/refund` | Footer legal pages |

Every page shares the same header and footer (including IRDAI registration,
corporate address, quick links and social handles).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## 1. Add or edit an insurance product

Create a new `.md` file in `content/insurances/`. The filename becomes the URL
slug unless you set `slug` in the front matter.

```markdown
---
title: My New Plan
category: health          # "health" or "motor"
provider: Insurer Name
summary: One-line summary shown on cards.
cover: ₹10 Lakh
price: ₹620/month
features:
  - Feature one
  - Feature two
tags:
  - Individual
  - Cashless
introducedAt: "2026-10-01" # ISO date, used for newest-first ordering
isNew: true               # show in "Newly Introduced"
purchaseRank: 1           # lower number = higher in "Most Purchased"
discussionRank: 2         # lower number = higher in "Most Discussed"
---

## Body heading

Write the full plan description in Markdown here.
```

### How the homepage sections are populated

- **Newly Introduced** — products with `isNew: true` (newest `introducedAt`
  first).
- **Most Purchased** — products with a `purchaseRank`, sorted ascending.
- **Most Discussed** — products with a `discussionRank`, sorted ascending.

Just remove a rank or `isNew` flag to drop a product from a section. Add or
delete Markdown files to change what is listed.

## 2. Update your personal / corporate details

Edit **`lib/site-config.ts`** — this single file controls:

- Your name, role, phone, WhatsApp and email.
- IRDAI registration number, corporate address, CIN, grievance officer and
  consumer-education links (shown in the footer).
- Social media handles.

Replace the placeholder `public/profile.svg` with your own photo
(`public/profile.jpg`) and update the `src` in `app/page.tsx` if you change the
filename.

## 3. FAQs

Edit `data/faqs.ts` to add or reorder questions in each category.

## 4. Contact form & SQLite

The contact form posts to `app/api/contact/route.ts`, which saves enquiries
using Node's built-in `node:sqlite` (Node 22+). The database file is created
automatically at `data/app.sqlite`.

> Note: if `node:sqlite` is unavailable, the site still works but enquiries are
> not persisted — connect an email/CRM service in the API route for
> notifications.

## Deployment notes

- **Vercel / serverless**: the SQLite file is ephemeral on serverless hosts.
  Swap `lib/db.ts` for a hosted database (Postgres, Turso, etc.) or forward
  enquiries to email/CRM if you deploy there.
- A traditional Node server or VPS persists `data/app.sqlite` normally.

## Project structure

```
app/                 Pages, layout, API route
components/          Header, Footer, cards, forms, accordion
content/insurances/  Your Markdown product files
data/faqs.ts         FAQ content
lib/                 Types, content loader, SQLite, site config
public/              Static assets (your photo, images)
```
