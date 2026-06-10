/* ============================================================
   VIDEO LIBRARY DATA — El Shaddai Christian Drama Ministry (v3)
   ------------------------------------------------------------
   👋 ADD NEW VIDEOS HERE — one block per video, newest first.
   No other file needs touching: the Watch page grid, the search
   page and the video counter all build themselves from this list.

   id    = the YouTube ID (the part after watch?v= in the link)
   title = the video title
   cat   = "drama" (full dramas) | "short" (short films) | "shorts" (clips)
   len   = duration or views (shown under the title)
   date  = release date YYYY-MM-DD (used for sorting)
   desc  = official description (shown in the card; "" = none)
   ============================================================ */
window.ECDM_VIDEOS = [
  {
    id: "nUoKBHbAhnU", title: "THIS WORLD NO BALANCE", cat: "short",
    len: "Short Film · 5:17", date: "2026-04-29",
    desc: "In a world where money and fame have taken over, many have forgotten God. What is really separating us from Christ today is not suffering, but the love of this world. 📖 “For what shall it profit a man, if he gains the whole world and loses his soul?” — Mark 8:36. It's time to return to our first love… Jesus."
  },
  {
    id: "ZvTjWrwH5rc", title: "The Man Who Never Sinned… Died Like a Criminal", cat: "shorts",
    len: "YouTube Short · 261+ views", date: "2026-04-17", desc: ""
  },
  {
    id: "1EJug7dbrv8", title: "See Why He Needed to Die", cat: "shorts",
    len: "YouTube Short · 146+ views", date: "2026-04-11", desc: ""
  },
  {
    id: "eaFNnyVXyuI", title: "The Price He Couldn't Pay Was Paid By Another — Watch PAMILERIN", cat: "shorts",
    len: "YouTube Short · 1.4K+ views", date: "2026-04-08", desc: ""
  },
  {
    id: "YYfE2JePTQU", title: "PAMILERIN — The Price He Couldn't Pay Was Paid By Another", cat: "drama",
    len: "Full Gospel Drama · 22:06", date: "2026-04-05",
    desc: "Pamilerin is a man trapped in the bondage of darkness because of the sins of his past. His life is chained — until EMMA appears. In an unexpected act of love and sacrifice, Emma takes Pamilerin's place and dies for his offenses. What Pamilerin could not pay for, someone else paid the ultimate price. A deep reflection of mercy, grace and the power of true sacrifice."
  },
  {
    id: "NCIHYOFDe24", title: "He Lost It 🙆 — Watch the Full Story", cat: "shorts",
    len: "YouTube Short · 419+ views", date: "2026-03-11", desc: ""
  },
  {
    id: "lWQjVttxVvM", title: "TOKUNBO — The Cheap Choice That Cost Everything", cat: "short",
    len: "Short Film · 3:15", date: "2026-03-11",
    desc: "Tokunbo thought he had made a smart decision — the cheaper option. It didn't take long before everything fell apart. Many people know the right path but choose the wrong one because it looks easier or cheaper. Sometimes what looks cheap today can cost you your future. 📖 John 14:6 — “I am the way, the truth, and the life.”"
  },
  {
    id: "-ecIKO605mw", title: "Tell Your MOCKER Thank You", cat: "shorts",
    len: "YouTube Short · 150+ views", date: "2026-03-03", desc: ""
  },
  {
    id: "VD7EwmhiVTs", title: "Oh My Generation", cat: "shorts",
    len: "YouTube Short · 227+ views", date: "2026-02-27", desc: ""
  },
  {
    id: "1i0wF2SV09w", title: "When You Are Secured in God", cat: "shorts",
    len: "YouTube Short", date: "2026-02-25", desc: ""
  },
  {
    id: "n6huooa4Htc", title: "Your Enemies Are Not Outsiders", cat: "shorts",
    len: "YouTube Short", date: "2026-02-23", desc: ""
  },
  {
    id: "itbAyAxrPDU", title: "Every Other god Will Fade Away", cat: "shorts",
    len: "YouTube Short", date: "2026-02-20", desc: ""
  },
  {
    id: "H_Dk2E149jg", title: "If You Don't Practise “Say I Am Sorry”", cat: "shorts",
    len: "YouTube Short", date: "2026-02-19", desc: ""
  },
  {
    id: "JFHQzB7rB04", title: "I Have Escaped From the Pattern of My House", cat: "shorts",
    len: "YouTube Short", date: "2026-02-18", desc: ""
  },
  {
    id: "BEBLxlIq0CI", title: "This Valentine, Open Your Eyes — Don't Let Him Deceive You (THE POISONED FOOD)", cat: "shorts",
    len: "Valentine Special Trailer", date: "2026-02-14", desc: ""
  },
  {
    id: "czhPbkAN0WM", title: "THE POISONED FOOD — One Bite, One Mistake", cat: "short",
    len: "Gospel Short Movie · 5:10", date: "2026-02-10",
    desc: "Not everything attractive is safe, and not everyone smiling at your table is for you. One bite, one mistake — a powerful lesson in discernment. Latest gospel short movie from ELSHADDAI TV."
  },
  {
    id: "h210fLKQTS8", title: "GBESE — Unfinished Meal", cat: "drama",
    len: "Inspiring Movie · 11:17", date: "2026-01-20",
    desc: "GBESE (debt) is more than money. An unfinished meal, an unsettled account — a story about the debts we carry and the One who settles them. Latest inspiring movie."
  },
  {
    id: "DXI9e_w5ASs", title: "MORENIKEJI — A Tale of Mercy and Intervention", cat: "drama",
    len: "Full Gospel Drama · 11:07", date: "2026-01-10",
    desc: "When destruction seemed certain, mercy stepped in. MORENIKEJI is a moving tale of God's mercy and divine intervention — proof that His compassions fail not."
  }
];

/* ---------- Auto-render the Watch page grid (runs before main.js) ----------
   Builds the same markup as hand-written cards, so every existing
   feature (facade player, favourites, share buttons, search, filter)
   binds to these cards automatically. */
(() => {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  const frag = document.createDocumentFragment();
  window.ECDM_VIDEOS.forEach(v => {
    const art = document.createElement('article');
    art.className = 'vcard reveal';
    art.dataset.cat = v.cat;
    art.dataset.date = v.date;
    art.dataset.title = v.title.toLowerCase();
    art.innerHTML =
      `<div class="vthumb" data-yt="${esc(v.id)}"><span class="play">▶</span></div>
       <div class="vbody"><h3>${esc(v.title)}</h3><p class="meta">${esc(v.len)} · ${v.date.slice(0,7)}</p>` +
      (v.desc ? `<details class="vdesc"><summary>About this drama</summary><p>${esc(v.desc)}</p></details>` : '') +
      `</div>`;
    frag.appendChild(art);
  });
  grid.appendChild(frag);
  const count = document.getElementById('vCount');
  if (count) count.textContent = window.ECDM_VIDEOS.length;
})();
