import {gql} from 'apollo-server'

export default gql`

    extend type Query {
        author(name: String!): [Author]
        authors: [Author!]
    }

    extend type Mutation {
        addAuthor(firstName: String!, lastName: String!): Author
    }

    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        books: [Book!]
        createdAt: String!
        updatedAt: String!
    }
`