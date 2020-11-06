import WorkItem from '../../models/WorkItem';

export default {
  Query: {
    getWorkItem: async () => {
      try {
        const work = await WorkItem.find({});
        return work;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
