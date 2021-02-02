const { Router } = require('express')
const countries = require('./countries.js')
const currencies = require('./currencies.js')
const merchants = require('./merchants.js')
const merchantCategoryCodes = require('./merchantCategoryCodes.js')
const orderStatus = require('./orderStatus.js')
const router = Router()

router.use(
  countries,
  currencies,
  merchants,
  merchantCategoryCodes,
  orderStatus
)

module.exports = router
