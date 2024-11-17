const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
      title: {
         type: String,
         required: true
      },
      description: {
         type: String,
         required: true
      },
      place: {
         type: String,
         required: true
      },
      startTime: {
         type: Date,
         required: true
      },
      endTime: {
         type: Date,
         required: true
      },
      limit: {
         type: Number,
         required: true
      },
      participants: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      }],
      organisedBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
   }
}, { versionKey: false, timestamps: true })

const Event = mongoose.model('event', eventSchema)

module.exports = Event;