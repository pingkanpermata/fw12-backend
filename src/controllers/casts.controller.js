const {modelAllCasts, modelDeltecasts, modelUpdateCasts, modelCreatecasts, selectCountAllCasts} = require('../models/casts.model')
const errorHandler = require('../helpers/errorHandler')
const filter = require('../helpers/filter')

const allCasts = (req, res)=> {
  const sortable = ['name', 'createdAt', 'updatedAt']
  filter(req.query, sortable, selectCountAllCasts, res, (filter,pageInfo) => {
    modelAllCasts(filter, (err,data) => {
      if(err) {
        return errorHandler(err, res)
      }
      return res.status(200).json({
        success: true,
        message: "Data Casts success loaded",
        pageInfo,
        result: data.rows
      })
    })
  })
}

const deleteCasts = (req, res) => {
  modelDeletecasts(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Cast id deleted",
      result: datarows[0]
    })
  })
}

const updateCasts = (req, res) => {
  modelUpdateCasts(req.body, req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Cast id has been updated",
      results: data.rows[0]
  })
  })
}

const createCasts = (req, res) => {
  modelCreateCasts(req.body, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Create Cast id success",
      results: data.rows[0]
    })
  })
}

module.exports = {allCasts, deleteCasts, updateCasts, createCasts}
