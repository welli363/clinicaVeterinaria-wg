const express = require('express');
const router = express.Router();
const animaisController = require('../controllers/animais.controller');

router.get('/', animaisController.listarAnimais);
router.get('/:id', animaisController.buscarAnimalPorId);
router.post('/', animaisController.criarAnimal);

module.exports = router;