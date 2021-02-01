const Merchant = require('../models/merchant')

const createMerchant = async (req, res) => {
  const OWNER = 'owner'
  const data = req.body
  const { type, email, store_hash } = data
  const currentMerchant = await Merchant.findByEmailAddress(email)
  const ownerAlreadyExists = await Merchant.find({ store_hash, role: OWNER })
  console.log(ownerAlreadyExists)

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

  if (currentMerchant) {
    return res.status(401).send({
      message: 'Merchant already exists'
    })
  }

  if (ownerAlreadyExists.length > 0) {
    return res.status(401).send({
      message: 'Merchant already has a owner'
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
    if (data.password) {
      await Merchant.updateMerchantWithPassword(merchantId, data.password)
    } else {
    await Merchant.updateMerchant(merchantId, data)
    }
    const merchant = await Merchant.findOne({ _id: merchantId })
      .select('-reset_token -refresh_token')

    const merchantClone = Object.assign(merchant, {
      password: !!merchant.password
    })

    res.status(200).send(merchantClone)
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
