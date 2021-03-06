import { Request, Response } from "express"
import messagesHelper from "../helper/messages.helper"
export default (error: any, req: Request, res: Response, next: any) => {

    // validation express-validator
    if (error.validations) {
        res.status(400).send({ msg: error.validations })
    }

    if (error.message === messagesHelper.EMAIL_ALREADY) {
        res.status(409).send({ msg: error.message })
    }

    if (error.message === messagesHelper.USERNAME_ALREADY) {
        res.status(409).send({ msg: error.message })
    }

    if (error.message === messagesHelper.USER_NOT_FOUND) {
        res.status(404).send({ msg: error.message })
    }

    if (error.message === messagesHelper.USER_NOT_AUTHENTICATE) {
        res.status(401).send({ msg: error.message })
    }

    if (error.message === 'invalid signature') {
        res.status(401).send({ msg: error.message })
    }

    if (error.message === 'jwt must be provided') {
        res.status(401).send({ msg: error.message })
    }


}