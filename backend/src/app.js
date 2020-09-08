import express from 'express';
import cors from 'cors';
import router from './api/router';
import { config } from '../config/config';
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString, { useNewUrlParser: true });

app.use(cors());

app.use(bodyParser.json());

// Use router app
app.use('/api', router);

export default app;