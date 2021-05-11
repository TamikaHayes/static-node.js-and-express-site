
'use strict';

const express = require('express');
const path = require('path');
const { projects } = require('./data.json');


const app = express();

//view engine setup
app.set('view engine', 'pug');

app.use(express.json());

//Add static middleware
app.use( '/static', express.static(path.join(__dirname, 'public')) );


app.get('/', (req, res) => {
    res.send('Successful response.');
    //console.log( { projects } );
});

app.listen(3000, () => console.log('Portfolio app is listening on port 3000.'))

