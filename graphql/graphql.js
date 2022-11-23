import { graphqlHTTP } from 'express-graphql';
import rootValue from './rootValue.js';
import schema from './schema.js';
const graphiql = false;
export default graphqlHTTP({ schema, rootValue, graphiql })