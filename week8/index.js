import express from 'express';
import {booksRouter} from './books.js';
const app = express();

app.use(express.json()); 


app.use('/api', booksRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
