const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: new Date(),
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
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },

            },
                
        ],

        totalDuration: {
            type: Number,
            default: 0,
        }

});

const workout = mongoose.model("workout", workoutSchema)

module.exports = workout;