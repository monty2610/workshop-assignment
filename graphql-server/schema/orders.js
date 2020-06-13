const {gql} = require('apollo-server');

const OrderTypeDefs = gql`
    type Query {
        orders: [Order]
    }

    type Mutation {
        createOrder(order: OrderInput): Order,
    }

    input OrderInput {
        customerId: String
        shippingAddress: String
        paymentMethod: String
        products: [orderProductInput]
    }

    input orderProductInput {
        productId: String
        quantity: Int
    }

    type Order {
        id: ID
        customerId: String
        totalOrderValue: Float
        shippingAddress: String
        paymentMethod: String
        products: [String]
    }
`;

module.exports = OrderTypeDefs;
