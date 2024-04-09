import { Router } from 'express';
import { create, getAll } from './controller';

const router = Router();

// Definir las rutas
router.post('/', create);
router.get('/', getAll);

// Exportar el router
export default router;

