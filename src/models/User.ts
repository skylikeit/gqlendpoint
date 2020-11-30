const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
});

UserSchema.plugin(autoIncrement, {
  model: 'User',
  field: 'digit',
});

module.exports =
  mongoose.models.User || mongoose.model('User', UserSchema, 'User');
