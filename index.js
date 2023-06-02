const express = require('express');
const app = express();
const JSON = require('./data/trains.json');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(JSON);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
