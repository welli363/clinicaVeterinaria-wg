const router = require('express').Router();
const animaisController = require('../controllers/animais.controller')

router.get('/', animaisController.listarAnimais);
router.get('/:id', animaisController.buscarAnimalPorId);
router.get('/', animaisController.criarAnimal);

module.exports = router;