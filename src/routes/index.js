const routes = require('express').Router()
//untuk menampung semua enpoint pada aplikasi kita
const authMiddleware = require('../middleware/auth.middleware')


routes.use('/users', require('./users.router')) ///users disini akan dikuasai oleh user.route
routes.use('/movies', authMiddleware, require('./movies.router'))
routes.use('/genre', require('./genre.router'))
routes.use('/casts', require('./casts.router'))
routes.use('/status', require('./status.router'))
routes.use('/subscribers', require('./subscribers.router'))
routes.use('/movie_casts', require('./movie_casts.router'))
routes.use('/movie_genre', require('./movie_genre.router'))
routes.use('/movie_schedule_time', require('./movie_schedule_time.router'))
routes.use('/payment_method', require('./payment_method.router'))
routes.use('/reserved', require('./reserved.router'))
routes.use('/reset_password', require('./reset_password.router'))
routes.use('/cinema', require('./cinema.router'))
routes.use('/movie_schedule', require('./movie_schedule.router'))
routes.use('/transaction', require('./transaction.router'))

routes.use('/auth', require('./auth.router') )

module.exports = routes
