import fs from 'fs';
import path from 'path';

// Extracted IDs from seoServices
const services = [
  "ai-machine-learning", "ai-automation", "agentic-ai", "deep-tech",
  "web-development", "mobile-development", "shopify-ecommerce", 
  "data-analytics", "cloud-migration", "ui-ux-design",
  "digital-marketing", "social-media-marketing", "seo-optimization", "content-strategy"
];
// Append the 26 micro-services
for (let i = 1; i <= 26; i++) {
  services.push(`enterprise-solution-${i}`);
}

// Extracted IDs from b2bIndustries
const industries = [
  "fintech-banking", "healthcare-medtech", "ecommerce-retail", 
  "logistics-supply-chain", "manufacturing-industry-4", "energy-utilities"
];

const staticPages = [
  "", "about-us", "contact", "pricing", "careers", "blog", 
  "newsroom", "case-studies", "products", "partner",
  "cross-platform-apps", "shopify-ecommerce", "devops-agile", "team-augmentation",
  "legal", "privacy-policy", "terms-of-service", "sitemap"
];

const baseUrl = 'https://anastechnology.co.uk';
const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add Static Pages
staticPages.forEach(page => {
  xml += `  <url>
    <loc>${baseUrl}${page ? '/' + page : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add Services
services.forEach(service => {
  xml += `  <url>
    <loc>${baseUrl}/service/${service}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
});

// Add Industries
industries.forEach(industry => {
  xml += `  <url>
    <loc>${baseUrl}/industry/${industry}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
});

xml += `</urlset>`;

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);
console.log(`Successfully generated sitemap.xml with ${staticPages.length + services.length + industries.length} URLs!`);
