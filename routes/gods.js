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

// Definimos la URL de las funciones
router.get('/', getGods);
router.get('/:id', getGod);
router.post('/', auth.isMember, createGod);
router.patch('/:id', auth.isMember, updateGod);
router.delete('/:id', auth.isAdmin, deleteGod);

module.exports = router;