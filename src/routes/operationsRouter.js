const express = require('express');
const router = express.Router();
const operationsController = require('../controllers/operationsControllers')

//Rutas para los últimos 10 registros
router.get('/', operationsController.home);
router.post('/newOperation', operationsController.create);
router.get('/:id', operationsController.operation)
router.put('/edit/:id', operationsController.edit);
router.delete('/:id', operationsController.delete);


module.exports = router;