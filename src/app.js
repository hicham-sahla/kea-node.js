const express = require('express');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const emailRouter = require('./routes/email');
const articleRoute = require('./routes/article');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 hour
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));


app.use('/', authRoutes);
app.use('/article', articleRoute);
app.use(emailRouter);

app.use('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
