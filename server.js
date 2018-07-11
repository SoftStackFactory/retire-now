var express = require('express');
var path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "www")));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
