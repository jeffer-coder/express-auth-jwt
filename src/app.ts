import express from 'express'
import userRouter from './app/router/user.router'
const server = express()


// database
import './db/typeorm.db';

// middelwares
server.use(express.json())

// routers
server.use('/app', userRouter)


export default server