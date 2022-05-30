import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import cors from 'cors'

import messageRoutes from './routes/messages.js'

const app = express()
const io = new Server(server);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/', messageRoutes)

const CONNECTION_URL = 'mongodb://localhost/messagerie'
const PORT = 8000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((err) => console.log(err.message))
