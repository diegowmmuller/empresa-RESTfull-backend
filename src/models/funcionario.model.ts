import { Schema, model, Types } from "mongoose";
import { Ifuncionario } from "../interfaces/Ifuncionario";

const FuncionarioSchema = new Schema<Ifuncionario>({
	nome: { type: String, required: true },
	email: { type: String, required: true },
	departamento: {
		type: Schema.Types.ObjectId,
		ref: "Departamento",
		required: true,
	},
});

export const FuncionarioModel = model<Ifuncionario>(
	"Funcionario",
	FuncionarioSchema,
	"Funcionarios"
);
