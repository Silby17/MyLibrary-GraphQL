const {ApolloServer, gql} = require('apollo-server')
const {buildSchema} = require('graphql')

const db = {
    users: [
        {id: '1', email: 'alex@gmail.com', name: 'Alex', avatarUrl: 'https://gravatar.com/...'},
        {id: '2', email: 'max@gmail.com', name: 'Max', avatarUrl: 'https://gravatar.com/...'}
    ],
    messages: [
        {id: '1', userId: '1', body: 'Hello', createdAt: Date.now()},
        {id: '2', userId: '2', body: 'Hi', createdAt: Date.now()},
        {id: '3', userId: '1', body: 'What\'s up?', createdAt: Date.now()}
    ]
}
const typeDefs = gql`
    type Query {
        users: [User!]!
        user(id: ID!): User
        messages: [Message!]!
    }
    type Mutation {
        addUser(email: String!, name: String): User!
    }
    type User {
        id: ID!
        email: String!
        name: String
        avatarUrl: String
        messages: [Message!]!
    }
    type Message {
        id: ID!
        body: String!
        createdAt: String!
    }
`

const resolvers = {
    Query: {
        users: (parent, args, ctx, info) => db.users,
        user: (parent, args, ctx, info) => db.users.find(user => user.id === args.id),
        messages: (parent, args, ctx, info) => db.messages,
    },
    Mutation: {
        addUser: (parent, {email, name}, ctx, info) => {
            const user = {
                id: crypto.randomBytes(10).toString('hex'),
                email,
                name
            }
            db.users.push(user)
            return user
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})