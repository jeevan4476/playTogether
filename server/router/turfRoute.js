import { Router } from "express";
import axios from "axios";
import Turf from "../models/turf.js";

const turfRouter = Router();

const categories = ["football", "cricket", "tennis"];

turfRouter.get("/all", async (req, res) => {
  try {
    const existingTurfs = await Turf.find();
    if (existingTurfs.length > 0) {
      return res.status(200).json(existingTurfs); // Serve cached DB data
    }
    console.log("Fetching turfs from Foursquare API...");
    // Fetch from Foursquare
const response = await axios.get("https://places-api.foursquare.com/places/search", {
  headers: {
    "X-Places-Api-Version": "2025-06-17",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`, // Store your token in .env as FSQ_API_KEY
  },
  params: {
    query: "turf",
    near: "Bangalore",
    limit: 50,
  },
});


    const turfsFromAPI = response.data.results.map((place) => ({
      fsq_id: place.fsq_id,
      name: place.name,
      address: place.location.address || "No address available",
      category: categories[Math.floor(Math.random() * categories.length)],
      image: "https://via.placeholder.com/150", // Replace with real image if needed
      price: Math.floor(Math.random() * 1000) + 500,
      rating: (Math.random() * 2 + 3).toFixed(2),
      reviews: Math.floor(Math.random() * 290) + 10,
    }));

    // Save only new turfs (deduplicate by fsq_id)
    for (const turf of turfsFromAPI) {
      const existing = await Turf.findOne({ fsq_id: turf.fsq_id });
      if (!existing) {
        await Turf.create(turf);
      }
    }

    const allTurfs = await Turf.find();
    res.status(200).json(allTurfs);
  } catch (error) {
    console.error("Error fetching or saving turfs:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET turf by ID
turfRouter.get("/:id", async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id);
    if (!turf) {
      return res.status(404).json({ message: "Turf not found" });
    }
    res.status(200).json(turf);
  } catch (error) {
    console.error("Error fetching turf by ID:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET turfs by category
turfRouter.get("/category/:category", async (req, res) => {
  try {
    const turfs = await Turf.find({ category: req.params.category });
    if (!turfs || turfs.length === 0) {
      return res.status(404).json({ message: "No turfs found for this category" });
    }
    res.status(200).json(turfs);
  } catch (error) {
    console.error("Error fetching turfs by category:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { turfRouter };
