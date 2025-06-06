const mongoose = require("mongoose");
require("dotenv").config();

const password = process.env.PASSWORD;
const url = process.env.DB_URL.replace("<db_password>", password);

mongoose
  .connect(url)
  .then(() => {
    console.log("DB Conectado");
  })
  .catch(() => {
    console.log("Erro ao conectar com o database");
  });

module.exports = mongoose;
