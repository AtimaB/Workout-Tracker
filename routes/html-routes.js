const express = require('express');
const router = express.Router();
const path = require("path");


//get exercise.html path
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//get stats.html path
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;