const Movies = require("../models/ModelMovies.js");

class MoviesRepository {
  static findMovies = async (next) => {
    try {
      const data = await Movies.getMovies(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findMoviesID = async (id, next) => {
    try {
      const data = await Movies.getMoviesID(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static addMovies = async (params, next) => {
    try {
      const data = await Movies.addMovies(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (params, next) => {
    try {
      const data = await Movies.updateMovies(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    try {
      return Movies.deleteMovies(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesRepository;
