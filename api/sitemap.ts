// /api/sitemap.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://craftyourplatform.vercel.app';
  
  const pages = [
    '/',
    '/about',
    '/services',
    '/services/website-development',
    '/services/seo',
    '/blogs',
    '/careers',
    '/contact'
  ];

  const urls = pages.map((page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <priority>${
        page === '/' ? '1.00' :
        page === '/about' || page === '/services' ? '0.80' :
        page === '/services/website-development' || page === '/services/seo' ? '0.75' :
        page === '/blogs' || page === '/careers' ? '0.70' :
        '0.64'
      }</priority>
    </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
