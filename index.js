const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/trains')
app.use('/', routes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
