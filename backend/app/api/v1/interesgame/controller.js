import { createInterestGame, getAllInterestGames } from './model.js';

const controller = {
  async create(req, res) {
    const { userData } = req.body;
    
    const { nameGame, categoryGame, userId } = userData;
  
    try {
      if (!nameGame || !categoryGame) {
        return res.status(400).json({ error: 'nameGame y categoryGame son requeridos.' });
      }
  
      const nuevoInteres = await createInterestGame(nameGame, categoryGame, userId);
      res.status(201).json(nuevoInteres);
    } catch (error) {
      console.error('Error al crear el interés de juego:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  async getAll(req, res) {
    try {
      const intereses = await getAllInterestGames();
      res.json(intereses);
    } catch (error) {
      console.error('Error al obtener los intereses de juegos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

export default controller;

