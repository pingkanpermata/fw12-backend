const db = require('../helpers/db.helper')

exports.displayGenre = (cb)=>{
  const sql = 'SELECT * FROM genre';
  db.query(sql,cb)
}

exports.insertGenre = (data,cb) => {
  const sql = 'INSERT INTO genre ("name") VALUES ($1) RETURNING *';
  const value = [data.name]
  db.query(sql,value,cb)
}

exports.editGenre = (id,data,cb)=> {
  const sql = `UPDATE "genre" SET "name" = COALESCE(NULLIF($2, ''), "name") WHERE id=$1 RETURNING *`;
  const value = [id, data.name]
  db.query(sql,value,cb)
}

exports.removeGenre = (id,cb)=> {
  const sql = 'DELETE FROM genre WHERE id = $1 RETURNING *';
  const value = [id]
  db.query(sql,value, cb)
}
