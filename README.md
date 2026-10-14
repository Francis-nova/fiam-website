# Fiam Finance website

Marketing site for Fiam Finance (a product of Awuya Digital Limited), built from the Claude Design handoff in `../project/`: all nine pages (`Fiam Website`, `Features`, `Security`, `Crypto`, `About`, `Help`, `Contact`, `Privacy`, `Terms`) plus the shared `Site Nav` and `Site Footer`.

Next.js 16 (App Router) + TypeScript + CSS Modules, exported as a fully static site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out — upload that folder to any static host
```

## What's here

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` + `home.module.css` | Home: hero, features, security, crypto teaser, download + iPhone waitlist |
| `src/app/{features,security,crypto,about}/` | Content pages |
| `src/app/help/HelpCentre.tsx` | Help centre with live search and grouped FAQs |
| `src/app/contact/ContactForm.tsx` | Contact form with validation (no backend yet) |
| `src/app/{privacy,terms}/` | Legal pages on the shared `LegalPage` layout (sticky contents list) |
| `src/components/SiteNav.tsx` | Sticky nav; collapses to a menu button below 960px; highlights the current page |
| `src/components/SiteFooter.tsx` | CTA band, five link columns, Awuya Digital block, socials |
| `src/components/sections.module.css` | Shared section, type, card and button styles for the inner pages |
| `src/components/PhoneFrame.tsx` | Phone mockups showing app screens (`public/images/screens/*.webp`) |
| `src/components/Accordion.tsx` | FAQ accordion (Crypto, Help) |
| `src/components/WaitlistForm.tsx` | Email capture used on Home (iPhone) and Crypto (early access); no backend yet |
| `src/config/site.ts` | Hero variant (`'A'` split / `'B'` centered), crypto teaser toggle, store and social links |
| `scripts/build-icons.mjs` | Generates `icons.generated.ts` (inline SVGs, no runtime icon CDN). Add a name, run `npm run icons` |

### App screens

The prototype embedded the live, clickable app in each phone. Here they are static renders of the app prototype (`Fiam Wallet Home.dc.html`) at 390×844 @2x: `home`, `fund`, `transfer` and `transactions` with crypto hidden, and `collect` and `payout` for the Crypto page. If the app UI changes, re-render those screens and replace the files in `public/images/screens/`.

### Fonts

The design asks for Product Sans, which must be licensed separately. Until it's added (e.g. via `@font-face` in `globals.css`), the site uses Figtree, self-hosted via `@fontsource/figtree`, same as the prototype's fallback.

## Before launch

- `site.playStoreUrl` and the social links in `src/config/site.ts` are placeholders.
- The waitlist, early-access and contact forms only show a confirmation; wire them to real backends (search for `TODO(launch)`).
- Support is support@usefiam.com; general contact (including privacy and legal queries) is hello@usefiam.com.
- Privacy policy and Terms of use are drafts and need legal review.
- Account tier requirements (BVN, ID + selfie, proof of address), crypto networks and the "crypto needs a verified account" rule were assumptions in the design. Confirm with product.
- "Built and operated by Awuya Digital Limited, Nigeria" in the footer was the designer's wording. Confirm it.
# fiam-website
