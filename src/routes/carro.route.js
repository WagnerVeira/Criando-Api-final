const route = require('express').Router();
const controllerCarros = require('../controllers/carro.controller');

route.get('/todos-carros', controllerCarros.findAllCarrosController);
route.get('/carro/:id', controllerCarros.findByIdCarroController);
route.post('/create', controllerCarros.createCarroController);
route.put('/update/:id', controllerCarros.updateCarroController);
route.delete('/delete/:id', controllerCarros.deleteCarroController);

module.exports = route;
