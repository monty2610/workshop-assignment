const {gql} = require('apollo-server');

const customerTypeDefs = gql`
    type Query {
        customer: [Customer]
    }

    type Mutation {
        createCustomer(customer: CustomerInput): Customer,
    }

    input CustomerInput {
        name: String
        address: String
        password: String
        email: String
    }

    type Customer {
        id: ID
        name: String
        email: String
        address: String
    }
`;

module.exports = customerTypeDefs;
