const express = require('express')
const router = express.Router()
const {
  createMerchant,
  getMerchants,
  getMerchant,
  updateMerchant,
  deleteMerchant
} = require('../controller/merchants')

// Create merchant
router.post('/merchants', (req, res) => createMerchant(req, res))
// Get merchants
router.get('/merchants', (req, res) => getMerchants(req, res))
// Get merchant
router.get('/merchants/:merchantId', (req, res) => getMerchant(req, res))
// Update merchant
router.put('/merchants/:merchantId', (req, res) => updateMerchant(req, res))
// Delete merchant
router.delete('/merchants/:merchantId', (req, res) => deleteMerchant(req, res))

module.exports = router
