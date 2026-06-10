# 🕊️ El Shaddai Christian Drama Ministry — Official Website (Version 3)

**Motto:** *Thy Word Is Light* — Psalm 119:105
**Established:** 2018 — vision and the name **ELSHADDAI** given by God in 2017; ministry birthed in a 3-day vigil (May 7–9) with 3 people.

Version 3 is the biggest upgrade yet. Every v1 and v2 feature is kept, the **video library has been expanded to 18 real videos pulled from the ELSHADDAI TV channel** (with official descriptions), and the whole library is now **data-driven** — adding a video means editing one simple list, nothing else. Still built **100% with free tools**: no paid APIs, no AI APIs, no monthly fees, no servers, no databases.

> 🛠️ Designed & built by **Adewale Samson Adeagbo** ([cssadewale.pages.dev](https://cssadewale.pages.dev)) · **HMG Technologies** ([hmgtechnologies.pages.dev](https://hmgtechnologies.pages.dev)), an **HMG Concepts** ([hmgconcepts.pages.dev](https://hmgconcepts.pages.dev)) company · FaithTech: **HMG Gospel** ([hmggospel.pages.dev](https://hmggospel.pages.dev)) · Media: **HMG Media** ([hmgmedia.pages.dev](https://hmgmedia.pages.dev)) · Learning: **HMG Academy** ([hmgacademy.pages.dev](https://hmgacademy.pages.dev)) · 💬 Developer WhatsApp: [+234 810 086 6322](https://wa.me/2348100866322)

---

## 📁 Project Structure

```
elshaddai-v3/
├── index.html               # Home (+ 🆕 Continue Watching strip, 🆕 QR share card)
├── start.html               # 🆕 "New Here? Start Here" — visitor onboarding journey
├── about.html               # Our story, vision/mission, founder, statement of faith
├── watch.html               # 🆕 DATA-DRIVEN library — 18 videos, search/filter/sort
├── devotional.html          # Daily devotional + weekly prayer focus + progress bar
├── events.html              # Calendar (incl. ẸJẸ & THE MIRROR premieres), countdown, gallery
├── prayer.html              # Prayer requests, testimonies, salvation prayer, prayer focus
├── give.html                # Partnership & fraud-safe giving
├── team.html                # Join the Team — 6 departments + volunteer application
├── mylist.html              # My Watch List — saved videos (private, on-device)
├── contact.html             # Contact form, direct lines, FAQ
├── 404.html                 # Custom "page not found"
├── manifest.webmanifest     # PWA manifest (installable app)
├── sw.js                    # Service worker v3 (offline + caching)
├── robots.txt / sitemap.xml # SEO (update YOUR-SITE-URL after deploying)
├── _headers                 # Free security headers (Cloudflare/Netlify)
├── .nojekyll / humans.txt   # GitHub Pages flag · credits file
├── README.md                # This file
├── assets/
│   ├── css/style.css        # One global stylesheet (brand colours from the logo)
│   ├── js/config.js         # ⚙️ EDIT-ME №1: announcements, event countdown, prayer focus
│   ├── js/videos.js         # 🆕 ⚙️ EDIT-ME №2: THE VIDEO LIBRARY — one list runs the site
│   ├── js/main.js           # All interactivity — vanilla JS, no frameworks
│   └── images/              # logo.jpg, founder.jpg (add event photos here)
└── templates/               # Reusable header/footer + page bodies for future edits
```

---

## 🎬 Real Channel Content Now On the Site (v3)

Pulled directly from the ELSHADDAI TV channel and its free public RSS feed:

- **18 videos** in the library — full dramas (*PAMILERIN*, *MORENIKEJI*, *GBESE*), short films (*THIS WORLD NO BALANCE*, *TOKUNBO*, *THE POISONED FOOD*) and 12 Shorts/clips (*The Man Who Never Sinned…*, *Tell Your MOCKER Thank You*, *Oh My Generation*, *When You Are Secured in God*, *Your Enemies Are Not Outsiders*, *Every Other god Will Fade Away*, *If You Don't Practise "Say I Am Sorry"*, *I Have Escaped From the Pattern of My House*, the Valentine *POISONED FOOD* special, and more).
- **Official video descriptions** from the channel shown under each major drama via a tidy "📖 About this drama" expander (e.g. PAMILERIN's full synopsis about Emma taking his place, TOKUNBO's John 14:6 lesson, THIS WORLD NO BALANCE's Mark 8:36 message).
- **Two upcoming productions** announced on the channel are promoted with "COMING SOON" ribbon cards and in the announcement bar: **ẸJẸ (BLOOD)** — *"Lights. Camera. Spirit. — now filming on location"* — and **THE MIRROR — Behind the Reflection**.
- A **📡 free RSS follow link** so anyone can follow the channel without an account.

---

## ✨ ALL FEATURES — Detailed Explanation

### A. Pages (11 + 404)

| Page | What it does |
|---|---|
| **Home** | Hero, animated counters, 8 pillar cards, Verse of the Day, 3 latest playable videos, countdown, **🆕 Continue Watching strip** (your recently played videos), **🆕 QR share card** (downloadable poster QR), WhatsApp banner, social wall. |
| **Start Here** 🆕 | Visitor onboarding: a numbered **5-step journey** (watch a drama → salvation → daily Word → join channels → serve), an **"I came here because…" need-based table** linking every visitor intent to the right page, and a 60-second ministry story. Perfect link to put in social-media bios. |
| **About** | Timeline (2017 vision → 2018 three-man vigil → digital era), vision/mission/values, founder profile & quote, statement of faith. |
| **Watch** | **🆕 Fully data-driven library (18 videos)** rendered from `videos.js`; search box (press `/`), category chips, **🆕 sort dropdown** (newest/oldest/A–Z), live video counter, official descriptions, ❤️ save, per-video WhatsApp share / copy link / open on YouTube, ẸJẸ & THE MIRROR coming-soon cards, RSS link. |
| **Devotional** | 7 devotionals tied to real dramas, Verse of the Day, weekly prayer focus (today highlighted), reading progress bar. |
| **Events** | Programme table (now listing the ẸJẸ and THE MIRROR premieres), countdown, gallery with lightbox, booking CTA. |
| **Prayer** | Confidential request form, testimony form, salvation prayer with follow-up, prayer-focus grid. |
| **Give** | 3 partnership tracks, fraud-safe account flow, pledge form, free support actions. |
| **Team** | 6 departments with skill tags, volunteer application (department + experience), expectations & benefits. |
| **My Watch List** | Saved videos, playable in-page, removable — private localStorage, zero server cost. |
| **Contact** | Categorised form, click-to-call/copy numbers, all socials, FAQ accordion. |
| **404** | Gospel-flavoured error page (John 14:6). |

### B. Features carried over from v1 + v2 (all kept — nothing removed)
PWA installable app & offline mode · dark/light theme · YouTube facade player (no API key) · client-side search & filters · FormSubmit serverless email forms (6 of them) · WhatsApp fallback on every form · auto-renewing May 7 countdown · Verse of the Day (offline) · native share · back-to-top · floating WhatsApp button · scroll-reveal animations · animated counters · toasts · print styles · SEO meta + Open Graph + JSON-LD · sitemap/robots · anti-fraud giving · announcement bar (config-driven) · custom event countdown override · favourites/watch-later system · per-video sharing · devotional hub · weekly prayer focus · gallery lightbox · newsletter signup · reading progress bar · offline/online indicator · `/` keyboard shortcut · accessibility pack (skip link, focus rings, reduced-motion) · security headers · humans.txt · .nojekyll · More-menu dropdown nav.

### C. 🆕 NEW enterprise features in Version 3

1. **🗄️ Data-Driven Video Library (`assets/js/videos.js`)** — the single most important upgrade. All 18 videos live in one human-readable list (id, title, category, duration, date, description). The Watch page grid, the video counter, search, filters, sorting, favourites and share buttons all **build themselves** from this list. Adding next week's video = pasting one 5-line block. This is the same "content as data" architecture enterprise CMS systems use — achieved free with one JS file.
2. **🔀 Library Sorting** — newest first / oldest first / A→Z dropdown, combined seamlessly with search and category filters.
3. **📖 Official Description Expanders** — each major drama carries its real YouTube description (synopsis + Scripture) in a collapsible "About this drama" panel, giving the site genuine film-catalogue depth and SEO-rich text.
4. **🕘 "Continue Watching" Strip (home page)** — the site remembers the last 6 videos the visitor played (private localStorage) and shows them on the home page with thumbnails — the welcome-back experience streaming platforms use. The section hides itself for first-time visitors.
5. **📲 Smart Install-App Button** — listens for the browser's `beforeinstallprompt` event and shows a floating "📲 Install Our App" button exactly when installation is possible; one tap installs the PWA. (Previously users had to find "Add to Home screen" themselves.)
6. **🔳 QR Code Generator + Download** — the home page renders a QR code pointing at the live site (free api.qrserver.com image service, no key) with a **Download** button — print it on banners, flyers, handbills and project it at vigils. The QR auto-updates to whatever domain the site is deployed on.
7. **📡 Free RSS Follow Link** — one click subscribes any RSS reader to the channel's free public feed (`youtube.com/feeds/videos.xml?...`) — zero-cost "notifications" without a Google account.
8. **🚏 Visitor Onboarding Page (start.html)** — enterprise sites convert visitors with guided funnels; `start.html` is exactly that for souls: 5 first steps, a need-based router table, and a 60-second story. Designed to be **the link in the ministry's TikTok/Instagram bios**.
9. **🩸 Production Pipeline Promotion** — ẸJẸ (BLOOD) and THE MIRROR get "COMING SOON" ribbon cards, announcement-bar billing and a calendar entry — building premiere anticipation the way film studios do.
10. **🧠 Service Worker v3** — caches the new pages and `videos.js`; old caches auto-purged on update.

**Why still no AI API?** As you specified — AI APIs bill per call and create recurring costs. Every intelligent behaviour here (data-driven rendering, sorting, recent-history, QR, countdowns, today-highlighting) is plain JavaScript running free in the visitor's browser, forever.

---

## 🚀 DEPLOYMENT — Clear, Unambiguous Steps (All Free)

> Total cost: ₦0. You need an email address and a phone or laptop with a browser.

### STEP 0 — One-time accounts (5 minutes)
1. **GitHub** (file storage + version history): <https://github.com/signup> → email → password → username (e.g. `elshaddaidrama`) → verify email.
2. *(Option A only)* **Cloudflare**: <https://dash.cloudflare.com/sign-up> → email + password → verify.

### STEP 1 — Upload the files to GitHub
1. GitHub → **➕ → New repository** → name: `elshaddai` → **Public** → **Create repository**.
2. Click **"uploading an existing file"** on the empty-repo page.
3. Open the `elshaddai-v3` folder on your device. **Select everything INSIDE it** (`index.html`, `assets`, `templates`, etc. — *not the folder itself*; `index.html` must sit at the repo's top level). Drag into the browser.
   - If a folder refuses to drag: commit the loose files first, then **Add file → Upload files** again for `assets`, then `templates`.
4. Scroll down → **Commit changes**.

### STEP 2 — OPTION A: Cloudflare Pages ⭐ recommended
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. **Connect GitHub** → authorise → choose the `elshaddai` repo → **Begin setup**.
3. Fill exactly:
   - Project name: `elshaddaidrama` *(becomes your web address)*
   - Production branch: `main`
   - Framework preset: **None** · Build command: *(empty)* · Build output directory: `/`
4. **Save and Deploy** → wait ~60 seconds.
5. 🎉 Live at **`https://elshaddaidrama.pages.dev`** with free SSL.
6. Updates forever after: edit any file on GitHub → Commit → auto-redeploys in ~1 minute.

### STEP 2 — OPTION B: GitHub Pages
1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch** · Branch: **main** · Folder: **/ (root)** → **Save**.
3. After 1–2 minutes the page shows your URL: `https://YOUR-USERNAME.github.io/elshaddai/`.

### STEP 2 — OPTION C: Netlify drag-and-drop (no GitHub needed)
1. <https://app.netlify.com/signup> → free account.
2. **Sites → Add new site → Deploy manually** → drag the whole `elshaddai-v3` folder onto the drop zone.
3. Live in seconds → rename: **Site configuration → Change site name** → `elshaddaidrama` → `https://elshaddaidrama.netlify.app`.

### STEP 3 — Post-launch checklist (once, ~10 minutes)
| # | Task | How |
|---|---|---|
| 1 | **Activate the email forms** | On the live site, submit a test on the Contact page → open `elshaddaidrama2018@gmail.com` → click FormSubmit's one-time **Activate** link (check Spam). All 6 forms then deliver free, forever. |
| 2 | **Fix SEO URLs** | Edit `sitemap.xml` + `robots.txt` on GitHub → replace every `YOUR-SITE-URL` with the real address → Commit. |
| 3 | **Register with Google** | <https://search.google.com/search-console> → Add property → verify → Sitemaps → submit `sitemap.xml`. |
| 4 | **Test app install** | Open the live site on a phone → tap the floating **📲 Install Our App** button (or menu → Add to Home screen). |
| 5 | **Print the QR** | Home page → QR card → **⬇ Download QR Code** → print on banners/flyers. |
| 6 | **Put start.html in your bios** | Use `https://YOUR-SITE/start.html` as the link in TikTok/Instagram/YouTube bios — it routes every visitor to the right place. |

### STEP 4 — Routine updates (no developer needed)
| Want to… | Edit this | How |
|---|---|---|
| **Add a new video** | `assets/js/videos.js` | Copy any `{ ... },` block to the TOP of the list → change `id` (the part after `watch?v=` in the YouTube link), `title`, `cat` (`drama`/`short`/`shorts`), `len`, `date`, `desc` → Commit. The Watch page, counter, search, sort and favourites all update automatically. |
| Change the announcement bar | `assets/js/config.js` | Edit `text`; give `id` a NEW word so dismissed visitors see it again → Commit. |
| Count down to a premiere | `assets/js/config.js` | `nextEvent.date = "2026-08-15 18:00"` + name → Commit. Clear to `""` to restore the May 7 anniversary countdown. |
| Change weekly prayer points | `assets/js/config.js` | Edit the `prayerFocus` pairs → Commit. |
| Add event photos | `assets/images/` + `events.html` | Upload image, duplicate a `<figure>` block → Commit (lightbox automatic). |
| Add a devotional | `devotional.html` | Duplicate a `<details class="devo">` block → edit → Commit. |

---

## 🧰 Tech Stack (100% free, deliberately simple)
| Layer | Tool | Cost |
|---|---|---|
| Pages | HTML5 + CSS3 + Vanilla JS — no frameworks, no build step | Free |
| Content data | `videos.js` + `config.js` (flat-file "CMS") | Free |
| Forms → email | FormSubmit.co | Free |
| Video | YouTube nocookie embeds + i.ytimg.com thumbnails + public RSS feed | Free |
| QR codes | api.qrserver.com image API (no key) | Free |
| Messaging | wa.me WhatsApp deep links | Free |
| App/offline | Service Worker + Web App Manifest (PWA) | Free |
| Personalisation | Browser localStorage (favourites, recents, theme — private, on-device) | Free |
| Security | `_headers`, nocookie embeds, no trackers | Free |
| SEO | Meta + Open Graph + JSON-LD + sitemap + robots | Free |
| Hosting + SSL | Cloudflare Pages / GitHub Pages / Netlify | Free |

---

## 👨🏾‍💻 Credits

Built with ❤️ for the Kingdom by **Adewale Samson Adeagbo** — AI-Augmented Solutions Developer · Data Scientist · STEM Educator.

| Brand | Link |
|---|---|
| Portfolio | https://cssadewale.pages.dev |
| HMG Concepts | https://hmgconcepts.pages.dev |
| HMG Academy | https://hmgacademy.pages.dev |
| HMG Technologies | https://hmgtechnologies.pages.dev |
| HMG Media | https://hmgmedia.pages.dev |
| HMG Gospel | https://hmggospel.pages.dev |
| WhatsApp | https://wa.me/2348100866322 |

*"Every platform is a pulpit. Every tool is a testimony."*
