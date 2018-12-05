import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import homeRoute from './routes/home';
import searchRoute from './routes/search';
import createRoute from './routes/create';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get('/', homeRoute);
app.get('/:search', searchRoute);
app.post('/', createRoute);

app.listen(process.env.PORT, () => console.log('Listening...'));

export default app;
