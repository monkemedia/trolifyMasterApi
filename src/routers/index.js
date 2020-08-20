const { Router } = require('express')
const merchants = require('./merchants.js')

const router = Router()

router.use(
  merchants
)

module.exports = router
