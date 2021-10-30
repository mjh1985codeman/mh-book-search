const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
