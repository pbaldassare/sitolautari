// Sitemap per i motori di ricerca: solo le pagine vere, non i reindirizzamenti dei vecchi URL.
const pages = ['', 'chiedi-aiuto', 'percorso', 'chi-siamo', 'progetti', 'sedi', 'storie', 'sostienici', 'faq', 'privacy'];

export const GET = ({ site }: { site: URL }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
      .map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`)
      .join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
