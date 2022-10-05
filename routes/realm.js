// Llamamos al Router de Express
const router = require('express').Router();

// Llamamos a las funciones
const {
    createRealm,
    getRealm, getRealms,
    updateRealm,
    deleteRealm
} = require('../controllers/realms');

// Definimos la URL de las funciones
router.get('/', getRealms);
router.get('/:id', getRealm);
router.post('/', createRealm);
router.patch('/:id', updateRealm);
router.delete('/:id', deleteRealm);

module.exports = router;