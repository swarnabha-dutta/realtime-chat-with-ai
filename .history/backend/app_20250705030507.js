import dotenv from 'dotenv'
dotenv.config();
import express from "express";



const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Hello World');
});

export defa