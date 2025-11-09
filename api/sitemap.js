// /api/sitemap.js
const baseUrl = 'https://craftyourplatform.vercel.app';

const pages = [
  '/',
  '/about',
  '/services',
  '/services/website-development',
  '/services/seo',
  '/blogs',
  '/careers',
  '/contact',
];

export default function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page === '/' ? '1.00' : '0.80'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(sitemap);
}
