import { Sequelize } from "sequelize";

const DBsequelize = new Sequelize(
  "postgres://postgres:gabriel1@localhost:5443/my-database",
  {
    dialect: "postgres", // Especificar el dialecto de la base de datos
    logging: false, // Deshabilitar logging para evitar ver mensajes de consulta en la consola
  }
);
export default DBsequelize;
