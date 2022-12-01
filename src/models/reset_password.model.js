const db = require('../helpers/db.helper')

const modelAllResetPassword = (data, cb) => {
  db.query('SELECT * FROM "reset_password"', cb)
}

const modelDeleteResetPassword = (data, cb) => {
  const sql = `DELETE FROM "reset_password" WHERE "userId"=$1`
  const value = [data.id]
  db.query(sql, value, cb)
}

const modelUpdateResetPassword = (data, id, cb) => {
  const sql = `UPDATE "reset_password" SET "email" = COALESCE(NULLIF($1, ''), "email"), "userId" = COALESCE(NULLIF($3, '')::INTEGER, "userId") WHERE id =$2 RETURNING *`
  const value = [data.email, id, data.userId]
  db.query(sql,value,cb)
}

const modelCreatePassword = (data, cb) => {
  const sql = 'INSERT INTO "reset_password"("email", "userId", "code") VALUES($1, $2, $3) RETURNING *';
  const value = [data.email, data.userId, data.code];
  db.query(sql, value, cb)

}

const selectUserByEmailAndCode = (data, cb) => {
  const sql = `SELECT * FROM "reset_password" WHERE email=$1 AND code=$2`
  const value = [data.email, data.code]
  db.query(sql, value, cb)
}

module.exports = {modelAllResetPassword, modelDeleteResetPassword, modelUpdateResetPassword, modelCreatePassword, selectUserByEmailAndCode}
