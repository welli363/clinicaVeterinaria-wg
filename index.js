const express = require('express');
const routes = require('./src/routes/index.routes');
const { logger, errorHandler } = require('./src/middlewares/main.middleware');

const app = express();

// Normaliza URLs com espaços codificados no final, como /animais%20
const normalizeUrl = (req, res, next) => {
  const [pathname, search = ''] = req.originalUrl.split('?');
  const normalizedPath = pathname.replace(/(?:%20)+$/g, '').replace(/\s+$/g, '');

  if (normalizedPath !== pathname) {
    const redirectUrl = normalizedPath + (search ? `?${search}` : '');
    return res.redirect(301, redirectUrl);
  }

  next();
};

// Middlewares de Infraestrutura (Rodam sempre, até para rotas que não existem)
app.use(normalizeUrl);
app.use(express.json());
app.use(logger);

// Aciona o Roteador (que já vem com Auth e Content-Type embutidos)
app.use(routes);

// O Handler de Erros deve ser o último de tudo
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR] Clinica Veterinária operando em http://localhost:${PORT}`);
});