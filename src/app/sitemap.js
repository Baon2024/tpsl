import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com/',
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: 'https://yourdomain.com/about',
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
  ]
}