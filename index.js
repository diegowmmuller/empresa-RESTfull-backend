require("./db");
const pessoaRouter = require("./routes/users.routes");

const express = require("express");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/pessoas", pessoaRouter);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
