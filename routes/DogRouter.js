import express from 'express'
import { DogController } from '../controllers/index.js'

const DogRouter = express.Router()

DogRouter.get('/', DogController.getBreeds)
DogRouter.get('/:breed', DogController.getImageByBreedName)

export { DogRouter }
