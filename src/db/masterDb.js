const mongoose = require('mongoose')
const suffix = 'trolify_master'

console.log('process.env.MONGODB_BASE_URL', process.env.MONGODB_BASE_URL)

mongoose.connect(process.env.MONGODB_BASE_URL + '/' + suffix, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
