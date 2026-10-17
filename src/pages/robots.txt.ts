import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site ? new URL('/sitemap-index.xml', site).href : '';

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    ...(sitemapUrl ? [`Sitemap: ${sitemapUrl}`] : []),
  ].join('\n');

  return new Response(`${robotsTxt}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
