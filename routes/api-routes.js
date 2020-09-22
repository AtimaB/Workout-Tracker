const db = require("../models")
const express = require('express');
const workout = require("../models/workout");
const router = express.Router();


router.post("/api/workouts", (req, res) => {
    db.workout.create({}).then(workouts => {
        res.json(workouts);
    })
        .catch(err => {
            res.json(err);
        });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        {
            new: true,
            runValidators: true
        })
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    db.workout.find({}).then(workouts => {
        workouts.forEach(workout => {
            let total = 0;
            workout.exercises.forEach(exercises => {
                total += exercises.duration;
            });
            workout.totalDuration = total;
        });
        res.json(workouts);
    }).catch(err => {
        res.json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
    db.workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;