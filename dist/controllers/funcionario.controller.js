import { FuncionarioRepository } from "../repositories/funcionario.repository.js";
import { StatusCodes } from "http-status-codes";
const funcionarioRep = new FuncionarioRepository();
export class FuncionarioController {
    async criarFuncionario(req, res) {
        const dados = req.body;
        const novoFuncionario = await funcionarioRep.criar(dados);
        res.status(StatusCodes.CREATED).json(novoFuncionario);
    }
    async listarFuncionarios(req, res) {
        const funcionarios = await funcionarioRep.buscarTodos();
        res.status(StatusCodes.OK).json(funcionarios);
    }
    async buscarFuncionarioPorId(req, res) {
        const { id } = req.params;
        const funcionario = await funcionarioRep.buscarPorId(id);
        if (!funcionario) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Funcionário não encontrado" });
        }
        res.status(StatusCodes.OK).json(funcionario);
    }
    async atualizarFuncionario(req, res) {
        const { id } = req.params;
        const dados = req.body;
        const funcionarioAtualizado = await funcionarioRep.atualizar(id, dados);
        if (!funcionarioAtualizado) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Funcionário não encontrado" });
        }
        res.status(StatusCodes.OK).json(funcionarioAtualizado);
    }
    async deletarFuncionario(req, res) {
        const { id } = req.params;
        const funcionarioDeletado = await funcionarioRep.deletar(id);
        if (!funcionarioDeletado) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "Funcionário não encontrado" });
        }
        res.sendStatus(StatusCodes.NO_CONTENT);
    }
}
