import { DepartamentoModel } from "../models/departamento.model.js";
import { Idepartamento } from "../interfaces/Idepartamento";

export class DepartamentoRepository {
	async criar(dados: Idepartamento) {
		return DepartamentoModel.create(dados);
	}

	async buscarTodos() {
		return DepartamentoModel.find();
	}

	async buscarPorId(id: string) {
		return DepartamentoModel.findById(id);
	}

	async atualizar(id: string, dados: Partial<Idepartamento>) {
		return DepartamentoModel.findByIdAndUpdate(id, dados, { new: true });
	}

	async deletar(id: string) {
		return DepartamentoModel.findByIdAndDelete(id);
	}
}
