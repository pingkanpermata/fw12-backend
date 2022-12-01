const db = require('../helpers/db.helper')

const modelAllReservedNum = (filter, cb) => {
  const sql = `SELECT * FROM "reserved" WHERE "seatNum" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const values = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, values, cb)
}
const selectCountAllReservedSeat = (filter, cb) => {
  const sql = `SELECT COUNT("seatNumber") AS "totalData" FROM "reserved" WHERE "seatNumber" LIKE $1`;
  const values = [`%${filter.search}%`]
  db.query(sql, values, cb)
}

const modelDeleteReservedNum = (data, cb) => {
  const sql = `DELETE FROM "reserved" WHERE id=$1`
  const value = [data.id]
  db.query(sql, value, cb)
}

const modelUpdateReservedNum = (data, id, cb) => {
  const sql = `UPDATE "reserved" SET "seatNumber" = COALESCE(NULLIF($1, ''), "seatNumber"), "transactionId" = COALESCE(NULLIF($3, '')::INTEGER, "transactionId") WHERE id =$2 RETURNING *`
  const value = [data.seatNum, id, data.transactionId]
  db.query(sql,value,cb)
}

const modelCreateReservedNum = (data, cb) => {
  const sql = 'INSERT INTO "reserved"("seatNumber", "transactionId") VALUES($1, $2) RETURNING *';
  const value = [data.seatNum, data.transactionId];
  db.query(sql, value, cb)

}

module.exports = {modelAllReservedNum, modelDeleteReservedNum, modelUpdateReservedNum, modelCreateReservedNum, selectCountAllReservedSeat}
