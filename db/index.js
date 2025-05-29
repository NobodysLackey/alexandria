import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('🏛️  Successfully connected to Alexandria MongoDB database . . .')
  } catch (error) {
    console.error('🔥 Connection Error!', error.message)
  }
}

await connect()

export const db = mongoose.connection
