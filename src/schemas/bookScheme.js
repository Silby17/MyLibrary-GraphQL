import mongoose from '../utils/mongooseHandler'

const bookSchema = new mongoose.Schema({
    title:          {type: String},
    volume:         {type: Number, default: 0},
    author:         {type: mongoose.Schema.Types.ObjectId, ref: 'Author'}
}, {
    timestamps: true
})

export default mongoose.model('Book', bookSchema)