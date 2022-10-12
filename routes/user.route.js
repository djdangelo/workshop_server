const { Router } = require('express');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/', userController.createUser);
route.get('/', userController.listUser);
route.put('/:id', userController.updateUser);
route.delete('/:id', userController.deleteUser);
route.get('/:id', userController.oneUser);

module.exports = route;