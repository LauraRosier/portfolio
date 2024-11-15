import "dotenv/config";
import express from "express";
import session from 'express-session';


import {router} from "./app/router.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: true, 
  saveUninitialized: true, 
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 
  }
}));

app.use((req, res, next) => {
  if(typeof req.session.fav === 'undefined') {
    req.session.fav = [];
  }
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get('*', (req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});