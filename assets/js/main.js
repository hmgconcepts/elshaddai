/* ============================================================
   EL SHADDAI CHRISTIAN DRAMA MINISTRY — main.js
   100% free / client-side. No paid APIs, no AI APIs.
   Features: nav, dark mode, reveal animations, video facade,
   search & filter, countdown, verse-of-the-day, prayer/contact
   forms via FormSubmit + WhatsApp fallback, share, back-to-top.
   Built by HMG Technologies — https://cssadewale.pages.dev
   ============================================================ */

/* ---------- Highlight current page in the nav ---------- */
(() => {
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html','') || 'index';
  const link = document.querySelector(`.nav-links a[data-page="${page}"]`);
  if (link) link.classList.add('active');
})();

/* ---------- Mobile nav ---------- */
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) menuBtn.addEventListener('click', () =>
  document.querySelector('.nav-links').classList.toggle('open'));

/* ---------- Dark / light theme (persisted in localStorage) ---------- */
const themeBtn = document.querySelector('.theme-btn');
function setTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('ecdm-theme', t);
  if (themeBtn) themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
}
setTheme(localStorage.getItem('ecdm-theme') || 'light');
if (themeBtn) themeBtn.addEventListener('click', () =>
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Back to top ---------- */
const toTop = document.getElementById('toTop');
if (toTop){
  window.addEventListener('scroll', () =>
    toTop.style.display = window.scrollY > 500 ? 'block' : 'none');
  toTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---------- Toast helper ---------- */
function toast(msg){
  let t = document.querySelector('.toast');
  if (!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- YouTube facade (loads iframe only on click → fast & free) ---------- */
document.querySelectorAll('.vthumb[data-yt]').forEach(th => {
  const id = th.dataset.yt;
  // free thumbnail directly from YouTube's image CDN — no API key needed
  const img = document.createElement('img');
  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  img.alt = 'Video thumbnail';
  img.loading = 'lazy';
  th.prepend(img);
  th.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    th.innerHTML=''; th.appendChild(f);
  }, {once:true});
});

/* ---------- Video search + category filter ---------- */
const vSearch = document.getElementById('vSearch');
const chips = document.querySelectorAll('.chip[data-cat]');
function filterVideos(){
  const q = (vSearch ? vSearch.value : '').toLowerCase();
  const cat = document.querySelector('.chip.on') ? document.querySelector('.chip.on').dataset.cat : 'all';
  document.querySelectorAll('.vcard').forEach(c => {
    const okQ = c.textContent.toLowerCase().includes(q);
    const okC = cat === 'all' || (c.dataset.cat || '').includes(cat);
    c.style.display = okQ && okC ? '' : 'none';
  });
}
if (vSearch) vSearch.addEventListener('input', filterVideos);
chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('on')); ch.classList.add('on'); filterVideos();
}));

/* ---------- Anniversary countdown (May 7 vigil anniversary) ---------- */
const cd = document.getElementById('countdown');
if (cd){
  const tick = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), 4, 7, 18, 0, 0);   // May 7, 6 PM
    if (target < now) target = new Date(now.getFullYear()+1, 4, 7, 18, 0, 0);
    const d = target - now;
    const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent = String(v).padStart(2,'0'); };
    set('cd-d', Math.floor(d/864e5));
    set('cd-h', Math.floor(d/36e5)%24);
    set('cd-m', Math.floor(d/6e4)%60);
    set('cd-s', Math.floor(d/1e3)%60);
  };
  tick(); setInterval(tick, 1000);
}

/* ---------- Verse of the day (offline rotation — no API) ---------- */
const verses = [
  ["Thy word is a lamp unto my feet, and a light unto my path.","Psalm 119:105"],
  ["Go ye into all the world, and preach the gospel to every creature.","Mark 16:15"],
  ["I am the Almighty God; walk before me, and be thou perfect.","Genesis 17:1"],
  ["Let your light so shine before men, that they may see your good works.","Matthew 5:16"],
  ["And they overcame him by the blood of the Lamb, and by the word of their testimony.","Revelation 12:11"],
  ["How beautiful are the feet of them that preach the gospel of peace!","Romans 10:15"],
  ["For with God nothing shall be impossible.","Luke 1:37"],
  ["The entrance of thy words giveth light; it giveth understanding unto the simple.","Psalm 119:130"],
  ["He that winneth souls is wise.","Proverbs 11:30"],
  ["Faith cometh by hearing, and hearing by the word of God.","Romans 10:17"],
  ["I can do all things through Christ which strengtheneth me.","Philippians 4:13"],
  ["The harvest truly is plenteous, but the labourers are few.","Matthew 9:37"],
  ["Sing unto the LORD a new song, and his praise from the end of the earth.","Isaiah 42:10"],
  ["Whatsoever ye do, do all to the glory of God.","1 Corinthians 10:31"]
];
const vt = document.getElementById('votd-text'), vr = document.getElementById('votd-ref');
if (vt && vr){
  const day = Math.floor(Date.now()/864e5) % verses.length;
  vt.textContent = '“' + verses[day][0] + '”';
  vr.textContent = '— ' + verses[day][1];
}

