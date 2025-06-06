import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectToDatabase() {
    const url = process.env.DB_URL;
    if (!url) {
        throw new Error("A variavel DB_URL não esta definida");
    }
    try {
        await mongoose.connect(url);
        console.log("✅ Conectado ao banco de dados.");
        return "success";
    }
    catch (err) {
        console.error("❌ Erro ao conectar ao banco de dados:", err);
        return "fail";
    }
}
