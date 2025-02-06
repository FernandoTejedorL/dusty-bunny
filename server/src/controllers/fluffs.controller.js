const ProductModel = require('../models/product.model');
const fluffsController = {};

fluffsController.getAllProducts = async (req, res) => {
  try {
    const allFluffs = await ProductModel.find();
    return res.status(200).json(allFluffs);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Fluff not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsBySize = async (req, res) => {
  const { size } = req.params;
  try {
    const product = await ProductModel.find({ size: { $eq: size } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsByDiet = async (req, res) => {
  const { diet } = req.params;
  try {
    const product = await ProductModel.find({ diet: { $eq: diet } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const product = await ProductModel.find({ category: { $eq: category } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsByVendor = async (req, res) => {
  const { vendor } = req.params;
  try {
    const product = await ProductModel.find({ vendor: { $eq: vendor } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.getProductsByPrice = async (req, res) => {
  const { start, end } = req.params;
  try {
    const product = await ProductModel.find({
      price: { $gte: start, $lte: end },
    });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

fluffsController.createProduct = async (req, res) => {
  const productInfo = req.body;
  const newProduct = new ProductModel({ ...productInfo });
  try {
    await newProduct.save();
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error reading/writing database' + error });
  }
};

fluffsController.createManyProducts = async (req, res) => {
  const productInfo = req.body;
  try {
    await ProductModel.insertMany(productInfo);
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

fluffsController.updateProduct = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  try {
    const productToUpdate = await ProductModel.findById(id);
    if (!productToUpdate) {
      return res.status(404).json({ error: 'Fluff not found' });
    }
    await ProductModel.updateOne({ _id: id }, { $set: { ...newInfo } });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

fluffsController.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productToDelete = ProductModel.findById(id);
    if (!productToDelete) {
      return res.status(404).json({ error: 'Fluff not found' });
    }
    await ProductModel.deleteOne({ _id: id });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

fluffsController.deleteManyProducts = async (req, res) => {
  const { price } = req.params;
  try {
    const toDelete = ProductModel.find({ price: { $lt: price } });
    if (!toDelete) {
      return res.status(404).json({ error: 'Fluffs not found' });
    }
    await ProductModel.deleteMany({ price: { $lt: price } });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

module.exports = fluffsController;
