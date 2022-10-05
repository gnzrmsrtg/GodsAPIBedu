// Importamos los modelos
const Realm = require('../models/realms');

// Funciones de CRUD

// CREATE //
function createRealm(req, res) {
    const body = req.body;
    Realm.create(body).then(realm => {
        res.status(201).json(realm);
    });
}

// READ //
// Un solo dios, por ID
async function getRealm(req, res) {
    const id = req.params.id;
    const realm = await Realm.findByPk(id);
    res.status(200).json(realm);
}

// Muchos dioses
async function getRealms(req, res) {
    const realms = await Realm.findAll();
    res.status(200).json (realms);
}

// UPDATE // 
async function updateRealm(req, res) {
    const RealmId = req.params.id;
    const realm = req.body;
    await Realm.update(god, {where: {id}});
    const realmUpdated = await Realm.findByPk(id);
    res.status(200).json(realmUpdated)
}

// DELETE //
async function deleteRealm(req, res) {
    const id = req.params.id;
    const deleted = Realm.destroy(
        {where: {id} }
        )
    res.status(200).json(deleted);
}

module.exports = {
    createRealm,
    getRealm, getRealms,
    updateRealm,
    deleteRealm
}