import {Book, Author} from '../schemas'
import mongoose from 'mongoose'

export default {
    Query: {
        books: (parent, args, ctx, info) => {
            return Book.find({})
        },
        book: async (parent, args, ctx, info) => {
            return Book.find({
                'title': {
                    $regex: new RegExp(args.title)
                }
            })
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