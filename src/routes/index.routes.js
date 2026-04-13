const express = require('express')
const router = express.Router();
const animaisRoutes = require('./animais.routes');
const tutoresRoutes = require('./tutores.routes');
const { autenticar, validarContentType} = require('../middlewares/main.middleware')

router.get('/', (req, res) => {
    res.json({sistema: 'Clínica Vterinária do Wellington', status: 'Online'})
});


router.use(autenticar);
router.use(validarContentType);


router.use('/animais', animaisRoutes);
router.use('/tutores', tutoresRoutes)



router.use((req, res) => {
    res
    .status(404)
    .json({erro: 'Rota não encontrada na Clínica.'})
})


module.exports = router;