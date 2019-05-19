const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const routes = require('./routes/route');
const cors = require('./middlewares/cors');

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