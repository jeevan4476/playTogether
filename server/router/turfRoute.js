import { Router } from "express";
import axios from "axios";
import Turf from "../models/turf.js";
import { authcheck } from "../middlewares/auth.js";

const turfRouter = Router();


turfRouter.get("/all", async (req, res) => {
  try {
    const response = await axios.get("https://api.foursquare.com/v3/places/search", {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
      params: {
        query: "turf", 
        near: "kolkata", 
        limit: 50, 
      },
    });
    const categories = ["football","cricket","tennis"];
    const turfsFromAPI = response.data.results.map((place) => ({
      name: place.name,
      address:  place.location.address ,
      category: categories[Math.floor(Math.random() * categories.length)], 
      image: "https://via.placeholder.com/150", 
      price: Math.floor(Math.random() * 1000) + 500, 
      rating: (Math.random()*2+3).toFixed(2), 
      reviews: Math.floor(Math.random()*290)+10, 
    }));

    
    for (const turf of turfsFromAPI) {
      const existingTurf = await Turf.findOne({ category: turf.category });
      if (!existingTurf) {
        await Turf.create(turf);
      }
    }

    
    const turfs = await Turf.find();

    
  
    res.status(200).json(turfs);
  } catch (error) {
    console.error("Error fetching or saving turfs:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});


turfRouter.get("/:id", async (req, res ,next) => {
    const turfId = req.params.id;
    try{
        let turf = await Turf.findById(turfId);
        if(!turf){
            res.status(404).send({message: 'Turf not found'});
            return;
        }
        res.status(200).send(turf);
    }catch(error){
        console.log('error:', error);
        res.status(500).send({
            message: 'Internal server error'
        });
    }
});

turfRouter.get("/category/:category", async (req, res) => {
    const category = req.params.category;
    try{
        let turfs = await Turf.find({category: category});
        if(!turfs){
            res.status(404).send({message: 'Turf not found'});
            return;
        }
        res.status(200).send(turfs);
    }catch(error){
        console.log('error:', error);
        res.status(500).send({
            message: 'Internal server error'
        });
    }
});


export { turfRouter };