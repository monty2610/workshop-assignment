const {createOrder,fetchAllOrders} = require('../orders')

const OrderResolvers = {
    Query: {
        orders: (parent, args, context) => {
          const orders =   fetchAllOrders();
          return orders;
        }
    },
    Mutation: {
        createOrder: async (parent, args) => {
            const order = await createOrder(args.order);
            return order;
        }
    },

}

module.exports = OrderResolvers;
