const express = require('express');

// CONTROLLERS
const userController = require('./controller/userController');
const plantController = require('./controller/plantController');


            //ROTAS
const routes = express.Router();

//ROTAS GET
routes.get('/login', userController.show)
routes.get('/listPlant', plantController.index)

//ROTAS POST
routes.post('/createUser', userController.store);
routes.post('/createPlant', plantController.store);

module.exports = routes;