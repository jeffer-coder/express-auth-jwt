import { Router } from "express"
import appController from "../controller/user.controller"
import userValidator from "../validator/user.validator"
const router = Router()

router.post('/', userValidator.username(), userValidator.email(),userValidator.password(), appController.store)
router.get('/', appController.index)
router.get('/:id', appController.show)
router.patch('/:id',appController.edit)
router.delete('/:id', appController.destroy)

export default router