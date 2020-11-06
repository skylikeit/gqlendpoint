import counterResolvers from './counter';
import workItemResolvers from './workItem';

export default {
  Query: {
    ...counterResolvers.Query,
    ...workItemResolvers.Query,
  },
  Mutation: {
    ...counterResolvers.Mutation,
  },
};
