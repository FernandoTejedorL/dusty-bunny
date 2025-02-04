const express = require('express');
const fluffsRoutes = express.Router();
const fluffsController = require('../controllers/fluffs.controller');

fluffsRoutes.get('/', fluffsController.getAllFluffs);

module.exports = fluffsRoutes;
