// api/models/genero.js

const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo
  const Genero = sequelize.define('Genero', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Genero;
};
