const Merchant = require('../models/merchant')

const createMerchant = async (req, res) => {
  const data = req.body
  const { type } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  if (type && type !== 'merchants') {
    return res.status(401).send({
      message: 'Correct type is required'
    })
  }

  try {
    const merchants = new Merchant(data)

    await merchants.save()

    res.status(201).send(merchants)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getMerchants = async (req, res) => {
  const query = req.query
  const page = parseInt(query.page) || 1
  const limit = parseInt(query.limit) || 20

  try {
    const merchants = await Merchant.findMerchants({ page, limit })

    res.status(200).send(merchants)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getMerchant = async (req, res) => {
  const merchantId = req.params.merchantId
  
  try {
    const merchant = await Merchant.findOne({ _id: merchantId })
    res.status(200).send(merchant)
  } catch (err) {
    res.status(400).send(err)
  }
}

const updateMerchant = async (req, res) => {
  const merchantId = req.params.merchantId
  const data = req.body
  const { type } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  if (type && type !== 'merchants') {
    return res.status(401).send({
      message: 'Correct type is required'
    })
  }

  try {
    await Merchant.updateMerchant(merchantId, data)
    const merchant = await Merchant.findOne({ _id: merchantId })

    res.status(200).send(merchant)
  } catch (err) {
    res.status(400).send(err)
  }
}

const deleteMerchant = async (req, res) => {
  try {
    await Merchant.deleteMerchant(req.params.merchantId)

    res.status(200).send({
      message: 'Merchant successfully deleted'
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  createMerchant,
  getMerchants,
  getMerchant,
  updateMerchant,
  deleteMerchant
}
