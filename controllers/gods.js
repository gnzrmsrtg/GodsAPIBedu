// Importamos los modelos
const God = require('../models/gods');

// Funciones de CRUD

// CREATE //
function createGod(req, res) {
    const body = req.body;
    God.create(body).then(god => {
        res.status(201).json(god);
    });
}

// READ //
// Un solo dios, por ID
async function getGod(req, res) {
    const id = req.params.id;
    const god = await God.findByPk(id);
    res.status(200).json(god);
}

// Muchos dioses
async function getGods(req, res) {
    const gods = await God.findAll();
    res.status(200).json (gods);
}

// UPDATE // 
async function updateGod(req, res) {
    const id = req.params.id;
    const god = req.body;
    await God.update(god, {where: {id}});
    const godUpdated = await God.findByPk(id);
    res.status(200).json(godUpdated)
}

// DELETE //
async function deleteGod(req, res) {
    const id = req.params.id;
    const deleted = God.destroy(
        {where: {id} }
        )
    res.status(200).json(deleted);
}

module.exports = {
    createGod,
    getGod, getGods,
    updateGod,
    deleteGod
}