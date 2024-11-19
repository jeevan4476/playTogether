import {Router} from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
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
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: token
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

userRouter.post('/signin', async (req, res) => {
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
        
        const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({
            _id: userExists._id,
            username: userExists.username,
            email: userExists.email,
            token: token
        });
    } catch (e) {
        res.status(500).json({
            message: "Unable to sign in"
        });
}
});



export { userRouter };