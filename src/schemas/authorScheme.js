import mongoose from '../utils/mongooseHandler'

const authorSchema = new mongoose.Schema({
    firstName:      {type: String},
    lastName:       {type: String},
    books:          [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
}, {
    timestamps: true
})

export default mongoose.model('Author', authorSchema)