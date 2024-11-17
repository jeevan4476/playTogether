import Application from "../models/application.js";
import { Router } from "express";
import Event from "../models/event.js";
import User from "../models/user.js";

const applicationRouter = Router();

//getting all applications for a specific user
applicationRouter.get("/", async (req, res) => {
    const userId = req.headers.userId;
    let filterObj = {user:userId};
    try {
        const applications = await Application.find(filterObj).populate({
            path: 'event'
        });
        res.status(200).json(applications);
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({
            message: 'Internal server error'
        });
    }
});


//applying for specific event
applicationRouter.post("/:eventId/apply", async (req, res) => {
        const eventId = req.params.eventId;
        const userId = req.headers['userid'];

        if (!eventId || !userId) {
            res.status(400).send({ message: 'Please Provide proper information to apply in a event' })
            return;
        };

        try {
            const event = await Event.findById(eventId);
            if (event.limit === event.participants.length) {
                res.status(200).send({ message: 'Sorry, Events participant limit reached!' })
            } else {
                const applications = await Application.find({ event: eventId, user: userId });
                console.log('applications:', applications)

                if (applications.length) {
                        res.status(400).send({ message: `Your application is already in ${applications[0].status} status` })
                } else {
                        const application = new Application({ event: eventId, user: userId });
                        await application.save();
                        res.status(201).send({ message: 'Applied successfully' });
                }
            }
        } catch (error) {
            console.log('error:', error)
            res.status(500).send({
                message: error.message,
                error
            });
        }
});

//getting all applications for specific event
applicationRouter.get("/:eventId/applications", async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const event = await Event.findById(eventId);
        if (!event) {
            res.status(404).send({ message: 'Event not found' });
            return;
        }
        const applications = await Application.find({ eventId });
        res.status(200).json(applications);
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({
            message: 'Internal server error'
        });
    }
});

export{applicationRouter};