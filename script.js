(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const content = window.shaolunContent || {};
  // Render collections before wiring interactions; empty collections stay out of the page.
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  };
  const encounters = content.encounters || [];
  const rail = $('[data-rail]');
  encounters.forEach(photo => {
    const card = make('article', 'photo-card');
    card.dataset.lightbox = photo.fullImage || photo.image; card.dataset.alt = photo.alt || '';
    const button = make('button', 'photo-button'); button.type = 'button';
    button.setAttribute('aria-label', `放大查看：${photo.title}`);
    const img = make('img'); img.src = photo.image; img.alt = photo.alt || '';
    img.width = photo.width || 900; img.height = photo.height || 1200;
    if (photo.smallImage) {
      img.srcset = `${photo.smallImage} 450w, ${photo.image} 900w`;
      img.sizes = '(max-width: 420px) 72vw, 320px';
    }
    img.style.objectPosition = photo.position || 'center';
    button.append(img, make('span', 'zoom', '放大 ↗'));
    const caption = make('div', 'photo-caption');
    caption.append(make('h3', '', photo.title), make('p', '', photo.text));
    card.append(button, caption); rail.append(card);
  });
  rail.classList.toggle('is-single', encounters.length === 1);
  $('#moments').hidden = encounters.length === 0;
  $('.nav a[href="#moments"]').hidden = encounters.length === 0;
  $('.carousel-controls').hidden = encounters.length < 2;
  $('[data-rail-instruction]').textContent = encounters.length > 1 ? '左右滑动 · 点击看大图' : '点击照片 · 看完整画面';
  $('[data-encounter-count]').textContent = `${String(encounters.length).padStart(2, '0')} 个片刻`;
  $('[data-photo-credit]').textContent = '摄影与文字 · shaolun';

  const nestEntries = Object.entries(content.nests || {}).filter(([, nest]) => nest.stories?.length);
  $('#nests').hidden = nestEntries.length === 0;
  $('.nav a[href="#nests"]').hidden = nestEntries.length === 0;
  const nestShelf = $('[data-nest-shelf]');
  nestEntries.forEach(([key, nest], index) => {
    const card = make('article', 'nest-card');
    const opener = make('button', 'nest-open'); opener.type = 'button';
    opener.dataset.nestOpen = key; opener.setAttribute('aria-controls', `nest-${key}`);
    opener.setAttribute('aria-expanded', 'false');
    const stack = make('span', 'nest-stack'); stack.setAttribute('aria-hidden', 'true');
    const previews = nest.coverPhotos || nest.stories.slice(1, 3).map(s => s.image);
    [...previews.slice(0, 2).reverse(), nest.cover || nest.stories[0].image].forEach((src, i, images) => {
      const sheet = make('span', `nest-print${i === images.length - 1 ? ' is-cover' : ''}`);
      const img = make('img'); img.src = src; img.alt = ''; img.loading = 'lazy';
      sheet.append(img); stack.append(sheet);
    });
    const coverInfo = make('span', 'nest-cover-info');
    coverInfo.append(make('span', 'nest-cover-number', String(index + 1).padStart(2, '0')),
      make('span', 'nest-cover-title', nest.name), make('span', 'nest-cover-link', '翻开看看 ↗'));
    opener.append(stack, coverInfo); card.append(opener);
    if (nest.intro) card.append(make('p', 'nest-card-intro', nest.intro));
    card.append(make('p', 'nest-cover-count', `${String(nest.stories.length).padStart(2, '0')} 个片刻`));
    nestShelf.append(card);
    const panel = make('article', 'nest-panel');
    panel.id = `nest-${key}`; panel.dataset.panel = key; panel.hidden = true;
    panel.setAttribute('role', 'region'); panel.setAttribute('aria-label', nest.name);
    const toolbar = make('div', 'nest-panel-toolbar');
    const back = make('button', 'nest-back', '← 收起，回到小窝'); back.type = 'button'; back.dataset.nestBack = key;
    toolbar.append(back);
    if (nest.intro) toolbar.append(make('p', 'nest-view-intro', nest.intro));
    const image = make('div', 'nest-image'), zoom = make('button');
    zoom.type = 'button'; zoom.dataset.nestZoom = ''; zoom.setAttribute('aria-label', '放大故事照片');
    const img = make('img'); img.loading = 'lazy'; zoom.append(img);
    const place = make('span'); place.dataset.storyPlace = ''; image.append(zoom, place);
    const story = make('div', 'nest-story'); story.setAttribute('aria-live', 'polite');
    const text = make('p'); text.dataset.storyText = '';
    const controls = make('div', 'story-controls'); controls.hidden = nest.stories.length < 2;
    const prev = make('button', 'story-arrow', '←'), next = make('button', 'story-arrow', '→'), count = make('span');
    prev.type = next.type = 'button'; prev.dataset.storyPrev = ''; next.dataset.storyNext = ''; count.dataset.storyCount = '';
    prev.setAttribute('aria-label', '上一张故事照片'); next.setAttribute('aria-label', '下一张故事照片');
    controls.append(prev, count, next);
    story.append(make('p', 'story-label', nest.name), make('h3'), text, controls);
    panel.append(toolbar, image, story); $('.nest-panels').append(panel);
  });
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

  const pause = $('[data-reel-pause]');
  let paused = reduceMotion.matches, video;
  const updatePause = () => {
    pause.textContent = paused ? '播放 ▷' : '暂停 Ⅱ';
    pause.setAttribute('aria-label', paused ? '播放开场视频' : '暂停开场视频');
    pause.setAttribute('aria-pressed', String(paused));
  };
  const syncVideo = () => {
    if (!video) return;
    if (paused || document.hidden) { video.pause(); return; }
    video.play().catch(() => { paused = true; updatePause(); });
  };
  pause.hidden = true;
  if (content.heroVideo) {
    video = document.createElement('video'); video.className = 'hero-video';
    video.muted = true; video.loop = true; video.playsInline = true; video.preload = 'metadata';
    video.width = 1920; video.height = 1080;
    if (content.heroPoster) video.poster = content.heroPoster;
    video.setAttribute('aria-label', 'Alongside by shaolun：小家伙们的日常短片');
    video.addEventListener('loadedmetadata', () => { pause.hidden = false; });
    video.addEventListener('playing', () => { paused = false; updatePause(); });
    video.addEventListener('pause', () => { if (!document.hidden) { paused = true; updatePause(); } });
    video.addEventListener('error', () => {
      video.remove(); video = undefined; pause.hidden = true;
      $('[data-reel-label]').textContent = '此刻，正好';
    }, { once: true });
    $('.hero-reel').insertBefore(video, $('.hero-vignette'));
    const mobileVideo = matchMedia('(max-width: 800px)');
    const setVideoSource = () => {
      const source = mobileVideo.matches && content.heroVideoMobile ? content.heroVideoMobile : content.heroVideo;
      if (video?.getAttribute('src') !== source && video) {
        const keepPaused = paused;
        video.src = source; paused = keepPaused; syncVideo();
      }
    };
    mobileVideo.addEventListener('change', setVideoSource); setVideoSource();
    $('[data-reel-label]').textContent = '此刻，正好 · 日常短片';
  }
  pause.addEventListener('click', () => { paused = !paused; updatePause(); syncVideo(); });
  document.addEventListener('visibilitychange', syncVideo);
  reduceMotion.addEventListener('change', () => { paused = reduceMotion.matches; updatePause(); syncVideo(); });
  updatePause(); syncVideo();

  const railStep = direction => { const card = $('.photo-card', rail); if (card) rail.scrollBy({ left: direction * (card.offsetWidth + 18), behavior: reduceMotion.matches ? 'instant' : 'smooth' }); };
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
    modal.classList.toggle('is-single', gallery.length === 1);
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
    const key = panel.dataset.panel, stories = content.nests?.[key]?.stories || []; nestIndices[key] = 0;
    const render = () => {
      const index = nestIndices[key], story = stories[index]; if (!story) return;
      const img = $('.nest-image img', panel); img.src = story.image; img.alt = story.alt; img.style.objectPosition = story.position || 'center';
      $('[data-story-place]', panel).textContent = story.place || '';
      $('[data-story-place]', panel).hidden = !story.place;
      const lines = Array.isArray(story.title) ? story.title : [story.title];
      const title = $('h3', panel); title.replaceChildren(document.createTextNode(lines[0]));
      if (lines[1]) {
        const emphasis = document.createElement('em'); emphasis.textContent = lines[1];
        title.append(document.createElement('br'), emphasis);
      }
      $('[data-story-text]', panel).textContent = story.text;
      $('[data-story-count]', panel).textContent = `${String(index + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`;
      $('[data-story-prev]', panel).disabled = index === 0;
      $('[data-story-next]', panel).disabled = index === stories.length - 1;
    };
    const move = direction => { if (!stories.length) return; nestIndices[key] = Math.max(0, Math.min(stories.length - 1, nestIndices[key] + direction)); render(); };
    $('[data-story-next]', panel).addEventListener('click', () => move(1)); $('[data-story-prev]', panel).addEventListener('click', () => move(-1));
    $('[data-nest-zoom]', panel).addEventListener('click', () => openLightbox(stories.map(s => ({ ...s, image: s.fullImage || s.image, title: Array.isArray(s.title) ? s.title.join('') : s.title })), nestIndices[key], $('[data-nest-zoom]', panel)));
    panel.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); }
    });
    swipe($('.nest-image', panel), move); render();
  });
  $$('[data-nest-open]').forEach(opener => {
    const panel = document.getElementById(opener.getAttribute('aria-controls'));
    opener.addEventListener('click', () => {
      $$('[data-nest-open]').forEach(button => button.setAttribute('aria-expanded', String(button === opener)));
      $$('[data-panel]').forEach(p => { const active = p === panel; p.hidden = !active; p.classList.toggle('is-active', active); });
      nestShelf.hidden = true;
      $('[data-nest-back]', panel).focus({ preventScroll: true });
      panel.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
    });
    $('[data-nest-back]', panel).addEventListener('click', () => {
      panel.hidden = true; panel.classList.remove('is-active'); nestShelf.hidden = false;
      opener.setAttribute('aria-expanded', 'false'); opener.focus({ preventScroll: true });
      nestShelf.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
    });
  });
  $$('img').forEach(img => { img.decoding = 'async'; });
  $('[data-year]').textContent = new Date().getFullYear();
})();
