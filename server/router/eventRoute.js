import { Router } from "express";
import EventModel from "../models/event.js";
import ApplicationModel from "../models/application.js";

const eventRouter = Router();

eventRouter.get("/", (req, res) => {
  res.send("All events");
});

eventRouter.get("/:id", (req, res) => { 
    res.send("Single event");
    });

eventRouter.post("/", async (req, res) => { //take jwt token from header and get user id from it
    const event = req.body;
    const userId = req.headers.userId;
    if (!event) {
        res.status(400).send({ message: "Please provide proper data to create an event" })
        return;
   }

   try {
        const newEvent = new EventModel({ ...event, organisedBy: userId });
        await newEvent.save();
        res.status(201).send({ message: 'Event created successfully.' })
   } catch (error) {
        console.log('error:', error)
        res.status(500).send({
            message: 'Internal server error'
        });
}
}
);

eventRouter.put("/:id", (req, res) => {
    res.send("Event updated");
    }
);

eventRouter.delete("/:id", (req, res) => {
    res.send("Event deleted");
    }
);

export default eventRouter;
