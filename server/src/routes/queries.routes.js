const express = require('express');
const queriesRoutes = express.Router();
const queriesController = require('../controllers/queries.controller');

queriesRoutes.get('/', queriesController.getAllQueries);
queriesRoutes.post('/', queriesController.createQuery);
queriesRoutes.patch('/:id', queriesController.editQuery);

module.exports = queriesRoutes;
