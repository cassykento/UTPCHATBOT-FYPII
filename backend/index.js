// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Chatbot backend is running ✅');
});

// Dialogflow webhook endpoint
app.post('/webhook', (req, res) => {
  const intent = req.body.queryResult?.intent?.displayName;
  console.log(`Received intent: ${intent}`);

  // Basic reply for now
  let reply = "Hello! I'm your UTP Chatbot. 😊";
  if (intent === 'greet') {
    reply = 'Hi there! How can I help you today?';
  }

  res.json({ fulfillmentText: reply });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
