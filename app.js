/**
 * Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
 * Tamika Hayes
 * May 11, 2021
 * app.js
 */


'use strict';

const express = require('express');
const path = require('path');
const { projects } = require('./data.json');

const indexRouter = require('./routes/index');

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Add static middleware
app.use( '/static', express.static('public'));
app.use('/', indexRouter);

/* ERROR HANDLERS */

// 404 handler to catch undefined or nonexistent route requests
app.use((req, res, next) => {
    //const err = new Error();
    //err.status = 404;
    console.log (`Blimey! Looks like you've encountered an error. Status: ${err.status}`);
    //err.message = `Blimey! Looks like you've encountered an error. Page not found: `;
    //console.log (err.message `${err.status}`);
    res.status(404).render('page-not-found');
});
  
// Global error handler
app.use((err, req, res, next) => {

    if (err) {
        console.log('Fiddlesticks! Something went wrong.');
    }
    //handle errors caught by route handlers
    if (err.status === 404) {
        res.status(404).render('page-not-found', { err });
    } else {
        const err = new Error();
        err.status = 500;
        err.message = err.message || `Oh snap! Looks like something went wrong on the server. Status: ${err.status}`;
        console.log(err.message, err);
        res.status(err.status || 500).render('error', { err });
    }
});

app.listen(3000, () => console.log('Portfolio app is listening on port 3000.'))

module.exports = app;