

const Carro = require('../models/Carros');
const Carros = require('../models/Carros')

const findAllCarrosService = async () => {
  const carros = await Carros.find();
  return carros;
};



const findByIdCarroService = async (idParam) => {
  const carro = await Carros.findById(idParam)
  return carro;
};

const createCarroService = async (newCarro) => {
  const carroCreated = await Carros.create(newCarro) 
  return carroCreated ;
};

const updateCarroService = async (id, carroEdited) => {
  const carroUpdate = await Carros.findByIdAndUpdate(id, carroEdited)
  return carroUpdate;
};

const deleteCarroService = async (id) => {
 return await Carros.findByIdAndDelete(id);
};

module.exports = {
  findAllCarrosService,
  findByIdCarroService,
  createCarroService,
  updateCarroService,
  deleteCarroService,
};
