import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import homeRoute from './routes/home';
import searchRoute from './routes/search';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get('/', homeRoute);
app.get('/:search', searchRoute);

app.listen(process.env.PORT, () => console.log('Listening...'));

export default app;
