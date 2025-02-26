const QueryModel = require('../models/Query.model');

const queriesController = {};

queriesController.getAllQueries = async (req, res) => {
  try {
    const allQueries = await QueryModel.find();
    return res.status(200).json(allQueries);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

queriesController.createQuery = async (req, res) => {
  const queryInfo = req.body;
  const newQuery = new QueryModel({ ...queryInfo });
  try {
    await newQuery.save();
    const allQueries = await QueryModel.find();
    return res.status(200).json(allQueries);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error reading/writing database' + error });
  }
};

module.exports = queriesController;
