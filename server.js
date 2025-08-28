const express = require('express');
const app = express();

// Example root route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Ensure the server uses the port provided by Render (or default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
