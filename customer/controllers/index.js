const Customer = require('../models');
const jwt = require('jsonwebtoken');
const createToken = async (customer) => {
    const {email, name} = customer;
    const token = await jwt.sign({email,name}, process.env.JWT_SECRET || 'secret_key');
    return token;
}
const createCustomer = async (req, res) => {
    const {name, email, password, address} = req.body;
    try {
       const newCustomer = new Customer({
           name,
           email,
           password,
           address
       })
       const customer = await newCustomer.save();
       res.status(201).send(customer);
    } catch (e) {
      console.error('---Error creating customer ----',e);
      res.status(500).send({message: 'Error creating new customer'});
    }
}

const fetchAllCustomers = async (req,res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).send(customer);
    } catch (e) {
    console.error('---Error fetching customer ----',e);
      res.status(500).send({message: 'Error fetching customer informations'});
    }
}

const fetchCustomerById = async (req,res) => {
    const id = req.params.id;
try {
        const customer = await Customer.findOne({_id: id});
        res.status(200).send(customer);
    } catch (e) {
    console.error('---Error fetching customer specific ----',e);
      res.status(500).send({message: 'Error fetching specific customer informations'});
    }
}
module.exports = {createCustomer,fetchAllCustomers,fetchCustomerById};
