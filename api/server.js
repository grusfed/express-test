const express =  require('express');
const app = express();
const path = require('path');
const bodyParser =  require('body-parser');
const cookieParser =  require('cookie-parser');
const morgan = require('morgan');
const _ = require('lodash');
const projectConfig = require('../package.json');
const PORT = process.env.PORT || projectConfig.config.apiPort;
const catsRouter = require('./modules/cats/catsRoutes');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.use('/api/v1/cats', catsRouter);

var loggError = function (err, res) {
  res.status(500).send(err);
};

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    loggError((err, res));
  }
});

app.listen(PORT, function() {
  console.log("Node app is running at localhost:" + PORT);
});

// export the app for testing
// then in another file, require the app and start the server
module.exports = app;
