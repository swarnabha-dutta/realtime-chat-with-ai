import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";
import userRoutes from './routes/user.routes.js';
import cookieParser from "cookie-parser";

connect();

const app = express();


https://www.thunderclient.com for cursor IDE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;