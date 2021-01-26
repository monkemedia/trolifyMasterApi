const mongoose = require('mongoose')
const suffix = 'trolify'

mongoose.connect(process.env.MONGODB_BASE_URL + '/' + suffix, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
