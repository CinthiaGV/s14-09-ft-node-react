const { InterestGame } = require('./model').default;

// controlador
const gamingInterestController = {
  async create(req, res) {
    const { nameGame, categoryGame } = req.body;
    try {
      const nuevoInteres = await InterestGame.create({
        nameGame,
        categoryGame,
      });
      res.status(201).json(nuevoInteres);
    } catch (error) {
      console.error('Error al crear el interés de juego:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  async getAll(req, res) {
    try {
      const intereses = await InterestGame.findMany();
      res.json(intereses);
    } catch (error) {
      console.error('Error al obtener los intereses de juegos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

// Exportar controlador
module.exports = gamingInterestController;
