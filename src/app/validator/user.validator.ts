import { body,check } from 'express-validator';
export = {
    email() {
        return body('email').isEmail().withMessage('The email address is not valid').normalizeEmail()
    },
    username() {
        return body('username').isLength({ min: 5 }).withMessage('Must be at least 5 chars long')
    },
    password() {
        return body('password').isLength({min:7}).withMessage('Must be at least 7 chars long')
    }
}