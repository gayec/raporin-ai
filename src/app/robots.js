// Not: Cloudflare'in "Managed robots.txt" özelliği bu çıktının ÜSTÜNE kendi bloğunu
// ekleyerek GPTBot, ClaudeBot, Google-Extended gibi botları engelliyor. Aşağıdaki
// açık Allow kuralları aynı bot için daha az kısıtlayıcı olduğundan Google'ın
// robots.txt kuralları gereği öncelik kazanır; yine de kalıcı çözüm için
// Cloudflare panelinden AI Crawl Control / Managed robots.txt kapatılmalıdır.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/reset-password', '/verify-email'],
      },
      // Yapay zeka arama motorlarının siteyi kaynak gösterebilmesi için açık izin.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://raporin.com/sitemap.xml',
    host: 'https://raporin.com',
  };
}
