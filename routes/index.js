
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
    //throw new Error (500);
    res.render('about');
    
});

/* GET project pages dynamically, based on id property. */
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
      // 2. Pass the project data to the 'project' pug template
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
  });

  module.exports = router;