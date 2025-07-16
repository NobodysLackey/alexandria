import express from 'express'
import { DisneyController } from '../controllers/index.js'

const DisneyRouter = express.Router()

DisneyRouter.get('/', DisneyController.getAllCharacters)
DisneyRouter.get('/:name', DisneyController.getCharacter)

export { DisneyRouter }
