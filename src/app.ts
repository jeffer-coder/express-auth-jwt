import express from 'express'
import appRouter from './app/router/app.router'
const server = express()
import './db/typeorm.db';
// middelwares
server.use(express.json())

// routers
server.use('/app', appRouter)


export default server