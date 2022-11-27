const paymentMethodRouter = require('express').Router()
const {allPaymentMethod, deletePaymentMethod, updatePaymentMethod, createPaymentMethod} = require('../controllers/payment_method.controller')

paymentMethodRouter.get('/', allPaymentMethod)
paymentMethodRouter.post('/', createPaymentMethod)
paymentMethodRouter.delete('/:id', deletePaymentMethod)
paymentMethodRouter.patch('/:id', updatePaymentMethod)

module.exports = paymentMethodRouter
