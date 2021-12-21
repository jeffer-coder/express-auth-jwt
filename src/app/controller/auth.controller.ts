import e, { Request, Response } from "express"
import userService from "../service/user.service"
export default {
    signup: async function (req: Request, res: Response, next: any) {
        try {
            const auth = await userService.create(req.body)
            res.status(201).send(auth)
        } catch (err) { next(err) }
    },
    signin: async function (req: Request, res: Response, next: any) {
        try {
            const { email, password } = req.body
            const auth = await userService.findAndAuthenticate(email, password)
            res.status(202).send(auth)
        } catch (err) { next(err) }
    }
}