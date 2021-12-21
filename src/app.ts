import express from 'express'
import validationMiddlewares from './app/middlewares/user.middlewares';
import userRouter from './app/router/user.router'
const server = express()


// database
import './db/typeorm.db';

// middelwares
server.use(express.json())

// routers
server.use('/user', userRouter)
server.use(validationMiddlewares)

export default server