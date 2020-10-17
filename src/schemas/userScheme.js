import mongoose from '../utils/mongooseHandler'
import bcrypt  from 'bcryptjs'

const userSchema = new mongoose.Schema({
    email:      {type: String},
    username:   {type: String},
    name:       {type: String},
    password:   {type: String}
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 10)
            next()
        } catch (err) {
            console.error(`Error hashing password. Error: ${err}`)
            next()
        }
    }
    next()
})

export default mongoose.model('User', userSchema)