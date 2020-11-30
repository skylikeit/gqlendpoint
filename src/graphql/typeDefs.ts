import { gql } from 'apollo-server';

export default gql`
  type Counter {
    counter: Int
  }
  type WorkItem {
    id: Int
    title: String
    path: String
    pic: String
  }

  type User {
    id: ID!
    username: String!
    createdAt: String!
  }
  input SignUpInput {
    username: String!
    password: String!
  }
  input SignInInput {
    username: String!
    password: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }

  type Query {
    getCounter: Counter
    getWorkItem: [WorkItem]!

    user(username: String!): [User]!
    users: [User]!
    viewer: User
  }
  type Mutation {
    increaseCounter: Counter

    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
