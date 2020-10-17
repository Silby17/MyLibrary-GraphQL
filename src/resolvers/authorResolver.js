import {Book, Author} from '../schemas'
import mongoose from 'mongoose'

export default {
    Query: {
        authors: (parent, args, ctx, info) => {
            return Author.find({})
        },
        author: (parent, args, ctx, info) => {
            // if (!mongoose.Types.ObjectId.isValid(args.id)) {
            //     throw new Error(`${args.id} is not a valid _id`)
            // }
            // return User.findById(args.id)
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