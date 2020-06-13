const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3300/'
})

const createOrder = async (order) => {
    try {
        const {data} = await instance.post('/orders',{
            customerId: order.customerId,
            totalOrderValue: order.totalOrderValue,
            shippingAddress: order.shippingAddress,
            paymentMethod: order.paymentMethod,
            products: order.products
        })
        return data;
    } catch (e) {
        console.error('---error order order--',e);
      throw e;
    }
}

const fetchAllOrders = async () => {
  try {
      const {data} = await instance.get('/orders');
      return data;
  } catch (e) {
  console.error('---error fetching orders--',e);
        throw e;
  }
}

module.exports = {createOrder, fetchAllOrders};
