const routes = require('express').Router() // untuk menampung semua endpoint app kita

routes.use('/users', require('./users.router'))
routes.use('/movies', require('./movies.router'))
routes.use('/genres', require('./genre.router'))
routes.use('/casts', require('./casts.router'))
routes.use('/status', require('./status.router'))
routes.use('/subscribers', require('./subscribers.router'))
routes.use('/movieCasts', require('./movie_casts.router'))
routes.use('/movieGenre', require('./movie_genre.router'))
routes.use('/movieScheduleTime', require('./movie_schedule_time.router'))
routes.use('/paymentMethod', require('./payment_method.router'))
routes.use('/reservedNum', require('./reserved.router'))
routes.use('/resetPassword', require('./reset_password.router'))
routes.use('/cinemas', require('./cinema.router'))
routes.use('/movieSchedules', require('./movie_schedules.router'))
routes.use('/transaction', require('./transaction.router'))

module.exports = routes
