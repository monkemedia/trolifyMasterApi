const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MerchantSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  client_id: {
    type: String,
    required: true
  },
  store_name: {
    type: String,
    required: true,
  },
  db_name: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
}, { versionKey: false })

module.exports = MerchantSchema
