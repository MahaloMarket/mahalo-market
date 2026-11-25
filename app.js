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
  let query = "";

  // Text labels
  $("#storeName").textContent = STORE.name;
  $("#footerName").textContent = STORE.name;
  $("#storeTagline").textContent = STORE.tagline;
  $("#disclosure").textContent = STORE.disclosure;
  $("#updated").textContent = new Date(STORE.updated + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  document.title = `${STORE.name} | Hawaii favorites, hand-picked`;

  // Header nav
  $("#catNav").innerHTML = CATEGORIES.map((c) => `<a href="#cat-${c.id}">${esc(c.name)}</a>`).join("");

  function card(p) {
    const c = catById[p.category];
    const badges = [
      p.pick ? `<span class="badge">Editor's pick</span>` : "",
      isNew(p.added) ? `<span class="badge new">New</span>` : ""
    ].join("");
    return `
      <article class="card">
        <div class="card-art" style="background-image: url('${esc(c.image)}')" role="img" aria-label="${esc(c.name)}">
          ${badges}
        </div>
        <div class="card-body">
          <span class="card-cat">${esc(c.name)}</span>
          <h4>${esc(p.name)}</h4>
          <p>${esc(p.note)}</p>
          <a class="btn-buy" href="${amazonLink(p.id)}" target="_blank" rel="sponsored nofollow noopener">View on Amazon</a>
        </div>
      </article>`;
  }

  function matches(p) {
    if (!query) return true;
    const hay = `${p.name} ${p.note} ${catById[p.category].name}`.toLowerCase();
    return query.split(/\s+/).every((w) => hay.includes(w));
  }

  function renderTiles() {
    $("#tiles").innerHTML = CATEGORIES.map((c) => {
      const n = PRODUCTS.filter((p) => p.category === c.id).length;
      return `<a class="tile" href="#cat-${c.id}" style="background-image: url('${esc(c.image)}')">
        <span class="tile-body"><strong>${esc(c.name)}</strong><span>${n} picks</span></span>
      </a>`;
    }).join("");
  }

  function render() {
    const list = PRODUCTS.filter(matches);
    $("#count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    $("#empty").hidden = list.length > 0;

    const showPicks = !query;
    $("#picks").innerHTML = showPicks
      ? `<h3 class="picks-title">Editor's picks</h3>` + list.filter((p) => p.pick).map(card).join("")
      : "";

    $("#grid").innerHTML = CATEGORIES.map((c) => {
      const items = list.filter((p) => p.category === c.id);
      if (!items.length) return "";
      return `
        <div class="cat-block" id="cat-${c.id}">
          <div class="cat-banner" style="background-image: url('${esc(c.image)}')">
            <div class="cat-banner-text">
              <h3>${esc(c.name)}</h3>
              <p>${esc(c.blurb)}</p>
            </div>
          </div>
          <div class="grid">${items.map(card).join("")}</div>
        </div>`;
    }).join("");
  }

  $("#q").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  renderTiles();
  render();

  // Category links from pins or the header: scroll to the section once it exists.
  const jump = () => {
    const id = location.hash.replace("#", "");
    if (id.startsWith("cat-")) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };
  window.addEventListener("hashchange", jump);
  jump();
})();
