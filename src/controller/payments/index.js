
const Payment = require('../../models/payment')
const errorHandler = require('../../utils/errorHandler')

const onboardingAccount = async (req, res) => {
  const data = req.body
  const { type } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  try {
    const chargeCustomer = await Payment.onboardingAccount(data)

    res.status(200).send(chargeCustomer)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

module.exports = {
  onboardingAccount
}
