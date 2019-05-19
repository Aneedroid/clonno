const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const routes = require('./routes/route');
// const addInfo = require('./middlewares/add-info');
const cors = require('./middlewares/cors');

// app.use(addInfo);
// Have not used this to pass config to react yet.
// Just an example for a middleware.

app.use(cors);

app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html',
}));

app.set('view engine', '.html');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);

app.get('/overview', (req, res) => {
  return res.render('home');
});

module.exports = app;