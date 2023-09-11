const sitemap = require('sitemap');
const fs = require('fs');
const hostname = 'https://ghdservice.pl/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/naprawa', changefreq: 'monthly', priority: 0.8 },
  { url: '/zakup', changefreq: 'monthly', priority: 1 },
  { url: '/regulamin', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const sitemapXml = sitemapInstance.toString();

fs.writeFileSync('./public/sitemap.xml', sitemapXml);
