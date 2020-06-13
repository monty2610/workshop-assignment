const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3100/'
})

const createCustomer = async (customer) => {
    try {
        const {data} = await instance.post('/customers',{
            name: customer.name,
            address: customer.address,
            email: customer.email,
            password: customer.password
        })
        return data;
    } catch (e) {
        console.error('---error creating customer--',e);
      throw e;
    }
}

const fetchCustomers = async () => {
  try {
      const {data} = await instance.get('/customers');
      return data;
  } catch (e) {
  console.error('---error fetching customers--',e);
        throw e;
  }
}

module.exports = {createCustomer, fetchCustomers};
