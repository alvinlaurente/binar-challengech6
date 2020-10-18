const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/rockpaperscissor', (req, res) => {
  res.sendFile('./views/rockpaperscissor.html', { root: __dirname });
});
