import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from './routes/list'

const app = express()

app.use(express.json())

app.use(router)

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'health' })
})

app.listen(3130, () => {
    console.log(`App running at ${3130} port 🤟`)
})
