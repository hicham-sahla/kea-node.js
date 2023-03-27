const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'your-secret-key', // is unsafe, will be moved to .env file in the future!
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 hour
}));

const userEmail = 'user@example.com';
const userPassword = 'password';

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
  res.render('index');
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

app.get('/articles/:slug', isLoggedIn, (req, res) => {
  res.render('pages/article', { slug: req.params.slug });
});

app.get('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect('/login');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
