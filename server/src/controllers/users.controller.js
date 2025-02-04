const UserModel = require('../models/User.model');
const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    console.log(allUsers);
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

module.exports = usersController;
