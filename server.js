import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { DogRouter, QuoteRouter, DuckRouter } from './routes/index.js'

const PORT = process.env.PORT || 3000

import { db } from './db/index.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const apiRouter = express.Router()

apiRouter.use('/dogs', DogRouter)
apiRouter.use('/quotes', QuoteRouter)
apiRouter.use('/ducks', DuckRouter)

app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`📜 Running Alexandria Server on Port ${PORT} . . . `)
})
