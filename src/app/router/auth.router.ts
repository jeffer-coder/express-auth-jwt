import { Router } from "express"
import authController from "../controller/auth.controller"
const router = Router()


router.post('/signup',authController.signup)
router.post('/signin',authController.signin)

export default router