const MoviesRepository = require("../repositories/userRepository.js");

class UserService {
  static findUser = async (next) => {
    try {
      const data = await UserRepository.findUser(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findMoviesID = async (id, next) => {
    try {
      const data = await MoviesRepository.findMoviesID(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static addMovies = async (params, next) => {
    try {
      return MoviesRepository.addMovies(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (params, next) => {
    try {
      const data = await MoviesRepository.updateMovies(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    try {
      return MoviesRepository.deleteMovies(id, next);
    } catch (err) {
      next(err);
    }
  };
}
module.exports = MoviesService;
