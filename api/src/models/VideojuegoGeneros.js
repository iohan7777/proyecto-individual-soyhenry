// api/models/videojuegoGeneros.js

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
    // Definimos el modelo
    const VideojuegosGeneros = sequelize.define('VideojuegosGeneros', {
      // Puedes definir campos adicionales si es necesario
    });
  
    return VideojuegosGeneros;
  };
  