import {ApolloServer, gql} from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const {
    APP_PORT = 4000
} = process.env

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
})

server.listen({port: APP_PORT}).then(({url}) => {
    console.log(`Server ready at ${url}`)
})