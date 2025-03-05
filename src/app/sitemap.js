import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://www.findprivateschoolscholarshipsbursaries.co.uk/',
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: 'https://www.findprivateschoolscholarshipsbursaries.co.uk/faq',
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: 'https://www.findprivateschoolscholarshipsbursaries.co.uk/about',
      lastModified: new Date().toISOString(),
      priority: 0.8,
    }
  ]
}