import express from "express";
import funcionarioRoutes from "./routes/funcionario.routes.js";
import departamentoRoutes from "./routes/departamento.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/funcionarios", funcionarioRoutes);
app.use("/departamentos", departamentoRoutes);

app.use(errorHandler);

export default app;
