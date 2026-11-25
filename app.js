// Mahalo Market - renders the shop from products.js. No build step, no tracking.
(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Amazon link with your StoreID. Plain /dp/ASIN form, no shortening, no cloaking.
  const amazonLink = (asin) => `https://www.amazon.com/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(STORE.tag)}`;

  // "New" badge: added in the last 30 days, relative to the store's updated date.
  const isNew = (added) => {
    const d = (new Date(STORE.updated) - new Date(added)) / 86400000;
    return d >= 0 && d <= 30;
  };

  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
  let activeCat = "all";
  let query = "";

  // Header, footer and labels
  $("#storeName").textContent = STORE.name;
  $("#footerName").textContent = STORE.name;
  $("#storeTagline").textContent = STORE.tagline;
  $("#disclosure").textContent = STORE.disclosure;
  $("#updated").textContent = new Date(STORE.updated + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  document.title = `${STORE.name} | Hawaii favorites we love`;

  // Category nav (header) and chips (filters)
  $("#catNav").innerHTML = CATEGORIES.map((c) => `<a href="#cat-${c.id}">${esc(c.icon)} ${esc(c.name)}</a>`).join("");

  function renderChips() {
    const all = [{ id: "all", name: "All" }, ...CATEGORIES];
    $("#chips").innerHTML = all.map((c) =>
      `<button class="chip" type="button" data-cat="${c.id}" aria-pressed="${c.id === activeCat}">${esc(c.name)}</button>`
    ).join("");
  }

  function card(p) {
    const c = catById[p.category];
    const badges = [
      p.pick ? `<span class="badge">Editor's pick</span>` : "",
      isNew(p.added) ? `<span class="badge new">New</span>` : ""
    ].join("");
    return `
      <article class="card">
        <div class="card-art" style="background: linear-gradient(135deg, ${c.color}, #0B3C49)">
          ${badges}
          <span aria-hidden="true">${esc(c.icon)}</span>
        </div>
        <div class="card-body">
          <span class="card-cat" style="color:${c.color}">${esc(c.name)}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.note)}</p>
          <a class="btn" href="${amazonLink(p.id)}" target="_blank" rel="sponsored nofollow noopener">View on Amazon</a>
        </div>
      </article>`;
  }

  function matches(p) {
    if (activeCat !== "all" && p.category !== activeCat) return false;
    if (!query) return true;
    const hay = `${p.name} ${p.note} ${catById[p.category].name}`.toLowerCase();
    return query.split(/\s+/).every((w) => hay.includes(w));
  }

  function render() {
    const list = PRODUCTS.filter(matches);
    $("#count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    $("#empty").hidden = list.length > 0;

    // Editor's picks: shown on the "All" view with no search
    const showPicks = activeCat === "all" && !query;
    $("#picks").innerHTML = showPicks
      ? `<h2 class="picks-title">Editor's picks</h2>` + list.filter((p) => p.pick).map(card).join("")
      : "";

    // Grouped by category (All view), or a single category block
    const groups = (activeCat === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.id === activeCat));
    $("#grid").innerHTML = groups.map((c) => {
      const items = list.filter((p) => p.category === c.id);
      if (!items.length) return "";
      return `
        <div class="cat-block" id="cat-${c.id}" style="grid-column: 1 / -1">
          <div class="cat-banner" style="background-image: url('${esc(c.image)}')">
            <div class="cat-banner-text">
              <h2>${esc(c.icon)} ${esc(c.name)}</h2>
              <p>${esc(c.blurb)}</p>
            </div>
          </div>
          <div class="grid">${items.map(card).join("")}</div>
        </div>`;
    }).join("");
  }

  $("#chips").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-cat]");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    renderChips();
    render();
  });

  $("#q").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  renderChips();
  render();
})();
