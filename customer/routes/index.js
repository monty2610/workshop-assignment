const express = require('express');
const {createCustomer,fetchAllCustomers,fetchCustomerById} = require('../controllers');
const router = express.Router();

router.post('/customers', createCustomer);
router.get('/customers', fetchAllCustomers);
router.get('/customers/:id', fetchCustomerById);

module.exports = router;
