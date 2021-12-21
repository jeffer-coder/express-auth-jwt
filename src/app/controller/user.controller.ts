import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import userService from "../service/user.service";
export default {
  /*
  store: async (req: Request, res: Response, next: any) => {

    try {

      // express-validator
      const errors = validationResult(req)
      if (!errors.isEmpty()) throw { validations: errors.array() }

      const user = await userService.create(req.body)
      res.status(201).send(user)

    } catch (e) {
      next(e)
    }

  },
  */
  index: async (req: Request, res: Response, next: any) => {

    const users = await userService.find()
    res.status(200).send(users)

  },

  show: async (req: Request, res: Response, next: any) => {
    try {

      const user = await userService.findById(req.params.id)
      res.status(200).send(user)

    } catch (e) {
      next(e)
    }
  },

  edit: async (req: Request, res: Response, next: any) => {
    try {
      const user = await userService.update(req.params.id, req.body)
      res.status(200).send(user);

    } catch (e) {
      next(e)
    }
  },

  destroy: async (req: Request, res: Response, next: any) => {
    try {

      const user = await userService.delete(req.params.id)
      res.status(200).send(user)

    } catch (e) {
      next(e)
    }
  }
}