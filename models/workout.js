const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    require: "Please enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    require: "Please enter an exercise name"
                },
                duration: {
                    type: Number,
                    require: "Please enter an exercise duration"
                },
                weight: {
                    type: Number,
                    require:  "Please enter an exercise weight"
                },
                set: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },

            },
                
        ]

});

const db = mongoose.model("db", workoutSchema)

module.exports = db;