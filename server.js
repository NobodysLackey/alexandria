const express = require('express')
const logger = require('morgan')
require('dotenv').config()

const db = require('./db')

const PORT = process.env.PORT ? process.env.PORT : 3000

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('🏛️  Alexandria is connected . . . ')
})

app.listen(PORT, () => {
  console.log(`🏛️  Running Alexandria Server on Port ${PORT} . . . `)
})
