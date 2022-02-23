const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.users);
router.post('/register', userControllers.register);
router.get('/:id', userControllers.user);
router.put('/edit/:id', userControllers.edit);
router.delete('/:id', userControllers.delete)




module.exports = router;