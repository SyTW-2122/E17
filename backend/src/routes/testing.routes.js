import { Router } from "express";
import * as testCtrl from '../controllers/testing.controllers'
const router = Router();

router.post('/reset',testCtrl.reset);

export default router;