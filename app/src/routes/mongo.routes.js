import { Router } from 'express';
import { MongoController } from '../controllers/mongo.controller.js'

const router = Router();
const controller = new MongoController();

router.get('/', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
