import counterResolvers from './counter';

export default {
  Query: {
    ...counterResolvers.Query,
  },
  Mutation: {
    ...counterResolvers.Mutation,
  },
};
