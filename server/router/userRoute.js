import {Router} from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {OAuth2Client} from 'google-auth-library'; // Assuming you have a googleAuth.js for Google OAuth

const userRouter = Router();
const client = new OAuth2Client(process.env.Google_CLIENT_ID);






userRouter.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await  User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await User.create({
            username,
            email,
            password : hashedPassword
        });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: token
            });
        
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


userRouter.post("/google-login", async (req,res)=>{
    const {token} = req.body;
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const {sub,email,name} = payload;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                username: name,
                 email,
                password: sub // Using sub as a unique identifier
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({
            _id : user._id,
            username: user.username,
            email: user.email,
            token: token

        });
    }catch (error) {
        console.error("Google login error:", error);
        res.status(500).json({ message: "Google login failed" });
    }
})

userRouter.put('/update', async (req, res) => {
    const { id,username, email, password } = req.body;
    try {
        const user = await User.findById(id);
        if (user) {
            user.username = username || user.username;
            user.email = email || user.email;
            user.password = password || user.password;

            const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
            
            
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }


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