/* ---------- Forms (FormSubmit.co — free email backend, no server) ----------
   Each <form data-wa> also offers a WhatsApp fallback so messages
   reach the founder even before FormSubmit email activation. */
document.querySelectorAll('form[data-wa]').forEach(form => {
  const waBtn = form.querySelector('.wa-send');
  if (waBtn) waBtn.addEventListener('click', () => {
    const data = new FormData(form);
    let msg = (form.dataset.title || 'Website message') + ':%0A';
    data.forEach((v,k) => { if (v && !k.startsWith('_')) msg += `*${k}*: ${encodeURIComponent(v)}%0A`; });
    window.open('https://wa.me/2347035083094?text=' + msg, '_blank');
  });
});

/* ---------- Native share ---------- */
document.querySelectorAll('[data-share]').forEach(b => b.addEventListener('click', () => {
  const payload = {title:document.title, text:'El Shaddai Christian Drama Ministry — Thy Word Is Light', url:location.href};
  if (navigator.share) navigator.share(payload).catch(()=>{});
  else { navigator.clipboard.writeText(location.href); toast('Link copied — share it with someone!'); }
}));

/* ---------- Copy account / phone numbers ---------- */
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
  navigator.clipboard.writeText(b.dataset.copy);
  toast('Copied: ' + b.dataset.copy);
}));

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll('[data-count]');
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, dur = 1400, t0 = performance.now();
  const step = t => {
    const p = Math.min((t - t0)/dur, 1);
    el.textContent = Math.floor(end * (1-Math.pow(1-p,3))) + (el.dataset.suffix || '');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step); cio.unobserve(el);
}), {threshold:.4});
counters.forEach(c => cio.observe(c));

/* ---------- Footer year ---------- */
document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());

/* ---------- PWA: register service worker (offline + installable app) ---------- */
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
}

/* ============================================================
   V2 FEATURES — all free, client-side, no APIs
   ============================================================ */
const CFG = window.ECDM_CONFIG || {};

/* ---------- 📢 Announcement bar (configurable in config.js) ---------- */
(() => {
  const a = CFG.announcement;
  if (!a || !a.enabled) return;
  if (localStorage.getItem('ecdm-ann-dismissed') === a.id) return;
  const bar = document.createElement('div');
  bar.id = 'annBar';
  bar.innerHTML = `<div class="container"><span>${a.text}</span>` +
    (a.linkUrl ? ` <a href="${a.linkUrl}" target="_blank" rel="noopener">${a.linkText || 'Learn more →'}</a>` : '') +
    `<button class="ann-x" aria-label="Dismiss announcement">✕</button></div>`;
  document.body.prepend(bar);
  bar.style.display = 'block';
  bar.querySelector('.ann-x').addEventListener('click', () => {
    localStorage.setItem('ecdm-ann-dismissed', a.id);
    bar.remove();
  });
})();

/* ---------- ⏳ Custom event countdown override (config.js nextEvent) ---------- */
(() => {
  const ev = CFG.nextEvent;
  if (!ev || !ev.date) return;
  const t = new Date(ev.date.replace(' ', 'T'));
  if (isNaN(t)) return;
  const cd = document.getElementById('countdown');
  if (!cd) return;
  const head = cd.closest('section') && cd.closest('section').querySelector('.sec-head h2');
  if (head && ev.name) head.innerHTML = `Counting Down to <em>${ev.name}</em>`;
  const tick = () => {
    const d = Math.max(0, t - new Date());
    const set = (id,v)=>{const el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,'0');};
    set('cd-d',Math.floor(d/864e5)); set('cd-h',Math.floor(d/36e5)%24);
    set('cd-m',Math.floor(d/6e4)%60); set('cd-s',Math.floor(d/1e3)%60);
  };
  tick(); setInterval(tick,1000);
})();

