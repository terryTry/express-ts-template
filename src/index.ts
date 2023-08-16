import express from 'express';

const app = express();
const port = 3000;

console.log('express-ts is now running!');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});