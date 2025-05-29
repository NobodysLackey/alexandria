import express from 'express'
import { QuoteController } from '../controllers/index.js'

const QuoteRouter = express.Router()

QuoteRouter.get('/', QuoteController.getQuote)

export { QuoteRouter }
