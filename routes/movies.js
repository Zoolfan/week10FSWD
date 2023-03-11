const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js");

router.get("/movies", moviesController.findMovies);
router.get("/movies/:id", moviesController.findMoviesID);
router.post("/movies", moviesController.addMovies);
router.put("/movies", moviesController.updateMovies);
router.delete("/movies/:id", moviesController.deleteMovies);

module.exports = router;
