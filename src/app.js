import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
const data = require('./data/data');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(process.env.PORT, () => console.log('Listening...'));

export default app;
