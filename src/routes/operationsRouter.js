const express = require('express');
const router = express.Router();
const operationsController = require('../controllers/operationsControllers')

//Rutas para los últimos 10 registros
router.get('/', operationsController.home);
router.get('/create', operationsController.create);

// router.post('/update', operationsController.create);


module.exports = router;