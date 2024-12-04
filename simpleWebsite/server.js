const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'ProjectBangkit')));

// Serve index.html on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ProjectBangkit', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});