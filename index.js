const express = require('express');
// const logger = require('morgan');

const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));


app.use(methodOverride('_method'));

app.use(session({
  secret: 'falafel waffle',
  resave: false,
  saveUninitialized: true
}));

app.use(require('./resources'));

app.listen(3000);
