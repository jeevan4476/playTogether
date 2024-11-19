import jwt from 'jsonwebtoken';
import User  from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

export const authcheck =async (req,res,next) => {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) {
        return res.status(401).send({ message: "Unauthorized: No token provided" });
      }
    
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            const user = await User.findById(decoded.id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                req.user = user;
                console.log(req.user);
                next();
        }
        }
    });
}