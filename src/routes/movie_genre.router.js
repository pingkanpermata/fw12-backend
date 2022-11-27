const movieGenreRouter = require('express').Router()
const {allMovieGenre, deleteMovieGenre, updateMovieGenre, createMovieGenre} = require('../controllers/movie_genre.controller')

movieGenreRouter.get('/', allMovieGenre)
movieGenreRouter.post('/', createMovieGenre)
movieGenreRouter.delete('/:id', deleteMovieGenre)
movieGenreRouter.patch('/:id', updateMovieGenre)

module.exports = movieGenreRouter