/* ---------- ❤️ Favourites / "Watch Later" (localStorage, per device) ---------- */
const FAVKEY = 'ecdm-favs';
const getFavs = () => JSON.parse(localStorage.getItem(FAVKEY) || '[]');
const saveFavs = f => localStorage.setItem(FAVKEY, JSON.stringify(f));
document.querySelectorAll('.vcard .vthumb[data-yt]').forEach(th => {
  const card = th.closest('.vcard');
  const id = th.dataset.yt;
  const title = (card.querySelector('h3') || {}).textContent || 'Video';
  // favourite button on the thumbnail
  const b = document.createElement('button');
  b.className = 'fav-btn'; b.setAttribute('aria-label','Save to Watch Later'); b.title='Save to Watch Later';
  const paint = () => { const on = getFavs().some(f=>f.id===id); b.textContent = on?'❤️':'🤍'; b.classList.toggle('faved',on); };
  paint();
  b.addEventListener('click', e => {
    e.stopPropagation();
    let favs = getFavs();
    if (favs.some(f=>f.id===id)) { favs = favs.filter(f=>f.id!==id); toast('Removed from Watch Later'); }
    else { favs.push({id,title}); toast('Saved to Watch Later ❤️'); }
    saveFavs(favs); paint();
    document.dispatchEvent(new Event('favs-changed'));
  });
  th.appendChild(b);
  // per-video actions: WhatsApp share + open on YouTube
  const body = card.querySelector('.vbody');
  if (body && !body.querySelector('.v-actions')) {
    const row = document.createElement('div');
    row.className = 'v-actions';
    const url = 'https://youtu.be/' + id;
    row.innerHTML =
      `<button class="wa-share">💬 Share on WhatsApp</button>` +
      `<a href="${url}" target="_blank" rel="noopener">▶ Open on YouTube</a>` +
      `<button class="copy-link">🔗 Copy link</button>`;
    row.querySelector('.wa-share').addEventListener('click', () =>
      window.open('https://wa.me/?text=' + encodeURIComponent(`🎬 Watch "${title}" from El Shaddai Christian Drama Ministry: ${url}`), '_blank'));
    row.querySelector('.copy-link').addEventListener('click', () => {
      navigator.clipboard.writeText(url); toast('Video link copied!');
    });
    body.appendChild(row);
  }
});

/* ---------- ❤️ Watch Later page renderer (mylist.html) ---------- */
const favList = document.getElementById('favList');
function renderFavs(){
  if (!favList) return;
  const favs = getFavs();
  const empty = document.getElementById('favEmpty');
  favList.innerHTML = '';
  if (empty) empty.style.display = favs.length ? 'none' : 'block';
  favs.forEach(f => {
    const art = document.createElement('article');
    art.className = 'vcard';
    art.innerHTML = `<div class="vthumb" data-yt="${f.id}"><span class="play">▶</span></div>
      <div class="vbody"><h3>${f.title}</h3>
      <div class="v-actions"><button class="rm">🗑 Remove</button>
      <a href="https://youtu.be/${f.id}" target="_blank" rel="noopener">▶ Open on YouTube</a></div></div>`;
    const th = art.querySelector('.vthumb');
    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${f.id}/hqdefault.jpg`; img.alt = f.title; img.loading='lazy';
    th.prepend(img);
    th.addEventListener('click', () => {
      const fr = document.createElement('iframe');
      fr.src = `https://www.youtube-nocookie.com/embed/${f.id}?autoplay=1&rel=0`;
      fr.allow='autoplay; encrypted-media; picture-in-picture'; fr.allowFullscreen = true;
      th.innerHTML=''; th.appendChild(fr);
    }, {once:true});
    art.querySelector('.rm').addEventListener('click', () => {
      saveFavs(getFavs().filter(x=>x.id!==f.id)); renderFavs(); toast('Removed');
    });
    favList.appendChild(art);
  });
}
renderFavs();
document.addEventListener('favs-changed', renderFavs);

/* ---------- 🖼️ Gallery lightbox ---------- */
(() => {
  const figs = document.querySelectorAll('.gal figure');
  if (!figs.length) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = '<button class="lb-x" aria-label="Close">✕</button><img alt=""><figcaption></figcaption>';
  document.body.appendChild(lb);
  const img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
  figs.forEach(f => f.addEventListener('click', () => {
    img.src = f.querySelector('img').src;
    cap.textContent = (f.querySelector('figcaption')||{}).textContent || '';
    lb.classList.add('open');
  }));
  const close = () => lb.classList.remove('open');
  lb.querySelector('.lb-x').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ---------- 📖 Reading progress bar (devotionals & long pages) ---------- */
(() => {
  if (!document.body.dataset.readbar) return;
  const bar = document.createElement('div'); bar.id = 'readBar'; document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  });
})();

