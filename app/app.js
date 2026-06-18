(async function bootstrap() {
  const config = window.REACDETH_CONFIG;
  const engine = new NewsEngine(config);

  let dataset = await engine.loadFeed();
  UI.render(dataset);

  const search = document.getElementById("search");

  search.addEventListener("input", (e) => {
    const filtered = engine.search(dataset, e.target.value);
    UI.render(filtered);
  });

  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.filter;
      const now = Date.now();

      if (mode === "today") {
        UI.render(dataset.filter(i => (now - new Date(i.date)) < 86400000));
      }

      if (mode === "week") {
        UI.render(dataset.filter(i => (now - new Date(i.date)) < 604800000));
      }

      if (mode === "all") {
        UI.render(dataset);
      }
    });
  });
})();
