import { Router } from "express"
import appController from "../controller/app.controller"
const router = Router()

router.post('/', appController.store)
router.get('/', appController.index)
router.get('/:id', appController.show)
router.patch('/:id', appController.edit)
router.delete('/:id', appController.destroy)

export default router