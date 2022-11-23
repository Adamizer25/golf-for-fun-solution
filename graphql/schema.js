import { buildSchema } from 'graphql';

export default buildSchema(`
type Query {
  ip: String
}

type Mutation {
  sign(email: String!, password: String!): String
}
`);
