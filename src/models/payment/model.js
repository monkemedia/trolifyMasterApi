const mongoose = require('mongoose')
const Stripe = require('stripe')
const paymentSchema = require('./schema')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// Onboarding
paymentSchema.statics.onboardingAccount = async ({ account, refresh_url, return_url }) => {
  const newAccount = await stripe.accountLinks.create({
    type: 'account_onboarding',
    account,
    refresh_url,
    return_url
  })
  return newAccount
}

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment
