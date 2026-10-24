# Fiam Finance website

Marketing site for Fiam Finance (a product of Awuya Digital Limited), built from the Claude Design handoff in `../project/`: all nine pages (`Fiam Website`, `Features`, `Security`, `Crypto`, `About`, `Help`, `Contact`, `Privacy`, `Terms`) plus the shared `Site Nav` and `Site Footer`.

Next.js 16 (App Router) + TypeScript + CSS Modules, served by `next start` (the contact form posts to `/api/contact`, which sends mail through the Zoho ZeptoMail API).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build; run with `npm start` on a Node host

# Contact form env vars (see .env.example): ZEPTOMAIL_TOKEN, optional ZEPTOMAIL_FROM / CONTACT_TO / ZEPTOMAIL_API
```

## What's here

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` + `home.module.css` | Home (from `Fiam Finance.html`): hero, bank marquee, features, security tabs (`SecurityTabs.tsx`), crypto band, everyday bento, FAQ, final CTA |
| `src/app/{features,security,crypto,about}/` | Content pages |
| `src/app/help/HelpCentre.tsx` | Help centre with live search and grouped FAQs |
| `src/app/contact/ContactForm.tsx` | Contact form with validation (no backend yet) |
| `src/app/{privacy-policy,terms}/` | Legal pages on the shared `LegalPage` layout (sticky contents list) |
| `src/components/SiteNav.tsx` | Sticky blurred nav with the light/dark toggle; collapses to an animated drawer below 880px |
| `src/components/SiteFooter.tsx` | Brand blurb, five link columns, giant `fiam` wordmark |
| `src/components/WaitlistDialog.tsx` | iPhone waitlist popup; opened by any `[data-waitlist]` link (see `StoreButtons.tsx`) |
| `src/components/Phone.tsx`, `Glyph.tsx`, `ui.module.css` | Live-HTML phone mockup, the UI kit's line icons + logo, and shared buttons / eyebrow / section heading |
| `src/components/sections.module.css` | Shared section, type, card and button styles for the inner pages |
| `src/components/PhoneFrame.tsx` | Phone mockups showing app screens (`public/images/screens/*.webp`) |
| `src/components/Accordion.tsx` | FAQ accordion (Crypto, Help) |
| `src/components/WaitlistForm.tsx` | Email capture used on Home (iPhone) and Crypto (early access); no backend yet |
| `src/config/site.ts` | Crypto band toggle, nav links, store and social links |
| `scripts/build-icons.mjs` | Generates `icons.generated.ts` (inline SVGs, no runtime icon CDN). Add a name, run `npm run icons` |

### App screens

The prototype embedded the live, clickable app in each phone. Here they are static renders of the app prototype (`Fiam Wallet Home.dc.html`) at 390×844 @2x: `home`, `fund`, `transfer` and `transactions` with crypto hidden, and `collect` and `payout` for the Crypto page. If the app UI changes, re-render those screens and replace the files in `public/images/screens/`.

### Theme

Design tokens live on `:root` in `globals.css`. Dark is the default; the nav toggle sets `data-theme="light"` on `<html>` and saves it to `localStorage` (`fiam-theme`), applied before paint by a script in `layout.tsx`. Always use the tokens (`var(--ink)`, `var(--card)`, …) rather than raw colours so both themes work.

### Fonts

Product Sans is loaded from `public/fonts/` (extracted from the design file). It must be licensed separately before launch; Figtree (`@fontsource/figtree`) is the fallback.

## Before launch

- `site.playStoreUrl` and the social links in `src/config/site.ts` are placeholders.
- The waitlist, early-access and contact forms only show a confirmation; wire them to real backends (search for `TODO(launch)`).
- Support is support@usefiam.com; general contact (including privacy and legal queries) is hello@usefiam.com.
- Privacy policy and Terms of use are drafts and need legal review.
- Account tier requirements (BVN, ID + selfie, proof of address), crypto networks and the "crypto needs a verified account" rule were assumptions in the design. Confirm with product.
- "Built and operated by Awuya Digital Limited, Nigeria" in the footer was the designer's wording. Confirm it.
# fiam-website
