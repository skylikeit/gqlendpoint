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

  type Query {
    getCounter: Counter
    getWorkItem: [WorkItem]!
  }
  type Mutation {
    increaseCounter: Counter
  }
`;
