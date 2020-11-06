import { model, Schema } from 'mongoose';

const workItemSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  path: { type: String },
  pic: { type: String },
});

export default model('WorkItem', workItemSchema, 'WorkList');
