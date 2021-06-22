const express = require('express');

const app = express();

app.get('/', (reg, res) => {
  res.send('How are you doing?');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
