const movieScheduleTimeRouter = require('express').Router()
const { readAllMovieScheduleTimes, readMovieScheduleTimes, createMovieScheduleTimes, updateMovieScheduleTimes, deleteMovieScheduleTimes} = require("../controllers/movieScheduleTimes.controller")

movieScheduleTimeRouter.get('/', readAllMovieScheduleTimes)
movieScheduleTimeRouter.get('/:id', readMovieScheduleTimes)
movieScheduleTimeRouter.post('/', createMovieScheduleTimes)
movieScheduleTimeRouter.patch('/:id', updateMovieScheduleTimes)
movieScheduleTimeRouter.delete('/:id', deleteMovieScheduleTimes)

module.exports = movieScheduleTimeRouter
