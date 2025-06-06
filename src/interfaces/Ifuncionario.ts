import { Types } from "mongoose";

export interface Ifuncionario{
    nome: string;
    email: string;
    departamento: Types.ObjectId;
}