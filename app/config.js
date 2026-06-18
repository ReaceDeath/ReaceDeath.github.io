window.REACDETH_CONFIG = {
  feedUrl: "./data/feed.json",
  maxItems: 300,

  sources: [
    // Major global news
    "https://feeds.bbci.co.uk/news/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    "https://www.theguardian.com/world/rss",
    "https://www.aljazeera.com/xml/rss/all.xml",
    "https://www.reutersagency.com/feed/?best-topics=world&post_type=best",

    // Europe coverage
    "https://www.euronews.com/rss?format=mrss",
    "https://www.france24.com/en/rss",
    "https://www.dw.com/en/top-stories/rss",

    // US + regional
    "https://rss.cnn.com/rss/edition.rss",
    "https://feeds.nbcnews.com/nbcnews/public/news",
    "https://www.latimes.com/world-nation/rss2.0.xml",

    // Tech/media obituaries sometimes appear here
    "https://www.theverge.com/rss/index.xml",
    "https://mashable.com/feeds/rss/all",

    // Public obituary aggregators / death reporting sources
    "https://www.obituare.com/rss",
    "https://www.legacy.com/feeds/obituaries"
  ],

  keywords: [
    "died",
    "dies",
    "dead",
    "killed",
    "passed away",
    "pass away",
    "obituary",
    "death",
    "funeral",
    "found dead",
    "pronounced dead"
  ]
};
