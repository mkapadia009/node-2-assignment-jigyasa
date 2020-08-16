const express = require('express');
const app = express();

const port = require('./config/keys').PORT;
const init = require('./services/server').createServer

const ejs = require('ejs');

const categoryRouter = require('./routes/category');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', categoryRouter);
app.listen(port, init);

