import { Router } from "express";
import {Booking} from "../models/book.js";
import Turf from "../models/turf.js";
import User from "../models/user.js";

const bookRouter = Router();

bookRouter.get("/user/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const userWithBookings = await User.findById(userId)
        .populate({
            path: "bookings",
            populate: {
                path: "turf",
                model: "Turf",
            }}
        );

    if (!userWithBookings) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userWithBookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

bookRouter.post("/event/:eventId", async (req, res) => {
    try{
        const userId = req.headers['userid'];
        const data = req.body;
        const turf = await Turf.findById(req.params.eventId);
        if(!turf){ 
            res.status(404).send({message: 'Turf not found'});
            return;
        }
        const found = await Booking.findOne({user: userId, turf: turf._id, date: data.date, timeSlot: data.timeSlot,startTime:data.startTime});
        if(found){
            res.status(400).send({message: 'Booking already exists'});
            return;
        }

        const booking = await Booking.create({user: userId, turf: turf._id, date: data.date, timeSlot: data.timeSlot,startTime:data.startTime});
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).send({ message: "User not found" });
        }
    user.bookings.push(booking._id);
    await user.save();
        res.status(201).send(booking);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
);

bookRouter.delete("/:bookingId", async (req, res) => {
    try {
        const booking = await
        Booking.findByIdAndDelete(req.params.bookingId);
        if (!booking) {
            res.status(404).send({ message: "Booking not found" });
            return;
        }
        res.status(200).send({ message: "Booking deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            }
}
);

export { bookRouter };  