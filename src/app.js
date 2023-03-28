const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const session = require('express-session');
module.exports.isLoggedIn = isLoggedIn;
const { articles } = require('./routes/article');
const emailRouter = require('./routes/email');


app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 hour
}));

const userEmail = 'admin@admin.com';
const userPassword = 'admin';

function isLoggedIn(req, res, next) {
  if (req.session.isLoggedIn) {
    return next();
  }
  res.redirect('/login');
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', isLoggedIn, (req, res) => {
  res.render('index', { articles });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === userEmail && password === userPassword) {
    req.session.isLoggedIn = true;
    return res.redirect('/');
  }
  res.status(401).render('login', { error: 'Invalid email or password' });
});

const articleRoute = require('./routes/article');
app.use('/article', articleRoute);

app.use(emailRouter);


app.get('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect('/login');
});

// Catch 404 and redirect to home
app.use('*', (req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
