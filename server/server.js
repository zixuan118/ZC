const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '../.env' }); // 确保路径正确

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(bodyParser.json());

const openaiApiKey = process.env.OPENAI_API_KEY;
console.log('OpenAI API Key:', openaiApiKey);  // 打印密钥以确认正确读取

app.post('/api/ask', async (req, res) => {
    const { messages } = req.body;
    try {
        console.log('Received messages:', messages);
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o',
                messages: messages,
                max_tokens: 500,
            },
            {
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('API Response:', response.data);
        res.json({ response: response.data.choices[0].message.content.trim() });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
