import { connectToDatabase } from "./db.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

async function main() {
	await connectToDatabase();
	app.listen(port, () => {
		console.log(`Servidor rodando na porta ${port}`);
	});
}

main();
