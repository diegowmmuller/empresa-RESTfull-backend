import { DepartamentoModel } from "../models/departamento.model.js";
export class DepartamentoRepository {
    async criar(dados) {
        return DepartamentoModel.create(dados);
    }
    async buscarTodos() {
        return DepartamentoModel.find();
    }
    async buscarPorId(id) {
        return DepartamentoModel.findById(id);
    }
    async atualizar(id, dados) {
        return DepartamentoModel.findByIdAndUpdate(id, dados, { new: true });
    }
    async deletar(id) {
        return DepartamentoModel.findByIdAndDelete(id);
    }
}
