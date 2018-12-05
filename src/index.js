import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/', (req, res) => res.json({}));

app.listen(process.env.PORT, () => console.log('Listening...'));
