class NewsEngine {
  constructor(config) {
    this.config = config;
  }

  async loadFeed() {
    try {
      const res = await fetch(this.config.feedUrl, { cache: "no-store" });
      if (!res.ok) throw new Error("Feed load failed");

      const data = await res.json();
      return this.filter(data.items || []);
    } catch (err) {
      console.error("[REACEDEATHS ENGINE] loadFeed error:", err);
      return [];
    }
  }

  filter(items) {
    return items
      .map(NewsParser.normalizeItem.bind(NewsParser))
      .filter(i =>
        NewsParser.isDeathRelated(i.title + i.summary, this.config.keywords)
      )
      .slice(0, this.config.maxItems);
  }

  search(items, query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return items;

    const result = items.filter(i =>
      (i.title || "").toLowerCase().includes(q) ||
      (i.summary || "").toLowerCase().includes(q)
    );

    return result.length ? result : [];
  }
}
