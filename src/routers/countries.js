const express = require('express')
const router = express.Router()
const {
  createCountries,
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry
} = require('../controller/countries.js')

// Create countries
router.post('/countries', (req, res) => createCountries(req, res))
// Get countries
router.get('/countries', (req, res) => getCountries(req, res))
// Get country
router.get('/countries/:countryId', (req, res) => getCountry(req, res))
// Update country
router.put('/countries/:countryId', (req, res) => updateCountry(req, res))
// Delete country
router.delete('/countries/:countryId', (req, res) => deleteCountry(req, res))

module.exports = router
