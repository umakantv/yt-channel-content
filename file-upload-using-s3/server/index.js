
import express from 'express'
import config from './config/index.js'
import s3Router from './routes/misc.js'

const app = express()

app.use(express.json())

app.use('/api/s3', s3Router)

app.listen(config.PORT, () => {
    console.log(`Server listening on http://localhost:${config.PORT}`)
})