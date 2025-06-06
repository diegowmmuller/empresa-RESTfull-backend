import { Request, Response } from "express";
import { DepartamentoRepository } from "../repositories/departamento.repository.js";
import { StatusCodes } from "http-status-codes";

const departamentoRep = new DepartamentoRepository();

export class DepartamentoController {
	async criarDepartamento(req: Request, res: Response) {
		const dados = req.body;
		console.log("Chamou criarDepartamento", req.body);
		const novoDepartamento = await departamentoRep.criar(dados);
		console.log("Departamento criado:", novoDepartamento);
		res.status(StatusCodes.CREATED).json(novoDepartamento);
	}

	async listarDepartamentos(req: Request, res: Response) {
		const departamentos = await departamentoRep.buscarTodos();
		res.status(StatusCodes.OK).json(departamentos);
	}

	async buscarDepartamentoPorId(req: Request, res: Response) {
		const { id } = req.params;
		const departamento = await departamentoRep.buscarPorId(id);
		if (!departamento) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ error: "Departamento não encontrado" });
		}
		res.status(StatusCodes.OK).json(departamento);
	}

	async atualizarDepartamento(req: Request, res: Response) {
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

	async deletarDepartamento(req: Request, res: Response) {
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
