import {ApolloServer, gql} from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import {APP_PORT } from './config'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
})

server.listen({port: APP_PORT}).then(({url}) => {
    console.log(`Server ready at ${url}`)
})