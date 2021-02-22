// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


require("dotenv").config();
require("es6-promise").polyfill();
require("isomorphic-fetch");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const fs = require("fs");
const https = require("https");

const handleAuthorize = require("./routes/auth");
const handleOAuthCallback = require("./routes/callback");
const handleGraphQL = require("./routes/graphql");

const app = express();
app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(cookieParser());

app
  .get("/authorize", handleAuthorize)
  .get("/callback", handleOAuthCallback)
  .post("/graphql", handleGraphQL);

// Create https server while developing locally since redirect_uri
// for the app has to be https enabled. For e.g https://localhost:3000/callback
const serverApp = process.env.ENABLE_HTTPS
  ? https.createServer(
      {},
      app
    )
  : app;

serverApp.listen(process.env.PORT, function() {
  console.log(`API explorer app is listening on port ${process.env.PORT}`);
});