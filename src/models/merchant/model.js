const mongoose = require('mongoose')
const MerchantSchema = require('./schema')
const bcrypt = require('bcryptjs')

MerchantSchema.pre('save', async function (next) {
  const merchant = this

  if (merchant.isModified('password')) {
    merchant.password = await bcrypt.hash(merchant.password, 8)
  }
  next()
})

// Get merchants
MerchantSchema.statics.findMerchants = async ({ page, limit }) => {
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
MerchantSchema.statics.updateMerchant = async (merchantId, merchantDetails) => {
  const merchant = await Merchant.updateOne({ _id: merchantId }, merchantDetails)
  return merchant
}

// Delete merchant
MerchantSchema.statics.deleteMerchant = async (merchantId) => {
  const merchant = await Merchant.deleteOne({ _id: merchantId })
  return merchant
}

const Merchant = mongoose.model('Merchant', MerchantSchema)

module.exports = Merchant
