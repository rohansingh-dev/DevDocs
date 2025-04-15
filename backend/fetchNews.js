const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables

const OUTPUT_FILE = path.join(__dirname, 'newsData.json');
const NEWSDATA_API_URL = 'https://newsdata.io/api/1/news'; // NewsData.io API endpoint
const API_KEY = process.env.NEWSDATA_API_KEY; // Your NewsData.io API key
const QUERY = 'technology'; // Query for fetching news
const LANGUAGE = 'en'; // Fetch articles in English
const FETCH_LIMIT = parseInt(process.env.FETCH_LIMIT, 10) || 150; // Fetch limit
const FETCH_INTERVAL_DAYS = parseInt(process.env.FETCH_INTERVAL_DAYS, 10) || 30; // Fetch interval in days

let fetchCount = 0;

async function fetchNews() {
    if (fetchCount >= FETCH_LIMIT) {
        console.log('Fetch limit reached for the current interval.');
        return;
    }

    try {
        const existingArticles = loadExistingArticles();

        console.log('Fetching news from NewsData.io...');
        const response = await axios.get(NEWSDATA_API_URL, {
            params: {
                apikey: API_KEY, // API key for authentication
                q: QUERY, // Search query
                language: LANGUAGE, // Language filter
            },
        });

        if (!response.data || !response.data.results || response.data.results.length === 0) {
            console.error('Error: No articles found in the API response.');
            return;
        }

        const newArticles = response.data.results.map(article => ({
            title: article.title || 'No title available.',
            description: article.description || 'No description available.',
            content: article.content || 'Content not provided.',
            url: article.link || '',
            source: article.source_id || 'Unknown Source',
            publishedAt: article.pubDate || new Date().toISOString(),
            image: article.image_url || 'placeholder.jpg',
            country: article.country || 'Unknown',
            language: article.language || 'Unknown',
        }));

        const filteredNewArticles = filterNewArticles(newArticles, existingArticles);

        const combinedArticles = sortArticlesByDate([...existingArticles, ...filteredNewArticles]);

        saveArticlesToFile(combinedArticles);
        fetchCount += 1;
        console.log(`News data updated successfully. Total articles: ${combinedArticles.length}`);
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
    }
}

function loadExistingArticles() {
    if (fs.existsSync(OUTPUT_FILE)) {
        const fileData = fs.readFileSync(OUTPUT_FILE, 'utf-8').trim();
        return fileData ? JSON.parse(fileData) : [];
    }
    return [];
}

function filterNewArticles(newArticles, existingArticles) {
    const existingUrls = new Set(existingArticles.map(article => article.url));
    return newArticles.filter(article => !existingUrls.has(article.url));
}

function sortArticlesByDate(articles) {
    return articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

function saveArticlesToFile(articles) {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articles, null, 2));
}

// Schedule fetching news
setInterval(fetchNews, (FETCH_INTERVAL_DAYS * 24 * 60 * 60 * 1000) / FETCH_LIMIT);
fetchNews();
