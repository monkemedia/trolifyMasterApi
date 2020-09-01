const express = require('express')
const router = express.Router()
const {
  createCurrencies,
  getCurrencies,
  getCurrency,
  updateCurrency,
  deleteCurrency
} = require('../controller/currencies.js')

// Create currencies
router.post('/currencies', (req, res) => createCurrencies(req, res))
// Get currencies
router.get('/currencies', (req, res) => getCurrencies(req, res))
// Get currency
router.get('/currencies/:currencyId', (req, res) => getCurrency(req, res))
// Update currency
router.put('/currencies/:currencyId', (req, res) => updateCurrency(req, res))
// Delete currency
router.delete('/currencies/:currencyId', (req, res) => deleteCurrency(req, res))

module.exports = router
