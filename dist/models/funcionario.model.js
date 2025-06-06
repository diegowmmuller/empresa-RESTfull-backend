import { Schema, model } from "mongoose";
const FuncionarioSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    departamento: {
        type: Schema.Types.ObjectId,
        ref: "Departamento",
        required: true,
    },
});
export const FuncionarioModel = model("Funcionario", FuncionarioSchema, "Funcionarios");
