import express from 'express'
import validationMiddlewares from './app/middlewares/error.middlewares';
import userRouter from './app/router/user.router'
import authRouter from './app/router/auth.router'
const server = express()


// database
import './db/typeorm.db';
import authMiddleware from './app/middlewares/auth.middleware';
import errorMiddlewares from './app/middlewares/error.middlewares';

// middelwares
server.use(express.json())

// routers
server.use('/user',authMiddleware ,userRouter)
server.use('/auth', authRouter)
server.use(errorMiddlewares)

export default server