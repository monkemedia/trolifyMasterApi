const mongoose = require('mongoose')
const merchantSchema = require('./schema')
const bcrypt = require('bcryptjs')

merchantSchema.pre('save', async function (next) {
  const merchantSchema = this

  if (merchantSchema.isModified('password')) {
    merchantSchema.password = await bcrypt.hash(merchantSchema.password, 8)
  }
  next()
})

// Get merchants
merchantSchema.statics.findMerchants = async ({ page, limit }) => {
  const merchants = await Merchant
    .find({})
    .skip((page - 1) * limit)
    .limit(limit)

  const total = await Merchant.countDocuments()
  return {
    data: merchants,
    meta: {
      pagination: {
        current: page,
        total: merchants.length
      },
      results: {
        total
      }
    }
  }
}

// Update merchant
merchantSchema.statics.updateMerchant = async (merchantId, merchantDetails) => {
  const merchant = await Merchant.updateOne({ _id: merchantId }, merchantDetails)
  return merchant
}

// Delete merchant
merchantSchema.statics.deleteMerchant = async (merchantId) => {
  const merchant = await Merchant.deleteOne({ _id: merchantId })
  return merchant
}

const Merchant = mongoose.model('Merchant', merchantSchema)

module.exports = Merchant
