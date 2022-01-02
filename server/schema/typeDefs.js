const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input svBk {
    authors:[String]
    description:String
    title:String
    bookId:String
    image:String
    link:String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount:Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors:[String]
    description:String
    title:String
    image:String
    link:String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query{
    me:User
  }

  type Mutation{
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input:svBk!): User
    deleteBook(bookId:String!): User
  }
`
module.exports = typeDefs;