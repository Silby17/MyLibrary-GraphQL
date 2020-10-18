import {User} from '../schemas'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export default {
    Query: {
        users: (parent, args, ctx, info) => {
            // TODO check authentication, projection
            return User.find({})
        },
        user: (parent, args, ctx, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id)) {
                throw new Error(`${args.id} is not a valid _id`)
            }
            return User.findById(args.id)
        }
    },
    Mutation: {
        signUp: (parent, args, ctx, info) => {
            const password = args.password
            bcrypt.hash(password, 'secret')
            return User.create(args)
        }
    }
}