import { Ifuncionario } from "../interfaces/Ifuncionario";
import { FuncionarioModel } from "../models/funcionario.model.js";

export class FuncionarioRepository {
	async criar(dados: Ifuncionario) {
		return FuncionarioModel.create(dados);
	}

	async buscarTodos() {
		return FuncionarioModel.find();
	}

	async buscarPorId(id: string) {
		return FuncionarioModel.findById(id);
	}

	async atualizar(id: string, dados: Partial<Ifuncionario>) {
		return FuncionarioModel.findByIdAndUpdate(id, dados, { new: true });
	}

	async deletar(id: string) {
		return FuncionarioModel.findByIdAndDelete(id);
	}
}
