import counterResolvers from './counter';
import workItemResolvers from './workItem';
import authResolvers from './auth';

export default {
  Query: {
    ...counterResolvers.Query,
    ...workItemResolvers.Query,
    ...authResolvers.Query,
  },
  Mutation: {
    ...counterResolvers.Mutation,
    ...authResolvers.Mutation,
  },
};
