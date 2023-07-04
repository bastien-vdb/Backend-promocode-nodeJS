import { Router } from 'express';
import createPromoCodeController from '../controllers/createPromoCodeController';
import validatePromoCodeController from '../controllers/validatePromoCodeController';

export const promoRouter = Router();
promoRouter.get('/create', createPromoCodeController);
promoRouter.get('/valide', validatePromoCodeController);

export default promoRouter;