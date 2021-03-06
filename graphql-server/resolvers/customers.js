const {createCustomer, fetchCustomers} = require('../customers')

const customerResolvers = {
    Query: {
        customers: (parent, args, context) => {
          const customers =   fetchCustomers();
          return customers;
        }
    },
    Mutation: {
        createCustomer: async (parent, args) => {
            const customer = await createCustomer(args.customer);
            return customer;
        }
    },

}

module.exports = customerResolvers;
