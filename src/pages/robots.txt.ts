import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const isProduction = import.meta.env.PROD;
  const sitemapUrl = site ? new URL('/sitemap-index.xml', site).href : '';

  // Dev/staging tidak boleh diindeks; produksi mengizinkan semua halaman
  // dan mencantumkan sitemap.
  const lines = isProduction
    ? [
        'User-agent: *',
        'Allow: /',
        ...(sitemapUrl ? [`Sitemap: ${sitemapUrl}`] : []),
      ]
    : ['User-agent: *', 'Disallow: /'];

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
