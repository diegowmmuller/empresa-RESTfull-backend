import { Schema, model } from "mongoose";
const DepartamentoSchema = new Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
});
export const DepartamentoModel = model("Departamento", DepartamentoSchema, "Departamentos");
