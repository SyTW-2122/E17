import { Router } from "express";
import * as categoryCtrl from '../controllers/category.controllers'
import { authJwt } from "../middlewares";
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],categoryCtrl.createCategory);
router.get('/',categoryCtrl.getCategory);
router.put('/:categoryId', [authJwt.verifyToken, authJwt.isAdmin],categoryCtrl.updateCategoryById);
router.delete('/:categoryId', [authJwt.verifyToken, authJwt.isAdmin],categoryCtrl.deleteCategoryById);

export default router;