const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
