const CHAVE_ACESSO = 'clinica-veterinaria-wellington';

const autenticar = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      erro: 'Acesso negado. Crachá de identificação não encontrado.',
      dica: 'Envie o cabeçalho: Authorization: Bearer <chave>',
    });
  }

  const bearerMatch = authHeader.match(/^Bearer\s+(.+)$/i);

  if (!bearerMatch) {
    return res.status(401).json({
      erro: 'Formato de autenticação inválido.',
      dica: 'Use o formato: Authorization: Bearer <chave>',
    });
  }

  const token = bearerMatch[1].trim();

  if (!token || token !== CHAVE_ACESSO) {
    return res.status(403).json({
      erro: 'Acesso proibido. Crachá inválido ou vencido.',
    });
  }

  next();
};

module.exports = autenticar;