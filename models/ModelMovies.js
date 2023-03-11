const pool = require("../config/config.js");

class Movies {
  static getMovies = async (next) => {
    const find = `
    SELECT * FROM movies
    `;

    try {
      const data = await pool.query(find);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static getMoviesID = async (id, next) => {
    const find = ` 
    SELECT * FROM movies WHERE id=$1
    `;

    try {
      const data = await pool.query(find, [id]);
      if (data.rows.length === 0) {
        next({ name: "ErrorNotFound" });
      } else {
        return data.rows;
      }
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (params, next) => {
    try {
      const { title, genres, year, id } = params;
      const edit = `
      UPDATE movies
      SET title= $1, genres = $2, year=$3
      WHERE id = $4 RETURNING * `;

      const data = await pool.query(edit, [title, genres, year, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static addMovies = async (params, next) => {
    try {
      const { title, genres, year } = params;
      const add = ` 
      INSERT INTO movies (title,genres,year)
      VALUES ($1,$2,$3) RETURNING *
      `;
      const data = await pool.query(add, [title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    try {
      const del = ` 
      DELETE FROM movies WHERE id=$1 RETURNING *
      `;

      const data = await pool.query(del, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movies;
