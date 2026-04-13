const logger = require('./logger.middleware');
const autenticar = require('./auth.middlesware');
const errorHandler = require('./errorHandle.middleware');
const validarContentType = require('./contentType.middleware');

module.exports = {
  logger,
  autenticar,
  errorHandler,
  validarContentType
};