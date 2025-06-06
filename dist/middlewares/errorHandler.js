export function errorHandler(err, req, res, next) {
    console.error("ERRO CAPTURADO NO MIDDLEWARE GLOBAL:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
}
