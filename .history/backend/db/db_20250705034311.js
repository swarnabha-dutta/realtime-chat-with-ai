import mongoose from "mongoose";



function connect() {
    mongoose.connect(process.env.MONGO)
}