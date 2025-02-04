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

usersController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

usersController.createUser = async (req, res) => {
  const userInfo = req.body;
  const newUser = new UserModel({ ...userInfo });
  try {
    await newUser.save();
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

usersController.editUser = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  try {
    const userToUpdate = await UserModel.findById(id);
    if (!userToUpdate) {
      return res.status(404).json({ error: 'User not found' });
    }
    await UserModel.updateOne({ _id: id }, { $set: { ...newInfo } });
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userToDelete = UserModel.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ error: 'User not found' });
    }
    await UserModel.deleteOne({ _id: id });
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: 'Error writing database' + error });
  }
};

module.exports = usersController;
