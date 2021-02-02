const MerchantCategoryCode = require('../models/merchantCategoryCode')

const createMerchantCategoryCode = async (req, res) => {
  const data = req.body

  try {
    const promise = data.map(async obj => {
      const code =  new MerchantCategoryCode(obj) 
      const save = await code.save()
      return save
    })
    const merchantCategoryCodes = await Promise.all(promise)

    res.status(201).send(merchantCategoryCodes)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getMerchantCategoryCodes = async (req, res) => {
  try {
    const codes = await MerchantCategoryCode.findMerchantCategoryCodes()

    res.status(200).send(codes)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getMerchantCategoryCode = async (req, res) => {
  const merchantCategoryCodeId = req.params.merchantCategoryCodeId
  
  try {
    const code = codeCategoryCode.findOne({ _id: merchantCategoryCodeId })
    res.status(200).send(code)
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  createMerchantCategoryCode,
  getMerchantCategoryCodes,
  getMerchantCategoryCode
}
