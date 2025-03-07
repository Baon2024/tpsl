/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.findprivateschoolscholarshipsbursaries.co.uk', // Replace with your website URL
    generateRobotsTxt: true, // Generates robots.txt
    sitemapSize: 5000, // (Optional) Limit the number of URLs per sitemap file
  };
  