const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  console.log('Received data:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
