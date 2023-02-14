const { selectAllReservedSeats, selectReservedSeat, insertReservedSeat, patchReservedSeat, deleteReservedSeat, countAllReservedSeat } = require('../models/reservedSeat.models')
const errorHandler = require('../helpers/errorHandler')
const filter = require('../helpers/filter.helper')

exports.readAllReservedSeats = (req, res) => {
  const sortable = ['transactionId', 'createdAt', 'updatedAt']

  filter(req.query, sortable, countAllReservedSeat, res, (filter, pageInfo) => {
    selectAllReservedSeats(filter, (err, result) => {
    if(err){
      return errorHandler(err, res)
    }

    return res.status(200).json({
      success: true,
      message: 'List of Reserved Seats',
      pageInfo,
      results: result.rows
    })
  })
})
}

exports.readReservedSeat = (req, res) => {
  selectReservedSeat(req.params, (err, data) => {
    if(err){
      return errorHandler(err, res)
    }

    if(data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reserved Seat not found"
      })
    }

    return res.status(200).json({
      success: true,
      results: data.rows[0]
    })
  })
}

exports.createReservedSeat = (req, res) => {
  insertReservedSeat(req.body, (err, data) => {
    if(err) {
      return errorHandler(err, res)
    }

    return res.status(200).json({
      success: true,
      message: "Reserved Seat created successfully",
      results: data.rows[0]
    })
  })
}

exports.updateReservedSeat = (req, res) => {
  patchReservedSeat(req.body, req.params, (err, data) => {
    if(err){
      return errorHandler(err, res)
    }

    if(data.rows.length === 0){
      return res.status(400).json({
        success: false,
        message: "Reserved Seat doesn't exist"
      })
    }

    return res.status(200).json({
      success: true,
      message: "ReservedSeat Updated",
      results: data.rows
    })
  })
}

exports.deleteReservedSeat = (req, res) => {
  deleteReservedSeat(req.params, (err, data) => {
    if(err) {
      return errorHandler(err, res)
    }

    if(data.rows.length === 0){
      return res.status(400).json({
        success: false,
        message: "Reserved Seat doesn't exist"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Reserved Seat Deleted",
      results: data.rows
    })
  })
}
