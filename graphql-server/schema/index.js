const { gql } = require("apollo-server");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const customerTypeDefs = require("./customers");
const productTypeDefs = require("./products");
const OrderTypeDefs = require('./orders')

const userTypeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    registerUser(user: UserInput): User
    login(user: LoginInput): String
  }

  input UserInput {
    name: String
    age: Int
    password: String
    email: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type User {
    id: ID
    name: String
    email: String
    age: Int
  }
`;
const types = [userTypeDefs, customerTypeDefs, productTypeDefs, OrderTypeDefs];

module.exports = mergeTypeDefs(types, { all: true });
