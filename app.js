// Importamos el .dot
require('dotenv').config();

// Activamos Express
const express = require('express');

// Importamos Sequelize desde db.js
const sequelize = require('./config/db');

// Llamamos a las rutas
const routes = require('./routes');

// Llamamos a Auth
const auth = require('./config/auth')

// Llamamos a Swagger
const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Definimos el uso de Express y de las rutas
const app = express();
app.use(auth.optional);
app.use(express.json());
app.use('/', routes);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Revisamos la conexión con la DB
try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB')
} catch (error) {
    console.log('Unable to connect to DB:', error)
}

// Activamos el Puerto
app.listen(process.env['PORT'] || 4000, () => {
    console.log(`Server listening on port`, process.env['PORT'])
});