import { Router } from "express";
import * as productCtrl from '../controllers/product.controllers'
import { authJwt } from "../middlewares";
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],productCtrl.createProduct);
router.get('/',productCtrl.getProduct);
router.get('/:productId',productCtrl.getProductById);
router.get('/discount/:status',productCtrl.getProductByDiscount);
router.get('/category/:category',productCtrl.getProductByCategory);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin],productCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin],productCtrl.deleteProductById);

export default router;