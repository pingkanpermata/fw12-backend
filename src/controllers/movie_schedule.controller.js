const {modelAllMovieSchedules, modelMovieScheduleId, modelDeleteMovieSchedule, modelUpdateMovieSchedule, modelCreateMovieSchedule} = require('../models/movie_schedule.model')
const errorHandler = require('../helpers/errorHandler')

const allMovieSchedules = (req, res) => {
  modelAllMovieSchedules(req.body, (err, data) => {
    if(err) {
        return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Data Movie Schedule success loaded",
      results: data.rows
    })
  })
}

const movieScheduleId = (req,res) => {
  modelMovieScheduleId(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Id Data Movie Schedule success loaded",
      results: data.rows[0]
    })
  })
}

const deleteMovieSchedule = (req, res) => {
  modelDeleteMovieSchedule(req.params, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Movie Schedule id deleted",
      results: data.rows[0]
    })
  })
}

const updateMovieSchedule = (req, res) => {
  modelUpdateMovieSchedule(req.body, req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success: true,
      message: "Movie Schedule id has been updated",
      results: data.rows[0]
  })
  })
}

const createMovieSchedule = (req, res) => {
  modelCreateMovieSchedule(req.body, (err,data) => {
    if(err) {
      return errorHandler(err,res)
    }
    return res.status(200).json({
      success:true,
      message: "Create Movie Schedule id success",
      results: data.rows[0]
    })
  })
}

module.exports = {allMovieSchedules, movieScheduleId, deleteMovieSchedule, updateMovieSchedule, createMovieSchedule}
