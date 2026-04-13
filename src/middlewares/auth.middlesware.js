const CHAVE_ACESSO = 'clinica-veterinaria-wellington';

const autenticar = (req, res, next) => {

  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      erro: 'Acesso negado. Crachá de identificação não encontrado.',
      dica: 'Envie o cabeçalho: Authorization: Bearer <chave>',
    });
  }

  // Extrai apenas o token (remove o prefixo 'Bearer ')
  const token = authHeader.split(' ')[1];

  if (token !== CHAVE_ACESSO) {
    return res.status(403).json({
      erro: 'Acesso proibido. Crachá inválido ou vencido.',
    });
  }

  // Token válido — libera a passagem para o próximo posto
  next();
};

module.exports = autenticar;