// Requerimos la DB desde sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Creamos la tabla de dioses
const God = sequelize.define('God', {
    name: {
        type: DataTypes.CHAR(64)
    },
    symbol: {
        type: DataTypes.CHAR(64)
    }
});

module.exports = God;