import {Book, Author} from '../schemas'
import mongoose from 'mongoose'

export default {
    Query: {
        books: (parent, args, ctx, info) => {
            // TODO check authentication, projection
            return Book.find({})
        },
        book: (parent, args, ctx, info) => {
            console.log('Book of book resolver running')
            // if (!mongoose.Types.ObjectId.isValid(args.id)) {
            //     throw new Error(`${args.id} is not a valid _id`)
            // }
            // return User.findById(args.id)
        }
    },

    Mutation: {
        createBook: async (parent, args, ctx, info) => {
            console.log(JSON.stringify(args))
            args.author = mongoose.Types.ObjectId(args.author)
            console.log(JSON.stringify(args))
            const newBook = await Book.create({
                title: args.title,
                volume: args.volume,
                author: mongoose.Types.ObjectId(args.author)
            })
            await Author.updateOne({'_id': mongoose.Types.ObjectId(args.author)}, {
                $push: {
                    books: mongoose.Types.ObjectId(newBook._id)
                }
            })

            return newBook
        }
    },
    Book: {
        author: async (parent, args, ctx, info) => {
            return Author.find({'_id': mongoose.Types.ObjectId(parent.author)})
        }
    }
}