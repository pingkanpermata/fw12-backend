const {modelAllTransaction, modelTransactionId, modelDeleteTransactionId, modelUpdateTransaction, modelCreateTransaction, selectCountAllTransaction} = require('../models/transaction.model')
const errorHandler = require('../helpers/errorHandler')
const filter = require('../helpers/filter')

const allTransaction = (req, res) => {
  const sortable = ['bookingDate', 'fullName', 'email', 'phoneNumber', 'createdAt', 'updateAt']
  filter(req.query, sortable, selectCountAllTransaction, res, (filter,pageInfo) => {
    modelAllTransaction(filter, (err, data) => {
      if(err) {
          return errorHandler(err,res)
      }
      return res.status(200).json({
        success: true,
        message: "Data Transactions success loaded",
        pageInfo,
        results: data.rows
  })
    })
  })
}

const transactionId = (req,res) => {
  modelTransactionId(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Id Data Transaction success",
      results: data.rows[0]
    })
  })
}

const deleteTransactionId = (req, res) => {
  modelDeleteTransactionId(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Transaction id deleted",
      results: data.rows[0]
    })
  })
}

const updateTransactionId = (req, res) => {
  modelUpdateTransaction(req.body, req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Transaction id has been updated",
      results: data.rows[0]
  })
  })
}

const createTransactionId = (req, res) => {
  modelCreateTransaction(req.body, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Create Transaction id success",
      results: data.rows[0]
    })
  })
}

module.exports = {allTransaction, transactionId, deleteTransactionId, updateTransactionId, createTransactionId}
