const db = require('../helpers/db.helper')

const modelAllMovieGenre = (data, cb) => {
  db.query('SELECT * FROM "movie_genre"', cb)
}

const modelDeleteMovieGenre = (data, cb) => {
  const sql = `DELETE FROM "movie_genre" WHERE id=$1`
  const value = [data.id]
  db.query(sql, value, cb)
}

const modelUpdateMovieGenre = (data, id, cb) => {
  const sql = `UPDATE "movie_genre" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "genreId" = COALESCE(NULLIF($3, '')::INTEGER, "genreId") WHERE id =$2 RETURNING *`
  const value = [data.movieId, id, data.genreId]
  db.query(sql,value,cb)
}

const modelCreateMovieGenre = (data, cb) => {
  const sql = 'INSERT INTO "movie_genre"("movieId", "genreId") VALUES($1, $2) RETURNING *';
  const value = [data.movieId, data.genreId];
  db.query(sql, value, cb)

}

module.exports = {modelUpdateMovieGenre, modelAllMovieGenre, modelDeleteMovieGenre, modelCreateMovieGenre}
