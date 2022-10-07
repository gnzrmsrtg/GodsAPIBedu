// Llamamos al Router de Express
const router = require('express').Router();

// Llamamos a las funciones
const {
    createGod,
    getGod, getGods,
    updateGod,
    deleteGod
} = require('../controllers/gods');

const auth = require('../config/auth')

/**
 * @swagger 
 * /gods/: 
 *  get:
 *      summary: Dioses disponibles.
 *      description: Entrega una lista de dioses.
 *      produces: 
 *          - application/json
 *      responses:
 *          200: 
 *              description: Todos los dioses disponibles.
 *              type: json
 */


// Definimos la URL de las funciones
router.get('/', getGods);
router.get('/:id', getGod);
router.post('/', auth.isMember, createGod);
router.patch('/:id', auth.isMember, updateGod);
router.delete('/:id', auth.isAdmin, deleteGod);

module.exports = router;