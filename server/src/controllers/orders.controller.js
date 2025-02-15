const OrderModel = require('../models/Order.model');

const ordersController = {};

ordersController.getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find();
    console.log(allOrders);
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

ordersController.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

ordersController.getAllUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const allOrders = await OrderModel.find({ userId });
    console.log(allOrders);
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

ordersController.createOrder = async (req, res) => {
  const orderInfo = req.body;
  const newOrder = new OrderModel({ ...orderInfo });
  try {
    await newOrder.save();
    const allOrders = await OrderModel.find();
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

module.exports = ordersController;
