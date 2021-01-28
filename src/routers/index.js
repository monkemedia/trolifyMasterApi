const { Router } = require('express')
const countries = require('./countries.js')
const currencies = require('./currencies.js')
const merchants = require('./merchants.js')
const orderStatus = require('./orderStatus.js')
const payments = require('./payments.js')
const router = Router()

router.use(
  countries,
  currencies,
  merchants,
  orderStatus,
  payments
)

module.exports = router
