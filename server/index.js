import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import {userRouter} from './router/userRoute.js';
import {turfRouter} from './router/turfRoute.js';
import {bookRouter} from './router/bookRoute.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT ;
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes


app.use('/users', userRouter);
app.use('/turfs', turfRouter);   
app.use('/bookings', bookRouter);


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

});