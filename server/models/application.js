const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
     event: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "event"
     },
     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
     },
     status: {
          type: String,
          enum: {
               values: ["accepted", "pending", "rejected"],
               message: 'Please choose from this options: "accepted", "pending", "rejected"',
          },
          default: 'pending'
     }
}, { versionKey: false, timestamps: true })

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;