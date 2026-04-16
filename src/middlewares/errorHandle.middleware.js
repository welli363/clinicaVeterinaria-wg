const errorHandler = (err, req, res, next) => {
    // Trata erro de JSON inválido gerado pelo express.json()
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error(`[ERRO] ${req.method} ${req.url}: JSON inválido`, err.message);
      return res.status(400).json({
        erro: 'JSON inválido no corpo da requisição.',
        detalhe: err.message,
        caminho: req.url,
      });
    }
  
    // Loga o erro completo no servidor (útil para debug)
    console.error(`[ERRO] ${req.method} ${req.url}:`, err.message);
  
    const status = err.status || 500;
  
    // NUNCA envie err.stack para o cliente em produção.
    res.status(status).json({
      erro: err.message || 'Erro interno na Clínica Veterinária.',
      caminho: req.url,
    });
  };
  
  module.exports = errorHandler;