// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://darthgart.dev',
  generateRobotsTxt: true,
  sitemapSize: 50000,
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === '/') priority = 1.0;
    else if (path.startsWith('/work')) priority = 0.8;
    else if (path === '/contact') priority = 0.7;
    else if (path === '/about') priority = 0.9;

    return {
      loc: path,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
  },
};