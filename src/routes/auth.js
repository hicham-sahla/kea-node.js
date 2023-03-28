const express = require('express');
const router = express.Router();
const { articles } = require('./article');

const userEmail = 'admin@admin.com';
const userPassword = 'admin';

router.get('/', (req, res) => {
  res.render('index', { articles });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === userEmail && password === userPassword) {
    req.session.isLoggedIn = true;
    return res.redirect('/');
  }
  res.status(401).render('login', { error: 'Invalid email or password' });
});

router.get('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect('/login');
});

module.exports = router;
