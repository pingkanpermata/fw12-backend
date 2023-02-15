const db = require('../helpers/db.helper')

exports.displayCinemas = (cb) => {
  const sql = 'SELECT * FROM cinemas ORDER BY "createdAt" ASC';
  db.query(sql,cb)
}

exports.insertCinemas = (data,cb)=> {
  const sql = 'INSERT INTO cinemas ("name","address","city") VALUES ($1,$2,$3) RETURNING *';
  const value = [data.name,data.address,data.city]
  db.query(sql,value,cb)
}

exports.editCinemas = (id,data,cb)=> {
  const sql = `UPDATE "cinemas" SET "name" = COALESCE(NULLIF($2, ''), "name"), "address" = COALESCE(NULLIF($3, ''),"address"), "city" = COALESCE(NULLIF($4, ''), "city") WHERE id=$1 RETURNING *`;
  const value = [id, data.name, data.address, data.city]
  db.query(sql,value,cb)
}

exports.removeCinemas = (id,cb)=> {
  const sql = 'DELETE FROM cinemas WHERE id = $1 RETURNING *';
  const value = [id]
  db.query(sql,value, cb)
}
