import { gql } from 'apollo-server';

export default gql`
  type Counter {
    counter: Int
  }
  type Query {
    getCounter: Counter
  }
  type Mutation {
    increaseCounter: Counter
  }
`;
