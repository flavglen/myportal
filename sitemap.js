const fs = require('fs');

const URLS = ['home', 'projects', 'skills', 'timeline'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://flavglen.github.io/</loc>
        <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
    </url>
    ${
    URLS.map((url)=> (
    `<url>
        <loc>https://flavglen.github.io/${url}</loc>
        <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
        <changefreq>weekly</changefreq>
    </url>`)).join("")
    }
</urlset>`;

fs.writeFileSync("./build/sitemap.xml", sitemap);
console.log("genarated Sitemap successfully");
