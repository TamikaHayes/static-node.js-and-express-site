/**
 * Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
 * Tamika Hayes
 * May 11, 2021
 * index.js
 */


'use strict';

const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    //Pass all project data to 'index' pug template
    res.render('index', { projects });
});

/* GET about page. */
router.get('/about', (req, res) => {
    //Pass all personal data to 'about' pug template
    res.render('about');
    
});

/*GET generated error route - create and throw 500 error*/
router.get('/error', (req, res, next) => {

  // Log out custom error handler indication
  //console.log('Uh-oh. Looks like something went wrong with the server.');
  
  const err = new Error();
  err.status = 500;
  err.message = `Uh-oh. Looks like trouble with the server. Status: ${err.status}`;
  throw err;
});


/* GET project pages dynamically, based on id property. */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    //check to see if requested project page exists
    if (project) {
      // if true, pass the project data to the 'project' pug template
      res.render('project', { project });
    } else {
      const err = new Error();
      err.status = 404;
      err.message = `Looks like the page you requested doesn't exist. Status: ${err.status}`;
      next(err);
      
    }
  });

  module.exports = router;