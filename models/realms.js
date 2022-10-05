// Requerimos la DB desde sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Traemos la variable del dios desde el otro módulo, gods.js
const God  = require('./gods');

// Creamos la tabla de Realm
const Realm = sequelize.define('Realm', {
    name: {
        type: DataTypes.CHAR(64)
    },
    description: {
        type: DataTypes.TEXT
    }
});

// Relación 1 a muchos con la tabla de dioses
Realm.hasMany(God);
God.belongsTo(Realm);

module.exports = Realm;