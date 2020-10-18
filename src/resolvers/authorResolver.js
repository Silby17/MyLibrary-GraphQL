import {Book, Author} from '../schemas'

export default {
    Query: {
        authors: (parent, args, ctx, info) => {
            return Author.find({})
        },
        author: (parent, {name}, ctx, info) => {
            return Author.find({
                $or: [{
                    'firstName': new RegExp(name, 'i')
                }, {
                    'lastName': new RegExp(name, 'i')
                }]
            })
        }
    },
    Mutation: {
        addAuthor: (parent, args, ctx, info) => {
            return Author.create(args)
        }
    },
    Author: {
        books: async (parent, args, ctx, info) => {
            return (await parent.populate('books').execPopulate()).books
        }
    }
}