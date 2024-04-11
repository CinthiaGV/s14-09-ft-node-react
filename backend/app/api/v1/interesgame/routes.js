import { Router } from 'express';
import controller from "./controller.js"

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);

export default router;


