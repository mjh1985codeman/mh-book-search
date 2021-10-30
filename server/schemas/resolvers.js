const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // pull specific user
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("books");
        return foundUser;
      }

      throw new AuthenticationError("You are not logged in");
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
