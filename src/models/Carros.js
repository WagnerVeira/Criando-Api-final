const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require:true,
    },
    marca: {
        type: String,
        require:true,
    },
    ano: {
        type: String,
        require:true,
    },
    preco: {
        type: Number,
        require:true,
    },
});

const Carro = mongoose.model('carros', CarroSchema);

module.exports = Carro;
