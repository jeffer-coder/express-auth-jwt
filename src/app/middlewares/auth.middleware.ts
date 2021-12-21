import { Request, Response } from "express"
import {verify } from "../utils/jwt.util"

export default async (req: Request, res: Response, next: any) => {

    try {
        const token: any = req.headers.authorization?.split(' ')[1]
        const payload = verify(token)
        next()
    } catch (err: any) { next(err) }
}

