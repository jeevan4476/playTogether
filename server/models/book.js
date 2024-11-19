import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    turf: { type: mongoose.Schema.Types.ObjectId, ref: "Turf", required: true },
    date: { type: String, required: true },
    startTime:{type:String,required:true},
    timeSlot: { type: String, required: true }, 
});

const Booking = mongoose.model("Booking", BookingSchema);

export { Booking };
