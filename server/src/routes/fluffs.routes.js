const express = require('express');
const fluffsRoutes = express.Router();
const fluffsController = require('../controllers/fluffs.controller');

fluffsRoutes.get('/', fluffsController.getAllProducts);
fluffsRoutes.get('/:id', fluffsController.getProductsById);
fluffsRoutes.get('/size/:size', fluffsController.getProductsBySize);
fluffsRoutes.get('/diet/:diet', fluffsController.getProductsByDiet);
fluffsRoutes.get('/category/:category', fluffsController.getProductsByCategory);
fluffsRoutes.get('/vendor/:vendor', fluffsController.getProductsByVendor);
fluffsRoutes.get('/price/:end', fluffsController.getProductsByPrice);
fluffsRoutes.post('/', fluffsController.createProduct);
fluffsRoutes.patch('/:id', fluffsController.updateProduct);
fluffsRoutes.delete('/:id', fluffsController.deleteProduct);
fluffsRoutes.post('/many', fluffsController.createManyProducts);
fluffsRoutes.delete('/many/:price', fluffsController.deleteManyProducts);

module.exports = fluffsRoutes;
