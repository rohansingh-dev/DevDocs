const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (e.g., frontend files)
app.use(express.static(path.join(__dirname, '../frontend')));

// API route to fetch news data
app.get('/api/news', (req, res) => {
    try {
        const newsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'newsData.json'), 'utf-8'));
        res.json(newsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news data', error: error.message });
    }
});

// Route for privacy policy
app.get('/privacy-policy.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/privacy-policy.html'));
});

// Route for terms of service
app.get('/terms-of-service.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/terms-of-service.html'));
});

// Route for contact us
app.get('/contact-us.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/contact-us.html'));
});

// Route for news details
app.get('/news-details.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/news-details.html'));
});

// Dynamic sitemap.xml
app.get('/sitemap.xml', (req, res) => {
    const newsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'newsData.json'), 'utf-8'));
    const baseUrl = 'https://newshub.com';
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${newsData
        .map(article => `
        <url>
            <loc>${baseUrl}/news-details.html?id=${encodeURIComponent(article.url)}</loc>
            <lastmod>${new Date(article.publishedAt).toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    `)
        .join('')}
</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
});

// Serve ads.txt
app.get('/ads.txt', (req, res) => {
    const adsTxtContent = `
google.com, pub-1571996475837550, DIRECT, f08c47fec0942fa0
    `;
    res.header('Content-Type', 'text/plain');
    res.send(adsTxtContent.trim());
});

// Serve robots.txt
app.get('/robots.txt', (req, res) => {
    const robotsTxtContent = `
User-agent: *
Disallow: /backend/
Allow: /
Sitemap: https://newshub.com/sitemap.xml
    `;
    res.header('Content-Type', 'text/plain');
    res.send(robotsTxtContent.trim());
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
