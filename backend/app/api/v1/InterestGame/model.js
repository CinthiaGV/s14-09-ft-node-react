// Aquí defines el modelo InterestGame y sus métodos, por ejemplo:
import { Pool } from 'pg';

// Configuración de conexión con la db
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

const createGamingInterest = async (nombre, genero, plataforma) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO intereses_games (nombre, genero, plataforma) VALUES ($1, $2, $3) RETURNING *',
      [nombre, genero, plataforma]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

const getAllGamingInterests = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM intereses_games');
    return result.rows;
  } finally {
    client.release();
  }
};

export default {
  createGamingInterest,
  getAllGamingInterests,
};





