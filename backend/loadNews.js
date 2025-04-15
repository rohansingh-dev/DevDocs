const articlesPerPage = 5;
let currentPage = 1;
let articles = [];
let filteredArticles = [];

function displayArticles(page) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear previous content
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const paginatedArticles = filteredArticles.slice(start, end);

    if (paginatedArticles.length === 0) {
        container.innerHTML = '<p>No articles available. Please try again later.</p>';
        return;
    }

    paginatedArticles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <img src="${article.image || 'placeholder.jpg'}" alt="${article.title}" class="news-image">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="news-details.html?id=${encodeURIComponent(article.url)}" class="read-more">Read more</a>
        `;
        container.appendChild(newsItem);
    });
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear previous pagination
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.href = '#';
        pageLink.className = i === currentPage ? 'active' : '';
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayArticles(currentPage);
            setupPagination();
        });
        pagination.appendChild(pageLink);
    }
}

function filterArticles() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery) || 
                              (article.description && article.description.toLowerCase().includes(searchQuery));
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    currentPage = 1;
    displayArticles(currentPage);
    setupPagination();
}

document.getElementById('filter-button').addEventListener('click', filterArticles);

fetch('/api/news')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        articles = data.map(article => ({
            ...article,
            category: categorizeArticle(article),
            image: article.image || 'placeholder.jpg'
        }));
        filteredArticles = articles;
        displayArticles(currentPage);
        setupPagination();
    })
    .catch(error => {
        console.error('Error loading news:', error.message);
        document.getElementById('news-container').innerHTML = '<p>Error loading news. Please try again later.</p>';
    });

function categorizeArticle(article) {
    const categories = ['Technology', 'Sports', 'Politics', 'Health', 'Entertainment'];
    for (const category of categories) {
        if (article.title.toLowerCase().includes(category.toLowerCase()) || 
            article.source.toLowerCase().includes(category.toLowerCase())) {
            return category;
        }
    }
    return 'General';
}

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const NEWS_DATA_FILE = path.join(__dirname, 'newsData.json');

// Route to fetch news data
app.get('/api/news', (req, res) => {
    try {
        const newsData = JSON.parse(fs.readFileSync(NEWS_DATA_FILE, 'utf-8'));
        res.json(newsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news data', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
