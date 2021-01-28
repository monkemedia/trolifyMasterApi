const express = require('express')
const router = express.Router()
const {
  createPayment,
  onboardingAccount,
  getPayment,
  updatePayment
} = require('../controller/payments')

// Create new Payment Account
router.post('/payments', (req, res) => createPayment(req, res))
// Onboard new payment account
router.post('/payments/onboarding-account', (req, res) => onboardingAccount(req, res))
// Get payment
router.get('/payments/:chargeId', (req, res) => getPayment(req, res))
// delete image
router.put('/payments/:chargeId', (req, res) => updatePayment(req, res))

module.exports = router
