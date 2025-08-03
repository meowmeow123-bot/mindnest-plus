const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful customer support AI. Suggest products, answer questions, and help with purchases.' },
      { role: 'user', content: userMessage }
    ]
  });

  res.json({ reply: response.choices[0].message.content });
});

app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
