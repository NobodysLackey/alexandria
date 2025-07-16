import express from 'express'
import { DuckController } from '../controllers/index.js'

const DuckRouter = express.Router()

DuckRouter.get('/', DuckController.getDuck)

export { DuckRouter }