/* ---------- 🙏 Weekly prayer focus (today highlighted) ---------- */
(() => {
  const box = document.getElementById('prayerFocus');
  if (!box || !CFG.prayerFocus) return;
  const today = new Date().getDay();
  CFG.prayerFocus.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'pf' + (i === today ? ' today' : '');
    d.innerHTML = `<b>${p[0]}${i === today ? ' · TODAY' : ''}</b>${p[1]}`;
    box.appendChild(d);
  });
})();

/* ---------- ✉️ Newsletter signup (footer, FormSubmit — free) ---------- */
document.querySelectorAll('.newsletter form').forEach(f => f.addEventListener('submit', () => {
  toast('Thank you! You are being subscribed…');
}));

/* ---------- 🌐 Offline indicator ---------- */
window.addEventListener('offline', () => toast('📴 You are offline — saved pages still work.'));
window.addEventListener('online',  () => toast('✅ Back online!'));

/* ---------- ⌨️ Keyboard shortcut: press "/" to jump to video search ---------- */
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.getElementById('vSearch') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault(); document.getElementById('vSearch').focus();
  }
});

/* ============================================================
   V3 FEATURES — data-driven library, sorting, install prompt,
   QR code sharing, recently-watched, channel RSS note
   ============================================================ */

/* ---------- 🔀 Sort the video library (newest / oldest / A–Z) ---------- */
(() => {
  const sel = document.getElementById('vSort');
  const grid = document.getElementById('videoGrid');
  if (!sel || !grid) return;
  sel.addEventListener('change', () => {
    const cards = [...grid.querySelectorAll('.vcard')];
    const key = sel.value;
    cards.sort((a, b) => {
      if (key === 'new')  return (b.dataset.date || '').localeCompare(a.dataset.date || '');
      if (key === 'old')  return (a.dataset.date || '').localeCompare(b.dataset.date || '');
      return (a.dataset.title || '').localeCompare(b.dataset.title || '');
    });
    cards.forEach(c => grid.appendChild(c));
  });
})();

/* ---------- 📲 PWA install button (free, native browser prompt) ---------- */
(() => {
  let deferred;
  const btn = document.createElement('button');
  btn.id = 'installBtn';
  btn.textContent = '📲 Install Our App';
  document.body.appendChild(btn);
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferred = e; btn.classList.add('show');
  });
  btn.addEventListener('click', async () => {
    if (!deferred) return;
    deferred.prompt();
    await deferred.userChoice;
    deferred = null; btn.classList.remove('show');
  });
  window.addEventListener('appinstalled', () => { btn.classList.remove('show'); toast('🎉 App installed — God bless you!'); });
})();

/* ---------- 🟦 QR code (free api.qrserver.com image — no key, no JS lib) ---------- */
(() => {
  const img = document.getElementById('qrImg');
  if (!img) return;
  const url = location.origin + location.pathname.replace(/[^/]*$/, '') + 'index.html';
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=10&data=' + encodeURIComponent(url);
  const dl = document.getElementById('qrDl');
  if (dl) dl.href = img.src;
})();

/* ---------- 🕘 Recently watched (localStorage, private, on-device) ---------- */
(() => {
  const KEY = 'ecdm-recent';
  const getR = () => JSON.parse(localStorage.getItem(KEY) || '[]');
  // record plays: when a facade thumb is clicked anywhere
  document.querySelectorAll('.vthumb[data-yt]').forEach(th => {
    th.addEventListener('click', () => {
      const card = th.closest('.vcard');
      const title = card ? (card.querySelector('h3') || {}).textContent : 'Video';
      let r = getR().filter(x => x.id !== th.dataset.yt);
      r.unshift({ id: th.dataset.yt, title });
      localStorage.setItem(KEY, JSON.stringify(r.slice(0, 6)));
    });
  });
  // render strip on home page
  const box = document.getElementById('recentBox');
  if (!box) return;
  const r = getR();
  if (!r.length) { box.closest('section').style.display = 'none'; return; }
  r.forEach(v => {
    const a = document.createElement('a');
    a.className = 'card'; a.style.padding = '14px'; a.style.display = 'block';
    a.href = 'watch.html';
    a.innerHTML = `<img src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="" loading="lazy" style="border-radius:10px;margin-bottom:10px;width:100%">` +
                  `<b style="font-size:.85rem;line-height:1.4">${v.title}</b>`;
    box.appendChild(a);
  });
})();

/* ---------- 📡 "New on the channel" helper note (free RSS link) ---------- */
(() => {
  const el = document.getElementById('rssLink');
  if (el) el.href = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCpDv-bPk3NqVn1umfDCis1g';
})();
