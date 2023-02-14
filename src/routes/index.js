const routes = require('express').Router()
//untuk menampung semua enpoint pada aplikasi kita
const authMiddleware = require('../middleware/auth.middleware')


routes.use('/users', require('./users.router')) ///users disini akan dikuasai oleh user.route
routes.use('/movies',require('./movies.router'))
routes.use('/genre', require('./genre.router'))
routes.use('/casts', require('./casts.router'))
routes.use('/status', require('./status.router'))
routes.use('/subscribers', require('./subscribers.router'))
routes.use('/movieCasts', require('./movieCasts.router'))
routes.use('/movieGenre', require('./movieGenre.router'))
routes.use('/movieScheduleTimes', require('./movieScheduleTimes.router'))
routes.use('/paymentMethod', require('./paymentMethod.router'))
routes.use('/reservedSeat', require('./reservedSeat.router'))
routes.use('/resetPassword', require('./resetPassword.router'))
routes.use('/cinemas', require('./cinemas.router'))
routes.use('/movieSchedule', require('./movieSchedule.router'))
routes.use('/transactions', require('./transactions.router'))
routes.use('/profile', authMiddleware, require('./profile.route'))

routes.use('/auth', require('./auth.router') )

module.exports = routes
