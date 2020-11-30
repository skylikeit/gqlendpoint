import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import User from '../../models/User';

export async function createUser({ username, password }) {
  if (username.length < 4 || password.length < 6) {
    const errors = [];

    if (username.length < 4) errors.push('Username less than 4');
    if (password.length < 6) errors.push('Password less than 6');

    return { errors };
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  };

  try {
    await new User({ ...user }).save();
  } catch (err) {
    return { errors: ['Username already taken'] };
  }

  return user;
}

export async function findUser({ username }) {
  const user = await User.findOne({ username });

  return user;
}

export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
