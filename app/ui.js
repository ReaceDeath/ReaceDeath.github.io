class UI {
  static render(items) {
    const root = document.getElementById("feed");
    root.innerHTML = "";

    if (!items || items.length === 0) {
      UI.renderEmptyState();
      return;
    }

    for (const item of items) {
      const el = document.createElement("div");
      el.className = "card";

      el.innerHTML = `
        <a href="${item.link}" target="_blank">
          <h3>${item.title}</h3>
        </a>
        <p>${item.summary || ""}</p>
        <span class="meta">
          ${item.source || "unknown"} • ${new Date(item.date).toLocaleString()}
        </span>
      `;

      root.appendChild(el);
    }
  }

  static renderEmptyState() {
    const root = document.getElementById("feed");

    const el = document.createElement("div");
    el.className = "empty-state";

    el.innerHTML = `
      <div class="empty-title">OOPS... We were unable to find your request</div>
    `;

    root.appendChild(el);
  }
}
