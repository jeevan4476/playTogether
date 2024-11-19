import mongoose from "mongoose";

const TurfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String},
  price: { type: Number,},
  rating: { type: Number, default: 0 }, // Average rating
  reviews:{type:Number,default:0},
});

const Turf = mongoose.model("Turf", TurfSchema);

export default Turf;
