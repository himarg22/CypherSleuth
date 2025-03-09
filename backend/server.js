const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request body

// Route for URL Classification
app.post('/api/classify-url', async (req, res) => {
  const { url } = req.body;
  const apiKey = process.env.IPQUALITYSCORE_API_KEY; // Load API key from .env
  const apiUrl = `https://ipqualityscore.com/api/json/url/${apiKey}/${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl, { method: 'GET' });
    const data = await response.json();

    if (!data.success) {
      throw new Error('API request failed: ' + data.message);
    }

    // Determine classification based on API response
    let classification = 'Safe';
    if (data.unsafe) {
      classification = 'Malicious';
    } else if (data.phishing) {
      classification = 'Phishing';
    } else if (data.spamming) {
      classification = 'Spam';
    }

    res.json({ classification });
  } catch (error) {
    console.error('Error classifying URL:', error);
    res.status(500).json({ error: 'Failed to classify URL' });
  }
});

// Start the Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
