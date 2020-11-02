import { model, Schema } from 'mongoose';

const counterSchema = new Schema({
  counter: { type: Number },
});

export default model('Counter', counterSchema, 'UserCounter');
