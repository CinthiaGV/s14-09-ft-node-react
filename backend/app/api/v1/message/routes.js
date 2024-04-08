// routes.js
import express from 'express';
import { sendMessage, getAllMessages, getAllMessagesBetweenUsers } from './controller.js';

const router = express.Router();

// Ruta para enviar un mensaje a otro usuario
router.post('/messages', sendMessage);

// Ruta para obtener todos los mensajes entre dos usuarios
router.get('/messages/:userId1/:userId2', getAllMessagesBetweenUsers);

// Ruta para obtener TODOS los mensajes DE TODOS LOS USUARIOS
router.get('/messages/getAll', getAllMessages);

export default router;
