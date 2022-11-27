const usersRouter = require('express').Router()

const { readAllUsers, createUser, updateUser, deleteUser, readUser } = require('../controllers/users.controller')

usersRouter.get('/', readAllUsers)
//ketika /users method get akan dikembalikan ke readAllUsers
//dia menerima data dari Query String, biasanya data untuk => Pagination, search, limit, order
//yang kita kirimkan data lewat query string itu hanya pagination, search, limit, order saja
//atau kalau misalkan tdk ada pagination, search, limit dan oder, kita masukkan additional data
usersRouter.get('/:id', readUser)
//ketika /users/id method get akan dikembalikan ke readUser
//dia menerima data dari Query String
usersRouter.post('/', createUser)
//ketika method get akan dikembalikan ke createUsers
//dia menerima dari dua jenis data yang berbeda yaitu Query String, dan Body
//jadi kita sbg user bisa meminta atau mengirimkan data melalui query string dan juga body untuk post ini
usersRouter.patch('/:id', updateUser)
//ketika method get akan dikembalikan ke deletedUsers
//dia menerima dari dua jenis data yang berbeda yaitu Query String, dan Body
//jadi kita sbg user bisa meminta atau mengirimkan data melalui query string dan juga body untuk patch ini
usersRouter.delete('/:id', deleteUser)
//ketika method get akan dikembalikan ke updatedUsers
//dia menerima data dari Query String

module.exports = usersRouter
