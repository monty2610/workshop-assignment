const { registerUser, fetchUsers, login } = require("../users");
const customerResolvers = require("./customers");
const productResolvers = require("./products");

const userResolvers = {
  Query: {
    users: (parent, args, context) => {
      const { me } = context;
      console.log("---me----", me);

      const users = fetchUsers();
      return users;
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      const user = await registerUser(args.user);
      return user;
    },
    login: async (parent, args) => {
      const token = await login(args.user);
      return token;
    },
  },
};
const resolvers = {
  ...userResolvers,
  ...customerResolvers,
  ...productResolvers,
};
module.exports = resolvers;
