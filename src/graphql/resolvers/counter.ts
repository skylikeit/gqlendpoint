import Counter from '../../models/Counter';

export default {
  Query: {
    getCounter: async () => {
      try {
        const counter = await Counter.findOne({});
        return counter;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    increaseCounter: async () =>
      Counter.findOneAndUpdate({}, { $inc: { counter: 1 } }, { new: true }),
  },
};
