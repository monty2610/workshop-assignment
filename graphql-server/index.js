require('dotenv').config();
const app = require('./app');

const port = 8080;

app.listen({port}).then(({url}) => {
    console.log(`Graphql server is running at url ${url}`);

})
