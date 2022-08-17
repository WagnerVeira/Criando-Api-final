const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/carros-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar ao MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
