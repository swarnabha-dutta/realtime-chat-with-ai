import mongoose from "mongoose";



function connect() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected To MongoDB");
    }).catch(error)
}