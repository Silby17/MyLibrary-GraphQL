import {gql} from 'apollo-server'

export default gql`

    extend type Query {
        book(title: String!): [Book]
        books: [Book!]
    }

    extend type Mutation {
        createBook(title: String!, volume: Int, author: String!): Book
    }

    type Book {
        id: ID!
        title: String!
        volume: Int!
        author: [Author!]!
        createdAt: String!
        updatedAt: String!
    }
`