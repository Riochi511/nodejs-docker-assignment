const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from riochi511 Node.js app running in Docker on AWS!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
