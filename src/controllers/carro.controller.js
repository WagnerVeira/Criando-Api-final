const carrosService = require('../services/carro.service');
const mongoose = require('mongoose');

const findAllCarrosController = async (req, res) => {
  const carros = await carrosService.findAllCarrosService();

  if (carros.length == 0) {
    return res.status(404).send({ message: 'Não existe carro cadastrado!' });
  }

  res.send(carros);
};

const findByIdCarroController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id não encontrado!' });
  }

  const chosenCarro = await carrosService.findByIdCarroService(idParam);

  if (!chosenCarro) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }

  res.send(chosenCarro);
};

const createCarroController = async (req, res) => {
  const carro = req.body;

  if (!carro || !carro.modelo || !carro.marca || !carro.ano || !carro.preco) {
    return res.status(400).send({ message: 'Envie os dados completos!' });
  }
  const newCarro = await carrosService.createCarroService(carro);
  res.status(201).send(newCarro);
};

const updateCarroController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id não encontrado!' });
  }

  const carroEdit = req.body;
  if (
    !carroEdit ||
    !carroEdit.modelo ||
    !carroEdit.marca ||
    !carroEdit.ano ||
    !carroEdit.preco
  ) {
    return res.status(400).send({ message: 'Envie os dados completos!' });
  }
  const updatedCarro = await carrosService.updateCarroService(
    idParam,
    carroEdit,
  );
  res.send(updatedCarro);
};

const deleteCarroController = async(req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id não encontrado!' });
  }
  await carrosService.deleteCarroService(idParam);
  if (!carrosService) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }

  res.send({ message: 'Carro deletado com sucesso!' });
};

module.exports = {
  findAllCarrosController,
  findByIdCarroController,
  createCarroController,
  updateCarroController,
  deleteCarroController,
};
