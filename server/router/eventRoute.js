import { Router } from "express";
import Event from "../models/event.js";
import Application from "../models/application.js";
import User from "../models/user.js";

const eventRouter = Router();

eventRouter.get("/", (req, res) => {
  res.send("All events");
});

eventRouter.get("/:id",async (req, res) => { 
    const eventId = req.params.id;
    try{
        let event = await Event
        .findById(eventId)
        .populate('participants', 'username email')
        .populate('organisedBy', 'username email');
        if(!event){
            res.status(404).send({message: 'Event not found'});
            return;
        }
        res.status(200).send(event);
    }catch(error){
        console.log('error:', error);
        res.status(500).send({
            message: 'Internal server error'
        });
    }
});


eventRouter.post("/", async (req, res) => {
    const event = req.body;
    const userId = req.headers['userid'];

    if (!event) {
        res.status(400).send({ message: "Please provide proper data to create an event" });
        return;
    }

    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).send({ message: "Invalid user ID" });
        return;
    }

    try {
        const userEvents = await Event.find({ title: event.title, organisedBy: userId });
        if (userEvents.length) {
            res.status(400).send({ message: "You have already created an event with this title" });
            return;
        }

        // Create and save the new event
        const newEvent =  Event.create({ ...event, organisedBy: userId});

        res.status(201).send({ message: "Event created successfully." });
    } catch (error) {
        console.log("error:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});


eventRouter.patch("/:eventId", async (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.headers['userid']; 
    const update = req.body;
    console.log("update:", update);
    console.log("userId:", userId);
    console.log("eventId:", eventId);

    try {
        // Check if the event exists and is organized by the requesting user
        const event = await Event.findOne({ _id: eventId, organisedBy: userId });

        if (!event) {
            res.status(404).send({ message: "Sorry, you don't have any event with this Event Id!" });
            return;
        }

        // If the update request includes adding a participant
        if (update.addParticipant) {
            // Check if the participant is already added
            if (event.participants.includes(update.addParticipant)) {
                res.status(400).send({ message: "Application already accepted" });
                return;
            }

            // Find the application for this event and user
            const application = await Application.findOne({ user: update.addParticipant, event: eventId });
            if (!application) {
                res.status(404).send({ message: "Application not found" });
                return;
            }

            // Check status and participant limit
            if (update.status === "accepted" && event.participants.length < event.limit) {
                event.participants.push(update.addParticipant);
                application.status = "accepted";
            } else {
                application.status = "rejected";
            }

            // Save changes to event and application
            await event.save();
            await application.save();

            res.status(200).send({ message: "Event updated successfully." });
        } else {
            // For other types of updates
            await Event.findByIdAndUpdate(eventId, update, { new: true });
            res.status(200).send({ message: "Event updated successfully." });
        }
    } catch (error) {
        console.log("error:", error);
        res.status(500).send({
            message: error.message || "Internal server error",
            error
        });
    }
});

eventRouter.get("/users/:id", async (req, res) => {
    // const userId = req.headers['userid'];
    const userId = req.params.id;
    try {
        const events = await Event.find({ organisedBy: userId }).populate('participants', '-password');
        res.status(200).send(events);
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({
            message: 'Internal server error'
        });
    }
}
);

export { eventRouter};
