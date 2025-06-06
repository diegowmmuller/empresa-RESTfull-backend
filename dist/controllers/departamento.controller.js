import { DepartamentoRepository } from "../repositories/departamento.repository.js";
import { StatusCodes } from "http-status-codes";
const departamentoRep = new DepartamentoRepository();
export class DepartamentoController {
    async criarDepartamento(req, res) {
        const dados = req.body;
        console.log("Chamou criarDepartamento", req.body);
        try {
            const novoDepartamento = await departamentoRep.criar(dados);
            console.log("Departamento criado:", novoDepartamento);
            res.status(StatusCodes.CREATED).json(novoDepartamento);
        }
        catch (error) {
            console.error("Erro ao criar departamento:", error);
            throw error;
        }
    }
    async listarDepartamentos(req, res) {
        const departamentos = await departamentoRep.buscarTodos();
        res.status(StatusCodes.OK).json(departamentos);
    }
    async buscarDepartamentoPorId(req, res) {
        const { id } = req.params;
        const departamento = await departamentoRep.buscarPorId(id);
        if (!departamento) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Departamento não encontrado" });
        }
        res.status(StatusCodes.OK).json(departamento);
    }
    async atualizarDepartamento(req, res) {
        const { id } = req.params;
        const dados = req.body;
        const departamentoAtualizado = await departamentoRep.atualizar(id, dados);
        if (!departamentoAtualizado) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Departamento não encontrado" });
        }
        res.status(StatusCodes.OK).json(departamentoAtualizado);
    }
    async deletarDepartamento(req, res) {
        const { id } = req.params;
        const departamentoDeletado = await departamentoRep.deletar(id);
        if (!departamentoDeletado) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Departamento não encontrado" });
        }
        res.sendStatus(StatusCodes.NO_CONTENT);
    }
}
