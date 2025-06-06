const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true },
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema, "pessoas");

module.exports = Pessoa;
