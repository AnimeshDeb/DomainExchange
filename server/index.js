import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import uploadData from './Endpoints/uploadData.js'
import Limiter from './Middleware/rateLimiter.js'
dotenv.config()

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Anniemesh is a banana.')
})
app.use('/uploadreport',Limiter, uploadData)
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

