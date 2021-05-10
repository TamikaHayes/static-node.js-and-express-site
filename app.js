
'use strict';

const express = require('express');
const app = express();

//const { recipes } = require('./data.json');

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => console.log('Portfolio app is listening on port 3000.'))

