const movieScheduleTimeRouter = require('express').Router()
const {allMovieScheduleTime, deletemovieScheduleTime, updatemovieScheduleTime, createmovieScheduleTime} = require('../controllers/movie_schedule_time.controller')

movieScheduleTimeRouter.get('/', allMovieScheduleTime)
movieScheduleTimeRouter.post('/', createmovieScheduleTime)
movieScheduleTimeRouter.delete('/:id', deletemovieScheduleTime )
movieScheduleTimeRouter.patch('/:id', updatemovieScheduleTime )

module.exports = movieScheduleTimeRouter
