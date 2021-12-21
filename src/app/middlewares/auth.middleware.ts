import { Request, Response } from "express"
import {verify } from "../utils/jwt.util"
export interface IGetUserAuthInfoRequest extends Request {
    auth: any
}
export default async (req: IGetUserAuthInfoRequest, res: Response, next: any) => {

    try {
        const token: any = req.headers.authorization?.split(' ')[1]
        const payload = verify(token)
        req.auth = payload
        next()
    } catch (err: any) { next(err) }
}
