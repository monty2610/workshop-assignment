const { gql } = require("apollo-server");

const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    price: Float!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }

  input ProductInput {
    name: String!
    category: String!
    price: Float!
  }
`;

module.exports = productTypeDefs;
