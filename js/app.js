/**
 * Babyfoods 应用逻辑
 * 纯 vanilla JS，无框架无依赖，支持 file:// 直接打开
 *
 * 顶层两个页面（整页切换）：
 *   home       首页 —— 今日 / 菜单 / 菜谱 / 食材
 *   principles 宝宝食物原则 —— 原则 / 红黑榜 / 安全
 */

const App = (() => {
  /* ==================== 状态 ==================== */
  let currentPage = 'home';
  let activeStageId = '6-8';
  let activeTab = 'today';
  const selectedIngredients = new Set();
  let searchKeyword = '';
  let currentRecipeId = null;
  let quickFilter = null;                    // 快捷找菜过滤 key
  let menuDay = ((new Date().getDay() + 6) % 7) + 1;  // 周一=1 … 周日=7
  const favorites = new Set();               // 收藏（纯前端视觉状态）

  /* ==================== 页面定义 ==================== */
  const PAGES = {
    home: {
      tabs: [
        { id: 'today',       label: '今日',  icon: 'sparkles' },
        { id: 'mealplan',    label: '菜单',  icon: 'calendar' },
        { id: 'recipes',     label: '菜谱',  icon: 'utensils' },
        { id: 'ingredients', label: '食材',  icon: 'carrot' }
      ]
    },
    principles: {
      tabs: [
        { id: 'principles', label: '原则',   icon: 'book' },
        { id: 'blacklist',  label: '红黑榜', icon: 'list' },
        { id: 'safety',     label: '安全',   icon: 'shield' }
      ]
    }
  };
  const pageTabs = (page) => PAGES[page].tabs;

  /* ==================== SVG 图标库（Lucide 风格） ==================== */
  const svg = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICONS = {
    home: svg('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),
    bottle: svg('<path d="M9 3h6"/><path d="M10 3v4a2 2 0 0 0 1 1.73V21a1 1 0 0 0 2 0V8.73A2 2 0 0 0 14 7V3"/><line x1="9" y1="13" x2="15" y2="13"/>'),
    sparkles: svg('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>'),
    calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    utensils: svg('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>'),
    carrot: svg('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'),
    book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
    list: svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'),
    shield: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
    heart: svg('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
    clock: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    chevronDown: svg('<polyline points="6 9 12 15 18 9"/>'),
    chevronRight: svg('<polyline points="9 18 15 12 9 6"/>'),
    chevronLeft: svg('<polyline points="15 18 9 12 15 6"/>'),
    check: svg('<polyline points="20 6 9 17 4 12"/>'),
    alert: svg('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
    search: svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    x: svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    info: svg('<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
    flame: svg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
    zap: svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    leaf: svg('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'),
    sun: svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
    hand: svg('<path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'),
    wheat: svg('<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4z"/>'),
    egg: svg('<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>')
  };
  const icon = (name, cls = 'icon') => `<span class="${cls}">${ICONS[name] || ''}</span>`;

  /* ==================== 工具 ==================== */
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const stageById = (id) => STAGES.find(s => s.id === id);
  const recipeById = (id) => RECIPES.find(r => r.id === id);
  const ingredientById = (id) => INGREDIENTS.find(i => i.id === id);
  const WEEK_NAMES = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  /* 按阶段 + 菜名查找菜谱（处理跨阶段同名菜） */
  function findByStageAndName(stage, name) {
    const list = RECIPES.filter(r => r.name === name);
    if (list.length === 0) return null;
    const matched = list.find(r => r.ageMin <= stage.ageMax && r.ageMax >= stage.ageMin);
    return matched || list[0];
  }

  /* ==================== 组件：Food Visual ==================== */
  const CAT_FV = { '主食': 'fv-staple', '肉蛋': 'fv-meat', '鱼虾': 'fv-fish', '蔬果': 'fv-veggie', '点心': 'fv-snack' };
  function foodVisual({ emoji, category, image }, size = 'fv-md') {
    const tone = CAT_FV[category] || 'fv-staple';
    const inner = image
      ? `<img src="${esc(image)}" alt="" loading="lazy">`
      : `<span class="food-emoji" aria-hidden="true">${emoji || '🥣'}</span>`;
    return `<span class="food-visual ${size} ${tone}">${inner}</span>`;
  }

  /* ==================== 组件：Tag ==================== */
  function tag(text, kind = 'nutrition', iconName = null) {
    return `<span class="tag tag-${kind}">${iconName ? icon(iconName) : ''}${esc(text)}</span>`;
  }
  function nutrientTags(r) {
    return (r.nutrients || []).map(n => tag(n, 'nutrition')).join('');
  }
  function allergenTags(r) {
    return (r.allergens || []).map(a => tag(`含${a}`, 'allergen')).join('');
  }

  /* ==================== 组件：Section 标题 ==================== */
  function sectionHead(title, sub = '') {
    return `
      <div class="section-head">
        <h2 class="section-title">${esc(title)}</h2>
        ${sub ? `<span class="section-sub">${esc(sub)}</span>` : ''}
      </div>`;
  }

  /* ==================== 快捷找菜定义 ==================== */
  const QUICK_FILTERS = [
    { key: 'iron',    label: '高铁',     icon: 'flame', cls: 'qc-iron',
      test: r => (r.nutrients || []).some(n => n.includes('铁')) },
    { key: 'protein', label: '高蛋白',   icon: 'zap', cls: 'qc-protein',
      test: r => (r.nutrients || []).some(n => n.includes('蛋白')) },
    { key: 'veggie',  label: '蔬菜多多', icon: 'leaf', cls: 'qc-veggie',
      test: r => r.category === '蔬果' || (r.nutrients || []).some(n => n.includes('维') || n.includes('膳食纤维')) },
    { key: 'breakfast', label: '早餐',   icon: 'sun', cls: 'qc-breakfast',
      test: r => r.category === '主食' && r.time <= 25 },
    { key: 'fast',    label: '快手',     icon: 'clock', cls: 'qc-fast',
      test: r => r.time <= 15 },
    { key: 'finger',  label: '手指食物', icon: 'hand', cls: 'qc-finger',
      test: r => /饼|条|丸|块|碎|饺|吐司/.test(r.texture || r.name) }
  ];

  /* ==================== 菜谱过滤 ==================== */
  function stageRecipes() {
    const stage = stageById(activeStageId);
    return RECIPES.filter(r => r.ageMin <= stage.ageMax && r.ageMax >= stage.ageMin);
  }
  function filterRecipes() {
    let list = stageRecipes();
    if (quickFilter) {
      const qf = QUICK_FILTERS.find(q => q.key === quickFilter);
      if (qf) list = list.filter(qf.test);
    }
    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase();
      list = list.filter(r => {
        const hay = (r.name + ' ' + (r.ingredients || []).map(i => i.name).join(' ') + ' ' + (r.nutrients || []).join(' ')).toLowerCase();
        return hay.includes(kw);
      });
    }
    if (selectedIngredients.size > 0) {
      list = list.filter(r => {
        const hay = (r.name + ' ' + (r.ingredients || []).map(i => i.name).join(' ')).toLowerCase();
        return [...selectedIngredients].every(id => {
          const ing = ingredientById(id);
          return ing ? (ing.alias || []).concat(ing.name).some(n => hay.includes(n.toLowerCase())) : false;
        });
      });
    }
    return list;
  }

  /* ==================== 渲染：顶部 ==================== */
  function renderHeader() {
    const stage = stageById(activeStageId);
    const week = WEEK_NAMES[(new Date().getDay() + 6) % 7];
    $('#headerContext').innerHTML = `${week} <span class="ctx-stage">${esc(stage.label)}</span>`;
  }

  function renderStagePicker() {
    const stage = stageById(activeStageId);
    $('#stageBtnLabel').textContent = stage.label;
    $('#stagePopover').innerHTML = STAGES.map(s => `
      <button class="stage-option ${s.id === activeStageId ? 'active' : ''}" data-stage="${s.id}" role="option" aria-selected="${s.id === activeStageId}">
        <span>${esc(s.label)} <span class="sub">${s.ageMin}–${s.ageMax}个月</span></span>
        ${icon('check')}
      </button>
    `).join('');
  }

  function renderSectionTabs() {
    $('#sectionTabs').innerHTML = pageTabs(currentPage).map(t => `
      <button class="section-tab ${t.id === activeTab ? 'active' : ''}" data-section="${t.id}" role="tab" aria-selected="${t.id === activeTab}">
        ${icon(t.icon)}<span>${esc(t.label)}</span>
      </button>
    `).join('') + '<div class="tab-indicator" id="tabIndicator"></div>';
    requestAnimationFrame(updateTabIndicator);
  }

  function updateTabIndicator() {
    const ind = $('#tabIndicator');
    const active = $('#sectionTabs .section-tab.active');
    if (!ind || !active) return;
    ind.style.left = active.offsetLeft + 'px';
    ind.style.width = active.offsetWidth + 'px';
  }

  function renderBottomNav() {
    document.querySelectorAll('#bottomNav [data-nav]').forEach(btn => {
      const on = btn.dataset.nav === currentPage;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-current', on ? 'page' : 'false');
    });
  }

  /* ==================== 渲染：今日（首页） ==================== */
  function pickFeatured() {
    const list = stageRecipes();
    if (list.length === 0) return null;
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return list[dayOfYear % list.length];
  }

  function renderToday() {
    const stage = stageById(activeStageId);
    const featured = pickFeatured();

    const featuredHtml = featured ? `
      <button class="featured-card" data-recipe="${featured.id}">
        ${foodVisual(featured, 'fv-lg')}
        <span class="featured-body">
          <span class="featured-label">${icon('sparkles')}今日推荐</span>
          <span class="featured-name">${esc(featured.name)}</span>
          <span class="featured-why">${esc(featured.why)}</span>
          <span class="featured-meta tag-row">
            ${tag(featured.time + ' 分钟', 'time', 'clock')}
            ${tag(`适合 ${featured.ageMin}m+`, 'age')}
            ${(featured.nutrients || []).slice(0, 2).map(n => tag(n, 'nutrition')).join('')}
          </span>
        </span>
      </button>
    ` : '';

    const quickHtml = QUICK_FILTERS.map(q => `
      <button class="quick-chip ${q.cls}" data-quick="${q.key}">
        ${icon(q.icon)}<span>${esc(q.label)}</span>
      </button>
    `).join('');

    /* 今日菜单速览 */
    const plan = MEAL_PLANS.find(p => p.stageId === activeStageId);
    let todayMealsHtml = '';
    if (plan) {
      const today = plan.days.find(d => d.day === menuDay) || plan.days[0];
      const rows = today.meals.map((m, i) => `
        <button class="today-meal-row" data-recipe-name="${esc(m.name)}">
          <span class="meal-slot-label">${esc(plan.columns[i] || '')}</span>
          <span class="meal-slot-name">${esc(m.name)}</span>
          ${icon('chevronRight', 'icon chev')}
        </button>
      `).join('');
      todayMealsHtml = `
        <div class="section-block">
          ${sectionHead('今天 · ' + WEEK_NAMES[menuDay - 1], '点菜名看做法')}
          <div class="today-meals">${rows}</div>
        </div>`;
    }

    return `
      <section class="greeting page-enter">
        <div class="greeting-kicker">${esc(stage.label)} · ${stage.ageMin}–${stage.ageMax}个月</div>
        <h1 class="greeting-title">今天吃什么？</h1>
        <p class="greeting-sub">${esc(stage.headline)}。本月龄食物性状：${esc(stage.texture)}</p>
      </section>

      <div class="section-block">
        ${featuredHtml}
      </div>

      <div class="section-block">
        ${sectionHead('快捷找菜')}
        <div class="quick-grid">${quickHtml}</div>
      </div>

      ${todayMealsHtml}
    `;
  }

  /* ==================== 渲染：每周菜单 ==================== */
  const MEAL_TIMES = { '早餐': '08:00', '加餐': '15:30', '午餐': '12:00', '晚餐': '18:00', '第一餐': '09:00', '第二餐': '17:00' };

  function renderMealPlan() {
    const stage = stageById(activeStageId);
    const plan = MEAL_PLANS.find(p => p.stageId === activeStageId);
    if (!plan) return emptyState('🍽️', '暂无菜单', '换个阶段看看');

    const realToday = ((new Date().getDay() + 6) % 7) + 1;

    /* Day pills */
    const pills = plan.days.map(d => `
      <button class="day-pill ${d.day === menuDay ? 'active' : ''}" data-day="${d.day}" role="tab" aria-selected="${d.day === menuDay}">
        <span class="d-name">${WEEK_NAMES[d.day - 1]}</span>
        ${d.day === realToday ? '<span class="d-tag">今天</span>' : ''}
      </button>
    `).join('');

    /* Day view（移动端）：时间线 */
    const day = plan.days.find(d => d.day === menuDay) || plan.days[0];
    const slots = day.meals.map((m, i) => {
      const label = plan.columns[i] || '';
      const r = findByStageAndName(stage, m.name);
      return `
        <div class="meal-slot">
          <span class="meal-time">${MEAL_TIMES[label] || ''}</span>
          <div class="meal-label">${esc(label)}</div>
          <button class="meal-dish" data-recipe-name="${esc(m.name)}">
            ${r ? foodVisual(r, 'fv-sm') : ''}
            <span class="d-name">${esc(m.name)}</span>
            ${icon('chevronRight', 'icon chev')}
          </button>
        </div>`;
    }).join('');

    const dayView = `
      <div class="day-view">
        <div class="day-title">
          <span class="dt-main">${WEEK_NAMES[day.day - 1]}</span>
          ${day.day === realToday ? '<span class="dt-today">今天</span>' : ''}
        </div>
        <div class="meal-timeline">${slots}</div>
      </div>`;

    /* Week view（桌面端） */
    const weekView = `
      <div class="week-view">
        <div class="week-table">
          <div class="week-table-head">
            <div class="week-cell"></div>
            ${plan.columns.map(c => `<div class="week-cell">${esc(c)}</div>`).join('')}
          </div>
          ${plan.days.map(d => `
            <div class="week-row">
              <div class="week-cell day-cell">${WEEK_NAMES[d.day - 1]}</div>
              ${d.meals.map(m => `
                <div class="week-cell">
                  <button class="week-dish" data-recipe-name="${esc(m.name)}">${esc(m.name)}</button>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>`;

    /* 加餐 */
    let snacksHtml = '';
    if (plan.snacks && plan.snacks.length) {
      snacksHtml = `
        <div class="section-block">
          ${sectionHead('每天两次加餐', '任选两种')}
          <div class="snack-cloud">
            ${plan.snacks.map(s => `<span class="snack-chip">${esc(s.name)}</span>`).join('')}
          </div>
          ${plan.snackNote ? `<div class="menu-note">${esc(plan.snackNote)}</div>` : ''}
        </div>`;
    }

    return `
      <div class="page-enter">
        <div class="menu-note mt-0">${esc(plan.note)}</div>
        <div class="section-block mt-4">
          <div class="day-strip" role="tablist" aria-label="选择星期">${pills}</div>
          ${dayView}
          ${weekView}
        </div>
        ${plan.allergenNote ? `<div class="menu-note"><b>过敏提示：</b>${esc(plan.allergenNote)}</div>` : ''}
        ${snacksHtml}
      </div>
    `;
  }

  /* ==================== 渲染：菜谱列表 ==================== */
  function recipeRowStandard(r) {
    return `
      <button class="recipe-row" data-recipe="${r.id}">
        ${foodVisual(r, 'fv-md')}
        <span class="recipe-row-main">
          <span class="recipe-row-name">${esc(r.name)}</span>
          <span class="recipe-row-meta">
            ${icon('clock')}${r.time} 分钟 · ${esc(r.texture)}
          </span>
          <span class="recipe-row-tags tag-row">
            ${nutrientTags(r)}
            ${allergenTags(r)}
          </span>
        </span>
        ${icon('chevronRight', 'icon chev')}
      </button>`;
  }

  function recipeRowCompact(r) {
    return `
      <button class="recipe-compact" data-recipe="${r.id}">
        ${foodVisual(r, 'fv-sm')}
        <span class="c-name">${esc(r.name)}</span>
        <span class="c-meta">${r.time} 分钟</span>
      </button>`;
  }

  function emptyState(emoji, title, sub) {
    return `
      <div class="empty-state">
        <div class="empty-emoji" aria-hidden="true">${emoji}</div>
        <div class="empty-title">${esc(title)}</div>
        <div class="empty-sub">${esc(sub)}</div>
      </div>`;
  }

  function renderRecipes() {
    const list = filterRecipes();
    const qf = QUICK_FILTERS.find(q => q.key === quickFilter);

    const filterBar = (qf || searchKeyword) ? `
      <div class="filter-bar">
        ${qf ? `<span class="filter-chip">${icon(qf.icon)}${esc(qf.label)}<button data-clear-quick aria-label="清除筛选">${icon('x')}</button></span>` : ''}
        ${searchKeyword ? `<span class="filter-chip">${icon('search')}“${esc(searchKeyword)}”</span>` : ''}
        <span class="filter-count">${list.length} 道</span>
      </div>` : '';

    if (list.length === 0) {
      return filterBar + emptyState('🥣', '没有找到相关菜谱', '换一个食材或关键词试试');
    }
    return filterBar + `<div class="recipe-list page-enter">${list.map(recipeRowStandard).join('')}</div>`;
  }

  /* ==================== 渲染：按食材选 ==================== */
  function renderIngredientPicker() {
    const stage = stageById(activeStageId);
    const cats = INGREDIENT_CATS.map(cat => {
      const items = INGREDIENTS.filter(i => i.cat === cat);
      if (items.length === 0) return '';
      const tiles = items.map(i => {
        const tooYoung = i.minAge > stage.ageMax;
        const selected = selectedIngredients.has(i.id);
        return `
          <button class="ing-tile ${selected ? 'selected' : ''} ${tooYoung ? 'too-young' : ''}"
                  data-ing="${i.id}" aria-pressed="${selected}">
            <span class="ing-check">${icon('check')}</span>
            ${foodVisual({ emoji: i.emoji, category: null }, 'fv-sm')}
            <span class="ing-name">${esc(i.name)}</span>
            <span class="ing-age">${tooYoung ? i.minAge + '个月后再吃' : i.minAge + '个月起'}</span>
          </button>`;
      }).join('');
      return `<h3 class="ing-cat">${esc(cat)}</h3><div class="ing-grid">${tiles}</div>`;
    }).join('');

    let resultHtml;
    if (selectedIngredients.size === 0) {
      resultHtml = emptyState('🥕', '先点选上面的食材', '可多选，灰色的表示本月龄还不能吃');
    } else {
      const matched = filterRecipes();
      resultHtml = matched.length === 0
        ? emptyState('🍲', '这些食材搭配暂无菜谱', '试试减少一种食材')
        : `<div class="recipe-list">${matched.map(recipeRowCompact).join('')}</div>`;
    }

    return `
      <div class="page-enter">
        ${cats}
        <div class="section-block">
          ${sectionHead('匹配到的菜谱', selectedIngredients.size > 0 ? `已选 ${selectedIngredients.size} 种` : '')}
          ${resultHtml}
        </div>
      </div>`;
  }

  /* ==================== 渲染：核心原则 ==================== */
  function renderPrinciples() {
    const stage = stageById(activeStageId);
    const daily = stage.daily.map(d => `
      <div class="daily-item"><dt>${esc(d.k)}</dt><dd>${esc(d.v)}</dd></div>
    `).join('');
    const items = stage.principles.map(p => `
      <article class="principle-item">
        <span class="p-emoji" aria-hidden="true">${p.icon}</span>
        <div>
          <h3 class="p-title">${esc(p.title)}</h3>
          <p class="p-text">${esc(p.text)}</p>
          <p class="p-why"><b>为什么：</b>${esc(p.why)}</p>
        </div>
      </article>
    `).join('');

    return `
      <div class="page-enter">
        <div class="stage-hero">
          <div class="sh-kicker">${esc(stage.label)} · ${stage.ageMin}–${stage.ageMax}个月</div>
          <div class="sh-title">${esc(stage.headline)}</div>
          <div class="sh-texture">本月龄食物性状：${esc(stage.texture)}</div>
        </div>
        ${sectionHead('每天吃多少')}
        <dl class="daily-list">${daily}</dl>
        <div class="section-block">
          ${sectionHead('本月龄核心原则')}
          ${items}
        </div>
      </div>`;
  }

  /* ==================== 渲染：红黑榜 ==================== */
  function renderBlacklist() {
    const stage = stageById(activeStageId);
    const levelOf = (i) => (i.minAge > stage.ageMax) ? 'red' : i.level;
    const groups = [
      { key: 'red',    title: '避免 / 风险', note: '这个月龄不能吃' },
      { key: 'yellow', title: '控制量',      note: '能吃，但要注意量和做法' },
      { key: 'green',  title: '推荐',        note: '可以放心常吃' }
    ];

    return `<div class="page-enter">` + groups.map(g => {
      const items = INGREDIENTS.filter(i => levelOf(i) === g.key);
      if (items.length === 0) return '';
      const rows = items.map(i => `
        <article class="bl-item">
          <div class="bl-item-head">
            <span class="b-emoji" aria-hidden="true">${i.emoji}</span>
            <span class="b-name">${esc(i.name)}</span>
            ${i.allergen ? tag('含' + i.allergen, 'allergen') : ''}
          </div>
          <p class="b-why">${esc(i.why)}</p>
          <p class="b-how"><b>怎么吃：</b>${esc(i.how)}</p>
        </article>
      `).join('');
      return `
        <section class="bl-group bl-${g.key}">
          <div class="bl-group-head">
            <span class="bl-dot" aria-hidden="true"></span>
            <h2 class="bl-title">${g.title}</h2>
            <span class="bl-note">${g.note}</span>
          </div>
          ${rows}
        </section>`;
    }).join('') + `</div>`;
  }

  /* ==================== 渲染：安全原则 ==================== */
  const SAFETY_ICONS = { choking: 'alert', allergy: 'egg', forbidden: 'shield', hygiene: 'check', howmuch: 'info', mistakes: 'book' };
  function renderSafety() {
    const sections = SAFETY_SECTIONS.map(s => {
      const critical = s.level === 'critical';
      return `
        <section class="safety-card ${critical ? 'critical' : ''}">
          <div class="safety-head">
            <span class="s-icon">${icon(critical ? 'alert' : (SAFETY_ICONS[s.id] || 'shield'))}</span>
            <h2 class="s-title">${esc(s.title)}</h2>
          </div>
          <p class="safety-intro">${esc(s.intro)}</p>
          <div class="safety-rules">
            ${s.items.map(it => `
              <div class="safety-rule">
                <div class="r-t">${icon(critical ? 'alert' : 'check')}${esc(it.t)}</div>
                <div class="r-d">${esc(it.d)}</div>
              </div>
            `).join('')}
          </div>
        </section>`;
    }).join('');
    return `
      <div class="page-enter">
        ${sections}
        <div class="disclaimer">${esc(DISCLAIMER)}</div>
      </div>`;
  }

  /* ==================== 渲染：菜谱详情 ==================== */
  function renderRecipeDetail() {
    const r = recipeById(currentRecipeId);
    if (!r) return emptyState('🥣', '菜谱不存在', '返回列表看看别的');

    const faved = favorites.has(r.id);
    const ingredients = (r.ingredients || []).map(i => `
      <div class="ing-row"><span>${esc(i.name)}</span><span class="ir-amount">${esc(i.amount)}</span></div>
    `).join('');
    const tools = (r.tools || []).map(t => `<span class="tool-chip">${esc(t)}</span>`).join('');
    const steps = (r.steps || []).map((s, idx) => `
      <li class="step-item">
        <span class="step-num">${idx + 1}</span>
        <div class="step-body">
          <div class="step-text">${esc(s.text)}</div>
          ${s.tip ? `<div class="step-tip">${icon('info')}${esc(s.tip)}</div>` : ''}
        </div>
      </li>
    `).join('');
    const cautions = (r.cautions || []).map(c => `
      <div class="caution-item">${icon('alert')}<span>${esc(c)}</span></div>
    `).join('');
    const sources = (r.sources || []).map(id => {
      const s = sourceById(id);
      if (!s) return '';
      return `
        <div class="source-item">
          <div class="src-name">${esc(s.name)}</div>
          <div class="src-from">${esc(s.from)}</div>
          <ul class="src-points">${s.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        </div>`;
    }).join('');

    return `
      <article class="detail">
        <div class="detail-hero">
          ${foodVisual(r, 'fv-hero')}
          <div class="detail-hero-actions">
            <button class="hero-btn" onclick="App.goBack()" aria-label="返回">${icon('chevronLeft')}</button>
            <button class="hero-btn fav-btn ${faved ? 'faved' : ''}" data-fav="${r.id}" aria-label="收藏" aria-pressed="${faved}">${icon('heart')}</button>
          </div>
        </div>

        <div class="detail-title-block">
          <h1 class="detail-title">${esc(r.name)}</h1>
          <p class="detail-sub">适合 ${r.ageMin}–${r.ageMax} 月龄 · ${esc(r.texture)}</p>
        </div>

        <div class="quick-facts">
          <div class="fact"><span class="f-icon">${icon('clock')}</span><div class="f-value">${r.time} 分钟</div><div class="f-label">耗时</div></div>
          <div class="fact"><span class="f-icon">${icon('utensils')}</span><div class="f-value">${esc(r.category)}</div><div class="f-label">类型</div></div>
          <div class="fact"><span class="f-icon">${icon('wheat')}</span><div class="f-value">${esc((r.nutrients || [])[0] || '—')}</div><div class="f-label">主打营养</div></div>
          <div class="fact"><span class="f-icon">${icon('sparkles')}</span><div class="f-value">${r.ageMin}m+</div><div class="f-label">月龄</div></div>
        </div>

        ${(r.allergens || []).length ? `
          <div class="tag-row mt-3">
            ${allergenTags(r)}
          </div>` : ''}

        <section class="d-section">
          <h2 class="d-section-title">${icon('sparkles')}为什么推荐这道</h2>
          <p class="d-why">${esc(r.why)}</p>
        </section>

        <section class="d-section">
          <h2 class="d-section-title">${icon('wheat')}建议分量</h2>
          <p class="d-why is-butter">${esc(r.serving)}</p>
        </section>

        <section class="d-section">
          <h2 class="d-section-title">${icon('carrot')}需要准备</h2>
          ${ingredients}
          <div class="tool-cloud">${tools}</div>
        </section>

        <section class="d-section">
          <h2 class="d-section-title">${icon('utensils')}跟做，一步步</h2>
          <ol class="steps">${steps}</ol>
        </section>

        <section class="d-section">
          <h2 class="d-section-title d-danger">${icon('alert')}注意事项</h2>
          <div class="caution-block">${cautions}</div>
        </section>

        <section class="d-section">
          <details class="sources-block">
            <summary>${icon('book')}专业依据 · ${(r.sources || []).length} 个来源<span class="sum-chev">${icon('chevronDown')}</span></summary>
            <div class="sources-body">${sources}</div>
          </details>
        </section>

        <div class="disclaimer">${esc(DISCLAIMER)}</div>
      </article>`;
  }

  /* ==================== 主渲染 ==================== */
  function render() {
    const main = $('#main');
    const isHome = currentPage === 'home';

    renderHeader();
    renderBottomNav();
    renderStagePicker();
    renderSectionTabs();

    $('#searchBox').style.display = isHome ? '' : 'none';
    main.classList.toggle('page-detail', !!currentRecipeId);

    let content = '';
    if (currentRecipeId) {
      content = renderRecipeDetail();
    } else if (activeTab === 'today') {
      content = renderToday();
    } else if (activeTab === 'mealplan') {
      content = renderMealPlan();
    } else if (activeTab === 'recipes') {
      content = renderRecipes();
    } else if (activeTab === 'ingredients') {
      content = renderIngredientPicker();
    } else if (activeTab === 'principles') {
      content = renderPrinciples();
    } else if (activeTab === 'blacklist') {
      content = renderBlacklist();
    } else if (activeTab === 'safety') {
      content = renderSafety();
    }
    main.innerHTML = content;
  }

  /* ==================== 事件绑定 ==================== */
  function openRecipe(id) {
    currentRecipeId = id;
    window.scrollTo(0, 0);
    render();
  }

  function bindEvents() {
    /* 月龄下拉 */
    const picker = $('#stagePicker');
    const stageBtn = $('#stageBtn');
    const setPickerOpen = (open) => {
      picker.classList.toggle('open', open);
      stageBtn.setAttribute('aria-expanded', open);
    };
    stageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPickerOpen(!picker.classList.contains('open'));
    });
    $('#stagePopover').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-stage]');
      if (!btn) return;
      activeStageId = btn.dataset.stage;
      selectedIngredients.clear();
      setPickerOpen(false);
      render();
    });
    document.addEventListener('click', (e) => {
      if (!picker.contains(e.target)) setPickerOpen(false);
    });

    /* 功能 Tab */
    $('#sectionTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-section]');
      if (!btn) return;
      activeTab = btn.dataset.section;
      render();
    });

    /* 主内容区 */
    $('#main').addEventListener('click', (e) => {
      /* 清除快捷筛选 */
      const clearQuick = e.target.closest('[data-clear-quick]');
      if (clearQuick) {
        quickFilter = null;
        render();
        return;
      }
      /* 快捷找菜 */
      const quick = e.target.closest('[data-quick]');
      if (quick) {
        quickFilter = quick.dataset.quick;
        activeTab = 'recipes';
        render();
        return;
      }
      /* 菜单星期切换 */
      const day = e.target.closest('[data-day]');
      if (day) {
        menuDay = parseInt(day.dataset.day, 10);
        render();
        return;
      }
      /* 收藏 */
      const fav = e.target.closest('[data-fav]');
      if (fav) {
        const id = fav.dataset.fav;
        if (favorites.has(id)) favorites.delete(id);
        else favorites.add(id);
        fav.classList.toggle('faved', favorites.has(id));
        fav.setAttribute('aria-pressed', favorites.has(id));
        return;
      }
      /* 菜单菜名点击 */
      const dish = e.target.closest('[data-recipe-name]');
      if (dish) {
        const stage = stageById(activeStageId);
        const r = findByStageAndName(stage, dish.dataset.recipeName);
        if (r) openRecipe(r.id);
        return;
      }
      /* 菜谱卡片点击 */
      const card = e.target.closest('[data-recipe]');
      if (card) {
        openRecipe(card.dataset.recipe);
        return;
      }
      /* 食材筛选 */
      const ing = e.target.closest('[data-ing]');
      if (ing) {
        const id = ing.dataset.ing;
        if (selectedIngredients.has(id)) selectedIngredients.delete(id);
        else selectedIngredients.add(id);
        render();
      }
    });

    /* 搜索 */
    const searchInput = $('#searchInput');
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim();
      $('#searchBox').classList.toggle('has-value', !!searchKeyword);
      if (searchKeyword) {
        currentPage = 'home';
        activeTab = 'recipes';
        quickFilter = null;
      }
      render();
      /* 输入后保持焦点 */
      if (document.activeElement !== searchInput) searchInput.focus();
    });
    $('#searchClear').addEventListener('click', () => {
      searchInput.value = '';
      searchKeyword = '';
      $('#searchBox').classList.remove('has-value');
      render();
      searchInput.focus();
    });

    /* 底部导航 */
    $('#bottomNav').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-nav]');
      if (!btn) return;
      const nav = btn.dataset.nav;
      currentRecipeId = null;
      quickFilter = null;
      currentPage = nav;
      activeTab = pageTabs(nav)[0].id;
      window.scrollTo(0, 0);
      render();
    });

    /* 顶部 glass：滚动后导航层毛玻璃 */
    const shell = $('#topShell');
    window.addEventListener('scroll', () => {
      shell.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });

    /* Tab indicator 跟随布局变化 */
    window.addEventListener('resize', updateTabIndicator);
  }

  /* ==================== 公开 API ==================== */
  function goBack() {
    currentRecipeId = null;
    render();
  }

  function init() {
    bindEvents();
    render();
  }

  return { init, goBack };
})();

document.addEventListener('DOMContentLoaded', App.init);
