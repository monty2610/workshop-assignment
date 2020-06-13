const {ApolloServer} = require('apollo-server');
const { mergeSchemas} = require('graphql-tools');
const typeDefs = require('./schema');
const customerTypeDefs = require('./schema/customers')

const resolvers = require('./resolvers');
const customerResolvers = require('./resolvers/customers')
const jwt = require('jsonwebtoken');

const getLoggedInUser = (req) => {
    const token = req.headers['x-auth-token'];
    if (token) {
        try{
            return jwt.verify(token, process.env.JWT_SECRET);
        }catch(e){
            throw new Error('Invalid token');
        }
    }
}

const schema = mergeSchemas({
    schemas: [typeDefs, customerTypeDefs],
});
const mergedResolvers = {
    ...resolvers,
    ...customerResolvers
}
const server = new ApolloServer({
    schemas,
    mergedResolvers,
    context: async ({req}) => ({
        me: getLoggedInUser(req)
    })
})

module.exports = server;
