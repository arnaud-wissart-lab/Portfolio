import { mkdir, writeFile } from 'node:fs/promises'

const FALLBACK_PUBLIC_URL = 'https://arnovissard.fr'
const domainFromEnv = process.env.DOMAIN
  ? `https://${process.env.DOMAIN.replace(/^https?:\/\//, '')}`
  : ''
const rawPublicUrl =
  process.env.PUBLIC_URL ||
  process.env.VITE_PUBLIC_URL ||
  domainFromEnv ||
  FALLBACK_PUBLIC_URL

const trimmedPublicUrl = rawPublicUrl.trim()
const publicUrlWithProtocol = /^https?:\/\//i.test(trimmedPublicUrl)
  ? trimmedPublicUrl
  : `https://${trimmedPublicUrl}`
const normalizedPublicUrl = publicUrlWithProtocol.replace(/\/+$/, '')

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${normalizedPublicUrl}/sitemap.xml
`

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${normalizedPublicUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

await mkdir('public', { recursive: true })
await writeFile('public/robots.txt', robotsContent, 'utf8')
await writeFile('public/sitemap.xml', sitemapContent, 'utf8')

console.log(
  `[seo] robots.txt and sitemap.xml generated for ${normalizedPublicUrl}`,
)
