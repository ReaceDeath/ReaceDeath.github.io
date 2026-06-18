class NewsParser {
  static normalizeItem(item) {
    return {
      id: this.hash((item.title || "") + (item.link || "")),
      title: item.title || "",
      link: item.link || "",
      date: new Date(item.pubDate || Date.now()).toISOString(),
      source: item.source || "unknown",
      summary: item.contentSnippet || item.description || ""
    };
  }

  static isDeathRelated(text, keywords) {
    if (!text) return false;
    const lower = text.toLowerCase();
    return keywords.some(k => lower.includes(k));
  }

  static hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return "id_" + Math.abs(h);
  }
}
