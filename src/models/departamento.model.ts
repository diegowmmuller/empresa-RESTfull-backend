import { Schema, model } from "mongoose";
import { Idepartamento } from "../interfaces/Idepartamento";

const DepartamentoSchema = new Schema<Idepartamento>({
	nome: { type: String, required: true },
	endereco: { type: String, required: true },
});

export const DepartamentoModel = model<Idepartamento>(
	"Departamento",
	DepartamentoSchema,
	"Departamentos"
);
