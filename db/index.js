const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('📚 Successfully connected to Alexandria MongoDB database . . .')
  } catch (error) {
    console.error('🔥 Connection Error!', error.message)
  }
}

connect()

module.exports = mongoose.connection
