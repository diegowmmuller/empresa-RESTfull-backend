import { Router } from "express";
import { FuncionarioController } from "../controllers/funcionario.controller.js";
import { handler } from "../middlewares/handler.js";

const router = Router();

const controller = new FuncionarioController();

router.post("/", handler(controller, "criarFuncionario"));
router.get("/", handler(controller, "listarFuncionarios"));
router.get("/:id", handler(controller, "buscarFuncionarioPorId"));
router.put("/:id", handler(controller, "atualizarFuncionario"));
router.delete("/:id", handler(controller, "deletarFuncionario"));

export default router;
