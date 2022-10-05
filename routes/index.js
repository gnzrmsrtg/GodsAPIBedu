// Otra forma de hacer el ruteo
const router = require('express').Router();
const gods = require('./gods');
const users = require('./users')
// const realms = require('./realm');

router.get('/', (req, res) => {
    res.json({'info': 'Welcome to Gods API!'})
});

router.use('/gods', gods);
router.use('/users', users);
// router.use('/realms', realms);

module.exports = router;