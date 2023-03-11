const Movies = require("../models/ModelMovies.js");
const pool = require("../config/config.js");
const MoviesService = require("../services/moviesServices.js");

class moviesController {
  static findMovies = async (req, res, next) => {
    try {
      const data = await MoviesService.findMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findMoviesID = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MoviesService.findMoviesID(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static addMovies = async (req, res, next) => {
    try {
      const data = await MoviesService.addMovies(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (req, res, next) => {
    try {
      const data = await MoviesService.updateMovies(req.body, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MoviesService.deleteMovies(id, next);
      if (data) {
        res.status(200).json({ message: "Deleted successfully", data });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}
module.exports = moviesController;
