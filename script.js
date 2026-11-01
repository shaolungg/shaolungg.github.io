(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const content = window.shaolunContent || {};
  const header = $('[data-header]'), nav = $('.nav'), menu = $('.menu-toggle');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const setMenu = open => {
    nav.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '关闭 ×' : '菜单'; document.body.classList.toggle('menu-open', open);
  };
  menu.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('resize', () => { if (innerWidth > 800) setMenu(false); });

  const frames = $$('.hero-frame'), pause = $('[data-reel-pause]'), count = $('[data-reel-count]');
  let frame = 0, timer, paused = reduceMotion.matches, video;
  const updatePause = () => {
    pause.textContent = paused ? '播放 ▷' : '暂停 Ⅱ';
    pause.setAttribute('aria-label', paused ? '播放开场画面' : '暂停开场画面');
    pause.setAttribute('aria-pressed', String(paused));
  };
  const startReel = () => {
    clearInterval(timer);
    if (paused || document.hidden) { video?.pause(); return; }
    if (video) { video.play().catch(() => { paused = true; updatePause(); }); return; }
    timer = setInterval(() => {
      frames[frame].classList.remove('is-active'); frame = (frame + 1) % frames.length; frames[frame].classList.add('is-active');
      count.textContent = `${String(frame + 1).padStart(2, '0')} — ${String(frames.length).padStart(2, '0')}`;
    }, 5200);
  };
  if (content.heroVideo) {
    video = document.createElement('video'); video.className = 'hero-video';
    video.muted = true; video.loop = true; video.playsInline = true; video.preload = 'metadata'; video.poster = frames[0].src;
    video.setAttribute('aria-label', 'shaolun 的宠物影像剪辑');
    video.addEventListener('error', () => {
      video.remove(); video = undefined; $('[data-reel-label]').textContent = '影像手记'; count.hidden = false; startReel();
    }, { once: true });
    $('.hero-reel').insertBefore(video, $('.hero-vignette')); video.src = content.heroVideo;
    $('[data-reel-label]').textContent = '宠物影像 · 开场短片'; count.hidden = true;
  }
  pause.addEventListener('click', () => { paused = !paused; updatePause(); startReel(); });
  document.addEventListener('visibilitychange', startReel);
  reduceMotion.addEventListener('change', () => { paused = reduceMotion.matches; updatePause(); startReel(); });
  updatePause(); startReel();

  const rail = $('[data-rail]');
  const railStep = direction => rail.scrollBy({ left: direction * ($('.photo-card', rail).offsetWidth + 18), behavior: reduceMotion.matches ? 'instant' : 'smooth' });
  $('[data-next]').addEventListener('click', () => railStep(1)); $('[data-prev]').addEventListener('click', () => railStep(-1));
  rail.addEventListener('keydown', e => {
    if (e.target !== rail) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); railStep(e.key === 'ArrowRight' ? 1 : -1); }
  });
  let drag, suppressClick = false;
  rail.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button === 0) drag = { x: e.clientX, scroll: rail.scrollLeft, moved: false }; });
  addEventListener('pointermove', e => {
    if (!drag) return; const distance = e.clientX - drag.x;
    if (Math.abs(distance) > 6) { drag.moved = true; rail.classList.add('is-dragging'); rail.scrollLeft = drag.scroll - distance; }
  });
  addEventListener('pointerup', () => { if (drag) { suppressClick = drag.moved; drag = undefined; rail.classList.remove('is-dragging'); setTimeout(() => { suppressClick = false; }, 0); } });
  $$('img', rail).forEach(img => { img.draggable = false; img.loading = 'lazy'; });

  const modal = $('[data-lightbox-modal]'); let gallery = [], galleryIndex = 0, lastFocus;
  const renderLightbox = () => {
    const item = gallery[galleryIndex]; $('[data-lightbox-image]').src = item.image; $('[data-lightbox-image]').alt = item.alt || '';
    $('[data-lightbox-caption]').textContent = [item.title, item.text].filter(Boolean).join(' · ');
    $('[data-lightbox-prev]').hidden = gallery.length < 2; $('[data-lightbox-next]').hidden = gallery.length < 2;
  };
  const openLightbox = (items, index, trigger) => {
    gallery = items; galleryIndex = index; lastFocus = trigger; renderLightbox(); modal.hidden = false;
    $('main').inert = true; header.inert = true; $('.site-footer').inert = true;
    document.body.classList.add('menu-open'); $('[data-close]').focus();
  };
  const closeLightbox = () => {
    if (modal.hidden) return; modal.hidden = true; $('main').inert = false; header.inert = false; $('.site-footer').inert = false;
    document.body.classList.remove('menu-open'); lastFocus?.focus({ preventScroll: true });
  };
  const moveLightbox = direction => { galleryIndex = (galleryIndex + direction + gallery.length) % gallery.length; renderLightbox(); };
  const cards = $$('[data-lightbox]');
  const photos = cards.map(card => ({ image: card.dataset.lightbox, alt: card.dataset.alt, title: $('h3', card).textContent, text: $('.photo-caption p', card).textContent }));
  cards.forEach((card, index) => $('.photo-button', card).addEventListener('click', () => { if (!suppressClick) openLightbox(photos, index, $('.photo-button', card)); }));
  $('[data-close]').addEventListener('click', closeLightbox);
  $('[data-lightbox-prev]').addEventListener('click', () => moveLightbox(-1)); $('[data-lightbox-next]').addEventListener('click', () => moveLightbox(1));
  modal.addEventListener('click', e => { if (e.target === modal) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeLightbox(); setMenu(false); }
    if (modal.hidden) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); moveLightbox(e.key === 'ArrowRight' ? 1 : -1); }
    if (e.key === 'Tab') {
      const controls = $$('button', modal).filter(b => !b.hidden);
      if (e.shiftKey && document.activeElement === controls[0]) { e.preventDefault(); controls.at(-1).focus(); }
      if (!e.shiftKey && document.activeElement === controls.at(-1)) { e.preventDefault(); controls[0].focus(); }
    }
  });
  const swipe = (element, handler) => {
    let touch;
    element.addEventListener('touchstart', e => { touch = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, { passive: true });
    element.addEventListener('touchend', e => {
      if (!touch) return;
      const dx = e.changedTouches[0].clientX - touch.x, dy = e.changedTouches[0].clientY - touch.y;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) handler(dx < 0 ? 1 : -1); touch = undefined;
    }, { passive: true });
  };
  swipe(modal, moveLightbox);

  const nestIndices = {};
  $$('[data-panel]').forEach(panel => {
    const key = panel.dataset.panel, stories = content.nests?.[key] || []; nestIndices[key] = 0;
    const render = () => {
      const index = nestIndices[key], story = stories[index]; if (!story) return;
      const img = $('.nest-image img', panel); img.src = story.image; img.alt = story.alt; img.style.objectPosition = story.position || 'center';
      $('[data-story-place]', panel).textContent = story.place;
      const title = $('h3', panel); title.replaceChildren(document.createTextNode(story.title[0]), document.createElement('br'));
      const emphasis = document.createElement('em'); emphasis.textContent = story.title[1]; title.append(emphasis);
      $('[data-story-text]', panel).textContent = story.text;
      $('[data-story-count]', panel).textContent = `${String(index + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`;
    };
    const move = direction => { if (!stories.length) return; nestIndices[key] = (nestIndices[key] + direction + stories.length) % stories.length; render(); };
    $('[data-story-next]', panel).addEventListener('click', () => move(1)); $('[data-story-prev]', panel).addEventListener('click', () => move(-1));
    $('[data-nest-zoom]', panel).addEventListener('click', () => openLightbox(stories.map(s => ({ ...s, title: s.title.join('') })), nestIndices[key], $('[data-nest-zoom]', panel)));
    swipe($('.nest-image', panel), move); render();
  });
  const tabs = $$('.nest-tab');
  const selectNest = tab => {
    tabs.forEach(t => { const active = t === tab; t.classList.toggle('is-active', active); t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; });
    $$('[data-panel]').forEach(p => { const active = p.dataset.panel === tab.dataset.nest; p.classList.toggle('is-active', active); p.hidden = !active; });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectNest(tab));
    tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length]; if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0]; if (e.key === 'End') next = tabs.at(-1);
      if (next) { e.preventDefault(); selectNest(next); next.focus(); }
    });
  });
  $$('img:not(.hero-frame)').forEach(img => { img.decoding = 'async'; });
  $('[data-year]').textContent = new Date().getFullYear();
})();
