import { Router } from "express";
import * as authCtrl from '../controllers/auth.controllers'
const router = Router();

router.post('/signin',authCtrl.signIn);
router.post('/signup',authCtrl.signUp);
router.post('/profile',authCtrl.profileData);

export default router;