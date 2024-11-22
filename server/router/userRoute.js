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

userRouter.put('/update', async (req, res) => {
    const { id,username, email, password } = req.body;
    try {
        const user = await User.findById(id);
        if (user) {
            user.username = username || user.username;
            user.email = email || user.email;
            user.password = password || user.password;

            const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
            
            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);


export { userRouter };