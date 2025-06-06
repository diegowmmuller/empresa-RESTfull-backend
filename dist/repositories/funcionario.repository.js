import { FuncionarioModel } from "../models/funcionario.model.js";
export class FuncionarioRepository {
    async criar(dados) {
        return FuncionarioModel.create(dados);
    }
    async buscarTodos() {
        return FuncionarioModel.find();
    }
    async buscarPorId(id) {
        return FuncionarioModel.findById(id);
    }
    async atualizar(id, dados) {
        return FuncionarioModel.findByIdAndUpdate(id, dados, { new: true });
    }
    async deletar(id) {
        return FuncionarioModel.findByIdAndDelete(id);
    }
}
