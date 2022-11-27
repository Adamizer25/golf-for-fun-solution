import { buildSchema } from 'graphql';

export default buildSchema(`

type User {
  id: String!
  firstName: String
  lastName: String
  age: Int
  email: String
  cell: String
}

input UserInput {
  id: String!
  firstName: String
  lastName: String
  age: Int
  email: String
  cell: String
}

type Query {
  ip: String
  user(id: String!): User
  users: [User]
}

type Mutation {
  createUser(input: UserInput!): User
  deleteUser(id: String!): String
}
`);
