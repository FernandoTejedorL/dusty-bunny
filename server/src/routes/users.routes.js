const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/users.controller');

usersRoutes.get('/', usersController.getAllUsers);

module.exports = usersRoutes;
