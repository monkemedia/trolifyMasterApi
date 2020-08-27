const mongoose = require('mongoose')
const CountrySchema = require('./schema')

// Get countries
CountrySchema.statics.findCountries = async () => {
  const countries = await Country.find({})

  return countries
}

// Update country
CountrySchema.statics.updateCountry = async (countryId, countryDetails) => {
  const country = await Country.updateOne({ _id: countryId }, countryDetails)
  return country
}

// Delete country
CountrySchema.statics.deleteCountry = async (countryId) => {
  const country = await Country.deleteOne({ _id: countryId })
  return country
}

const Country = mongoose.model('Country', CountrySchema)

module.exports = Country
