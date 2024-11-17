import jwt from 'jsonwebtoken';
import { User } from '../models';
import dotenv from 'dotenv';

dotenv.config();

export const authcheck = (res,res,next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            const user = await User.findById(decoded.id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                req.user = user;
                next();
        }
        }
    });
}