import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './db.js';
import User from './models/user.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT ;
connectDB();
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await  User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
        const user = await User.create({
            username,
            email,
            password
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/signin', async (req, res) => {
    const {username,password} = req.body;
    try{
        const userExists = await  User.findOne({ username });
        if (!userExists) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }
        res.json({
            _id: userExists._id,
            username: userExists.username,
            email: userExists.email,
        });
    } catch (e) {
        res.status(500).json({
            message: "Unable to sign in"
        });
}
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});