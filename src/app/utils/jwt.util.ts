import jwt from 'jsonwebtoken'

const secret = "a@q5qCG+7jLeq^SU"


export const sign = (payload: any) => jwt.sign(payload, secret, { expiresIn: 86400 })
export const verify = (token: string) => jwt.verify(token, secret)