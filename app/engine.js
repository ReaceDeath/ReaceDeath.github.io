class NewsEngine {
  constructor(config) {
    this.config = config;
  }

  async loadFeed() {
    try {
      const res = await fetch(this.config.feedUrl, { cache: "no-store" });

      if (!res.ok) throw new Error("feed.json missing or invalid");

      const data = await res.json();
      const filtered = this.filter(data.items || []);

      // 🛑 fallback trigger if everything got filtered out
      if (!filtered.length) {
        return [{ 
          title: "System is syncing news sources...",
          summary: "If this persists, RSS feeds are temporarily unavailable.",
          link: "#",
          date: new Date().toISOString(),
          source: "system"
        }];
      }

      return filtered;

    } catch (err) {
      console.error("[ReaceDeaths] load error:", err);

      return [{
        title: "OOPS... We were unable to find your request",
        summary: "RSS sources failed to load or are blocked.",
        link: "#",
        date: new Date().toISOString(),
        source: "system"
      }];
    }
  }

  filter(items) {
    return items
      .map(NewsParser.normalizeItem.bind(NewsParser))
      .filter(i =>
        NewsParser.isDeathRelated(
          (i.title || "") + (i.summary || ""),
          this.config.keywords
        )
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
