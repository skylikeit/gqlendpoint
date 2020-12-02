import { AuthenticationError, UserInputError } from 'apollo-server';
import { createUser, findUser, validatePassword } from '../../lib/auth/user';
import { setLoginSession, getLoginSession } from '../../lib/auth/auth';
import { removeTokenCookie } from '../../lib/auth/auth-cookies';

import User from '../../models/User';

export default {
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req);
        if (session) {
          return findUser({ username: session.username });
        }
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        );
      }
    },
    user: (_, { username }) => User.find({ username }),
    users: () => User.find({}),
  },
  Mutation: {
    async signUp(_parent, args, _context, _info) {
      const user = await createUser(args.input);
      if (!user.errors) return { user };
      if (user.errors.includes('Username already taken'))
        throw new UserInputError('Username already taken');
      throw new UserInputError(
        'The length of the username or password is less than the allowed value'
      );
      // return { errors: user.errors }
    },
    async signIn(_parent, args, context, _info) {
      const user = await findUser({ username: args.input.username });
      if (user && (await validatePassword(user, args.input.password))) {
        const session = {
          id: user.id,
          username: user.username,
        };

        return await setLoginSession(context.res, session);
      }
      throw new UserInputError('Invalid username and password combination');
      // return { errors: ['Invalid username and password combination'] }
    },
    async signOut(_parent, _args, context, _info) {
      removeTokenCookie(context.res);
      return true;
    },
  },
};
