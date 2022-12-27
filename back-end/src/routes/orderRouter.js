const { Router } = require('express');

const orderController = require('../controllers/orderController');

const router = Router();

router.get('/', orderController.list);

module.exports = router;