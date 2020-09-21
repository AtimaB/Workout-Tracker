const workout = require("../models/workout")
const express = require('express');
const router = express.Router();

// const { db } = require("../models/workout")

router.post("/api/workouts", (req, res) => {
    db.workout. create({}).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});


router.get("/workouts/:id" , (req, res) => {
    db.workout.find({_id: req.params.id}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});






module.exports = router;