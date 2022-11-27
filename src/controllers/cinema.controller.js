const {modelAllCinemas, modelCinemasId, modelDeleteCinemasId, modelUpdateCinemasId, modelCreateCinemas, selectCountAllCinemas} = require('../models/cinema.model')
const errorHandler = require('../helpers/errorHandler')
const filter = require('../helpers/filter')

const allCinemas = (req, res) => {
  const sortable = ['name', 'address', 'city', 'createdAt', 'updateAt']
  filter(req.query, sortable, selectCountAllCinemas, res, (filter,pageInfo) => {
    modelAllCinemas(filter, (err, data) => {
      if(err) {
          return errorHandler(err,res)
      }
      return res.status(200).json({
        success: true,
        message: "Data Cinemas success loaded",
        pageInfo,
        results: data.rows
    })
  })
})
}

const cinemasId = (req,res) => {
  modelCinemasId(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Id Data Cinemas success",
      results: data.rows[0]
    })
  })
}

const deleteCinemasId = (req, res) => {
  modelDeleteCinemasId(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Cinemas id deleted",
      results: data.rows[0]
    })
  })
}

const updateCinemasId = (req, res) => {
  modelUpdateCinemasId(req.body, req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Cinemas id has been updated",
      results: data.rows[0]
  })
  })
}

const createCinemas = (req, res) => {
  modelCreateCinemas(req.body, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Create Cinemas id success",
      results: data.rows[0]
    })
  })
}

module.exports = {allCinemas, cinemasId, deleteCinemasId, updateCinemasId, createCinemas}
