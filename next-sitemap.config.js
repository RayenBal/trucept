/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.truceptconsulting.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://www.truceptconsulting.com/sitemap.xml'],
  },
};





