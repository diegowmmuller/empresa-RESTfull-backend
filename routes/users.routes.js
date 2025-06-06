const express = require("express");
const Pessoa = require("../models/Pessoa");

const router = express.Router();

router.post("/cadastro", async (req, res) => {
  try {
    const { nome, idade, email } = req.body;

    const novaPessoa = new Pessoa({ nome, idade, email });
    await novaPessoa.save();

    res.status(201).json(novaPessoa);
  } catch (err) {
    console.error("Erro ao cadastrar a pessoa", err);
    res.status(500).json({ erro: "Erro ao cadastrar pessoa" });
  }
});

router.get("/", async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    console.log(pessoas);
    res.status(200).json(pessoas);
  } catch (err) {
    res.status(500).json({ erro: "Não foi possível encontrar ninguém" });
  }
});

module.exports = router;
