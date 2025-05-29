import express from 'express'
import { DogController } from '../controllers/index.js'

const DogRouter = express.Router()

DogRouter.get('/', DogController.getBreeds)

export { DogRouter }
