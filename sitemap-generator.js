const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://aurtrestaurant.com',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'static/'
})
