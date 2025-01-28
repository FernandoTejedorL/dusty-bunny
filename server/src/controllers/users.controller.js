const path = require('path');
const fs = require('fs');
const pathFile = path.resolve(__dirname, '../../data/users.json');
const usersController = {};

usersController.getAllUsers = (req, res) => {
  fs.readFile(pathFile, (error, data) => {
    if (error) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    const jsonData = JSON.parse(data);
    return res.status(200).json(jsonData);
  });
};

module.exports = usersController;
