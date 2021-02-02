if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const express = require('express')
const cors = require('cors')
const dbRoutes = require('./routers/index.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const app = express()

require('./db/masterDb.js')

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/v1/', dbRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
