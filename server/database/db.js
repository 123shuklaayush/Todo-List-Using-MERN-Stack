import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.um9tjfp.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("Connected Successfully")
    })
    mongoose.connection.on('disconnected', () =>{
        console.log(`You got an disconnectd Successfully`);
    })
    mongoose.connection.on('error', (error) =>{
        console.log(`You got an error Successfully`, error.message);
    })
}
export default Connection;