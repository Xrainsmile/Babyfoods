/**
 * 应用逻辑：路由 + 渲染
 * 纯 vanilla JS，无框架无依赖，支持 file:// 直接打开
 *
 * 顶层两个页面（整页切换）：
 *   home       首页 —— 每周菜单 / 选菜谱 / 按食材选
 *   principles 宝宝食物原则 —— 核心原则 / 红黑榜 / 安全原则
 */

const App = (() => {
  /* ---------- 状态 ---------- */
  let currentPage = 'home';        // 顶层页面：home | principles
  let activeStageId = '6-8';       // 月龄阶段
  let activeTab = 'mealplan';      // 当前页面内的子 tab
  const selectedIngredients = new Set();
  let searchKeyword = '';
  let currentRecipeId = null;

  /* ---------- 页面定义 ---------- */
  const PAGES = {
    home: {
      label: '首页',
      emoji: '🏠',
      tabs: [
        { id: 'mealplan', label: '每周菜单', emoji: '📅' },
        { id: 'recipes', label: '选菜谱', emoji: '🍽️' },
        { id: 'ingredients', label: '按食材选', emoji: '🥕' }
      ]
    },
    principles: {
      label: '宝宝食物原则',
      emoji: '🍼',
      tabs: [
        { id: 'principles', label: '核心原则', emoji: '📖' },
        { id: 'blacklist', label: '红黑榜', emoji: '🚦' },
        { id: 'safety', label: '安全原则', emoji: '🛡️' }
      ]
    }
  };
  const pageTabs = (page) => PAGES[page].tabs;

  /* ---------- 扁平化纯色 SVG 图标（Lucide 风格，stroke 随 currentColor） ---------- */
  const ICONS = {
    mealplan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    recipes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>',
    ingredients: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    principles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    blacklist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  };

  /* ---------- 工具 ---------- */
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const stageById = (id) => STAGES.find(s => s.id === id);
  const recipeById = (id) => RECIPES.find(r => r.id === id);
  const ingredientById = (id) => INGREDIENTS.find(i => i.id === id);

  /* 按阶段 + 菜名查找菜谱（处理跨阶段同名菜） */
  function findByStageAndName(stage, name) {
    const list = RECIPES.filter(r => r.name === name);
    if (list.length === 0) return null;
    const matched = list.find(r => r.ageMin <= stage.ageMax && r.ageMax >= stage.ageMin);
    return matched || list[0];
  }

  /* ---------- 依据徽章 ---------- */
  function sourceBadges(sources) {
    if (!sources || sources.length === 0) return '';
    return sources.map(id => {
      const s = sourceById(id);
      return `<span class="src-badge src-${esc(id)}" title="${esc(s ? s.name : id)}">${esc(s ? s.short : id)}</span>`;
    }).join('');
  }
  function sourceCards(sources) {
    if (!sources || sources.length === 0) return '';
    return sources.map(id => {
      const s = sourceById(id);
      if (!s) return '';
      return `
        <div class="src-card">
          <div class="src-card-head">
            <span class="src-badge src-${esc(s.id)}">${esc(s.short)}</span>
            <b>${esc(s.name)}</b>
          </div>
          <div class="src-card-from">${esc(s.from)}</div>
          <ul class="src-card-points">${s.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        </div>`;
    }).join('');
  }

  /* ---------- 菜谱过滤 ---------- */
  function filterRecipes() {
    const stage = stageById(activeStageId);
    let list = RECIPES.filter(r => r.ageMin <= stage.ageMax && r.ageMax >= stage.ageMin);
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

  /* ---------- 渲染：底部导航 ---------- */
  function renderBottomNav() {
    document.querySelectorAll('#bottomNav [data-nav]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nav === currentPage);
    });
  }

  /* ---------- 渲染：顶部阶段 tab（纯文字，无 emoji） ---------- */
  function renderStageTabs() {
    $('#stageTabs').innerHTML = STAGES.map(s => `
      <button class="stage-tab ${s.id === activeStageId ? 'active' : ''}" data-stage="${s.id}">
        ${esc(s.label)}
      </button>
    `).join('');
  }

  /* ---------- 渲染：板块 tab（SVG 图标在文字左边） ---------- */
  function renderSectionTabs() {
    $('#sectionTabs').innerHTML = pageTabs(currentPage).map(t => `
      <button class="stage-tab ${t.id === activeTab ? 'active' : ''}" data-section="${t.id}">
        <span class="icon">${ICONS[t.id] || ''}</span><span>${esc(t.label)}</span>
      </button>
    `).join('');
  }

  /* ---------- 渲染：核心原则 ---------- */
  function renderPrinciples() {
    const stage = stageById(activeStageId);
    const daily = stage.daily.map(d => `
      <div class="daily-item"><b>${esc(d.k)}：</b>${esc(d.v)}</div>
    `).join('');
    const principles = stage.principles.map(p => `
      <div class="principle">
        <div class="principle-head">
          <span class="icon">${p.icon}</span>
          <div class="title">${esc(p.title)}</div>
        </div>
        <div class="text">${esc(p.text)}</div>
        <div class="why"><b>为什么：</b>${esc(p.why)}</div>
      </div>
    `).join('');

    return `
      <div class="headline-card">
        <div class="headline">${esc(stage.headline)}</div>
        <div class="texture">本月龄食物性状：${esc(stage.texture)}</div>
      </div>
      <div class="section-title">🍼 每天吃多少</div>
      <div class="daily-grid">${daily}</div>
      <div class="section-title">📌 本月龄核心原则</div>
      ${principles}
    `;
  }

  /* ---------- 渲染：每周菜单 ---------- */
  function renderMealPlan() {
    const stage = stageById(activeStageId);
    const plan = MEAL_PLANS.find(p => p.stageId === activeStageId);
    if (!plan) return '<div class="empty-hint">暂无菜单</div>';

    const table = `
      <div class="meal-table">
        <div class="meal-table-head">
          <div class="meal-col day-col">天</div>
          ${plan.columns.map(c => `<div class="meal-col">${esc(c)}</div>`).join('')}
        </div>
        ${plan.days.map(d => `
          <div class="meal-row">
            <div class="meal-col day-col">${d.day}</div>
            ${d.meals.map(m => `
              <div class="meal-col">
                <div class="meal-dish" data-recipe-name="${esc(m.name)}">
                  ${esc(m.name)}
                  ${sourceBadges(m.sources)}
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `;

    let snacks = '';
    if (plan.snacks && plan.snacks.length) {
      snacks = `
        <div class="section-title">🍎 每天两次加餐（任选两种）</div>
        <div class="snack-grid">
          ${plan.snacks.map(s => `
            <div class="snack-chip">${esc(s.name)} ${sourceBadges(s.sources)}</div>
          `).join('')}
        </div>
        ${plan.snackNote ? `<div class="disclaimer" style="margin-top:10px">${esc(plan.snackNote)}</div>` : ''}
      `;
    }

    return `
      <div class="headline-card">
        <div class="headline">📅 ${esc(stage.label)} 7 日轮换菜单</div>
        <div class="texture">${esc(plan.note)}</div>
      </div>
      ${table}
      ${snacks}
      ${plan.allergenNote ? `<div class="disclaimer" style="margin-top:12px"><b>过敏提示：</b>${esc(plan.allergenNote)}</div>` : ''}
      <div class="hint-text">点击菜名查看详细做法。</div>
    `;
  }

  /* ---------- 渲染：选菜谱 ---------- */
  function renderRecipes() {
    const list = filterRecipes();
    if (list.length === 0) {
      return `<div class="empty-hint">没有找到符合条件的菜谱，换个关键词或食材试试～</div>`;
    }
    return list.map(r => `
      <div class="recipe-card" data-recipe="${r.id}">
        <div class="recipe-card-top">
          <div class="recipe-emoji">${r.emoji}</div>
          <div>
            <div class="recipe-name">${esc(r.name)}</div>
            <div class="recipe-meta">⏱ ${r.time} 分钟 · ${esc(r.texture)}</div>
          </div>
        </div>
        <div class="recipe-tags">
          ${(r.nutrients || []).map(n => `<span class="tag tag-nutrient">${esc(n)}</span>`).join('')}
          ${(r.allergens || []).map(a => `<span class="tag tag-allergen">含${esc(a)}</span>`).join('')}
        </div>
        <div class="src-badge-row">${sourceBadges(r.sources)}</div>
      </div>
    `).join('');
  }

  /* ---------- 渲染：按食材选 ---------- */
  function renderIngredientPicker() {
    const stage = stageById(activeStageId);
    const cats = INGREDIENT_CATS.map(cat => {
      const items = INGREDIENTS.filter(i => i.cat === cat);
      if (items.length === 0) return '';
      const chips = items.map(i => {
        const tooYoung = i.minAge > stage.ageMax;
        const cls = selectedIngredients.has(i.id) ? 'active' : '';
        const cls2 = tooYoung ? 'month-old' : '';
        return `<button class="ingredient-chip ${cls} ${cls2}" data-ing="${i.id}">${i.emoji}<br>${esc(i.name)}</button>`;
      }).join('');
      return `<div class="section-title" style="margin-top:14px">${cat}</div><div class="ingredient-grid">${chips}</div>`;
    }).join('');

    let resultList = '';
    if (selectedIngredients.size > 0) {
      const matched = filterRecipes();
      resultList = matched.map(r => `
        <div class="recipe-card" data-recipe="${r.id}" style="margin-top:12px">
          <div class="recipe-card-top">
            <div class="recipe-emoji">${r.emoji}</div>
            <div>
              <div class="recipe-name">${esc(r.name)}</div>
              <div class="recipe-meta">⏱ ${r.time} 分钟</div>
            </div>
          </div>
        </div>
      `).join('');
      if (matched.length === 0) resultList = `<div class="empty-hint" style="margin-top:12px">这些食材搭配暂无菜谱，试试单选或换食材～</div>`;
    }

    return `
      <div class="headline-card">
        <div class="headline">点选食材，看能做什么</div>
        <div class="texture">可多选，灰掉的表示本月龄还不能吃</div>
      </div>
      ${cats}
      <div class="section-title" style="margin-top:16px">🍽️ 匹配到的菜谱</div>
      ${selectedIngredients.size === 0 ? '<div class="empty-hint">先点选上面的食材</div>' : resultList}
    `;
  }

  /* ---------- 渲染：红黑榜 ---------- */
  function renderBlacklist() {
    const stage = stageById(activeStageId);
    function levelOf(i) {
      if (i.minAge > stage.ageMax) return 'red';
      return i.level;
    }
    const groups = [
      { key: 'red', title: '🔴 禁止（不能吃）' },
      { key: 'yellow', title: '🟡 限量 / 有讲究' },
      { key: 'green', title: '🟢 推荐（放心吃）' }
    ];

    return groups.map(g => {
      const items = INGREDIENTS.filter(i => levelOf(i) === g.key);
      if (items.length === 0) return '';
      const html = items.map(i => `
        <div class="list-item">
          <div class="list-item-head">
            <span class="emoji">${i.emoji}</span>
            <span class="name">${esc(i.name)}</span>
            <span class="level-badge ${LEVEL_TEXT[g.key].cls}">${LEVEL_TEXT[g.key].label}</span>
          </div>
          <div class="reason"><b>为什么：</b>${esc(i.why)}</div>
          <div class="how"><b>怎么做：</b>${esc(i.how)}</div>
        </div>
      `).join('');
      return `<div class="zone-title">${g.title}</div>${html}`;
    }).join('');
  }

  /* ---------- 渲染：菜谱详情 ---------- */
  function renderRecipeDetail() {
    const r = recipeById(currentRecipeId);
    if (!r) return '<div class="empty-hint">菜谱不存在</div>';

    const ingredients = (r.ingredients || []).map(i => `
      <div class="ingredient-row"><span>${esc(i.name)}</span><span class="amount">${esc(i.amount)}</span></div>
    `).join('');
    const tools = (r.tools || []).map(t => `<span class="tool-chip">${esc(t)}</span>`).join('');
    const steps = (r.steps || []).map((s, idx) => `
      <div class="step">
        <div class="step-num">${idx + 1}</div>
        <div class="step-body">
          <div class="step-text">${esc(s.text)}</div>
          ${s.tip ? `<div class="step-tip">💡 ${esc(s.tip)}</div>` : ''}
        </div>
      </div>
    `).join('');
    const cautions = (r.cautions || []).map(c => `<li>${esc(c)}</li>`).join('');
    const srcCards = sourceCards(r.sources);

    return `
      <div class="recipe-detail">
        <button class="back-btn" onclick="App.goBack()">← 返回</button>
        <div class="detail-hero">
          <div class="big-emoji">${r.emoji}</div>
          <h2>${esc(r.name)}</h2>
          <div class="meta">适用 ${r.ageMin}-${r.ageMax} 月龄 · 性状：${esc(r.texture)}</div>
          <div class="src-badge-row" style="justify-content:center">${sourceBadges(r.sources)}</div>
        </div>

        <div class="detail-block">
          <div class="detail-block-title">💡 为什么要做这道</div>
          <div class="why-text">${esc(r.why)}</div>
        </div>

        <div class="detail-block">
          <div class="detail-block-title">⏱ 建议分量与耗时</div>
          <div class="serving-box">
            <div class="box"><div class="label">建议分量</div><div class="value">${esc(r.serving)}</div></div>
            <div class="box"><div class="label">预计耗时</div><div class="value">${r.time} 分钟</div></div>
          </div>
        </div>

        <div class="detail-block">
          <div class="detail-block-title">🛒 需要准备</div>
          ${ingredients}
          <div style="margin-top:10px"><b>工具：</b></div>
          <div class="tool-row">${tools}</div>
        </div>

        <div class="detail-block">
          <div class="detail-block-title">👨‍🍳 跟做，一步步</div>
          ${steps}
        </div>

        <div class="detail-block">
          <div class="detail-block-title">⚠️ 注意事项</div>
          <ul class="caution-list">${cautions}</ul>
        </div>

        <div class="detail-block">
          <div class="detail-block-title">📚 依据来源</div>
          ${srcCards}
        </div>

        <div class="disclaimer">${esc(DISCLAIMER)}</div>
      </div>
    `;
  }

  /* ---------- 渲染：安全原则 ---------- */
  function renderSafety() {
    const sections = SAFETY_SECTIONS.map(s => `
      <div class="safety-section ${s.level}">
        <div class="safety-section-head">
          <span class="emoji">${s.emoji}</span>
          <div class="title">${esc(s.title)}</div>
        </div>
        <div class="intro">${esc(s.intro)}</div>
        ${s.items.map(it => `
          <div class="safety-item">
            <div class="t">${esc(it.t)}</div>
            <div class="d">${esc(it.d)}</div>
          </div>
        `).join('')}
      </div>
    `).join('');
    return `
      ${sections}
      <div class="disclaimer">${esc(DISCLAIMER)}</div>
    `;
  }

  /* ---------- 主渲染 ---------- */
  function render() {
    const main = $('#main');
    const isHome = currentPage === 'home';

    renderBottomNav();
    renderStageTabs();
    renderSectionTabs();

    $('#searchBar').style.display = isHome ? '' : 'none';

    let content = '';
    if (currentRecipeId) {
      content = renderRecipeDetail();
    } else if (activeTab === 'principles') {
      content = renderPrinciples();
    } else if (activeTab === 'mealplan') {
      content = renderMealPlan();
    } else if (activeTab === 'recipes') {
      content = renderRecipes();
    } else if (activeTab === 'ingredients') {
      content = renderIngredientPicker();
    } else if (activeTab === 'blacklist') {
      content = renderBlacklist();
    } else if (activeTab === 'safety') {
      content = renderSafety();
    }
    main.innerHTML = content;
  }

  /* ---------- 事件绑定 ---------- */
  function bindEvents() {
    $('#stageTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-stage]');
      if (!btn) return;
      activeStageId = btn.dataset.stage;
      selectedIngredients.clear();
      render();
    });

    $('#sectionTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-section]');
      if (!btn) return;
      activeTab = btn.dataset.section;
      render();
    });

    $('#main').addEventListener('click', (e) => {
      // 菜单里的菜名点击
      const dish = e.target.closest('[data-recipe-name]');
      if (dish) {
        const stage = stageById(activeStageId);
        const r = findByStageAndName(stage, dish.dataset.recipeName);
        if (r) {
          currentRecipeId = r.id;
          window.scrollTo(0, 0);
          render();
        }
        return;
      }
      // 菜谱卡片点击
      const card = e.target.closest('[data-recipe]');
      if (card) {
        currentRecipeId = card.dataset.recipe;
        window.scrollTo(0, 0);
        render();
        return;
      }
      // 食材筛选
      const ing = e.target.closest('[data-ing]');
      if (ing) {
        const id = ing.dataset.ing;
        if (selectedIngredients.has(id)) selectedIngredients.delete(id);
        else selectedIngredients.add(id);
        render();
      }
    });

    $('#searchInput').addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim();
      currentPage = 'home';
      activeTab = 'recipes';
      render();
    });

    $('#bottomNav').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-nav]');
      if (!btn) return;
      const nav = btn.dataset.nav;
      currentRecipeId = null;
      currentPage = nav;
      activeTab = pageTabs(nav)[0].id;
      window.scrollTo(0, 0);
      render();
    });
  }

  /* ---------- 公开 API ---------- */
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
