import { body,check } from 'express-validator';
import messagesHelper from '../helper/messages.helper';
export = {
    email() {
        return body('email').isEmail().withMessage(messagesHelper.EMAIL_INVALID).normalizeEmail()
    },
    username() {
        return body('username').isLength({ min: 5 }).withMessage(messagesHelper.MUST_BE_CHARS_USERNAME)
    },
    password() {
        return body('password').isLength({min:7}).withMessage(messagesHelper.MUST_BE_CHARS_PASSWORD)
    }
}