const db = require('../helpers/db.helper')

exports.displayMovies = (filter, cb) => {
  const sql = `SELECT * FROM movies WHERE title LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2;`
  const values = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql,values,cb)
}

exports.countAllMovies = (filter,cb)=> {
  const sql = `SELECT COUNT(*) as "dataCount" FROM movies WHERE title LIKE $1;`
  const values = [`%${filter.search}%`]
  db.query(sql, values, cb)
}

exports.insertMovies = async (data) => {
  try {
    const sql = 'INSERT INTO movies ("title","picture","releaseDate","director","duration","synopsis") VALUES ($1, $2, $3,$4,$5,$6) RETURNING *';
    const values = [data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis]
    const newMovies = await (sql, values)
    return newMovies.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.editMovies = async (id, data) => {
  try {
    const sql = `UPDATE "movies" SET "title" = COALESCE(NULLIF($2, '')::VARCHAR, "title"), "picture" = COALESCE(NULLIF($3, '')::VARCHAR, "picture"), "releaseDate" = COALESCE(NULLIF($4, '')::TIMESTAMPTZ, "releaseDate"), "director" = COALESCE(NULLIF($5, '')::VARCHAR, "director"), "duration" = COALESCE(NULLIF($6, '')::TIME, "duration"), "synopsis" = COALESCE(NULLIF($7, '')::TEXT, "synopsis") WHERE id=$1 RETURNING *`;
    const values = [id, data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis]
    const newMovies = await db.query(sql, values)
    return newMovies.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.removeMovies = async (id) => {
  try {
      const sql = 'DELETE FROM movies WHERE id = $1 RETURNING *';
        const values = [id]
        const newMovies = await db.query(sql, values)
  } catch (error) {
    if (error) throw error
  }
}

exports.upcomingMovie = (data, cb) => {
  const sql = `SELECT * FROM movies WHERE date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($1,''), date_part('year', current_date)::TEXT) AND date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($2,''), date_part('month', current_date)::TEXT)`;
  const values = [data.year, data.month]
  db.query(sql, values, cb)
}

exports.nowShowingMovie = (cb) => {
  const sql = `SELECT m.id, m.picture,m.title, ms."startDate", ms."endDate",string_agg(g.name, ', ') AS genre
  FROM movies m
  JOIN "movieSchedule" ms ON ms."movieId" = m.id
  LEFT JOIN "movieGenre" mg ON mg."movieId" = m.id
  JOIN "genre" g ON g.id = mg."genreId" WHERE current_date
  BETWEEN ms."startDate" AND ms."endDate" GROUP BY m.id, ms.id LIMIT 5`;
  db.query(sql, cb);
}
