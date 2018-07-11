'use strict';

const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'www')));

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
