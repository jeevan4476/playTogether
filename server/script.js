import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import Turf from "./models/turf.js";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;
const FOURSQUARE_API_KEY = process.env.API_KEY;
const API_VERSION = "2025-06-17";

const categories = ["football", "cricket", "tennis"];

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

async function fetchAndSaveTurfs(city = "jaipur", limit = 20) {
  try {
    const response = await axios.get("https://places-api.foursquare.com/places/search", {
      headers: {
        Authorization: `Bearer ${FOURSQUARE_API_KEY}`,
        "accept": "application/json",
        "X-Places-Api-Version": API_VERSION
      },
      params: {
        query: "turf",
        near: city,
        limit: limit
      }
    });

    const places = response.data.results;
    for (const place of places) {
      if (!place.fsq_place_id) continue;

      const existing = await Turf.findOne({ fsq_id: place.fsq_place_id });
      if (existing) continue;

      const newTurf = new Turf({
        fsq_id: place.fsq_place_id,
        name: place.name,
        address: place.location?.formatted_address || place.location?.address || "No address available",
        category: categories[Math.floor(Math.random() * categories.length)],
        image: "https://via.placeholder.com/150",
        price: Math.floor(Math.random() * 1000) + 500,
        rating: (Math.random() * 2 + 3).toFixed(2),
        reviews: Math.floor(Math.random() * 290) + 10
      });
      console.log(newTurf)
      await newTurf.save();
      console.log(`✅ Saved: ${newTurf.name}`);
    }

    console.log("✅ Done fetching and saving turfs.");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } 
}

await connectDB();
await fetchAndSaveTurfs();
