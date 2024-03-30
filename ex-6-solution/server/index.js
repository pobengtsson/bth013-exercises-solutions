import express from 'express'
const app = express()
const PORT = 3000

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static('client/dist'));

// In-memory storage for simplicity
let storedText = '';

// POST endpoint to store text data
app.post('/api/store', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is empty or missing' });
    }
    // Check for "FAILURE" text to simulate a server-side error
    if (text === "FAILURE") {
        return res.status(503).send('Service Unavailable');
    }
    storedText = text;
    res.status(200).send('Text stored successfully');
});

// GET endpoint to retrieve stored text data
app.get('/api/retrieve', (req, res) => {
    if (!storedText) {
        return res.status(404).send('No text data found');
    }
    res.json({ text: storedText });
});

// Endpoint that always returns a 500 error for testing
app.get('/api/error', (req, res) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

// Redirect from old endpoint to new
app.get('/api/old-retrieve', (req, res) => {
    res.redirect(301, '/api/retrieve');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
