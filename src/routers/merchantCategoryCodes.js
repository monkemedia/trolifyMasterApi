const express = require('express')
const router = express.Router()
const {
  createMerchantCategoryCode,
  getMerchantCategoryCodes,
  getMerchantCategoryCode
} = require('../controller/merchantCategoryCodes')

// Create Merchant Category Code
router.post('/merchant-category-codes', (req, res) => createMerchantCategoryCode(req, res))
// Get Merchant Category Codess
router.get('/merchant-category-codes', (req, res) => getMerchantCategoryCodes(req, res))
// Get Merchant Category Code
router.get('/merchant-category-codes/:merchantCategoryCodeId', (req, res) => getMerchantCategoryCode(req, res))

module.exports = router
