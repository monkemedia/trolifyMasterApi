const { Router } = require('express')
const countries = require('./countries.js')
const merchants = require('./merchants.js')

const router = Router()

router.use(
  countries,
  merchants
)

module.exports = router
