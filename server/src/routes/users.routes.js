const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.get('/:id', usersController.getUserById);
usersRoutes.post('/', usersController.createUser);
usersRoutes.patch('/:id', usersController.editUser);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;
