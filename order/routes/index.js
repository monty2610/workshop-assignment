const express = require('express');
const {createOrder,fetchAllOrders,fetchOrderById} = require('../controllers');
const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', fetchAllOrders);
router.get('/order/:id', fetchOrderById);

module.exports = router;
