const express = require('express');
const bodyParser = require('body-parser');

const routerApi = require('./routes');
const config = require('./config');
const { errorHandler } = require('./middlewares/error.handler');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

routerApi( app );

app.use( errorHandler );

app.listen(config.port, () => {
  console.log(`App listening in ${config.port}`);
});