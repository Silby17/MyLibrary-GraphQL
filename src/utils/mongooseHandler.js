import mongoose from 'mongoose'
import {MONGO_URL, MONGO_PASSWORD, MONGO_USER} from '../config'

// const dbUrl = process.env.MONGO_URL
const dbUrl = MONGO_URL
const prefix = 'mongodb+srv'
const dbName = 'library'

let additionalCreds = ""

if (MONGO_USER) {
    // additionalCreds = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`
    additionalCreds = `${MONGO_USER}:${MONGO_PASSWORD}@`
}
const mongoUrl = `${prefix}://${additionalCreds}${dbUrl}/${dbName}?retryWrites=true&w=majority`

console.log('Attempting to connect to:', `${prefix}://${dbUrl}/${dbName}?retryWrites=true&w=majority`)

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`connected to MongoDB: ${prefix}://${dbUrl}/${dbName}?retryWrites=true&w=majority`);
});

export default mongoose